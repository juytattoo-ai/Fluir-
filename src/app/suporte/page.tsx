import SuporteHeader from "./SuporteHeader";
import DiagnosticoPage from "../_diagnostico/page";
import MissaoPage from "../_missao/page";
import CursosPage from "../_cursos/page";
import MentoriasPage from "../_mentorias/page";
import SeminarioPage from "../_seminario/page";
import AutocuidadoPage from "../_autocuidado/page";

export default function SuportePage() {
  return (
    <div className="flex flex-col bg-background">
      <SuporteHeader />
      
      <div id="diagnostico" className="scroll-mt-20 border-t border-border/40">
        <DiagnosticoPage />
      </div>
      
      <div id="missao" className="scroll-mt-20 border-t border-border/40">
        <MissaoPage />
      </div>
      
      <div id="cursos" className="scroll-mt-20 border-t border-border/40">
        <CursosPage />
      </div>
      
      <div id="mentorias" className="scroll-mt-20 border-t border-border/40">
        <MentoriasPage />
      </div>
      
      <div id="seminario" className="scroll-mt-20 border-t border-border/40">
        <SeminarioPage />
      </div>
      
      <div id="autocuidado" className="scroll-mt-20 border-t border-border/40 pb-24">
        <AutocuidadoPage />
      </div>
    </div>
  );
}

