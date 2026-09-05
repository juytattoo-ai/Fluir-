"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function GovernancaPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-background min-h-[60vh] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-left">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl mb-12 text-center">
          Modelo de Governança
        </h1>
        
        <div className="prose prose-lg mx-auto text-slate-800">
          <p className="font-semibold text-2xl mb-2 text-primary">Relato do percurso da Governança do Instituto Fluir+</p>
          <p className="italic text-slate-600 mb-8 font-medium">
            Yna Barbosa Honda, <br/>
            mestra em Governança e Sustentabilidade <br/>
            e doutoranda em Tecnologia e Sociedade, <br/>
            integrante da equipe do Instituto Fluir+.
          </p>

          <p className="mb-4">
            Propõe-se o presente como um relato sobre como os atores se organizam na prática; quais responsabilidades são identificadas no mapeamento de atividades; e como decisões horizontais precisam de estruturas deliberadas para não se dissolverem por falta de estrutura.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">1. O Por Quê: A Razão de Existir</h3>
          <p className="mb-4">
            Desde 2020, 19 grupos de mentoria alcançaram 225 pesquisadoras que destravaram suas pesquisas. Esse dado constitui uma evidência de que mulheres pesquisadoras podem fazer ciência de forma sustentável, quando encontram amparo coletivo. O Instituto Fluir+ formaliza e expande o amparo que veio se consolidando ao longo dos anos na mentoria.
          </p>
          <p className="mb-4">
            Em julho de 2026 guardiãs do Conselho do Instituto Fluir + participaram de oficina para trazer à tona percepções e fundamentos além dos aparentes, para sedimentar o percurso da governança anteriormente iniciado. A Oficina iniciou-se por uma pergunta fundamental: por que o Instituto Fluir+ existe? O objetivo era trazer conceitos abstratos ao plano mais concreto.
          </p>
          <p className="mb-4">
            A razão fundamental que as Guardiãs nomearam na oficina repousa em duas convicções entrelaçadas: (1) mulheres não precisam sofrer para fazer pesquisa científica; (2) a força de uma comunidade de mulheres pesquisadoras transforma não apenas vidas individuais, mas estruturas acadêmicas e sociais.
          </p>
          <p className="mb-4">
            Em linguagem de Freire, trata-se de uma "pedagogia da autonomia" (FREIRE, 1996), na qual o coletivo não oferece respostas prontas, mas constrói, junto, a capacidade de cada uma encontrar sua voz na vida, no trabalho, na academia e na sociedade.
          </p>

          {/* Oculto / Expandido */}
          <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? "max-h-[5000px] opacity-100 mt-8" : "max-h-0 opacity-0"}`}>
            <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">O Como: Conselho de Guardiãs: Curadoras de Princípios</h3>
            <p className="mb-4">
              Na oficina, identificou-se o Conselho de Guardiãs como o centro responsável por zelar pelos princípios, valores, visão e integridade do instituto.<br/>
              Por ora, as decisões tem sido tomadas por consenso. Esta forma de tomada de decisão diferencia-se da votação (que produz ganhadores e perdedores) e da autocracia (que concentra poder). Consenso exige escuta do que cada Guardiã traz, dos valores que cada uma integra, dos conflitos que emergem.
            </p>
            <p className="mb-4">
              Como afirma Ostrom (1990) em sua análise de sistemas de governança policêntrica, a durabilidade de instituições coletivas depende da capacidade de resolver conflitos e tomar decisões que mantêm a confiança entre os participantes. O consenso, neste contexto, não significa unanimidade forçada, mas deliberação até que se encontre uma posição que respeita as preocupações de todas e tem sido uma estratégia possível para o atual nível de maturidade de governança do Instituto.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">O Quê: Missão, Objetivos e Conteúdos</h3>
            <p className="mb-4">
              A oficina consolidou a Missão que já circulava na prática:<br/>
              <em className="text-primary font-medium">"Promover acolhimento, crescimento pessoal e transformação de vidas por meio do autoconhecimento, do fortalecimento das relações e da vivência de valores que inspiram o bem comum."</em>
            </p>
            <p className="mb-2">E os Objetivos desdobraram-se em:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Promover evolução e acolhimento;</li>
              <li>Estimular crescimento pessoal e profissional;</li>
              <li>Favorecer autoconhecimento;</li>
              <li>Fortalecer relações;</li>
              <li>Promover reflexão sobre estruturas patriarcais na academia e na sociedade;</li>
              <li>Fortalecer o senso de pertencimento coletivo feminino de pesquisadoras.</li>
            </ol>
            <p className="mb-4">
              Esses objetivos não estão descolados da realidade. Cada um desdobra-se em atividades específicas sob responsabilidade de um ou mais núcleos — mentorias, cursos, lives, círculos de escuta, publicações conjuntas.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">Os próximos passos: Aprendizados em Curso</h3>
            <p className="mb-4">
              A oficina de julho de 2026 propôs-se a dar continuidade ao percurso já iniciado de construção da governança do Instituto Fluir +.  Ela nomeou claramente alguns desafios que permanecem abertos para deliberação, e, que esperamos construir com os próximos passos:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Comunicação entre núcleos:</strong> como garantir que Coordenação, Execução, Pesquisa e Bem-Estar realmente se conversam? Como evitar que cada uma trabalhe em silos?</li>
              <li><strong>Ritmo de rotatividade:</strong> a cada quanto tempo uma coordenadora passa a função adiante? Como criar transição que não perca conhecimento?</li>
              <li><strong>Escala:</strong> conforme a comunidade cresce (de 225 para 300, 500, 1000 pesquisadoras), como manter o acolhimento e a qualidade que o Fluir+ oferece?</li>
              <li><strong>Sustentabilidade financeira e operacional:</strong> como os núcleos se financiam? Quem garante que infraestrutura de comunicação, plataformas, armazenamento existam?</li>
            </ul>
            <p className="mb-4">
              Esses desafios não invalidam a estrutura. Validam que governança é viva, sempre em ajuste, em diálogo constante com os ciclos da vida.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">Conclusão</h3>
            <p className="mb-4">
              A governança do Instituto Fluir+ não é um modelo a ser copiado integralmente. É um experimento situado: nasce da necessidade concreta de mulheres pesquisadoras que decidem estar juntas de forma diferente.
            </p>
            <p className="mb-4">
              Ela oferece, porém, uma resposta prática à pergunta que persegue movimentos libertários: como estruturar liberdade sem deixá-la vaga ou ineficiente? Como descentralizar poder sem permitir que ele desapareça e ressurja invisível?
            </p>
            <p className="mb-4">
              A resposta do Fluir+ tem apontado para o caminho de nomear atores e responsabilidades com clareza, manter comunicação lateral e fluida entre núcleos, praticando rotatividade como política, e retornando sempre à partitura compartilhada, a Missão, os Objetivos, os Princípios.
            </p>
            <p className="mb-4">
              Como afirmou Evelyn durante a oficina: o site é ferramenta para unir primeiro a comunidade interna. A visibilidade externa vem depois. A governança reflete esse entendimento: consolida-se internamente para depois expandir com estrutura e integridade.
            </p>

            <h3 className="text-2xl font-bold mt-12 mb-4 text-primary">Referências</h3>
            <p className="text-sm text-slate-600 space-y-4">
              <span>FREIRE, P. Pedagogia da autonomia: saberes necessários à prática educativa. São Paulo: Paz e Terra, 1996.</span><br/>
              <span>OSTROM, E. Governing the commons: the evolution of institutions for collective action. Cambridge: Cambridge University Press, 1990.</span>
            </p>
          </div>
          
          <div className="flex justify-center mt-10">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#3fe2c5] text-slate-900 font-bold hover:bg-[#32c9ae] hover:scale-105 transition-all shadow-md"
            >
              {isExpanded ? (
                <>Ler Menos <ChevronUp size={20} /></>
              ) : (
                <>Ler Mais <ChevronDown size={20} /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
