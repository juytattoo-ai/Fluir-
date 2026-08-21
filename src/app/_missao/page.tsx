import { Target } from "lucide-react";

export default function MissaoPage() {
  return (
    <div className="flex flex-col bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative text-center">
        <div className="mb-6 flex justify-center">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 flex items-center gap-2">
            <Target className="h-4 w-4" />
            Missão da Pesquisa
          </span>
        </div>
        <h2 className="text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl mb-6">
          Missão da Pesquisa
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          Acompanhamento de metas, organização de etapas e cronogramas do seu projeto.
        </p>
        
        <div className="bg-primary-soft/30 rounded-3xl p-12 border border-primary/10 relative overflow-hidden max-w-4xl mx-auto flex items-center justify-center min-h-[300px]">
          <p className="text-muted-foreground text-lg">Quadro de metas e cronograma em desenvolvimento...</p>
        </div>
      </div>
    </div>
  );
}
