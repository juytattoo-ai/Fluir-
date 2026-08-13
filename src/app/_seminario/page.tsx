import { Video, Leaf, Droplets, Flower2, Sparkles } from "lucide-react";

export default function SeminarioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-soft/30 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="absolute inset-0 bg-[url('/gota.jpeg')] bg-cover bg-center opacity-5 mix-blend-multiply"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 flex items-center gap-2">
              <Video className="h-4 w-4" />
              Seminário Online Interativo
            </span>
          </div>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-6xl mb-6">
            TESE QUE FLUI
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Aulas online interativas para você transformar a sua jornada acadêmica.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="bg-primary-soft/30 rounded-3xl p-8 md:p-16 border border-primary/10 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-12 -right-12 opacity-5">
              <Sparkles className="w-64 h-64 text-primary" />
            </div>
            
            <div className="relative z-10 space-y-8 text-center">
              <p className="text-2xl md:text-3xl font-serif text-foreground/90 leading-relaxed font-medium">
                Imagine-se redescobrindo sua paixão pela pesquisa, equipada com a coragem, competência e força para avançar!
              </p>
              
              <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full"></div>
              
              <p className="text-xl text-foreground/80">
                Você se tornando a verdadeira força motriz por trás do sucesso de sua pesquisa.
              </p>
              
              <p className="text-2xl font-serif font-bold text-primary">
                Vamos juntas fazer sua tese fluir.
              </p>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mt-8 inline-block border border-primary/10">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Leaf className="w-6 h-6 text-green-500" />
                  <Droplets className="w-6 h-6 text-blue-400" />
                  <Flower2 className="w-6 h-6 text-pink-400" />
                </div>
                <p className="text-lg font-medium text-foreground/90">
                  Estamos muito animadas em ver você avançando sem sofrências :)
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
