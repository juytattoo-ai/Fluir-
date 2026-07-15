import { Leaf, Target, Heart, Sparkles } from "lucide-react";

export default function MissaoPage() {
  return (
    <main className="min-h-screen py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-6">Nossa Missão</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Acreditamos que o conhecimento transforma. Nossa missão é guiar, apoiar e fortalecer a jornada de estudantes, profissionais e pesquisadoras, criando um ambiente de crescimento mútuo e excelência.
        </p>
      </div>

      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8 flex flex-col items-center text-center">
          <div className="bg-primary/20 p-4 rounded-full mb-6">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Propósito</h3>
          <p className="text-muted-foreground">Democratizar o acesso a um acompanhamento de excelência, formando profissionais seguras e preparadas para os desafios de suas carreiras.</p>
        </div>
        
        <div className="glass-card p-8 flex flex-col items-center text-center">
          <div className="bg-primary/20 p-4 rounded-full mb-6">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Acolhimento</h3>
          <p className="text-muted-foreground">Oferecer uma rede de apoio estruturada, onde cada mentoreada encontra espaço para ser ouvida, desenvolvida e respeitada.</p>
        </div>

        <div className="glass-card p-8 flex flex-col items-center text-center">
          <div className="bg-primary/20 p-4 rounded-full mb-6">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Excelência</h3>
          <p className="text-muted-foreground">Incentivar a produção acadêmica e o rigor científico através de métodos práticos e orientações validadas pela experiência de grandes nomes.</p>
        </div>
      </div>
    </main>
  );
}
