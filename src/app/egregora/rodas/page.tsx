"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Post, getPosts, createPost, toggleLike, addComment } from "@/services/postService";
import { Heart, MessageCircle, Send, Hash, BookOpen, Search, Brain, Coffee } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

const TOPICS = [
  { id: "tese", name: "Tese e Dissertação", icon: BookOpen },
  { id: "metodologia", name: "Metodologia e Pesquisa", icon: Search },
  { id: "saude-mental", name: "Saúde Mental Acadêmica", icon: Brain },
  { id: "cafezinho", name: "Cafezinho (Diversos)", icon: Coffee },
];

export default function RodasDeConversaPage() {
  const { user } = useAuth();
  const [activeTopic, setActiveTopic] = useState(TOPICS[0]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPostText, setNewPostText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  
  // State to track which post is currently having a comment written
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState("");
  
  // Pagination state
  const [lastDoc, setLastDoc] = useState<any>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchPosts(activeTopic.id, true);
  }, [activeTopic]);

  const fetchPosts = async (topicId: string, reset = false) => {
    if (reset) {
      setLoading(true);
      setPosts([]);
      setLastDoc(null);
      setHasMore(true);
    }
    
    const docToStart = reset ? null : lastDoc;
    const result = await getPosts(topicId, docToStart);
    
    if (reset) {
      setPosts(result.posts);
    } else {
      setPosts((prev) => [...prev, ...result.posts]);
    }
    
    setLastDoc(result.lastDoc);
    setHasMore(result.posts.length === 20); // Limite é 20
    
    if (reset) setLoading(false);
  };

  const handleCreatePost = async () => {
    if (!newPostText.trim() || !user) return;
    setSubmitting(true);
    
    const post = await createPost(
      activeTopic.id,
      user.uid,
      user.displayName || "Pesquisadora",
      user.photoURL,
      newPostText.trim()
    );

    if (post) {
      setPosts([post, ...posts]);
      setNewPostText("");
    }
    setSubmitting(false);
  };

  const handleToggleLike = async (post: Post) => {
    if (!user) return;
    
    const isLiking = !post.likes.includes(user.uid);
    
    // Optimistic UI update
    setPosts(currentPosts => 
      currentPosts.map(p => {
        if (p.id === post.id) {
          return {
            ...p,
            likes: isLiking 
              ? [...p.likes, user.uid] 
              : p.likes.filter(id => id !== user.uid)
          };
        }
        return p;
      })
    );

    // Background server update
    await toggleLike(post.id, user.uid, isLiking);
  };

  const handleAddComment = async (postId: string) => {
    if (!commentText.trim() || !user) return;
    
    const comment = await addComment(
      postId,
      user.uid,
      user.displayName || "Pesquisadora",
      user.photoURL,
      commentText.trim()
    );

    if (comment) {
      // Update local state
      setPosts(currentPosts => 
        currentPosts.map(p => {
          if (p.id === postId) {
            return {
              ...p,
              comments: [...p.comments, comment]
            };
          }
          return p;
        })
      );
      setCommentText("");
      setActiveCommentPostId(null);
    }
  };

  // Helper function to safely format dates
  const formatTime = (dateData: any) => {
    if (!dateData) return "Agora";
    
    let dateObj;
    if (dateData.toDate) {
      dateObj = dateData.toDate();
    } else if (typeof dateData === "string") {
      dateObj = new Date(dateData);
    } else {
      dateObj = new Date(dateData);
    }
    
    try {
      return formatDistanceToNow(dateObj, { addSuffix: true, locale: ptBR });
    } catch {
      return "Recentemente";
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">Rodas de Conversa</h1>
        <p className="mt-2 text-muted-foreground">
          Escolha uma sala abaixo e participe das discussões com outras pesquisadoras da Egrégora.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Menu Lateral de Salas */}
        <div className="lg:col-span-1 space-y-2 lg:sticky lg:top-24">
          <h3 className="font-serif font-semibold text-lg text-foreground mb-4 px-2">Salas Temáticas</h3>
          {TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setActiveTopic(topic)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                activeTopic.id === topic.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-primary-soft/50 text-foreground/80 hover:text-primary"
              }`}
            >
              <topic.icon className={`h-5 w-5 ${activeTopic.id === topic.id ? "text-primary-foreground" : "text-muted-foreground"}`} />
              <span className="font-medium text-sm">{topic.name}</span>
            </button>
          ))}
        </div>

        {/* Área Principal (Feed da Sala Ativa) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="glass-card p-6 border-l-4 border-l-primary rounded-l-none bg-primary-soft/10">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Hash className="h-5 w-5 text-primary" />
              {activeTopic.name}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">Você está na sala de {activeTopic.name.toLowerCase()}.</p>
          </div>

          {/* Create Post Area */}
          <div className="glass-card p-6 border-primary/20">
            <h3 className="text-sm font-semibold mb-4 text-foreground">Iniciar nova conversa em "{activeTopic.name}"</h3>
            <textarea 
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              className="w-full rounded-md border-0 py-3 px-4 text-foreground shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white/50 resize-none"
              rows={3}
              maxLength={2000}
              placeholder="Escreva algo interessante..."
            />
            <div className="mt-4 flex justify-end">
              <button 
                onClick={handleCreatePost}
                disabled={submitting || !newPostText.trim()}
                className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 disabled:opacity-50 transition-colors"
              >
                {submitting ? "Publicando..." : "Publicar na sala"}
              </button>
            </div>
          </div>

          {/* Feed Area */}
          <div className="space-y-6">
            {loading ? (
              <div className="py-10 text-center text-muted-foreground">Carregando mensagens da sala...</div>
            ) : posts.length === 0 ? (
              <div className="py-10 text-center text-muted-foreground glass-card p-6">
                Ninguém falou nada aqui ainda. Seja a primeira a puxar assunto em {activeTopic.name}!
              </div>
            ) : (
              posts.map((post) => (
                <div key={post.id} className="glass-card p-6 animate-fade-in-up">
                  {/* Post Header */}
                  <div className="flex items-center gap-4 mb-4">
                    {post.authorPhoto ? (
                      <img src={post.authorPhoto} alt="" className="h-10 w-10 rounded-full object-cover border border-primary/20" />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-primary-soft flex items-center justify-center text-primary font-bold">
                        {post.authorName.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-sm text-foreground">{post.authorName}</p>
                      <p className="text-xs text-muted-foreground">{formatTime(post.createdAt)}</p>
                    </div>
                  </div>
                  
                  {/* Post Body */}
                  <p className="text-sm text-foreground/90 whitespace-pre-wrap mb-4">
                    {post.text}
                  </p>
                  
                  {/* Post Actions */}
                  <div className="flex items-center gap-6 pt-4 border-t border-primary/10">
                    <button 
                      onClick={() => handleToggleLike(post)}
                      className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                        user && post.likes.includes(user.uid) ? "text-red-500" : "text-muted-foreground hover:text-red-500"
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${user && post.likes.includes(user.uid) ? "fill-current" : ""}`} />
                      {post.likes.length}
                    </button>
                    
                    <button 
                      onClick={() => setActiveCommentPostId(activeCommentPostId === post.id ? null : post.id)}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                      {post.comments?.length || 0}
                    </button>
                  </div>
                  
                  {/* Comments Section */}
                  {(post.comments?.length > 0 || activeCommentPostId === post.id) && (
                    <div className="mt-4 pt-4 border-t border-primary/10 space-y-4">
                      
                      {/* List Comments */}
                      {post.comments?.map((comment) => (
                        <div key={comment.id} className="flex gap-3 bg-primary-soft/10 p-3 rounded-lg">
                          {comment.authorPhoto ? (
                            <img src={comment.authorPhoto} alt="" className="h-8 w-8 rounded-full object-cover mt-1 shrink-0" />
                          ) : (
                            <div className="h-8 w-8 rounded-full bg-primary-soft flex items-center justify-center text-primary font-bold mt-1 shrink-0 text-xs">
                              {comment.authorName.charAt(0)}
                            </div>
                          )}
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="font-semibold text-sm text-foreground">{comment.authorName}</span>
                              <span className="text-xs text-muted-foreground">{formatTime(comment.createdAt)}</span>
                            </div>
                            <p className="text-sm text-foreground/80 mt-0.5">{comment.text}</p>
                          </div>
                        </div>
                      ))}
                      
                      {/* Add Comment Input */}
                      {activeCommentPostId === post.id && (
                        <div className="flex gap-3 mt-2">
                          <input
                            type="text"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleAddComment(post.id);
                            }}
                            maxLength={500}
                            placeholder="Escreva um comentário..."
                            className="flex-1 rounded-full border-0 py-2 px-4 text-sm text-foreground shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-primary bg-white/80"
                          />
                          <button 
                            onClick={() => handleAddComment(post.id)}
                            disabled={!commentText.trim()}
                            className="rounded-full bg-primary p-2 text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors shrink-0"
                          >
                            <Send className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                      
                    </div>
                  )}
                  
                </div>
              ))
            )}
            
            {posts.length > 0 && hasMore && (
              <div className="flex justify-center pt-4 pb-8">
                <button
                  onClick={() => fetchPosts(activeTopic.id, false)}
                  className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-primary-soft transition-colors"
                >
                  Carregar mais postagens
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
