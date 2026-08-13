import { collection, doc, addDoc, getDocs, updateDoc, setDoc, deleteDoc, query, orderBy, serverTimestamp, getDoc, where, limit, startAfter } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Comment {
  id: string;
  authorId: string;
  authorName: string;
  authorPhoto: string | null;
  text: string;
  createdAt: any;
}

export interface Post {
  id: string;
  topicId: string;
  authorId: string;
  authorName: string;
  authorPhoto: string | null;
  text: string;
  createdAt: any;
  likes: string[]; // Array of User IDs
  comments: Comment[];
}

/**
 * Busca todas as publicações de uma sala específica, ordenadas da mais recente para a mais antiga.
 */
export async function getPosts(topicId: string, lastDocParam?: any): Promise<{ posts: Post[], lastDoc: any }> {
  const posts: Post[] = [];
  let newLastDoc = null;
  try {
    let q = query(
      collection(db, "posts"),
      where("topicId", "==", topicId),
      orderBy("createdAt", "desc"),
      limit(20)
    );

    if (lastDocParam) {
      q = query(
        collection(db, "posts"),
        where("topicId", "==", topicId),
        orderBy("createdAt", "desc"),
        startAfter(lastDocParam),
        limit(20)
      );
    }

    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      newLastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    }
    
    // Fetch all posts first
    const rawPosts: any[] = [];
    querySnapshot.forEach((docSnap) => {
      rawPosts.push({ id: docSnap.id, ...docSnap.data() });
    });

    // For each post, fetch its comments and likes subcollections
    await Promise.all(
      rawPosts.map(async (p) => {
        const postData: Post = { ...p, likes: [], comments: [] } as Post;
        
        // Fetch likes
        const likesSnapshot = await getDocs(collection(db, "posts", p.id, "likes"));
        postData.likes = likesSnapshot.docs.map(d => d.id);
        
        // Fetch comments
        const commentsSnapshot = await getDocs(collection(db, "posts", p.id, "comments"));
        postData.comments = commentsSnapshot.docs.map(d => {
          return { id: d.id, ...d.data() } as Comment;
        });
        
        // Sort comments by createdAt locally (if string/iso)
        postData.comments.sort((a, b) => {
          const timeA = new Date(a.createdAt || 0).getTime();
          const timeB = new Date(b.createdAt || 0).getTime();
          return timeA - timeB;
        });

        posts.push(postData);
      })
    );
    
    // Sort descending by timestamp
    posts.sort((a, b) => {
      const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
      const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
      return timeB - timeA;
    });

  } catch (error) {
    console.error("Error fetching posts:", error);
  }
  return { posts, lastDoc: newLastDoc };
}

/**
 * Cria uma nova publicação dentro de uma sala.
 */
export async function createPost(topicId: string, authorId: string, authorName: string, authorPhoto: string | null, text: string): Promise<Post | null> {
  try {
    const newPostData = {
      topicId,
      authorId,
      authorName,
      authorPhoto,
      text,
      createdAt: serverTimestamp()
    };
    
    const docRef = await addDoc(collection(db, "posts"), newPostData);
    
    // We fetch the newly created document to return it complete with its real ID (and we mock the timestamp for instant UI rendering)
    return { 
      id: docRef.id, 
      ...newPostData, 
      createdAt: { toDate: () => new Date() }, // Mock for local instant display
      likes: [],
      comments: []
    } as unknown as Post;
  } catch (error) {
    console.error("Error creating post:", error);
    return null;
  }
}

/**
 * Adiciona ou remove o Like do usuário na publicação.
 */
export async function toggleLike(postId: string, userId: string, isLiking: boolean): Promise<boolean> {
  try {
    const likeRef = doc(db, "posts", postId, "likes", userId);
    if (isLiking) {
      await setDoc(likeRef, {}); // Creates the document with the user's ID
    } else {
      await deleteDoc(likeRef);
    }
    return true;
  } catch (error) {
    console.error("Error toggling like:", error);
    return false;
  }
}

/**
 * Adiciona um comentário à publicação.
 */
export async function addComment(postId: string, authorId: string, authorName: string, authorPhoto: string | null, text: string): Promise<Comment | null> {
  try {
    const commentData = {
      authorId,
      authorName,
      authorPhoto,
      text,
      createdAt: new Date().toISOString()
    };
    
    const commentRef = await addDoc(collection(db, "posts", postId, "comments"), commentData);
    
    return {
      id: commentRef.id,
      ...commentData
    } as Comment;
  } catch (error) {
    console.error("Error adding comment:", error);
    return null;
  }
}
