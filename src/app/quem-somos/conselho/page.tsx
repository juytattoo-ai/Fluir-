import Image from "next/image";

export default function ConselhoPage() {
  return (
    <div className="bg-background min-h-[60vh] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl mb-8">
          Conselho do Instituto Fluir+
        </h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-16">
          (página em construção)
        </p>

        {/* Participantes Section */}
        <h2 className="text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl mb-4">
          Participantes do Conselho
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-16">
          (página em construção)
        </p>
        
        {/* Mentora Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-primary/10">
          <div className="md:w-1/2 relative h-96 md:h-auto bg-primary-soft/30">
            <Image
              src="/evelyn.png"
              alt="Dra. Evelyn Verônica Hartoch"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 text-left flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
              Dra. Evelyn Verônica Hartoch
            </h2>
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-6">
              PhD. em Ciências Socioambientais
            </p>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                A Dra. Evelyn é a fundadora e mentora principal do Instituto Fluir+. Com anos de experiência acadêmica, ela dedica sua trajetória a orientar outras mulheres na ciência.
              </p>
              <p>
                Sua abordagem integra o rigor científico ao autoconhecimento e bem-estar, criando um ambiente seguro para que pesquisadoras possam desenvolver seus projetos sem abrir mão da qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
