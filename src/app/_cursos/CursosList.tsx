"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const courses = [
  {
    id: "mestrado",
    title: "Preparatório para Mestrado (Para Mulheres)",
    description: "Um programa completo para você entender cada etapa do processo e conquistar sua vaga na pós-graduação.",
    workload: "6 Aulas ao Vivo",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    price: 197.00,
    linkEduzz: "/cursos/mestrado/inscricao"
  }
];

export default function CursosList() {
  const { userProfile } = useAuth();
  const isMentorada = userProfile?.role === "mentorada" || userProfile?.role === "admin";

  return (
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      {courses.map((course) => (
        <article key={course.id} className="flex flex-col items-start glass-card overflow-hidden group">
          <div className="relative w-full h-auto bg-primary/10 overflow-hidden flex flex-wrap items-center justify-between p-4 gap-4">
            <div className="bg-white backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-primary rounded-full shadow-sm">
              {course.workload}
            </div>
            
            {/* Price Badge */}
            <div className="bg-white backdrop-blur-sm px-4 py-2 text-sm font-bold text-foreground rounded-full flex items-center gap-2 shadow-sm">
              {isMentorada ? (
                <>
                  <span className="line-through text-muted-foreground font-medium text-xs">
                    R$ {course.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-[#2EBFA5] font-bold uppercase tracking-wide">Grátis</span>
                </>
              ) : (
                <span>R$ {course.price.toFixed(2).replace('.', ',')}</span>
              )}
            </div>
          </div>
          <div className="p-8 w-full flex-1 flex flex-col">
            <h3 className="text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
              {course.title}
            </h3>
            <p className="mt-4 text-base leading-6 text-muted-foreground flex-1">
              {course.description}
            </p>
            <div className="mt-8 flex items-center justify-between gap-4">
              <Link 
                href={`/cursos/${course.id}`} 
                className="rounded-full px-6 py-2.5 text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Saiba mais
              </Link>
              <a
                href={isMentorada ? "/aluno" : course.linkEduzz}
                target={isMentorada ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                {isMentorada ? "Acessar Curso" : "Inscrever-se"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
