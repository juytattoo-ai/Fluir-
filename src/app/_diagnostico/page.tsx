import Image from "next/image";
import Link from "next/link";
import { ClipboardList, Stethoscope, FileText, ArrowRight } from "lucide-react";

export default function DiagnosticoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-soft/30 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="absolute inset-0 bg-[url('/gota.jpeg')] bg-cover bg-center opacity-5 mix-blend-multiply"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 flex items-center gap-2">
              <ClipboardList className="h-4 w-4" />
              Diagnóstico de Pesquisa
            </span>
          </div>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-6xl mb-6">
            DIAGNÓSTICO
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Descubra o que está travando o seu projeto e encontre estratégias claras para destravar a sua jornada acadêmica.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg prose-primary max-w-none">
            
            <div className="bg-primary-soft/30 rounded-3xl p-8 md:p-12 border border-primary/10 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Stethoscope className="w-48 h-48 text-primary" />
              </div>
              <div className="relative z-10 space-y-6 text-foreground/90 leading-relaxed text-lg">
                <p>
                  Diagnóstico da sua pesquisa, em forma de <strong>anamnese</strong> para verificar o que atualmente está travando ou bloqueando o tranquilo andamento da sua jornada acadêmica.
                </p>
                <p>
                  Análise dos déficits e "pontos cegos", esclarecendo, organizando e propondo estratégias para o destrave. Estas estratégias poderão ser aplicadas por você mesma, bem como através de consultoria ou acompanhamento próximo na mentoria.
                </p>
                <p>
                  Caso você opte por um acompanhamento próximo para facilitar a caminhada, isto poderá ser avaliado conjuntamente após o diagnóstico feito e antes de você decidir.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 border border-border shadow-sm mb-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Como funciona?</h3>
                <p className="text-muted-foreground mb-6">
                  Para agendar o diagnóstico da sua pesquisa, favor preencher o formulário. A equipe de suporte irá agendar uma <strong>chamada individual de meia hora</strong> com a mentora.
                </p>
                
                <div className="flex items-center gap-4 bg-primary-soft/50 p-4 rounded-2xl">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-sm flex-shrink-0">
                    <Image
                      src="/evelyn.png"
                      alt="Dra. Evelyn Verônica Hartoch"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Mentora</p>
                    <p className="text-base font-bold text-foreground">Dra. Evelyn Verônica Hartoch</p>
                    <p className="text-sm text-muted-foreground">PhD. em Ciências Socioambientais</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-8 text-center flex flex-col justify-center items-center h-full border border-primary/10">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  Custo de Investimento
                </p>
                <p className="text-5xl font-serif font-bold text-foreground mb-2">
                  R$ 80<span className="text-2xl text-muted-foreground">,00</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Sessão individual de 30 minutos
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdAAw9-maEFX4oFeaKY8-OYWvDaPY8LooPjQOMOhJFW-HVl_A/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-xl hover:bg-primary/90 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:-translate-y-1 hover:shadow-primary/30"
              >
                <FileText className="w-5 h-5" />
                Preencher Formulário de Agendamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
