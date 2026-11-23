import Link from "next/link";
import { ArrowLeft, ClipboardList } from "lucide-react";

export default function SaibaMaisDiagnosticoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <span className="rounded-full bg-white/60 px-4 py-1.5 text-sm font-medium text-slate-800 ring-1 ring-inset ring-white/50 flex items-center gap-2 backdrop-blur-sm shadow-sm">
              <ClipboardList className="h-4 w-4 text-[#2EBFA5]" />
              Diagnóstico de Pesquisa
            </span>
          </div>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Saiba mais sobre o Diagnóstico
          </h1>
        </div>
      </section>

      <section className="py-8 relative flex-grow">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-sm border border-white/60">
            <div className="text-slate-700 text-lg leading-relaxed">
              <p className="mb-6">
                Pesquisadoras das mais diversas áreas de conhecimento, que poderão te apoiar na sua jornada, participam da equipe do Instituto Fluir+ .
              </p>
              <p className="mb-4">
                Se você estiver interessada em saber mais sobre o diagnóstico de sua pesquisa, entre em contato conosco, já de inicio nos passando alguns dados:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2 font-medium text-slate-800">
                <li>Área de conhecimento</li>
                <li>Mestrado, doutorado, pós-doc, ou outros</li>
                <li>Quais os principais desafios que precisa vencer?</li>
              </ul>
              
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="/contato"
                  className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Entre em contato
                </Link>
                <Link
                  href="/diagnostico"
                  className="rounded-full bg-white px-8 py-3 text-sm font-bold text-primary shadow-sm ring-1 ring-inset ring-primary/20 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
