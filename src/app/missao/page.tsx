import { Target } from "lucide-react";

export default function MissaoPage() {
  return (
    <div className="flex flex-col py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative text-center">
        <div className="mb-6 flex justify-center">
          <span className="rounded-full bg-white/60 px-4 py-1.5 text-sm font-medium text-slate-800 ring-1 ring-inset ring-white/50 flex items-center gap-2 backdrop-blur-sm shadow-sm">
            <Target className="h-4 w-4 text-[#2EBFA5]" />
            Missão da Pesquisa
          </span>
        </div>
        <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
          Missão da Pesquisa
        </h2>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed mb-12">
          Acompanhamento de metas, organização de etapas e cronogramas do seu projeto.
        </p>
        
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 border border-white/60 relative overflow-hidden max-w-4xl mx-auto flex items-center justify-center min-h-[300px] shadow-sm">
          <p className="text-slate-600 text-lg">Quadro de metas e cronograma em desenvolvimento...</p>
        </div>
      </div>
    </div>
  );
}
