import SuporteHeader from '../SuporteHeader';

export default function Consultorias() {
  return (
    <div className="flex flex-col bg-transparent">
      <SuporteHeader />
      <div id="conteudo" className="py-24 text-center scroll-mt-24">
        <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">Consultorias</h2>
        <p className="text-xl text-slate-600 font-medium bg-white/60 inline-block px-8 py-4 rounded-full shadow-sm border border-slate-200">Em breve</p>
      </div>
    </div>
  );
}