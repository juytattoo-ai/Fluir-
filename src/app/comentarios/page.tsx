"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

// Mock data for the carousel
const carouselComments = [
  {
    id: 1,
    title: "Lugar mágico e sossegado",
    text: "A experiência com a Fluir+ foi linda, única e inigualável. Nos sentimos em casa, o ambiente é mágico e sossegado. Foi uma experiência muito enriquecedora compartilhar com todos e aprender nas relações estabelecidas. Sem dúvida, uma experiência que recomendo de coração.",
    author: "Daniela, Lilah e Maya",
    date: "Outubro 2023",
  },
  {
    id: 2,
    title: "Transformação verdadeira",
    text: "Participar das mentorias mudou completamente a minha visão sobre a pesquisa. Consegui organizar minhas ideias, encontrar meu próprio ritmo e, mais importante, voltei a ter prazer em escrever. Agradeço imensamente por todo o suporte acolhedor.",
    author: "Ana Carolina",
    date: "Janeiro 2024",
  },
  {
    id: 3,
    title: "Apoio incondicional",
    text: "Nunca pensei que um grupo de apoio pudesse ser tão fundamental para a conclusão da minha tese. Encontrei não apenas orientação técnica de excelência, mas um ombro amigo para os momentos de incerteza. Recomendo a todas as pesquisadoras.",
    author: "Mariana Silva",
    date: "Março 2024",
  },
];

// Mock data for the grid below
const gridComments = [
  {
    id: 1,
    title: "Retiro de duas semanas",
    text: "Apenas gratidão por esse tempo investido. Esse espaço é um pequeno paraíso onde você pode estar em contato com sua própria essência e focar naquilo que realmente importa. Senti o amor e o cuidado em cada detalhe.",
  },
  {
    id: 2,
    title: "Um retiro na natureza bom para a alma",
    text: "Este é um espaço lindo e acolhedor. Aproveitei muito a minha estadia e amei a companhia de todas as pessoas envolvidas, que têm personalidades únicas e nos fazem sentir especiais e capazes de alcançar nossos objetivos.",
  },
  {
    id: 3,
    title: "Entrando em contato com a essência",
    text: "Vim para focar no meu projeto e acabei me reconectando comigo mesma. Tive dias maravilhosos de muita produtividade, mas também de reflexão e paz interior. A metodologia aplicada faz toda a diferença.",
  },
];

export default function ComentariosPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselComments.length);
    }, 6000); // changes every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col pt-10">
      
      {/* Carousel Section */}
      <section className="py-16 md:py-24 px-4 max-w-5xl mx-auto w-full flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="relative w-full">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselComments.map((comment) => (
                <div key={comment.id} className="w-full flex-shrink-0 px-4 md:px-12">
                  <div className="max-w-3xl mx-auto flex flex-col items-center">
                    <Quote className="h-10 w-10 text-primary/40 mb-6" />
                    <h2 className="text-2xl md:text-3xl font-serif italic text-foreground mb-6">
                      &quot;{comment.title}&quot;
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                      {comment.text}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      – {comment.author}, {comment.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-12">
            {carouselComments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  currentSlide === index ? "bg-primary w-6" : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Ir para comentário ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Turquoise Banner Section */}
      <section className="w-full bg-[#2EBFA5] py-14 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white font-medium">
            Quer fazer parte também?
          </h2>
          <Link
            href="/contato"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-[#2EBFA5] shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
          >
            ENTRE EM CONTATO
          </Link>
        </div>
      </section>

      {/* Grid Comments Section */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {gridComments.map((comment) => (
            <div key={comment.id} className="flex flex-col text-center items-center">
              <h3 className="text-xl md:text-2xl font-serif italic text-foreground mb-4">
                &quot;{comment.title}&quot;
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
