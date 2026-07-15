import Link from "next/link";
import { ArrowUpRight, User, Users } from "lucide-react";

export const metadata = {
  title: "Mentorias | FLUIR+",
};

const mentorias = [
  {
    id: "individual",
    title: "Mentoria Individual",
    description: "Um acompanhamento personalizado e exclusivo para suas necessidades acadêmicas. Ideal para quem busca direcionamento focado em seu próprio projeto de pesquisa.",
    icon: User,
    link: "#"
  },
  {
    id: "grupo",
    title: "Mentoria em Grupo",
    description: "Apoio colaborativo em pequenos grupos de mulheres pesquisadoras. Compartilhe experiências, tire dúvidas e construa networking em um ambiente acolhedor.",
    icon: Users,
    link: "#"
  }
];

export default function MentoriasPage() {
  return (
    <div className="bg-background min-h-[80vh] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl">Mentorias</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Escolha o formato que melhor se adapta ao seu momento acadêmico.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {mentorias.map((item) => (
            <div key={item.id} className="flex flex-col glass-card p-10 group hover:border-primary/50 transition-colors">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary transition-colors mb-6">
                <item.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground flex-1">
                {item.description}
              </p>
              <div className="mt-8">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors items-center gap-2"
                >
                  Saber mais
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
