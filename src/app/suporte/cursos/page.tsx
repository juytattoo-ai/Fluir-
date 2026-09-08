import SuporteHeader from '../SuporteHeader';
import CursosPage from '../../_cursos/page';

export default function Cursos() {
  return (
    <div className="flex flex-col bg-transparent">
      <SuporteHeader />
      <div id="conteudo" className="pt-16 scroll-mt-24">
        <CursosPage />
      </div>
    </div>
  );
}