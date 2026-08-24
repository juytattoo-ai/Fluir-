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
    href: "/mentorias"
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
      {/* Hero Section */}
      <section 
        className="relative flex flex-col justify-center overflow-hidden bg-background pt-24 pb-32 sm:pt-32 sm:pb-48 min-h-[85vh] bg-cover bg-[80%_top] md:bg-[75%_top] bg-no-repeat"
        style={{ backgroundImage: "url('/gota222.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary-soft/40 to-transparent"></div>
        <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-3xl text-left">
            <div className="mb-8 flex justify-start">
              <span className="rounded-full bg-primary-soft/80 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 backdrop-blur-sm">
                Lançamento da Área de membros!
              </span>
            </div>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-6xl text-balance drop-shadow-sm uppercase">
              Instituto Fluir+
            </h1>
            <p className="mt-8 text-2xl font-serif font-medium text-foreground drop-shadow-md sm:text-3xl max-w-3xl text-balance uppercase">
              Temos um sonho, venha estar junto!
            </p>
            <p className="mt-6 text-lg leading-8 text-foreground font-medium drop-shadow-md max-w-2xl sm:text-xl">
              Bem-estar na pesquisa e na ciência. para todas as mulheres na pós-graduação. Visualizamos as nossas pesquisas serem impulsos para profundas transformações na sociedade. ....
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <Link
                href="/quem-somos"
                className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2"
              >
                Conheça a Fluir+
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/suporte#cursos" className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                Explorar Cursos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* História Section */}
      <section className="bg-white py-16 sm:py-20">
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
      <section className="py-24 bg-[#fcf9f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl">Cursos, Oficinas e Seminários</h2>
            <p className="mt-4 text-lg text-muted-foreground uppercase tracking-widest text-sm font-semibold">Escolha a sua experiência</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseCards.map((card) => (
              <Link key={card.id} href={card.href} className="group flex flex-col bg-white/60 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:bg-white transition-all duration-300 p-8 text-center h-full">
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
              className="mt-4 inline-flex items-center justify-center bg-[#369c6f] px-8 py-3 text-sm font-bold tracking-wider text-white hover:bg-[#2d835d] transition-all duration-300 rounded shadow-md"
            >
              ENTRE EM CONTATO
            </Link>
          </div>
        </div>
      </section>

      {/* A nossa missão Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Nossa Missão</h2>
            <p className="text-base text-muted-foreground">
              Acreditamos que o conhecimento transforma. Nossa missão é guiar, apoiar e fortalecer a jornada de estudantes, profissionais e pesquisadoras, criando um ambiente de crescimento mútuo e excelência.
            </p>
          </div>

          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-soft/10 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="bg-white p-3 rounded-xl mb-4 shadow-sm">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Propósito</h3>
              <p className="text-sm text-muted-foreground">Democratizar o acesso a um acompanhamento de excelência, formando profissionais preparadas para os desafios de suas carreiras.</p>
            </div>
            
            <div className="bg-primary-soft/10 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="bg-white p-3 rounded-xl mb-4 shadow-sm">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Acolhimento</h3>
              <p className="text-sm text-muted-foreground">Oferecer uma rede de apoio estruturada, onde cada mentoreada encontra espaço para ser ouvida, desenvolvida e respeitada.</p>
            </div>

            <div className="bg-primary-soft/10 rounded-2xl p-6 flex flex-col items-center text-center">
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
      <section className="bg-white">
        <ComentariosPage />
      </section>
    </div>
  );
}
