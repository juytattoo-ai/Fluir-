import Link from "next/link";
import { ArrowLeft, Calendar, Leaf, Users, Star } from "lucide-react";

export default function SeminarioTeseQueFlui() {
  return (
    <div className="bg-background min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-16">
        
        <Link href="/cursos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Voltar para Cursos
        </Link>

        {/* Header Hero */}
        <div className="glass-card overflow-hidden border-2 border-primary/20 bg-primary-soft/5 p-8 md:p-12 space-y-6">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 bg-primary/5 self-start">
            <Calendar className="h-4 w-4 mr-2" />
            Previsão para início de 2027
          </div>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground leading-tight">
            Seminário <span className="text-primary">Tese Que Flui</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            O seminário online gratuito Tese Que Flui, é mais do que uma oportunidade de aprendizado; é um convite para transformar seu mestrado, doutorado ou projeto pós-doc num fluxo contínuo de progresso e satisfação.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Assim sendo, o seminário Tese Que Flui na prática acaba sendo uma pré mentoria da Mentoria Acadêmica Fluir+, com três encontros online ao vivo, sequenciais. <strong>Vamos juntas fazer sua tese fluir!</strong>
          </p>
        </div>

        {/* Encontros */}
        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-bold text-center text-foreground">Os Três Encontros</h2>
          
          <div className="grid gap-6">
            <div className="glass-card p-8 flex flex-col md:flex-row gap-6 items-start hover:border-primary/50 transition-colors">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 shrink-0">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">Primeiro encontro</h3>
                <p className="text-primary font-medium italic">Pergunta chave: "O que eu desejo para a minha jornada acadêmica?"</p>
                <p className="text-muted-foreground leading-relaxed">
                  O percurso científico e os ciclos da natureza / sobre a importância de estarmos atentas e como nos manter conectadas.
                </p>
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col md:flex-row gap-6 items-start hover:border-primary/50 transition-colors">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 shrink-0">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">Segundo encontro</h3>
                <p className="text-primary font-medium italic">Pergunta chave: "Que carreira ou atividade profissional desejo seguir / qual o melhor caminho para atingir esta meta?"</p>
                <p className="text-muted-foreground leading-relaxed">
                  Os nossos processos biológicos e ciclos biográficos / sobre a importância de lhes dar espaço, ativando os talentos, as habilidades adquiridas e a nossa energia vital.
                </p>
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col md:flex-row gap-6 items-start hover:border-primary/50 transition-colors">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 shrink-0">
                <Star className="h-7 w-7 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">Terceiro encontro, masterclass</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Alinhamento e ferramentas para você seguir com a sua pesquisa pelo caminho da liberdade. Colocando pra fluir e dando a volta por cima das adversidades.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
