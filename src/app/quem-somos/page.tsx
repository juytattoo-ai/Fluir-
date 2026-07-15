import Link from "next/link";

export const metadata = {
  title: "Quem Somos | FLUIR+",
  description: "Conheça a história, missão e valores da egrégora FLUIR+.",
};

export default function QuemSomosPage() {
  return (
    <div className="bg-background min-h-[60vh] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl">Quem Somos</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          A FLUIR+ nasceu do desejo de transformar o ambiente acadêmico em um espaço de acolhimento, desenvolvimento e excelência para mulheres.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/missao"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all"
          >
            Conheça a nossa Missão
          </Link>
        </div>
      </div>
    </div>
  );
}
