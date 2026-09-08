import SuporteHeader from '../SuporteHeader';
import Image from 'next/image';

export default function Cafe() {
  return (
    <div className="flex flex-col bg-transparent">
      <SuporteHeader />
      <div id="conteudo" className="py-24 sm:py-32 bg-white/60 backdrop-blur-sm px-6 lg:px-8 scroll-mt-24">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[200px] aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(63,226,197,0.4)] border-4 border-white rotate-[2deg] hover:rotate-0 transition-transform duration-300">
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
    </div>
  );
}