"use client";

import Link from "next/link";
import { ArrowLeft, Users, Leaf, Moon, CheckCircle2, ShieldCheck, Heart, MessagesSquare, UsersRound, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { getPaymentLinks } from "@/services/paymentService";
import { useAuth } from "@/contexts/AuthContext";

export default function MentoriaGrupoFemininoPage() {
  const [mentoriaUrl, setMentoriaUrl] = useState<string>("#");
  const [loading, setLoading] = useState(true);
  const { userProfile } = useAuth();
  const isMentorada = userProfile?.role === "mentorada" || userProfile?.role === "admin";

  useEffect(() => {
    async function load() {
      const data = await getPaymentLinks();
      setMentoriaUrl(data.mentoriaUrl);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="bg-background min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-16">
        
        <Link href="/mentorias" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Voltar para Mentorias
        </Link>

        {/* Header Hero */}
        <div className="glass-card overflow-hidden border-2 border-primary/20 bg-primary-soft/5">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 bg-[#d5bba6]/20 relative min-h-[300px]">
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent z-10 text-white">
                <p className="font-serif font-bold text-lg">Dra. Evelyn Verônica Hartoch</p>
                <p className="text-sm opacity-90">PhD em Ciências Socioambientais</p>
              </div>
              <img 
                src="/evelyn.png" 
                alt="Dra. Evelyn"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 bg-primary/5 self-start">
                <Leaf className="h-4 w-4 mr-2" />
                Seja protagonista da sua tese!
              </div>
              <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground leading-tight">
                Mentoria Acadêmica Fluir+
                <span className="block text-primary mt-2 text-3xl">Para grupos femininos</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Para mulheres que desejam progredir com leveza no mestrado / doutorado e pós-doc.
              </p>
            </div>
          </div>
        </div>

        {/* Como funciona */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground">Como funciona a Mentoria?</h2>
          </div>
          <div className="glass-card p-8 sm:p-10 text-center relative overflow-hidden bg-white/40">
            <Leaf className="absolute -top-10 -left-10 h-40 w-40 text-[#d5bba6]/20 rotate-45 pointer-events-none" />
            <p className="text-lg font-bold text-foreground uppercase tracking-wide leading-relaxed relative z-10">
              Programa específico para: Destravar a pesquisa e fazer a sua tese fluir, com o objetivo de se tornar mestra / doutora / cientista / pós-doc com mais leveza, sem adoecer e sem ter que abrir mão da sua qualidade de vida durante a jornada.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8 space-y-4">
              <UsersRound className="h-8 w-8 text-primary" />
              <p className="text-foreground/80 leading-relaxed">
                Nos grupos femininos o processo de destrave é individual, mas acontece amparado pela dinâmica coletiva do seu grupo, no contexto de acolhedora egrégora feminina na ciência.
              </p>
            </div>
            <div className="glass-card p-8 space-y-4">
              <Heart className="h-8 w-8 text-primary" />
              <p className="text-foreground/80 leading-relaxed">
                As pesquisadoras participantes do grupo se sentem acolhidas e compreendidas tanto em relação aos desafios vivenciados perante as estruturas patriarcais, da sobreposição de demandas do cotidiano e da pesquisa, bem como nos questionamentos e impasses da jornada acadêmica.
              </p>
            </div>
          </div>
        </div>

        {/* O que vamos cobrir */}
        <div className="glass-card p-8 sm:p-12 bg-primary-soft/10 border-primary/20 space-y-8 relative overflow-hidden">
          <Moon className="absolute -bottom-10 -right-10 h-40 w-40 text-primary/10 pointer-events-none" />
          
          <h2 className="text-3xl font-serif font-bold text-foreground max-w-2xl">
            O que vamos cobrir na Mentoria para destravar a sua pesquisa num tempo recorde:
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed relative z-10">
            <p>
              Em seleto grupo feminino vamos tornar as boas práticas na metodologia científica as nossas aliadas e nos (re)conectar com a nossa própria essência, com as leis da natureza (que regem a vida na Terra!), com os ciclos naturais, femininos e biográficos, inclusive desafios do cotidiano e da menopausa.
            </p>
            <p>
              Usamos os <strong>ciclos lunares como norte temporal</strong>, uma vez que as fases lunares colaboram a favor do destrave e da fluidez da pesquisa.
            </p>
          </div>
          
          <div className="pt-6 border-t border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wide">De modo prático:</h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 bg-white/60 p-6 rounded-2xl">
                <p className="text-foreground/80">
                  O processo de destrave da pesquisa acontece rapidamente, em apenas <strong>um ciclo lunar (um mês)</strong>, seguido por mais um ciclo lunar adicional para consolidar o novo modo fluido de produção acadêmica.
                </p>
              </div>
              <div className="flex-1 bg-white/60 p-6 rounded-2xl flex flex-col justify-center gap-2">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <span className="font-semibold">8 Encontros semanais</span>
                </div>
                <p className="text-sm text-foreground/70">
                  Online ao vivo, com a sua pequena turma exclusiva de competentes mulheres pesquisadoras em busca de reconexão.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Etapas */}
        <div className="space-y-10 pt-8">
          <h2 className="text-3xl font-serif font-bold text-center text-foreground">As Etapas da Mentoria</h2>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
            
            {/* Etapa 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6">
                <h3 className="font-bold text-lg text-primary mb-2">DESTRAVE</h3>
                <p className="text-foreground/80">
                  Pesquisa fluindo com as ciclicidades naturais.
                </p>
              </div>
            </div>
            
            {/* Etapa 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6">
                <h3 className="font-bold text-lg text-primary mb-2">CONSOLIDAÇÃO</h3>
                <p className="text-foreground/80">
                  Praticando a nova forma de produção científica alinhada com a nossa essência e as leis que regem a vida na Terra. Ciclicidades da natureza, feminina e biográfica.
                </p>
              </div>
            </div>
            
            {/* Etapa 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6">
                <h3 className="font-bold text-lg text-primary mb-2">COMUNIDADE FLUIR+</h3>
                <p className="text-sm text-foreground/80 space-y-2">
                  <span className="block">Além dos dois ciclos lunares, você fará parte da comunidade composta por <strong>mais de 200 pesquisadoras</strong> (mestras e doutoras) formadas desde 2020.</span>
                  <span className="block mt-2">Encontros e oficinas online ao vivo para trocas, consultas e acolhimento. Grupo VIP de WhatsApp e acervo da mentoria à disposição por tempo ilimitado.</span>
                  <span className="block mt-2">Apoio científico à sua jornada acadêmica, networking e publicações em parceria com colegas de diversas áreas e muitos PPG's brasileiros.</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Garantia */}
        <div className="glass-card p-8 flex flex-col sm:flex-row items-center gap-8 bg-[#d5bba6]/10 border-[#d5bba6]/30">
          <ShieldCheck className="h-16 w-16 text-primary shrink-0" />
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">Garantia de Destrave</h3>
            <p className="text-foreground/80">
              <strong>Eu garanto o destrave da sua pesquisa, desde que você cumpra a sua parte!</strong>
            </p>
            <p className="text-sm text-foreground/70">
              Se inesperadamente você não conseguir destravar a sua pesquisa, mesmo tendo estado presente nos encontros dos dois ciclos lunares, participado ativamente do processo e das tarefas semanais da mentoria, então você terá direito a seu investimento de volta.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdAAw9-maEFX4oFeaKY8-OYWvDaPY8LooPjQOMOhJFW-HVl_A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground shadow-xl hover:bg-primary/90 transition-transform hover:scale-105"
            >
              Diagnóstico
            </a>
            <a
              href={isMentorada ? "/aluno" : mentoriaUrl}
              target={isMentorada ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground shadow-xl hover:bg-primary/90 transition-transform hover:scale-105 disabled:opacity-50"
            >
              {isMentorada ? "Acessar Área da Aluna" : (loading ? "Carregando..." : "Quero Garantir Minha Vaga")}
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4">
            <span className="flex items-center gap-2">
              <MessagesSquare className="h-4 w-4" /> Dúvidas? WhatsApp: (71) 98817-2711
            </span>
            <span className="flex items-center gap-2">
              <Heart className="h-4 w-4" /> Instagram: @tese.que.flui
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
