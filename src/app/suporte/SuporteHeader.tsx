"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";

const submenus = [
  { name: "Diagnóstico de pesquisa", id: "diagnostico" },
  { name: "Missão da pesquisa", id: "missao" },
  { name: "Cursos e oficinas", id: "cursos" },
  { name: "Mentorias e Consultorias", id: "mentorias" },
  { name: "Seminário TESE QUE FLUI", id: "seminario" },
  { name: "Autocuidado", id: "autocuidado" },
];

export default function SuporteHeader() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section 
        className="relative flex flex-col justify-center overflow-hidden bg-background pt-24 pb-32 sm:pt-32 sm:pb-48 min-h-[85vh] bg-cover bg-[80%_top] md:bg-[75%_top] bg-no-repeat"
        style={{ backgroundImage: "url('/torre.jpg')" }}
      >
        <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-6xl mb-8 drop-shadow-sm">
              Apoio à Pesquisadora
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium drop-shadow-md">
              Apoio completo para você transformar seu conhecimento em um legado na pesquisa acadêmica e científica.
            </p>
          
            <div className="pt-8">
              <button 
                onClick={() => setShowVideo(!showVideo)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                <Play className="w-5 h-5 fill-current" />
                Torre de marfim, o que é?
              </button>
            </div>

            <div className="pt-12 flex flex-wrap justify-start gap-3">
              {submenus.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/30 bg-white/60 hover:bg-white text-sm font-medium transition-colors backdrop-blur-sm"
                >
                  {item.name}
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showVideo && (
        <section className="w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-top-8 duration-500">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              preload="metadata"
              src="/torre.mp4"
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </section>
      )}
    </>
  );
}
