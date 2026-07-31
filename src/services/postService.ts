import { collection, doc, addDoc, getDocs, updateDoc, arrayUnion, arrayRemove, query, orderBy, serverTimestamp, getDoc } from "firebase/firestore";
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
export async function getPosts(topicId: string): Promise<Post[]> {
  const posts: Post[] = [];
  try {
    const q = query(
      collection(db, "posts"), 
      // Firestore requires a composite index if we use 'where' and 'orderBy' on different fields. 
      // For simplicity in development without forcing the user to create indexes, we'll fetch all and filter locally, 
      // or we can just sort locally. Let's do local filtering & sorting for MVP safety against missing indexes.
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      if (data.topicId === topicId) {
        posts.push({ id: docSnap.id, ...data } as Post);
      }
    });
    
    // Sort descending by timestamp
    posts.sort((a, b) => {
      const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
      const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
      return timeB - timeA;
    });

  } catch (error) {
    console.error("Error fetching posts:", error);
  }
  return posts;
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
      createdAt: serverTimestamp(),
      likes: [],
      comments: []
    };
    
    const docRef = await addDoc(collection(db, "posts"), newPostData);
    
    // We fetch the newly created document to return it complete with its real ID (and we mock the timestamp for instant UI rendering)
    return { 
      id: docRef.id, 
      ...newPostData, 
      createdAt: { toDate: () => new Date() } // Mock for local instant display
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
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      likes: isLiking ? arrayUnion(userId) : arrayRemove(userId)
    });
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
    const postRef = doc(db, "posts", postId);
    const newComment: Comment = {
      id: crypto.randomUUID(), // Simple unique ID for the comment object
      authorId,
      authorName,
      authorPhoto,
      text,
      createdAt: new Date().toISOString() // We use ISO string for arrays as Firestore doesn't support arrayUnion with serverTimestamp() safely nested inside objects without quirks
    };
    
    await updateDoc(postRef, {
      comments: arrayUnion(newComment)
    });
    
    return newComment;
  } catch (error) {
    console.error("Error adding comment:", error);
    return null;
  }
}
