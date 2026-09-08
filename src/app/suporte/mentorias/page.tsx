import SuporteHeader from '../SuporteHeader';
import MentoriasPage from '../../_mentorias/page';

export default function Mentorias() {
  return (
    <div className="flex flex-col bg-transparent">
      <SuporteHeader />
      <div id="conteudo" className="py-16 bg-gradient-to-b from-transparent to-white/40 scroll-mt-24">
        <MentoriasPage />
      </div>
    </div>
  );
}