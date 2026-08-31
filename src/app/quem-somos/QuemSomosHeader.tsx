import Link from "next/link";
import { ChevronRight } from "lucide-react";

const submenus = [
  { name: "Organograma Funcional", id: "organograma" },
  { name: "História", id: "historia" },
  { name: "Conselho do Instituto", id: "conselho" },
  { name: "Modelo de Governança", id: "governanca" },
  { name: "Participantes do Conselho", id: "participantes" },
  { name: "Apresentação da Mentora", id: "mentora" },
];

export default function QuemSomosHeader() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl">Sobre nós</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            O Instituto Fluir+ é um espaço coletivo de pesquisadoras que acreditam ser possível fazer pesquisa e ciência com qualidade de vida, sob a ótica de uma cosmovisão integrativa e a partir de profunda transformação das estruturas patriarcais tóxicas na academia, em direção a ambientes de respeito e dignidade, condizentes com as ciclicidades femininas.
          </p>
        </div>

        <div className="pt-8 flex flex-wrap justify-center gap-3">
          {submenus.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full border border-white/60 bg-white/60 hover:bg-[#3fe2c5]/40 text-slate-800 text-sm font-medium transition-colors backdrop-blur-sm shadow-sm"
            >
              {item.name}
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
          ))}
        </div>

        <div className="space-y-6 pt-12 border-t border-[#3fe2c5]/20">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground">A nossa missão</h2>
          <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Promover acolhimento, crescimento pessoal e transformação de vidas das mulheres na ciência, por meio do auto conhecimento, do fortalecimento das relações e da vivência de valores que inspiram o bem comum.
          </p>
        </div>
      </div>
    </div>
  );
}
