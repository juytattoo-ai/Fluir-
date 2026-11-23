import { Search, Users, Presentation, Briefcase } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "SOS Lacunas Acadêmicas | FLUIR+",
};

const cards = [
  {
    id: 1,
    title: "Solicitar apoio científico na comunidade",
    icon: Users,
    href: "#",
  },
  {
    id: 2,
    title: "Solicitar banca simulada na comunidade",
    icon: Presentation,
    href: "#",
  },
  {
    id: 3,
    title: "Busca por consultoria remunerada com uma colega expert que seja da comunidade",
    icon: Briefcase,
    href: "#",
  }
];

export default function LacunasPage() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
            <Search className="w-8 h-8 text-primary" />
            SOS Lacunas Acadêmicas
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Encontre o apoio que você precisa dentro da nossa comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {cards.map((card) => (
            <Link key={card.id} href={card.href} className="glass-card flex flex-col p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer border hover:border-primary/50">
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">{card.title}</h3>
              <div className="mt-auto flex justify-end">
                <span className="text-sm font-semibold text-primary group-hover:underline">Acessar &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
