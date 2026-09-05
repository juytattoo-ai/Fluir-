import SuporteHeader from "./SuporteHeader";
import DiagnosticoPage from "../_diagnostico/page";
import MissaoPage from "../_missao/page";
import CursosPage from "../_cursos/page";
import MentoriasPage from "../_mentorias/page";
import SeminarioPage from "../_seminario/page";
import AutocuidadoPage from "../_autocuidado/page";
import Image from "next/image";

export default function SuportePage() {
  return (
    <div className="flex flex-col bg-transparent">
      <SuporteHeader />
      
      {/* 1. NOVA SESSÃO: Sobre o pesquisar (Estilo Banner Largo) */}
      <div id="sobre" className="scroll-mt-20 border-t border-[#3fe2c5]/20 py-16 px-6 lg:px-8 bg-white/40">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl mb-10">Sobre o Pesquisar</h2>
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-8 group">
            <Image 
              src="/sobre-o-pesquisar.png" 
              alt="Sobre o pesquisar" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* 2. Diagnostico + Qualidade de vida (Estilo Lado a Lado Esquerda) */}
      <div id="diagnostico" className="scroll-mt-20 border-t border-[#3fe2c5]/20 bg-white/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-full max-w-[350px] aspect-square rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(63,226,197,0.4)] border-4 border-white rotate-[-2deg] hover:rotate-0 transition-transform">
              <Image src="/qualidade-de-vida-com-metodologia-de-pesquisa.png" alt="Qualidade de Vida" fill className="object-cover" />
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <DiagnosticoPage />
          </div>
        </div>
      </div>
      
      {/* 3. Missao (Sem imagem extra, já possui a dela ou podemos manter limpo) */}
      <div id="missao" className="scroll-mt-20 border-t border-[#3fe2c5]/20">
        <MissaoPage />
      </div>
      
      {/* 4. Cursos (Estilo Topo Centralizado Flutuante) */}
      <div id="cursos" className="scroll-mt-20 border-t border-[#3fe2c5]/20 pt-16">
        <div className="flex justify-center mb-8 px-4">
          <div className="relative w-[90%] sm:w-[600px] h-[200px] rounded-[40px] overflow-hidden shadow-lg border border-primary/20">
             <Image src="/cursos,-oficinas,seminarios.png" alt="Cursos e Oficinas" fill className="object-cover object-center" />
          </div>
        </div>
        <CursosPage />
      </div>
      
      {/* 5. Mentorias (Estilo Lado a Lado Direita em Glass Card) */}
      <div id="mentorias" className="scroll-mt-20 border-t border-[#3fe2c5]/20 py-16 bg-gradient-to-b from-transparent to-white/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass-card p-6 md:p-10 flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="w-full lg:w-3/5">
              <MentoriasPage />
            </div>
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative w-[280px] h-[380px] rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <Image src="/mentorias-e-consultorias.png" alt="Mentorias" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 6. Seminario (Estilo Roda de Conversa como Badge flutuante) */}
      <div id="seminario" className="scroll-mt-20 border-t border-[#3fe2c5]/20 relative">
        <div className="absolute top-10 right-10 lg:right-32 w-32 h-32 md:w-48 md:h-48 opacity-80 mix-blend-multiply hidden sm:block pointer-events-none hover:opacity-100 transition-opacity">
          <Image src="/roda-de-conversa.png" alt="Roda de Conversa" fill className="object-contain" />
        </div>
        <SeminarioPage />
      </div>

      {/* 7. Café com Pesquisa (Estilo Ícone ao lado do Título) */}
      <div id="cafe" className="scroll-mt-20 border-t border-[#3fe2c5]/20 py-24 sm:py-32 bg-white/60 backdrop-blur-sm px-6 lg:px-8">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
          <div className="relative w-40 h-40 mb-6 drop-shadow-xl hover:-translate-y-2 transition-transform">
            <Image src="/cafe-com-pesquisa.png" alt="Café com Pesquisa" fill className="object-contain" />
          </div>
          <h2 className="text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl mb-6">Café com Pesquisa</h2>
          <p className="text-lg text-foreground/80 max-w-3xl">
            Todo primeiro sábado de cada mês temos um encontro online ao vivo aberto para pesquisadoras interessadas em ouvir e refletir junto os temas de diversas áreas de conhecimento a serem apresentados.
          </p>
        </div>
      </div>
      
      {/* 8. Autocuidado (Estilo Separador de Seção no final) */}
      <div id="autocuidado" className="scroll-mt-20 border-t border-[#3fe2c5]/20 pb-12">
        <AutocuidadoPage />
        <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-12">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-3xl overflow-hidden shadow-inner opacity-90 hover:opacity-100 transition-opacity">
            <Image src="/autocuidado.jpg" alt="Autocuidado" fill className="object-cover object-bottom" />
          </div>
        </div>
      </div>
    </div>
  );
}
