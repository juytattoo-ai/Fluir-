import Link from "next/link";
import { ArrowRight, Target, Heart, Sparkles } from "lucide-react";
import ComentariosPage from "./comentarios/page";

const courseCards = [
  {
    id: "mestrado",
    title: "PREPARATÓRIO PARA MESTRADO",
    description: "Cursos estruturados para orientar sua jornada acadêmica de ponta a ponta.",
    href: "/cursos/mestrado"
  },
  {
    id: "mentoria",
    title: "MENTORIA EM GRUPO FEMININO",
    description: "Acompanhamento e networking para superar bloqueios na escrita e pesquisa.",
    href: "/mentorias/grupo-feminino"
  },
  {
    id: "yoga",
    title: "OFICINA AULAS DE YOGA",
    description: "Práticas de autocuidado voltadas para o alinhamento de corpo e mente.",
    href: "/suporte#cursos"
  },
  {
    id: "meditacao",
    title: "MEDITAÇÕES DAS FASES LUNARES",
    description: "Conecte-se com sua essência e renove suas energias em cada ciclo.",
    href: "/suporte#autocuidado"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section com filtro Laranja para Turquesa e imagem gota222.jpg */}
      <section 
        className="relative flex flex-col justify-center overflow-hidden pt-12 sm:pt-16 pb-28 sm:pb-40 min-h-[90vh] bg-cover bg-[80%_top] md:bg-[75%_top] bg-no-repeat"
        style={{ 
          backgroundImage: "linear-gradient(135deg, rgba(255, 140, 75, 0.15) 0%, rgba(255, 175, 120, 0.1) 30%, rgba(63, 226, 197, 0.15) 70%, rgba(63, 226, 197, 0.25) 100%), url('/gota222.jpg')" 
        }}
      >
        <div className="w-full px-4 md:px-10 lg:px-20 xl:px-28 relative z-10">
          <div className="text-left">
            
            {/* Top row: Instituto Fluir+ no topo, com espaço seguro do menu em qualquer tamanho */}
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:gap-8 gap-3 mb-6 sm:mb-8 mt-8 sm:mt-4">
              <h1 className="text-4xl font-serif font-bold tracking-tight text-slate-900 lg:text-5xl uppercase drop-shadow-sm shrink-0 mb-1 sm:mb-0">
                Instituto Fluir+
              </h1>
              <p className="text-[22px] sm:text-2xl lg:text-[30px] xl:text-[32px] min-[1711px]:text-[34px] font-medium text-slate-800 drop-shadow-sm leading-snug min-[1711px]:whitespace-nowrap">
                Espaço coletivo feminino <br className="min-[1711px]:hidden" />
                de qualidade de vida <br className="min-[1711px]:hidden" />
                na pesquisa e na ciência.
              </p>
            </div>

            <div className="max-w-4xl">
              {/* Temos um sonho... bem mais para baixo */}
              <div className="mt-12 sm:mt-20 lg:mt-24 space-y-8">
              <p 
                className="text-3xl font-serif font-extrabold sm:text-4xl uppercase leading-snug text-black"
                style={{
                  filter: "drop-shadow(0px 2px 6px rgba(255, 255, 255, 1)) drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.9))"
                }}
              >
                Temos um sonho, <br className="sm:hidden" />
                venha estar junto!
              </p>
              
              {/* Espaço generoso entre as frases e quebras exatas no desktop e mobile */}
              <p 
                className="text-xl leading-relaxed text-slate-800 font-medium max-w-3xl sm:text-3xl pt-2"
                style={{
                  filter: "drop-shadow(0px 2px 6px rgba(255, 255, 255, 1)) drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.9))"
                }}
              >
                <span className="hidden sm:inline">
                  Bem-estar na pesquisa e na ciência para<br />
                  todas as mulheres na pós-graduação.<br /><br />
                  Visualizamos as nossas pesquisas serem impulsos<br />
                  para profundas transformações na sociedade.
                </span>
                <span className="sm:hidden">
                  Bem-estar na pesquisa e na ciência<br />
                  para todas as mulheres<br />
                  na pós-graduação.<br /><br />
                  Visualizamos as nossas pesquisas serem impulsos para profundas transformações na sociedade.
                </span>
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="mt-14 sm:mt-16 flex flex-wrap items-center justify-start gap-4 sm:gap-x-6">
              <Link
                href="/quem-somos"
                className="rounded-full bg-white hover:bg-slate-50 px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm border border-slate-200 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2 hover:scale-105"
              >
                Conheça a Fluir+
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/suporte#cursos"
                className="rounded-full bg-white hover:bg-slate-50 px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm border border-slate-200 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2 hover:scale-105"
              >
                Explorar Cursos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* História Section com fundo translúcido para deixar o gradiente laranja>turquesa transparecer */}
      <section className="bg-white/60 backdrop-blur-sm py-16 sm:py-20 border-t border-[#3fe2c5]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl mb-6">
            Nossa História
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            O Instituto Fluir+ nasceu do desejo de transformar o ambiente acadêmico em um espaço de acolhimento, desenvolvimento e excelência para mulheres.
          </p>
        </div>
      </section>

      {/* Cursos - Oficinas - Seminários Section */}
      <section className="py-24 bg-white/40 backdrop-blur-sm border-t border-[#3fe2c5]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl">Cursos, Oficinas e Seminários</h2>
            <p className="mt-4 text-muted-foreground uppercase tracking-widest text-sm font-semibold">Escolha a sua experiência</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseCards.map((card) => (
              <Link key={card.id} href={card.href} className="group flex flex-col bg-white/75 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 hover:shadow-[0_8px_30px_rgb(63,226,197,0.2)] hover:-translate-y-1 hover:bg-white transition-all duration-300 p-8 text-center h-full">
                <h3 className="text-lg font-bold tracking-wide text-foreground group-hover:text-primary transition-colors">{card.title}</h3>
                <div className="h-px w-12 bg-primary/20 mx-auto mt-4 mb-5 group-hover:w-16 group-hover:bg-primary/40 transition-all duration-300"></div>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-24 text-center flex flex-col items-center gap-6">
            <h3 className="text-4xl font-serif font-bold text-foreground">Planeje a sua jornada</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Se você preferir planejar o seu próprio desenvolvimento personalizado, entre em contato conosco. 
              Podemos oferecer uma experiência inesquecível para você. Também é possível combinar e adaptar as atividades dos cursos acima.
            </p>
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
