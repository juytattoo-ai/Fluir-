"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShoppingCart, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { getPaymentLinks } from "@/services/paymentService";

const WHATSAPP_NUMBER = "5511999999999";

const aulasAvulsas = [
  { id: 1 as const, key: "aula1" as const, date: "15/09", title: "MOTIVAÇÃO / CARREIRA" },
  { id: 2 as const, key: "aula2" as const, date: "22/09", title: "GERENCIAR ESTRUTURAS PATRIARCAIS" },
  { id: 3 as const, key: "aula3" as const, date: "29/09", title: "INSTRUMENTOS DE PESQUISA" },
  { id: 4 as const, key: "aula4" as const, date: "06/10", title: "PREPARAÇÃO E QUESTÕES BÁSICAS" },
  { id: 5 as const, key: "aula5" as const, date: "20/10", title: "PESQUISA QUALI / QUANTI" },
  { id: 6 as const, key: "aula6" as const, date: "27/10", title: "PROJETO A LONGO PRAZO" },
];

export default function InscricaoPage() {
  const [links, setLinks] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getPaymentLinks();
      if (data.pagamentosMestrado) {
        setLinks(data.pagamentosMestrado);
      }
      setLoading(false);
    }
    load();
  }, []);

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const getPaymentLink = (key: string, fallbackMessage: string) => {
    if (links[key] && links[key].trim() !== "") {
      return links[key];
    }
    return getWhatsAppLink(fallbackMessage);
  };

  return (
    <div className="bg-background min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-12">
        
        <Link href="/cursos/mestrado" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Voltar para o detalhe do curso
        </Link>

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground">
            Escolha seu Plano de Inscrição
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Você pode optar pelo ciclo completo com desconto ou escolher as aulas individuais que mais fazem sentido para o seu momento atual.
          </p>
        </div>

        {/* Pacote Completo Card */}
        <div className="glass-card relative overflow-hidden bg-primary-soft/10 border-2 border-primary">
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-bl-xl">
            MELHOR CUSTO-BENEFÍCIO
          </div>
          <div className="p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-serif font-bold text-foreground">Ciclo Completo (6 Aulas)</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>Acesso a todas as 6 aulas ao vivo.</span>
                </li>
                <li className="flex items-center gap-2 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>Acompanhamento da sua evolução do início ao fim.</span>
                </li>
                <li className="flex items-center gap-2 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>Economia de R$ 67 em relação à compra avulsa.</span>
                </li>
              </ul>
            </div>
            
            <div className="shrink-0 flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm min-w-[250px]">
              <span className="text-muted-foreground line-through text-sm font-medium">De R$ 264,00</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">R$ 197</span>
                <span className="text-muted-foreground font-medium">,00</span>
              </div>
              <a
                href={getPaymentLink("completo", "Olá, quero me inscrever no PACOTE COMPLETO do Curso de Mestrado (R$ 197)!")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 disabled:opacity-50"
              >
                <ShoppingCart className="h-4 w-4" />
                {loading ? "Carregando..." : "Comprar Ciclo Completo"}
              </a>
            </div>
          </div>
        </div>

        {/* Módulos Avulsos */}
        <div className="space-y-6 pt-12 border-t border-primary/10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-foreground">Aulas Avulsas</h3>
            <p className="text-muted-foreground mt-1">Compre apenas os encontros que você precisa por R$ 44,00 cada.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aulasAvulsas.map((aula) => (
              <div key={aula.id} className="glass-card p-6 flex flex-col justify-between group hover:border-primary/50 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary-soft/30 text-primary text-xs font-bold">
                      <Calendar className="h-3.5 w-3.5" />
                      {aula.date}
                    </span>
                    <span className="text-lg font-bold text-foreground">R$ 44</span>
                  </div>
                  <h4 className="font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                    Aula 0{aula.id}: {aula.title}
                  </h4>
                </div>
                
                <a
                  href={getPaymentLink(aula.key, `Olá, quero comprar a Aula Avulsa 0${aula.id} (${aula.date}) do Curso de Mestrado por R$ 44,00!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50"
                >
                  {loading ? "..." : `Comprar Aula ${aula.id}`}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
