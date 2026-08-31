import { Video, Leaf, Droplets, Flower2, Sparkles } from "lucide-react";

export default function SeminarioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section transparente */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <span className="rounded-full bg-white/60 px-4 py-1.5 text-sm font-medium text-slate-800 ring-1 ring-inset ring-white/50 flex items-center gap-2 backdrop-blur-sm shadow-sm">
              <Video className="h-4 w-4 text-[#2EBFA5]" />
              Seminário Online Interativo
            </span>
          </div>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-slate-900 sm:text-6xl mb-6">
            TESE QUE FLUI
          </h1>
          <p className="text-xl text-slate-800 max-w-3xl mx-auto leading-relaxed">
            Aulas online interativas para você transformar a sua jornada acadêmica.
          </p>
        </div>
      </section>

      {/* Content Section com fundo translúcido para deixar o gradiente passar */}
      <section className="py-12 relative">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/60 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-12 -right-12 opacity-5">
              <Sparkles className="w-64 h-64 text-[#2EBFA5]" />
            </div>
            
            <div className="relative z-10 space-y-8 text-center">
              <p className="text-2xl md:text-3xl font-serif text-slate-900 leading-relaxed font-medium">
                Imagine-se redescobrindo sua paixão pela pesquisa, equipada com a coragem, competência e força para avançar!
              </p>
              
              <div className="w-16 h-1 bg-[#2EBFA5]/40 mx-auto rounded-full"></div>
              
              <p className="text-xl text-slate-800 font-medium">
                Você se tornando a verdadeira força motriz por trás do sucesso de sua pesquisa.
              </p>
              
              <p className="text-2xl font-serif font-bold text-[#2EBFA5]">
                Vamos juntas fazer sua tese fluir.
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mt-8 inline-block border border-white/60 shadow-sm">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Leaf className="w-6 h-6 text-emerald-500" />
                  <Droplets className="w-6 h-6 text-[#2EBFA5]" />
                  <Flower2 className="w-6 h-6 text-pink-400" />
                </div>
                <p className="text-lg font-medium text-slate-800">
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
