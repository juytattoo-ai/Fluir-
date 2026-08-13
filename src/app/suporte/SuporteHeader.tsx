"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";

const submenus = [
  { name: "Diagnóstico de pesquisa", id: "diagnostico" },
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
        className="flex-1 flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[60vh]"
        style={{ backgroundImage: "url('/torredemarfim.jpeg')" }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary-soft/40 to-transparent"></div>
        <div className="max-w-5xl w-full mx-auto space-y-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 drop-shadow-sm">
            Suporte à Pesquisadora
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground drop-shadow-md font-medium max-w-2xl mx-auto">
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

          <div className="pt-12 flex flex-wrap justify-center gap-3">
            {submenus.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/30 bg-background/50 hover:bg-primary/10 text-sm font-medium transition-colors"
              >
                {item.name}
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
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
