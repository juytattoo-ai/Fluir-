import Link from "next/link";

export const metadata = {
  title: "Quem Somos | FLUIR+",
  description: "Conheça a história, missão e valores da egrégora FLUIR+.",
};

export default function QuemSomosPage() {
  return (
    <div className="bg-background min-h-[60vh] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl">Quem Somos</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            A FLUIR+ nasceu do desejo de transformar o ambiente acadêmico em um espaço de acolhimento, desenvolvimento e excelência para mulheres.
          </p>
          <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Neste sentido, hoje o Instituto Fluir+ é um espaço coletivo de pesquisadoras que acreditam ser possível fazer pesquisa e ciência com qualidade de vida, sob a ótica de uma cosmovisão integrativa e a partir de profunda transformação das estruturas patriarcais tóxicas na academia, em direção a ambientes de respeito e dignidade, condizentes com as ciclicidades femininas.
          </p>
        </div>

        <div className="space-y-6 pt-12 border-t border-primary/10">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground">A nossa missão</h2>
          <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Promover acolhimento, crescimento pessoal e transformação de vidas das mulheres na ciência, por meio do auto conhecimento, do fortalecimento das relações e da vivência de valores que inspiram o bem comum.
          </p>
        </div>
      </div>
    </div>
  );
}
