import SuporteHeader from '../SuporteHeader';
import AutocuidadoPage from '../../_autocuidado/page';

export default function Qualidade() {
  return (
    <div className="flex flex-col bg-transparent">
      <SuporteHeader />
      <div id="conteudo" className="pb-12 pt-16 scroll-mt-24">
        <AutocuidadoPage />
      </div>
    </div>
  );
}