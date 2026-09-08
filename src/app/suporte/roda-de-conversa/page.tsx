import SuporteHeader from '../SuporteHeader';
import Image from 'next/image';

export default function RodaDeConversa() {
  return (
    <div className="flex flex-col bg-transparent">
      <SuporteHeader />
      <div id="conteudo" className="py-16 bg-white/50 scroll-mt-24">
        <div className="mx-auto max-w-5xl text-center px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl mb-8">Roda de Conversa</h2>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[225px] aspect-[4/3] md:aspect-[3/2] rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(63,226,197,0.4)] border-4 border-white rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <Image src="/roda-de-conversa.png" alt="Roda de Conversa" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}