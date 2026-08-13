import Image from "next/image";

export default function OrganogramaPage() {
  return (
    <div className="bg-background min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl mb-8">
          Organograma Funcional
        </h1>
        <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
          Conheça a estrutura que apoia e organiza todas as iniciativas do Instituto Fluir+.
        </p>
        
        <div className="relative w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-4 md:p-8 border border-primary/10">
          <div style={{ position: "relative", width: "100%", height: 0, paddingTop: "56.2500%", paddingBottom: 0, boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", marginTop: "1.6em", marginBottom: "0.9em", overflow: "hidden", borderRadius: "8px", willChange: "transform" }}>
            <iframe 
              loading="lazy" 
              style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }}
              src="https://www.canva.com/design/DAHSFmwZ-Eo/Or87qiy1cmEQAjMkZH5iTg/view?embed" 
              allowFullScreen
              allow="fullscreen"
            ></iframe>
          </div>
          <div className="text-center mt-2">
            <a 
              href="https://www.canva.com/design/DAHSFmwZ-Eo/Or87qiy1cmEQAjMkZH5iTg/view?utm_content=DAHSFmwZ-Eo&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              2026: Orgonograma Funcional Instituto Fluir+
            </a>
            <span className="text-sm text-muted-foreground"> de Evelyn</span>
          </div>
        </div>
      </div>
    </div>
  );
}
