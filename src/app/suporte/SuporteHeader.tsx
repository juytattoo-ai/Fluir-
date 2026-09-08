"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";

const submenus = [
  { name: "Diagnóstico", id: "sobre-o-pesquisar#diagnostico" },
  { name: "Missão", id: "sobre-o-pesquisar#missao" },
  { name: "Cursos, oficinas e Seminários", id: "cursos#conteudo" },
  { name: "Mentorias", id: "mentorias#conteudo" },
  { name: "Consultorias", id: "consultorias#conteudo" },
  { name: "Roda de conversa", id: "roda-de-conversa#conteudo" },
  { name: "Café com pesquisa", id: "cafe#conteudo" },
  { name: "Qualidade de vida com metodologia", id: "qualidade#conteudo" },
  { name: "Como contribuir", id: "como-contribuir#conteudo" },
];

export default function SuporteHeader() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section 
        className="relative flex flex-col justify-center overflow-hidden pt-12 sm:pt-16 pb-28 sm:pb-40 min-h-[90vh]"
      >
        {/* Imagem de Fundo da Torre via <img> com object-position deslocado bem para a direita no mobile (92%) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/torre.jpg"
            alt="Apoio à Pesquisadora"
            className="w-full h-full object-cover object-[65%_top] sm:object-[60%_top] md:object-[55%_top]"
            style={{ filter: "brightness(1.10)" }}
          />
        </div>

        {/* Filtro Laranja (superior esquerdo) para Turquesa (inferior direito) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(255, 140, 75, 0.45) 0%, rgba(255, 175, 120, 0.25) 30%, rgba(63, 226, 197, 0.35) 70%, rgba(45, 205, 185, 0.6) 100%)"
          }}
        />

        <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-10 flex flex-col justify-between h-full max-w-[1600px] mx-auto">
          <div className="w-full text-left">
            
            {/* Top row: Apoio à Pesquisadora em preto */}
            <div className="flex flex-col gap-5 mt-4 sm:mt-0 mb-4 sm:mb-0 max-w-4xl">
              <h1 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-5xl uppercase drop-shadow-sm mb-1 sm:mb-0">
                Apoio à Pesquisadora
              </h1>
              <p className="text-xl sm:text-[22px] font-medium text-slate-800 drop-shadow-sm leading-snug">
                Apoio completo para você transformar<br />
                o seu conhecimento em um legado<br />
                na pesquisa acadêmica e científica.
              </p>
            </div>

            {/* Bloco inferior com botão Torre de Marfim Turquesa e Submenus */}
            <div className="mt-28 sm:mt-36 lg:mt-40 w-full">
              <div className="flex flex-col-reverse xl:flex-row justify-between items-start xl:items-end w-full gap-8">
                
                <div className="pt-2 flex flex-wrap justify-start gap-3 flex-1 max-w-4xl">
                  {submenus.map((item) => (
                    <Link 
                      key={item.id} 
                      href={`/suporte/${item.id}`}
                      className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full border border-white/50 bg-white/50 hover:bg-[#3fe2c5]/40 text-slate-800 text-sm font-medium transition-colors backdrop-blur-sm shadow-sm"
                    >
                      {item.name}
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                  ))}
                </div>

                <div className="shrink-0 xl:ml-auto">
                  <button 
                    onClick={() => setShowVideo(!showVideo)}
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#2EBFA5] hover:bg-[#23A790] text-white font-bold text-lg shadow-xl transition-all hover:scale-105"
                  >
                    <Play className="w-6 h-6 fill-current" />
                    &quot;Torre de marfim&quot;, o que é?
                  </button>
                </div>

              </div>
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
