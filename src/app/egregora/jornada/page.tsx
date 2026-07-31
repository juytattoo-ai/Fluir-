"use client";

import { useState } from "react";
import { FileText, ChevronDown, ChevronUp, Video, ExternalLink } from "lucide-react";

export default function JornadaPage() {
  const topicsData = [
    {
      id: "percurso",
      title: "Percurso da jornada acadêmica sem pânico",
      items: [
        { id: 1, title: "Ciclicidades da vida", date: "30 de abr. de 2024", content: null },
        { id: 2, title: "Efeitos do patriarcado no processo de pesquisa", date: "7 de mai. de 2024", content: null },
      ]
    },
    {
      id: "estrutura",
      title: "A estrutura base de uma pesquisa científica",
      items: [
        { 
          id: 4, 
          title: "Tópico 01 - Etapas do processo de pesquisa", 
          date: "26 de abr. de 2024",
          content: (
            <div className="mt-4 text-sm text-foreground/80 space-y-4 pt-4 border-t border-border">
              <p>Nesse espaço vamos disponibilizar ferramentas para quem está iniciando a jornada para que possam compreender como uma pesquisa é estruturada e qual conteúdo vai em cada parte:</p>
              <p>Uma pesquisa acadêmica, nível mestrado ou doutorado tem as seguintes etapas:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Introdução</li>
                <li>Pergunta norteadora e/ou hipótese</li>
                <li>Estado da Arte</li>
                <li>Metodologia e Método: incluindo os instrumentos de pesquisa</li>
                <li>Resultados e Discussão</li>
                <li>Conclusão</li>
              </ul>
              <p>São considerados elementos fora do corpo da pesquisa:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Capa</li>
                <li>Folha de Rosto</li>
                <li>Aprovação da banca</li>
                <li>Agradecimentos</li>
                <li>Tabelas</li>
                <li>Sumário</li>
                <li>Referências Bibliográficas</li>
                <li>Anexos e Apêndices</li>
              </ul>
              <p className="font-bold">Vamos em frente!</p>
              
              <div className="pt-4 flex flex-col gap-3">
                <a href="https://drive.google.com/file/d/1o1cKcof3xZRErW5RlVLO3eN26oBB89aO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2 font-medium">
                  <Video className="h-4 w-4" />
                  Assistir Aula (Google Drive)
                </a>
                <a href="https://www.uniesp.edu.br/sites/_biblioteca/revistas/20170627112856.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2 font-medium">
                  <FileText className="h-4 w-4" />
                  Material de Leitura (PDF)
                </a>
                <a href="https://classroom.google.com/c/NTkwMDk4MDQ5NTk0/a/NjU2NTQyNDIwNDY1/details" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2 font-medium">
                  <ExternalLink className="h-4 w-4" />
                  Acessar Google Classroom
                </a>
              </div>
            </div>
          )
        },
        { 
          id: 5, 
          title: "Tópico 02 - Escolha metodológica e aplicação do ...", 
          date: "7 de mai. de 2024",
          content: (
            <div className="mt-4 text-sm text-foreground/80 space-y-4 pt-4 border-t border-border">
              <p>Aqui vamos colocar ferramentas que as ajudem a perceber se uma abordagem qualitativa ou uma abordagem quantitativa ou, ainda, mista responde ou será capaz de responder a pergunta norteadora.</p>
              <p>Vamos apresentar como triangular os dados da pesquisa e perceber os achados e insights que podem surgir da análise.</p>
              
              <div className="pt-4 flex flex-col gap-3">
                <a href="https://www.youtube.com/watch?v=KvjMAj7iJ9A" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2 font-medium">
                  <Video className="h-4 w-4" />
                  Assistir Vídeo (YouTube)
                </a>
              </div>
            </div>
          )
        },
        { 
          id: 6, 
          title: "Tópico 03 - Análise de Dados", 
          date: "17 de mai. de 2024",
          content: (
            <div className="mt-4 text-sm text-foreground/80 space-y-4 pt-4 border-t border-border">
              <p>Nesse espaço vamos dispor ferramentas que auxiliem na elaboração dos resultados e análise de dados, as diferenças entre categorias analíticas e categorias nativas (êmicas).</p>
              <p>Abaixo está o replay editado e resumido do terceiro encontro: Análise e revisão dos dados coletados para a pesquisa.</p>
              <p>Por incrível que pareça, acontece bastante nós mulheres pesquisadoras termos valiosos resultados em mãos e não estarmos conseguindo identificar este momento. (Coisas do patriarcado!) 🤦‍♀️ Vamos colocar na luz e dar um final leve e coerente à nossa pesquisa.</p>
              <p className="text-muted-foreground italic text-xs">Palestrante: Dra. Eveline Araujo, 14 de maio de 2024</p>
              
              <div className="pt-4 flex flex-col gap-3">
                <a href="https://www.youtube.com/watch?v=ueMaXLzJZOs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2 font-medium">
                  <Video className="h-4 w-4" />
                  Assistir Vídeo (YouTube)
                </a>
              </div>
            </div>
          )
        },
        { 
          id: 7, 
          title: "Tópico 04 - Discussão dos Resultados e Conclusão", 
          date: "11 de jun. de 2024",
          content: (
            <div className="mt-4 text-sm text-foreground/80 space-y-4 pt-4 border-t border-border">
              <p>Nesse espaço vamos fornecer ferramentas que facilitem a apresentação dos resultados, os aspectos gráficos e visuais que facilitam a compreensão da discussão.</p>
              <p>Importante lembrar que na discussão dos resultados importa colocar em diálogo as categorias êmicas do resultado com as categorias analíticas da discussão.</p>
              
              <div className="pt-4 flex flex-col gap-3">
                <a href="https://www.youtube.com/watch?v=2lq1lEfe44I" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2 font-medium">
                  <Video className="h-4 w-4" />
                  Assistir Vídeo (YouTube)
                </a>
              </div>
            </div>
          )
        },
        { 
          id: 8, 
          title: "Tópico 05 - Formas de divulgação da pesquisa (int...", 
          date: "16 de jul. de 2024",
          content: (
            <div className="mt-4 text-sm text-foreground/80 space-y-4 pt-4 border-t border-border">
              <p>Nesse espaço vamos disponibilizar ferramentas e tutoriais para que você desenvolva a comunicação da sua pesquisa desde a elaboração para apresentação na banca, quanto o vídeo-artigo da tese para as redes sociais.</p>
              <p>Apresentaremos também as principais redes sociais para pesquisadores, assim você poderá dar início à formação da sua rede.</p>
              
              <div className="pt-4 flex flex-col gap-3">
                <a href="https://www.youtube.com/watch?v=vOVGMmo6_qQ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2 font-medium">
                  <Video className="h-4 w-4" />
                  Assistir Vídeo (YouTube)
                </a>
              </div>
            </div>
          )
        },
      ]
    }
  ];

  const [selectedTopic, setSelectedTopic] = useState("Todos os temas");
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({
    percurso: true,
    estrutura: true,
  });
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleTopic = (id: string) => {
    setOpenTopics(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleItem = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const filteredTopics = selectedTopic === "Todos os temas" 
    ? topicsData 
    : topicsData.filter(t => t.title === selectedTopic);

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">Jornada Acadêmica</h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Acesse os conteúdos e materiais de estudo.
        </p>
      </div>

      <div className="mb-8 flex justify-between items-end">
        <div className="relative max-w-xs w-full">
          <label className="block text-xs font-medium text-muted-foreground mb-1">
            Filtro de tópicos
          </label>
          <div className="relative">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="block w-full appearance-none rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="Todos os temas">Todos os temas</option>
              {topicsData.map(t => (
                <option key={t.id} value={t.title}>{t.title}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {filteredTopics.map((topic) => (
          <div key={topic.id} className="border-b border-border pb-6">
            <button 
              onClick={() => toggleTopic(topic.id)}
              className="flex w-full items-center justify-between py-4 text-left group"
            >
              <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                {topic.title}
              </h3>
              {openTopics[topic.id] ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
            
            {openTopics[topic.id] && (
              <div className="mt-4 space-y-3">
                {topic.items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex flex-col rounded-lg border border-border bg-card p-4 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group"
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                          <FileText className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        {item.content && (
                          expandedItem === item.id 
                            ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> 
                            : <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                    {item.content && expandedItem === item.id && (
                      <div onClick={(e) => e.stopPropagation()} className="cursor-default">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
