"use client";

import { useAuth } from "@/contexts/AuthContext";

export default function ComunidadePage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">Comunidade FLUIR+</h1>
        <p className="mt-2 text-muted-foreground">
          Bem-vinda, {user?.email || "pesquisadora"}. Este é o seu espaço seguro para trocas e networking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="glass-card p-6 border-primary/20">
            <h3 className="text-lg font-semibold mb-4">Criar Publicação</h3>
            <textarea 
              className="w-full rounded-md border-0 py-3 px-4 text-foreground shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white/50 resize-none"
              rows={3}
              placeholder="Compartilhe uma conquista, dúvida ou novidade com a egrégora..."
            />
            <div className="mt-4 flex justify-end">
              <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90">
                Publicar
              </button>
            </div>
          </div>

          {/* Placeholder Feed */}
          <div className="space-y-4">
            {[1, 2, 3].map((post) => (
              <div key={post} className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary-soft flex items-center justify-center text-primary font-bold">
                    P{post}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Pesquisadora {post}</p>
                    <p className="text-xs text-muted-foreground">Há {post * 2} horas</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/90">
                  Estou muito feliz em compartilhar que meu artigo foi aceito em uma revista Qualis A1! Agradeço imensamente as dicas da mentoria coletiva.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 space-y-6">
          <div className="glass-card p-6 bg-primary-soft/30 border-none">
            <h3 className="font-serif font-semibold text-lg text-primary mb-2">Próximos Encontros</h3>
            <ul className="space-y-3 mt-4 text-sm">
              <li className="flex gap-3">
                <span className="font-bold text-accent">Hoje</span>
                <span>Roda de Conversa: Escrita e Saúde Mental</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">25/10</span>
                <span>Mentoria em Grupo - Turma B</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
