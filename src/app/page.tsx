import Link from "next/link";
import { ArrowRight, Target, Heart, Sparkles } from "lucide-react";
import ComentariosPage from "./comentarios/page";

const apoioCards = [
  {
    id: "sobre-o-pesquisar",
    title: "SOBRE O PESQUISAR",
    description: "Diagnóstico e missão da sua pesquisa acadêmica.",
    href: "/suporte/sobre-o-pesquisar#conteudo",
    image: "/sobre-o-pesquisar.png"
  },
  {
    id: "cursos",
    title: "CURSOS, OFICINAS E SEMINÁRIOS",
    description: "Cursos estruturados para orientar sua jornada acadêmica de ponta a ponta.",
    href: "/suporte/cursos#conteudo",
    image: "/cursos,-oficinas,seminarios.png"
  },
  {
    id: "mentorias",
    title: "MENTORIAS",
    description: "Acompanhamento e networking para superar bloqueios na escrita e pesquisa.",
    href: "/suporte/mentorias#conteudo",
    image: "/m.jpg"
  },
  {
    id: "consultorias",
    title: "CONSULTORIAS",
    description: "Em breve",
    href: "/suporte/consultorias#conteudo",
    image: "/mentorias-e-consultorias.png"
  },
  {
    id: "roda-de-conversa",
    title: "RODA DE CONVERSA",
    description: "Espaço aberto para troca de experiências e vivências acadêmicas.",
    href: "/suporte/roda-de-conversa#conteudo",
    image: "/roda-de-conversa.png"
  },
  {
    id: "cafe",
    title: "CAFÉ COM PESQUISA",
    description: "Encontros online todo primeiro sábado do mês para reflexões em grupo.",
    href: "/suporte/cafe#conteudo",
    image: "/cafe-com-pesquisa.png"
  },
  {
    id: "qualidade",
    title: "QUALIDADE DE VIDA COM METODOLOGIA",
    description: "Práticas de autocuidado e bem-estar para o seu dia a dia.",
    href: "/suporte/qualidade#conteudo",
    image: "/qualidade-de-vida-com-metodologia-de-pesquisa.png"
  },
  {
    id: "como-contribuir",
    title: "COMO CONTRIBUIR",
    description: "Faça parte da nossa rede de apoio e contribua para o Instituto.",
    href: "/suporte/como-contribuir#conteudo",
    image: "/como-contribuir.png"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section com filtro Laranja para Turquesa e imagem gota222.jpg */}
      <section 
        className="relative flex flex-col justify-end overflow-hidden pt-32 sm:pt-40 pb-12 sm:pb-16 min-h-[75vh] bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: "linear-gradient(135deg, rgba(255, 140, 75, 0.15) 0%, rgba(255, 175, 120, 0.1) 30%, rgba(63, 226, 197, 0.15) 70%, rgba(63, 226, 197, 0.25) 100%), url('/gota222.jpg')",
          backgroundPosition: "80% 65%"
        }}
      >
        <div className="w-full px-4 md:px-10 lg:px-20 xl:px-28 relative z-10 mt-auto">
          <div className="text-left">
            
            {/* Top row: Instituto Fluir+ e texto embaixo */}
            <div className="flex flex-col gap-2 sm:gap-4 mb-6 sm:mb-8 mt-8 sm:mt-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-slate-900 uppercase drop-shadow-sm">
                Instituto Fluir+
              </h1>
              <p 
                className="text-2xl sm:text-[28px] lg:text-[32px] xl:text-[36px] font-semibold text-slate-800 leading-snug"
                style={{
                  filter: "drop-shadow(0px 2px 6px rgba(255, 255, 255, 1)) drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.9))"
                }}
              >
                Espaço coletivo feminino <br className="hidden sm:block lg:hidden" />
                de qualidade de vida <br className="hidden sm:block lg:hidden" />
                na pesquisa e na ciência.
              </p>
            </div>

            <div className="max-w-4xl">
              {/* Botões de Ação na Hero */}
              <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-start gap-4 sm:gap-x-6">
                <a
                  href="#temos-um-sonho"
                  className="rounded-full bg-white hover:bg-slate-50 px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm border border-slate-200 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2 hover:scale-105"
                >
                  Leia mais
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contato"
                  className="rounded-full bg-[#3fe2c5] hover:bg-[#2EBFA5] px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2 hover:scale-105"
                >
                  Contato
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Temos um sonho */}
      <section id="temos-um-sonho" className="bg-white/60 backdrop-blur-sm py-16 sm:py-24 border-t border-[#3fe2c5]/20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Video na Esquerda */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 text-center lg:text-left">
              Perfeição de processos invisíveis
            </h3>
            <div className="relative aspect-[9/16] w-full max-w-[280px] sm:max-w-xs mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                src="/lotus.mp4"
              >
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>

          {/* Textos na Direita */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <p className="text-3xl font-serif font-extrabold sm:text-4xl uppercase leading-snug text-slate-900 mb-8">
              Temos um sonho, <br className="sm:hidden lg:block" />
              venha estar junto!
            </p>
            
            <p className="text-xl leading-relaxed text-slate-800 font-medium max-w-3xl sm:text-3xl mb-12">
              Bem-estar na pesquisa e na ciência para todas as mulheres na pós-graduação.
              <br /><br />
              Visualizamos as nossas pesquisas serem impulsos para profundas transformações na sociedade.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-x-6">
              <Link
                href="/quem-somos"
                className="rounded-full bg-white hover:bg-slate-50 px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm border border-slate-200 transition-all flex items-center gap-2 hover:scale-105"
              >
                Conheça o instituto Fluir+
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* História Section com fundo translúcido para deixar o gradiente laranja>turquesa transparecer */}
      <section className="bg-white/40 backdrop-blur-sm py-16 sm:py-20 border-t border-[#3fe2c5]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl mb-6">
            Nossa História
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            O Instituto Fluir+ nasceu do desejo de transformar o ambiente acadêmico em um espaço de acolhimento, desenvolvimento e excelência para mulheres.
          </p>
        </div>
      </section>

      {/* Apoio à Pesquisadora (antigo Cursos - Oficinas) */}
      <section id="apoio-pesquisadora" className="py-24 bg-white/40 backdrop-blur-sm border-t border-[#3fe2c5]/20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apoioCards.map((card) => (
              <Link key={card.id} href={card.href} className="group flex flex-col bg-white/75 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 hover:shadow-[0_8px_30px_rgb(63,226,197,0.2)] hover:-translate-y-1 hover:bg-white transition-all duration-300 p-8 text-center h-full">
                
                {/* Top section for image, fixed height so titles align */}
                <div className="h-32 flex items-end justify-center mb-6">
                  {card.image && (
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-[0_5px_15px_-5px_rgba(63,226,197,0.4)] border-2 border-white rotate-0 group-hover:-rotate-2 transition-transform duration-300">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                {/* Bottom section for text, starts at the same vertical position across all cards */}
                <div className="flex flex-col flex-1 items-center">
                  <h3 className="text-lg font-bold tracking-wide text-foreground group-hover:text-primary transition-colors">{card.title}</h3>
                  <div className="h-px w-12 bg-primary/20 mx-auto mt-4 mb-5 group-hover:w-16 group-hover:bg-primary/40 transition-all duration-300"></div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-24 text-center flex flex-col items-center gap-6">
            <Link
              href="/contato"
              className="mt-4 inline-flex items-center justify-center bg-[#2EBFA5] hover:bg-[#23A790] px-8 py-3 text-sm font-bold tracking-wider text-white transition-all duration-300 rounded-full shadow-md hover:scale-105"
            >
              ENTRE EM CONTATO
            </Link>
          </div>
        </div>
      </section>

      {/* A nossa missão Section */}
      <section className="bg-white/60 backdrop-blur-sm py-16 sm:py-24 border-t border-[#3fe2c5]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Nossa Missão</h2>
            <p className="text-base text-muted-foreground">
              Acreditamos que o conhecimento transforma. Nossa missão é guiar, apoiar e fortalecer a jornada de estudantes, profissionais e pesquisadoras, criando um ambiente de crescimento mútuo e excelência.
            </p>
          </div>

          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 border border-[#3fe2c5]/30 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="bg-white p-3 rounded-xl mb-4 shadow-sm">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Propósito</h3>
              <p className="text-sm text-muted-foreground">Democratizar o acesso a um acompanhamento de excelência, formando profissionais preparadas para os desafios de suas carreiras.</p>
            </div>
            
            <div className="bg-white/80 border border-[#3fe2c5]/30 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="bg-white p-3 rounded-xl mb-4 shadow-sm">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Acolhimento</h3>
              <p className="text-sm text-muted-foreground">Oferecer uma rede de apoio estruturada, onde cada mentoreada encontra espaço para ser ouvida, desenvolvida e respeitada.</p>
            </div>

            <div className="bg-white/80 border border-[#3fe2c5]/30 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="bg-white p-3 rounded-xl mb-4 shadow-sm">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excelência</h3>
              <p className="text-sm text-muted-foreground">Incentivar a produção acadêmica e o rigor científico através de orientações validadas pela experiência de grandes nomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedbacks Section */}
      <section className="border-t border-[#3fe2c5]/20">
        <ComentariosPage />
      </section>
    </div>
  );
}
