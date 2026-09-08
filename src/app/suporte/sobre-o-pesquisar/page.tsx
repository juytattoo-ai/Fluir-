import SuporteHeader from '../SuporteHeader';
import DiagnosticoPage from '../../_diagnostico/page';
import MissaoPage from '../../_missao/page';
import Image from 'next/image';

export default function SobreOPesquisar() {
  return (
    <div className="flex flex-col bg-transparent">
      <SuporteHeader />
      <div className="py-16 px-6 lg:px-8 bg-white/40">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl mb-10">Sobre o Pesquisar</h2>
          <div className="relative w-full max-w-[250px] aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(63,226,197,0.4)] border-4 border-white rotate-[-2deg] hover:rotate-0 transition-transform duration-300 mx-auto mb-8">
            <Image src="/sobre-o-pesquisar.png" alt="Sobre o pesquisar" fill className="object-cover" />
          </div>
        </div>
      </div>
      <div id="diagnostico" className="bg-white/60 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <DiagnosticoPage />
        </div>
      </div>
      <div id="missao" className="scroll-mt-24">
        <MissaoPage />
      </div>
    </div>
  );
}