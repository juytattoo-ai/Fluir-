import { Plus, Target, Megaphone, ShoppingBag } from "lucide-react";

export const metadata = {
  title: "Suas Ofertas | FLUIR+",
};

const ofertasExemplo = [
  {
    id: 1,
    title: "Consultoria Acadêmica",
    description: "Apoio para estruturação de projetos de pesquisa e dissertações.",
    type: "Consultoria",
    author: "Maria Silva",
    status: "Ativo",
  },
  {
    id: 2,
    title: "Oficina de Escrita Criativa",
    description: "Técnicas para destravar a escrita acadêmica sem perder o rigor.",
    type: "Oficina",
    author: "Ana Costa",
    status: "Ativo",
  }
];

export default function OfertasPage() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Suas Ofertas
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Um espaço dedicado para você oferecer seus serviços, cursos, oficinas e consultorias para a nossa egrégora.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300"
            >
              <Plus className="h-5 w-5" />
              Nova Oferta
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {/* Card para estimular a criação */}
          <div className="glass-card flex flex-col items-center justify-center p-8 text-center border-dashed border-2 border-primary/20 hover:border-primary/50 cursor-pointer transition-colors group rounded-2xl h-full min-h-[280px]">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Megaphone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Divulgue seu trabalho</h3>
            <p className="text-sm text-muted-foreground">
              Crie sua primeira oferta e apresente seus serviços para a comunidade Fluir+.
            </p>
          </div>

          {ofertasExemplo.map((oferta) => (
            <div key={oferta.id} className="glass-card flex flex-col p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent ring-1 ring-inset ring-accent/20 mb-1">
                    {oferta.type}
                  </span>
                  <p className="text-xs text-muted-foreground">Por {oferta.author}</p>
                </div>
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{oferta.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">{oferta.description}</p>
              
              <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {oferta.status}
                </span>
                <button className="text-sm font-semibold text-primary hover:text-primary/80">
                  Editar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
