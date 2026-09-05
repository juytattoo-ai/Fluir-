import Image from "next/image";
import Link from "next/link";
import { ClipboardList, Stethoscope, FileText, ArrowRight } from "lucide-react";

export default function DiagnosticoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section transparente para o gradiente global */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <span className="rounded-full bg-white/60 px-4 py-1.5 text-sm font-medium text-slate-800 ring-1 ring-inset ring-white/50 flex items-center gap-2 backdrop-blur-sm shadow-sm">
              <ClipboardList className="h-4 w-4 text-[#2EBFA5]" />
              Diagnóstico de Pesquisa
            </span>
          </div>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-slate-900 sm:text-6xl mb-6">
            DIAGNÓSTICO
          </h1>
          <p className="text-xl text-slate-800 max-w-3xl mx-auto leading-relaxed">
            Descubra o que está travando o seu projeto e encontre estratégias claras para destravar a sua jornada acadêmica.
          </p>
        </div>
      </section>

      {/* Content Section com cartões translúcidos */}
      <section className="py-12 relative">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg prose-primary max-w-none">
            
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/60 mb-12 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Stethoscope className="w-48 h-48 text-[#2EBFA5]" />
              </div>
              <div className="relative z-10 space-y-6 text-slate-800 leading-relaxed text-lg">
                <p>
                  Diagnóstico da sua pesquisa, em forma de <strong>anamnese</strong> para verificar o que atualmente está travando ou bloqueando o tranquilo andamento da sua jornada acadêmica.
                </p>
                <p>
                  Análise dos déficits e &quot;pontos cegos&quot;, esclarecendo, organizando e propondo estratégias para o destrave. Estas estratégias poderão ser aplicadas por você mesma, bem como através de consultoria ou acompanhamento próximo na mentoria.
                </p>
                <p>
                  Caso você opte por um acompanhamento próximo para facilitar a caminhada, isto poderá ser avaliado conjuntamente após o diagnóstico feito e antes de você decidir.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-sm mb-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Como funciona?</h3>
                <p className="text-slate-700 mb-6">
                  Para agendar o diagnóstico da sua pesquisa, favor preencher o formulário. A equipe de suporte irá agendar uma <strong>chamada individual de meia hora</strong> com a mentora.
                </p>
                
                <div className="flex items-center gap-4 bg-white/80 p-4 rounded-2xl border border-white/60 shadow-xs">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#2EBFA5] shadow-sm flex-shrink-0">
                    <Image
                      src="/evelyn.png"
                      alt="Dra. Evelyn Verônica Hartoch"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#2EBFA5] uppercase tracking-wider mb-1">Mentora</p>
                    <p className="text-base font-bold text-slate-900">Dra. Evelyn Verônica Hartoch</p>
                    <p className="text-sm text-slate-600">PhD. em Ciências Socioambientais</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center flex flex-col justify-center items-center h-full border border-white/60 shadow-xs">
                <p className="text-sm font-semibold text-[#2EBFA5] uppercase tracking-wider mb-2">
                  Custo de Investimento
                </p>
                <p className="text-5xl font-serif font-bold text-slate-900 mb-2">
                  R$ 80<span className="text-2xl text-slate-500">,00</span>
                </p>
                <p className="text-sm text-slate-600">
                  Sessão individual de 30 minutos
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdAAw9-maEFX4oFeaKY8-OYWvDaPY8LooPjQOMOhJFW-HVl_A/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-[#2EBFA5] hover:bg-[#23A790] px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:scale-105"
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
