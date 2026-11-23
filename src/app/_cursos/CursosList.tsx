"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const courses = [
  {
    id: "linguagem-simples",
    title: "Linguagem simples na pesquisa",
    description:
      "Curso em 3 módulos ministrado pela professora Claudia, voltado para tornar a comunicação da sua pesquisa mais clara, acessível e conectada com a sociedade.",
    workload: "3 Módulos • Datas a definir",
    teacher: "Professora Claudia",
    modules: [
      { title: "Módulo 1", date: "Data a definir" },
      { title: "Módulo 2", date: "Data a definir" },
      { title: "Módulo 3", date: "Data a definir" },
    ],
    contentLabel: "Conferir conteúdo",
    enrollLabel: "Inscrever-se",
    enrollHref: "/contato",
  },
  {
    id: "mestrado",
    title: "Preparatório para Mestrado (Para Mulheres)",
    description:
      "Um programa completo para você entender cada etapa do processo e conquistar sua vaga na pós-graduação.",
    workload: "6 Aulas ao Vivo",
    teacher: "Evelyn Hartoch e Eveline Araujo",
    modules: undefined,
    contentLabel: "Conferir conteúdo",
    enrollLabel: "Inscrever-se",
    enrollHref: "/cursos/mestrado/inscricao",
  },
  {
    id: "tese-que-flui",
    title: "Seminário TESE QUE FLUI, online, ao vivo e gratuito.",
    description:
      "Acontece uma vez por semestre, apresentando em sintese os conteúdos da Mentoria Acadêmica Fluir+ e entregando as ferramentas para seguir na pesquisa com qualidade de vida. Imagine-se redescobrindo sua paixão pela pesquisa, equipada com a coragem, competência e força para avançar! Você se tornando a verdadeira força motriz por trás do sucesso de sua pesquisa. Vamos juntas fazer sua tese fluir. Estamos muito animadas em ver você avançando com qualidade de vida.",
    workload: "Online ao vivo, interativo",
    teacher: undefined,
    modules: undefined,
    contentLabel: "Saiba mais",
    enrollLabel: "Entre em contato",
    enrollHref: "/contato",
  },
];

export default function CursosList() {
  return (
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      {courses.map((course) => (
        <article key={course.id} className="flex flex-col items-start glass-card overflow-hidden group">
          <div className="relative w-full h-auto bg-primary/10 overflow-hidden flex flex-wrap items-center justify-between p-4 gap-4">
            <div className="bg-white backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-primary rounded-full shadow-sm">
              {course.workload}
            </div>
            {course.teacher && (
              <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-foreground rounded-full shadow-sm">
                {course.teacher}
              </div>
            )}
          </div>
          <div className="p-8 w-full flex-1 flex flex-col">
            <h3 className="text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
              {course.title}
            </h3>
            <p className="mt-4 text-base leading-6 text-muted-foreground flex-1">
              {course.description}
            </p>
            {course.modules && (
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {course.modules.map((mod) => (
                  <div
                    key={mod.title}
                    className="rounded-lg border border-primary/15 bg-primary/5 px-3 py-2 text-center"
                  >
                    <span className="block text-xs font-bold text-foreground">{mod.title}</span>
                    <span className="block text-[11px] text-muted-foreground">{mod.date}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <Link
                href={`/cursos/${course.id}`}
                className="rounded-full px-6 py-2.5 text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {course.contentLabel}
              </Link>
              <Link
                href={course.enrollHref}
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                {course.enrollLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
