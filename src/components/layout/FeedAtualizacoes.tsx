"use client";

import { Sparkles } from "lucide-react";

interface MuralEvent {
  id: string;
  dateLabel: string;
  title: string;
  /** Último dia em que o evento aparece no mural (YYYY-MM-DD). Depois dessa data, some automaticamente. */
  expiresAfter: string;
  highlight?: boolean;
}

const muralEvents: MuralEvent[] = [
  {
    id: "roda-nov-2026",
    dateLabel: "27 de Novembro",
    title: "Roda de conversa.",
    expiresAfter: "2026-11-27",
    highlight: true,
  },
  {
    id: "escrita-criativa-nov-2026",
    dateLabel: "Novembro",
    title: "Lançamento de nova aula sobre escrita criativa",
    expiresAfter: "2026-11-30",
    highlight: true,
  },
  {
    id: "cafe-dez-2026",
    dateLabel: "4 de Dezembro",
    title: "Café com pesquisa, apresentando o Instituto Fluir+.",
    expiresAfter: "2026-12-04",
    highlight: true,
  },
  {
    id: "linguagem-simples-dez-2026",
    dateLabel: "Dezembro",
    title: "Mini curso linguagem simples.",
    expiresAfter: "2026-12-31",
    highlight: true,
  },
  {
    id: "recesso-dez-2026",
    dateLabel: "Dezembro",
    title: "Encerramento do semestre letivo e recesso.",
    expiresAfter: "2026-12-31",
    highlight: false,
  },
  {
    id: "libras-jan-2027",
    dateLabel: "Janeiro",
    title: "Oficina sobre libras",
    expiresAfter: "2027-01-31",
    highlight: false,
  },
];

function getTodayBrazilIso(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export default function FeedAtualizacoes() {
  const todayIso = getTodayBrazilIso();
  const upcomingEvents = muralEvents.filter((event) => event.expiresAfter >= todayIso);

  return (
    <div className="flex h-full flex-col border-l border-primary/10 bg-background/50 backdrop-blur-md p-6">
      <div className="shrink-0 h-10 w-full mb-6 flex items-center">
        <h3 className="text-lg font-serif font-bold text-foreground flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          Mural Fluir+
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {upcomingEvents.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Nenhum evento agendado no momento.
          </p>
        ) : (
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className={`border-l-2 pl-4 py-1 relative ${
                  event.highlight ? "border-primary/30" : "border-gray-300"
                }`}
              >
                <div
                  className={`absolute w-2 h-2 rounded-full -left-[5px] top-2 ${
                    event.highlight ? "bg-primary" : "bg-gray-300"
                  }`}
                ></div>
                <span
                  className={`text-xs font-semibold block mb-1 ${
                    event.highlight ? "text-primary" : "text-gray-500"
                  }`}
                >
                  {event.dateLabel}
                </span>
                <p
                  className={`text-sm font-medium ${
                    event.highlight ? "text-foreground" : "text-gray-600"
                  }`}
                >
                  {event.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
