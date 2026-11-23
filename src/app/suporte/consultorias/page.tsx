import Link from 'next/link';
import SuporteHeader from '../SuporteHeader';

export default function Consultorias() {
  return (
    <div className="flex flex-col bg-transparent">
      <SuporteHeader />
      <div id="conteudo" className="py-24 px-4 scroll-mt-24 max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-serif font-bold text-slate-800 mb-10 text-center">Consultorias</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link href="#saiba-mais" className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 transform hover:-translate-y-0.5">
            Saiba mais
          </Link>
          <Link href="/contato" className="rounded-full bg-white px-8 py-3 text-sm font-bold text-primary shadow-sm ring-1 ring-inset ring-primary/20 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5">
            Entre em contato
          </Link>
        </div>

        <div id="saiba-mais" className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 mb-12 scroll-mt-24">
          <div className="text-slate-600 text-lg leading-relaxed">
            <p className="mb-6">
              Pesquisadoras das mais diversas áreas de conhecimento, que poderão te apoiar na sua jornada, participam da equipe do Instituto Fluir+ .
            </p>
            <p className="mb-4">
              Se você estiver interessada em saber mais sobre consultoria individual para a sua pesquisa, entre em contato conosco, já de inicio nos passando alguns dados:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 font-medium text-slate-700">
              <li>Área de conhecimento</li>
              <li>Mestrado, doutorado, pós-doc, ou outros</li>
              <li>Quais os principais desafios que precisa vencer?</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/contato" className="rounded-full bg-[#2EBFA5] px-10 py-4 text-base font-bold text-white shadow-sm hover:bg-[#2EBFA5]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2EBFA5] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105">
            Entre em contato
          </Link>
        </div>
      </div>
    </div>
  );
}