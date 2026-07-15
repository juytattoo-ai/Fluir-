"use client";

import { useState } from "react";
import { FileText, ChevronDown, ChevronUp } from "lucide-react";

const topicsData = [
  {
    id: "percurso",
    title: "Percurso da jornada acadêmica sem pânico",
    items: [
      { id: 1, title: "Ciclicidades da vida", date: "30 de abr. de 2024" },
      { id: 2, title: "Efeitos do patriarcado no processo de pesquisa", date: "7 de mai. de 2024" },
    ]
  },
  {
    id: "estrutura",
    title: "A estrutura base de uma pesquisa científica",
    items: [
      { id: 3, title: "\"Prá começo de conversa.\"", date: "26 de abr. de 2024" },
      { id: 4, title: "Tópico 01 - Etapas do processo de pesquisa", date: "26 de abr. de 2024" },
      { id: 5, title: "Tópico 02 - Escolha metodológica e aplicação do ...", date: "7 de mai. de 2024" },
      { id: 6, title: "Tópico 03 - Análise de Dados", date: "17 de mai. de 2024" },
      { id: 7, title: "Tópico 04 - Discussão dos Resultados e Conclusão", date: "11 de jun. de 2024" },
      { id: 8, title: "Tópico 05 - Formas de divulgação da pesquisa (int...", date: "16 de jul. de 2024" },
    ]
  }
];

export default function BibliotecaPage() {
  const [selectedTopic, setSelectedTopic] = useState("Todos os temas");
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({
    percurso: true,
    estrutura: true,
  });

  const toggleTopic = (id: string) => {
    setOpenTopics(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredTopics = selectedTopic === "Todos os temas" 
    ? topicsData 
    : topicsData.filter(t => t.title === selectedTopic);

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">Biblioteca</h2>
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
                    className="flex items-center justify-between rounded-lg border border-border bg-card p-4 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                        <FileText className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground hidden sm:block">
                      Última edição: {item.date}
                    </span>
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
