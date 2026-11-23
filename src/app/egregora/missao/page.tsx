import { Target } from "lucide-react";

export const metadata = {
  title: "Missão da Pesquisa | FLUIR+",
};

export default function MissaoPage() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Cabeçalho */}
        <div>
          <h1 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
            <Target className="w-8 h-8 text-primary" />
            Missão da Pesquisa
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Reflexões sobre a missão social e o impacto das nossas investigações.
          </p>
        </div>



        {/* Textos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Texto 1 */}
          <div className="glass-card p-8 rounded-2xl flex flex-col h-full border border-primary/10 hover:border-primary/30 transition-colors">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
              O que entendemos por "Missão Social de uma pesquisa"?
            </h2>
            <p className="text-sm font-semibold text-primary mb-6">
              Dra. Evelyn Verônica Hartoch, mentora de grupos femininos da Mentoria Acadêmica Fluir+, "Tese Que Flui".
            </p>
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm flex-grow">
              <p>
                Todas as colegas pesquisadoras que participaram de algum dos 19 grupos femininos da minha mentoria acadêmica, durante a sessão de diagnóstico realizada com elas, sobre a sua pesquisa, me responderam a uma pergunta instigante:
              </p>
              <blockquote className="border-l-4 border-primary/40 pl-4 italic font-medium text-slate-800 bg-primary/5 py-3 pr-4 rounded-r">
                "O que você gostaria que acontecesse com os resultados da sua pesquisa, após se formar?"
              </blockquote>
              <p>
                Recebi muitas respostas bem precisas, concretas. Também recebi respostas ainda bastante vagas, porém NÃO RECEBI NENHUMA RESPOSTA no sentido de estar tudo bem a dissertação ou a tese parar esquecida ou estacionada numa prateleira virtual, após a formatura.
              </p>
              <p>
                Mas existem dúvidas pertinentes em relação ao como materializar a devolutiva para a sociedade. Assim sendo, o conselho do Instituto Fluir+ entende ser esta questão um dos importantes desafios a serem encarados coletivamente.
              </p>
              <p>
                Neste sentido, vejam também o texto de Dra. Reisla Suellen da Silva e as nossas reflexões durante um encontro virtual com Profa. mda. Lara Cristina Freitas, doutoranda. Ambas são integrantes da equipe do Instituto Fluir+.
              </p>
            </div>
          </div>

          {/* Texto 2 */}
          <div className="glass-card p-8 rounded-2xl flex flex-col h-full border border-primary/10 hover:border-primary/30 transition-colors">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
              Tornar minha pesquisa ainda mais relevante socialmente.
            </h2>
            <p className="text-sm font-semibold text-primary mb-6">
              Dra. Reisla Suellen da Silva, integrante da equipe do Instituto Fluir+.
            </p>
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm flex-grow">
              <p>
                Quando ingressamos na pesquisa no Brasil, geralmente somos selecionadas por orientadores que possuem interesses de investigação específicos. Isso faz parte da dinâmica acadêmica e é compreensível. Contudo, muitas vezes nossas pesquisas acabam seguindo caminhos diferentes daqueles que inicialmente imaginávamos para nós. Falo particularmente da minha experiência. Hoje, minha principal angústia é tornar minha pesquisa ainda mais relevante socialmente, pois essa é a missão que orienta minha trajetória acadêmica.
              </p>
              <p>
                Somente agora, à medida que me torno uma pesquisadora mais autônoma, começo a "engatinhar" na direção de construir uma agenda de pesquisa mais alinhada aos meus próprios propósitos e compromissos sociais. Mas ainda não consegui!!! Ainda assim, percebo o quanto esse movimento é desafiador. Acredito que esse não seja um dilema individual, mas coletivo, pois está relacionado à estrutura do sistema científico que temos hoje, às linhas de pesquisa consolidadas, às relações de orientação e, também, à forma como refletimos sobre nossas próprias escolhas e possibilidades de atuação.
              </p>
              <p>
                Nesse sentido, o desafio de produzir conhecimento socialmente relevante exige não apenas esforço individual, mas também transformações institucionais e uma reflexão constante sobre o papel social da pesquisa, das pesquisadoras e das escolhas que fazemos ao longo da nossa trajetória acadêmica. Mas o detalhe é: às vezes temos apenas uma escolha naquele momento.
              </p>
            </div>
          </div>

        </div>

        {/* Vídeo */}
        <div className="glass-card overflow-hidden rounded-2xl w-full max-w-4xl mx-auto shadow-sm mt-8">
          <video 
            src="/missao.mp4" 
            controls 
            className="w-full h-auto aspect-video object-cover"
          >
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
