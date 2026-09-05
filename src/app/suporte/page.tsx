import SuporteHeader from "./SuporteHeader";
import DiagnosticoPage from "../_diagnostico/page";
import MissaoPage from "../_missao/page";
import CursosPage from "../_cursos/page";
import MentoriasPage from "../_mentorias/page";
import AutocuidadoPage from "../_autocuidado/page";
import Image from "next/image";

export default function SuportePage() {
  return (
    <div className="flex flex-col bg-transparent">
      <SuporteHeader />
      
      {/* 1. NOVA SESSÃO: Sobre o pesquisar */}
      <div id="sobre" className="scroll-mt-32 border-t border-[#3fe2c5]/20 py-16 px-6 lg:px-8 bg-white/40">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl mb-10">Sobre o Pesquisar</h2>
          <div className="relative w-full max-w-[500px] aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(63,226,197,0.4)] border-4 border-white rotate-[-2deg] hover:rotate-0 transition-transform duration-300 mx-auto mb-8">
            <Image 
              src="/sobre-o-pesquisar.png" 
              alt="Sobre o pesquisar" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2. Diagnostico (Imagem removida) */}
      <div id="diagnostico" className="scroll-mt-32 border-t border-[#3fe2c5]/20 bg-white/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <DiagnosticoPage />
        </div>
      </div>
      
      {/* 3. Missao */}
      <div id="missao" className="scroll-mt-32 border-t border-[#3fe2c5]/20">
        <MissaoPage />
      </div>
      
      {/* 4. Cursos, oficinas e Seminários */}
      <div id="cursos" className="scroll-mt-32 border-t border-[#3fe2c5]/20 pt-16">
        <CursosPage />
      </div>
      
      {/* 5. Mentorias e Consultorias */}
      <div id="mentorias" className="scroll-mt-32 border-t border-[#3fe2c5]/20 py-16 bg-gradient-to-b from-transparent to-white/40">
        <MentoriasPage />
      </div>
      
      {/* 6. Roda de Conversa (Só a imagem e o título) */}
      <div id="roda-de-conversa" className="scroll-mt-32 border-t border-[#3fe2c5]/20 relative py-16 bg-white/50">
        <div className="mx-auto max-w-5xl text-center px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl mb-8">Roda de Conversa</h2>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-[4/3] md:aspect-[3/2] rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(63,226,197,0.4)] border-4 border-white rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <Image src="/roda-de-conversa.png" alt="Roda de Conversa" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* 7. Café com Pesquisa */}
      <div id="cafe" className="scroll-mt-32 border-t border-[#3fe2c5]/20 py-24 sm:py-32 bg-white/60 backdrop-blur-sm px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(63,226,197,0.4)] border-4 border-white rotate-[2deg] hover:rotate-0 transition-transform duration-300">
              <Image src="/cafe-com-pesquisa.png" alt="Café com Pesquisa" fill className="object-cover" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl mb-6">Café com Pesquisa</h2>
            <p className="text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0">
              Todo primeiro sábado de cada mês temos um encontro online ao vivo aberto para pesquisadoras interessadas em ouvir e refletir junto os temas de diversas áreas de conhecimento a serem apresentados.
            </p>
          </div>
        </div>
      </div>
      
      {/* 8. Qualidade de vida com metodologia de pesquisa */}
      <div id="qualidade" className="scroll-mt-32 border-t border-[#3fe2c5]/20 pb-12 pt-16">
        <AutocuidadoPage />
      </div>

      {/* 9. Como Contribuir */}
      <div id="como-contribuir" className="scroll-mt-32 border-t border-[#3fe2c5]/20 py-16 px-6 lg:px-8 bg-white/40">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl mb-8">Como Contribuir</h2>
          <div className="relative w-full max-w-[500px] aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(63,226,197,0.4)] border-4 border-white rotate-[-2deg] hover:rotate-0 transition-transform duration-300 mx-auto mb-8">
            <Image src="/como-contribuir.png" alt="Como Contribuir" fill className="object-cover" />
          </div>
          <p className="text-lg text-slate-800 leading-relaxed">
            O Instituto Fluir+ é um espaço coletivo construído por e para mulheres na ciência.
            Sua contribuição, seja através da participação ativa, apoio financeiro ou divulgação das nossas ações, 
            é fundamental para mantermos nossa missão de promover qualidade de vida na pesquisa.
            <br/><br/>
            Entre em contato conosco para saber mais sobre as formas de apoiar o instituto!
          </p>
        </div>
      </div>
    </div>
  );
}
