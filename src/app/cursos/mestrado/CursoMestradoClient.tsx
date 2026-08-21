"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar, Clock, MonitorPlay, Users } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function CursoMestradoClient() {
  const { userProfile } = useAuth();
  const isMentorada = userProfile?.role === "mentorada" || userProfile?.role === "admin";

  return (
    <div className="bg-background min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-12">
        
        <Link href="/cursos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Voltar para Cursos
        </Link>

        {/* Header */}
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 bg-primary/5">
            ✨ Oportunidade Especial para Mulheres Graduadas
          </div>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
            Curso Preparatório para Ingresso ao Mestrado
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Pensando em dar o próximo passo rumo ao mestrado, mas não sabe por onde começar? Nós temos o caminho! Um programa completo, criado por <strong>Evelyn Hartoch</strong> e <strong>Eveline Araujo (Dra em Ciências pela USP)</strong>.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-card p-6 flex items-start gap-4">
            <Calendar className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Datas das Aulas</h3>
              <p className="text-sm text-muted-foreground mt-1">15, 22, 29 de setembro e 06, 20, 27 de outubro de 2026</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-4">
            <Clock className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Horário</h3>
              <p className="text-sm text-muted-foreground mt-1">Terças-feiras, das 19h30 às 21h (Ao Vivo)</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-4">
            <MonitorPlay className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Formato</h3>
              <p className="text-sm text-muted-foreground mt-1">Encontros interativos online através do Zoom.</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-4">
            <Users className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Investimento</h3>
              {isMentorada ? (
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm line-through text-muted-foreground">R$ 197</span>
                  <span className="text-sm font-bold text-green-600 uppercase tracking-wide">Incluso na Mentoria</span>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground mt-1">Lote subsidiado: R$ 197 (Ciclo de 6 aulas) ou R$ 44 (avulso).</p>
              )}
            </div>
          </div>
        </div>

        {/* What you will learn */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-foreground">O que você vai aprender:</h2>
          <ul className="space-y-4">
            {[
              "Como definir seu projeto de pesquisa e alinhar sua carreira e missão de vida.",
              "Motivações, estratégias e caminhos para acessar a pós-graduação, bolsas e intercâmbios internacionais.",
              "Instrumentos de preparação, domínio de línguas estrangeiras e softwares de leitura e gestão bibliográfica.",
              "Estratégias para um percurso muito mais tranquilo e saudável durante todo o mestrado!"
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modules */}
        <div className="space-y-6 pt-8 border-t border-primary/10">
          <h2 className="text-2xl font-serif font-bold text-foreground">Cronograma de Aulas</h2>
          <div className="space-y-4">
            {[
              { date: "15 de setembro", title: "MOTIVAÇÃO / CARREIRA", desc: "Como o mestrado se encaixa na carreira. Percepção de tempo e energia." },
              { date: "22 de setembro", title: "COMO GERENCIAR ESTRUTURAS PATRIARCAIS EM CASA E NA ACADEMIA", desc: "Preparando-se para fazer este gerenciamento antes de ingressar na pós-graduação." },
              { date: "29 de setembro", title: "INSTRUMENTOS DE PESQUISA", desc: "Instrumentos de preparação, fichas de leitura, templates para projeto de pesquisa, IA." },
              { date: "06 de outubro", title: "INSTRUMENTOS DE PREPARAÇÃO E QUESTÕES BÁSICAS", desc: "Escolas de pensamento e importância da Língua estrangeira." },
              { date: "20 de outubro", title: "PESQUISA QUALI / QUANTI E ESCOLHA DO PROGRAMA", desc: "Preparando-se para o tema da pesquisa, compreendendo as metodologias." },
              { date: "27 de outubro", title: "PROJETO A LONGO PRAZO / CARREIRA E MISSÃO", desc: "Você está escolhendo um tema. Mas este tema dialoga com a sua missão e a sua carreira?" },
            ].map((aula, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="shrink-0 text-center md:text-left">
                  <span className="block text-xs font-bold text-primary uppercase tracking-wider">Aula 0{idx + 1}</span>
                  <span className="block text-sm font-medium text-foreground">{aula.date}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground">{aula.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{aula.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-8 md:p-12 text-center bg-primary-soft/10 border-primary/20 mt-12 rounded-3xl">
          {isMentorada ? (
            <>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Você já tem acesso a este curso!</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Como parte da Egrégora, sua vaga já está garantida sem custos adicionais. Os links para as aulas ao vivo ficarão disponíveis na sua área de estudos.
              </p>
              <Link
                href="/aluno"
                className="inline-flex rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition-transform hover:scale-105"
              >
                Acessar Área da Aluna
              </Link>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Pronta para conquistar sua vaga?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Garanta sua participação no ciclo completo por apenas R$ 197 ou compre módulos avulsos de acordo com a sua necessidade.
              </p>
              <Link
                href="/cursos/mestrado/inscricao"
                className="inline-flex rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition-transform hover:scale-105"
              >
                Ver Planos de Inscrição
              </Link>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
