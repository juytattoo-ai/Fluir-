import QuemSomosHeader from "./QuemSomosHeader";
import OrganogramaPage from "./_organograma/page";
import HistoriaPage from "./_historia/page";
import ConselhoPage from "./_conselho/page";
import GovernancaPage from "./_governanca/page";
import ParticipantesPage from "./_participantes/page";
import MentoraPage from "./_mentora/page";

export const metadata = {
  title: "Sobre nós | FLUIR+",
  description: "Conheça a história, missão e valores da egrégora FLUIR+.",
};

export default function QuemSomosPage() {
  return (
    <div className="flex flex-col bg-background scroll-smooth">
      <QuemSomosHeader />

      <div id="organograma" className="scroll-mt-20 border-t border-border/40">
        <OrganogramaPage />
      </div>

      <div id="historia" className="scroll-mt-20 border-t border-border/40">
        <HistoriaPage />
      </div>

      <div id="conselho" className="scroll-mt-20 border-t border-border/40">
        <ConselhoPage />
      </div>

      <div id="participantes" className="scroll-mt-20 border-t border-border/40">
        <ParticipantesPage />
      </div>

      <div id="governanca" className="scroll-mt-20 border-t border-border/40">
        <GovernancaPage />
      </div>

      <div id="mentora" className="scroll-mt-20 border-t border-border/40 pb-24">
        <MentoraPage />
      </div>
    </div>
  );
}

