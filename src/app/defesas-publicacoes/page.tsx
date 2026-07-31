import { GraduationCap, BookOpen, Link as LinkIcon } from "lucide-react";

export const metadata = {
  title: "Defesas e Publicações | FLUIR+",
};

const sections = [
  {
    id: "defesas",
    title: "Defesas",
    description: "Acompanhe e celebre as defesas de dissertações e teses da nossa egrégora.",
    icon: GraduationCap,
  },
  {
    id: "publicacoes",
    title: "Publicações",
    description: "Artigos científicos, livros e capítulos publicados pelas nossas pesquisadoras.",
    icon: BookOpen,
  },
  {
    id: "lattes",
    title: "Lattes",
    description: "Acesso aos currículos Lattes das integrantes da rede FLUIR+.",
    icon: LinkIcon,
  }
];

export default function DefesasPublicacoesPage() {
  return (
    <div className="bg-background min-h-[80vh] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl">Defesas e Publicações</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            O espaço dedicado a celebrar e divulgar as conquistas acadêmicas da nossa comunidade.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {sections.map((item) => (
            <div key={item.id} className="flex flex-col glass-card p-10 group hover:border-primary/50 transition-colors text-center items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary transition-colors mb-6">
                <item.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-8">
                <button className="inline-flex rounded-full bg-primary/10 px-6 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors items-center gap-2">
                  Ver {item.title.toLowerCase()}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
