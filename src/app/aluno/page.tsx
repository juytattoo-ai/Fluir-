"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Video, Calendar, AlertCircle, Play, Sparkles } from "lucide-react";
import { getPaymentLinks } from "@/services/paymentService";
import Link from "next/link";

export default function AlunoDashboard() {
  const { user, userProfile } = useAuth();
  const [zoomLinks, setZoomLinks] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const hasMestradoCourse = userProfile?.enrolledCourses?.includes("mestrado");
  const isMentorada = userProfile?.role === "mentorada" || userProfile?.role === "admin";

  useEffect(() => {
    async function load() {
      const data = await getPaymentLinks();
      
      let links: Record<string, string> = {};
      if (data.zoomLinksMestrado) {
        links = data.zoomLinksMestrado;
      } else if (data.zoomUrlMestrado) {
        // Fallback for previous general link
        links = { completo: data.zoomUrlMestrado };
      }
      
      setZoomLinks(links);
      setLoading(false);
    }
    load();
  }, []);

  const aulas = [
    { id: "aula1", date: "15/09", title: "Motivação e Carreira" },
    { id: "aula2", date: "22/09", title: "Estruturas Patriarcais" },
    { id: "aula3", date: "29/09", title: "Instrumentos de Pesquisa" },
    { id: "aula4", date: "06/10", title: "Questões Básicas e Línguas" },
    { id: "aula5", date: "20/10", title: "Pesquisa Quali/Quanti" },
    { id: "aula6", date: "27/10", title: "Projeto a Longo Prazo" },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">
          Olá, {user?.displayName || "Pesquisadora"}!
        </h1>
        <p className="mt-2 text-muted-foreground">
          Bem-vinda à sua área de estudos.
        </p>
      </div>

      {(!hasMestradoCourse && !isMentorada) ? (
        <div className="glass-card p-12 text-center rounded-3xl border-dashed border-2 border-primary/20 bg-primary-soft/5">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Você ainda não possui cursos liberados
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Para acessar salas de aula ao vivo e cronogramas, conheça nossos cursos e oficinas disponíveis na plataforma.
          </p>
          <Link 
            href="/suporte#cursos"
            className="inline-flex rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition-transform hover:scale-105"
          >
            Explorar Cursos
          </Link>
        </div>
      ) : (
        <div className="space-y-12">
          {isMentorada && (
            <div>
              <h2 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Oficina Aulas de Yoga
              </h2>
              <div className="glass-card overflow-hidden">
                <div className="bg-primary-soft/30 border-b border-primary/10 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                      Gratuito para Egrégora
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      Práticas Online Semanais
                    </h3>
                    <p className="text-muted-foreground mt-2 max-w-xl">
                      Um espaço de pausa, presença e reconexão com Aiza Fortuna.
                    </p>
                  </div>
                  <div className="shrink-0 flex flex-col gap-3 min-w-[240px]">
                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                    >
                      <Video className="h-5 w-5" />
                      Acessar Sala de Yoga
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {hasMestradoCourse && (
            <div>
          <h2 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
            <Video className="h-6 w-6 text-primary" />
            Aulas ao Vivo
          </h2>
          
          <div className="glass-card overflow-hidden">
            <div className="bg-primary/5 border-b border-primary/10 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                  Curso em Andamento
                </span>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Preparatório para Mestrado
                </h3>
                <p className="text-muted-foreground mt-2 max-w-xl">
                  Ciclo completo de 6 aulas online com Evelyn Hartoch e Eveline Araujo.
                </p>
                
                <div className="flex items-center gap-2 mt-4 text-sm font-medium text-foreground/80">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Terças-feiras, das 19h30 às 21h</span>
                </div>
              </div>
              
              <div className="shrink-0 flex flex-col gap-3 min-w-[240px]">
                {loading ? (
                  <div className="text-center text-sm text-muted-foreground py-4 border border-dashed border-primary/20 rounded-xl">
                    Carregando link...
                  </div>
                ) : zoomLinks.completo ? (
                  <a 
                    href={zoomLinks.completo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                  >
                    <Video className="h-5 w-5" />
                    Entrar na Sala Oficial
                  </a>
                ) : (
                  <div className="flex items-start gap-3 bg-secondary/50 border border-border p-4 rounded-xl">
                    <AlertCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-tight">
                      Link oficial indisponível no momento. Cheque o cronograma abaixo para aulas avulsas.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-white/30 p-6 sm:p-8">
              <h4 className="font-semibold text-foreground mb-4">Cronograma de Encontros:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {aulas.map((aula) => {
                  const linkAula = zoomLinks[aula.id];
                  return (
                    <div key={aula.id} className="flex flex-col bg-background/50 border border-border/50 rounded-lg p-3 hover:border-primary/30 transition-colors">
                      <div className="flex gap-3 items-center mb-2">
                        <div className="bg-primary/10 text-primary font-bold px-2 py-1 rounded text-sm shrink-0">
                          {aula.date}
                        </div>
                        <div className="text-sm font-medium text-foreground truncate">
                          {aula.title}
                        </div>
                      </div>
                      
                      {linkAula ? (
                        <a 
                          href={linkAula}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto flex items-center justify-center gap-1.5 w-full py-1.5 text-xs font-bold bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                        >
                          <Play className="h-3 w-3" />
                          Assistir Aula
                        </a>
                      ) : (
                        <div className="mt-auto flex items-center justify-center w-full py-1.5 text-xs font-medium text-muted-foreground bg-secondary/30 rounded border border-dashed border-border">
                          Em breve
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
            </div>
          )}
        </div>
      )}
      
    </div>
  );
}
