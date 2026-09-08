import SuporteHeader from '../SuporteHeader';
import Image from 'next/image';

export default function ComoContribuir() {
  return (
    <div className="flex flex-col bg-transparent">
      <SuporteHeader />
      <div id="conteudo" className="py-16 px-6 lg:px-8 bg-white/40 scroll-mt-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl mb-8">Como Contribuir</h2>
          <div className="relative w-full max-w-[250px] aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(63,226,197,0.4)] border-4 border-white rotate-[-2deg] hover:rotate-0 transition-transform duration-300 mx-auto mb-8">
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