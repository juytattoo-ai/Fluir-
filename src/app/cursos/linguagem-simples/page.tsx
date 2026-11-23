import Link from "next/link";
import { ArrowLeft, Calendar, BookOpen, User, MonitorPlay, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Linguagem simples na pesquisa | FLUIR+",
};

const modules = [
  {
    number: "01",
    date: "Data a definir",
    title: "Módulo 1",
    desc: "Conteúdo em preparação com a professora Claudia.",
  },
  {
    number: "02",
    date: "Data a definir",
    title: "Módulo 2",
    desc: "Conteúdo em preparação com a professora Claudia.",
  },
  {
    number: "03",
    date: "Data a definir",
    title: "Módulo 3",
    desc: "Conteúdo em preparação com a professora Claudia.",
  },
];

export default function CursoLinguagemSimplesPage() {
  return (
    <div className="bg-background min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-12">
        <Link
          href="/cursos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para Cursos
        </Link>

        {/* Header */}
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 bg-primary/5">
            ✨ Novo Curso • 3 Módulos
          </div>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
            Linguagem simples na pesquisa
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Um curso em 3 módulos ministrado pela <strong>professora Claudia</strong>, voltado para tornar a comunicação científica mais clara, acessível e conectada com a sociedade.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-card p-6 flex items-start gap-4">
            <User className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Professora</h3>
              <p className="text-sm text-muted-foreground mt-1">Professora Claudia</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-4">
            <BookOpen className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Estrutura</h3>
              <p className="text-sm text-muted-foreground mt-1">3 módulos</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-4">
            <Calendar className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Datas dos Módulos</h3>
              <p className="text-sm text-muted-foreground mt-1">Datas a definir</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-4">
            <MonitorPlay className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Formato</h3>
              <p className="text-sm text-muted-foreground mt-1">Encontros online com a comunidade Fluir+.</p>
            </div>
          </div>
        </div>

        {/* Modules */}
        <div className="space-y-6 pt-8 border-t border-primary/10">
          <h2 className="text-2xl font-serif font-bold text-foreground">Módulos do Curso</h2>
          <div className="space-y-4">
            {modules.map((mod) => (
              <div
                key={mod.number}
                className="glass-card p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
              >
                <div className="shrink-0 text-center md:text-left">
                  <span className="block text-xs font-bold text-primary uppercase tracking-wider">
                    Módulo {mod.number}
                  </span>
                  <span className="block text-sm font-medium text-muted-foreground">
                    {mod.date}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground">{mod.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-8 md:p-12 text-center bg-primary-soft/10 border-primary/20 mt-12 rounded-3xl">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Quer garantir sua vaga?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Faça sua inscrição e receba todas as informações e datas assim que forem definidas.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition-transform hover:scale-105"
          >
            Inscrever-se
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
