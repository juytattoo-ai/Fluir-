import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden bg-background pt-16 pb-32 sm:pt-24 sm:pb-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/gota.jpeg')" }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary-soft/40 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 flex justify-center">
              <span className="rounded-full bg-primary-soft/80 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 backdrop-blur-sm">
                Lançamento da Área da Egrégora
              </span>
            </div>
            <h1 className="text-5xl font-serif font-bold tracking-tight text-primary sm:text-7xl text-balance drop-shadow-sm">
              Instituto Fluir+
            </h1>
            <p className="mt-4 text-2xl font-serif font-medium text-foreground drop-shadow-md sm:text-3xl max-w-3xl mx-auto text-balance">
              Um espaço coletivo feminino de qualidade de vida na pesquisa e na ciência.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground drop-shadow-md max-w-2xl mx-auto font-medium">
              Pesquisa, desenvolvimento acadêmico e comunidade para mulheres que desejam transformar conhecimento em legado. 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quem-somos"
                className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2"
              >
                Conheça a Fluir+
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/cursos" className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium bg-white/50 px-4 py-2 rounded-full">
                Explorar Cursos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Apoio Completo</h2>
            <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">
              Tudo que você precisa para a sua pesquisa
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary-soft">
                    <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  Formação Acadêmica
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Cursos estruturados para orientar desde a concepção do projeto até a publicação científica de alto impacto.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary-soft">
                    <Users className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  Comunidade Egrégora
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Um espaço seguro e exclusivo para networking, parcerias de publicação e troca de experiências entre mulheres.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary-soft">
                    <Award className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  Mentorias Especializadas
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Acompanhamento individual ou em grupo para superar bloqueios na escrita e acelerar seu desenvolvimento profissional.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
