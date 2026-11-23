"use client";

import { useAuth } from "@/contexts/AuthContext";
import { Sparkles, BookOpen, Handshake, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AlunoDashboard() {
  const { user, userProfile } = useAuth();
  const isMentorada = userProfile?.role === "mentorada" || userProfile?.role === "admin";

  return (
    <div className="space-y-10">
      <div className="glass-card p-12 text-center rounded-3xl border-dashed border-2 border-primary/20 bg-primary-soft/5">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
          Bem-vinda, {user?.displayName || "Pesquisadora"}!
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Que alegria você estar junto. Este é o seu espaço de acolhimento, desenvolvimento e troca. Explore as opções no menu lateral para acessar seus conteúdos e participe ativamente da Egrégora.
        </p>
        
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-8 rounded-2xl bg-white/50 border border-primary/10">
          <h3 className="text-xl font-serif font-bold text-foreground mb-2 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Seus Próximos Passos
          </h3>
          <p className="text-muted-foreground mb-4">
            Mantenha-se atualizada sobre as novidades e acompanhe seu progresso na jornada acadêmica.
          </p>
          <Link href="/aluno/aulas" className="text-primary font-semibold hover:underline flex items-center gap-1 text-sm">
            Ver cronograma <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="glass-card p-8 rounded-2xl bg-white/50 border border-primary/10">
          <h3 className="text-xl font-serif font-bold text-foreground mb-2 flex items-center gap-2">
            <Handshake className="w-5 h-5 text-primary" />
            Nossa Comunidade
          </h3>
          <p className="text-muted-foreground mb-4">
            Interaja com outras pesquisadoras da egrégora, troque experiências e fortaleça sua rede de apoio.
          </p>
          <Link href="/egregora/parcerias" className="text-primary font-semibold hover:underline flex items-center gap-1 text-sm">
            Conhecer parcerias <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
