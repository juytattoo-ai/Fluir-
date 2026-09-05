"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function OrganogramaPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-background min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl mb-8">
          Organograma Funcional
        </h1>
        
        {/* Texto Trajetórias */}
        <div className="mx-auto max-w-4xl text-left bg-white/60 p-8 sm:p-12 rounded-3xl shadow-sm border border-[#3fe2c5]/20 backdrop-blur-sm mb-16">
          <div className="prose prose-lg mx-auto text-slate-800">
            <p className="font-semibold text-2xl mb-2 text-primary">Trajetórias do organograma do Instituto Fluir+</p>
            <p className="italic text-slate-600 mb-8 font-medium">
              Dra. Reisla Suellen da Silva, <br/>
              integrante da equipe do Instituto Fluir+.
            </p>

            <p className="mb-4">
              O atual desenho organizacional do Instituto Fluir+ resulta de um processo iniciado em 2025, no qual uma planilha detalhada cruzou mais de cem atividades com os respectivos núcleos responsáveis por sua execução. Essa análise evidenciou que quase nenhuma atividade pertence exclusivamente a um único núcleo. Cursos, lives, acolhimentos em grupos de WhatsApp e consultorias científicas aparecem simultaneamente sob as rubricas de Coordenação, Execução, Pesquisa ou Bem-Estar, dependendo da etapa do processo. Esse diagnóstico motivou a busca por um formato visual capaz de expressar interdependência sem impor uma lógica de comando. Para complementar, veja também o próximo botão, a nossa explicação sobre a GOVERNANÇA no Instituto Fluir+.
            </p>

            {/* Oculto / Expandido */}
            <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? "max-h-[5000px] opacity-100 mt-8" : "max-h-0 opacity-0"}`}>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">O organograma vertical clássico …</h3>
              <p className="mb-4">
                Ele poderia resolver a questão da autoridade, porém, distanciaria a visão da prática. Caso a governança ocupasse o topo e a execução a base, cada decisão sobre cursos ou acolhimentos dependeria de aprovações sucessivas, comprometendo a agilidade necessária para manter uma comunidade dinâmica, com lives, seminários gratuitos e grupos de WhatsApp em funcionamento contínuo. Além disso, acredita-se que um instituto dedicado a confrontar estruturas patriarcais tóxicas na academia não pode reproduzir internamente a mesma lógica de comando único que combate externamente.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">Horizontalidade sem centro?</h3>
              <p className="mb-4">
                A alternativa oposta, representada por uma rede plana sem pontos de convergência, pode parecer mais alinhada aos valores coletivos. No entanto, a matriz de 2025 indica que tal configuração tende à desorganização. Quando atividades como “diálogo com a mentora e/ou colegas expertas” aparecem simultaneamente em Execução, Pesquisa e Bem-Estar, e "acolhimento nos encontros da Comunidade" atravessa Coordenação, Execução e Bem-Estar, a ausência de um núcleo responsável pela coerência dessas sobreposições resulta em retrabalho, mensagens duplicadas e decisões paralelas, sem comunicação entre os núcleos. Horizontalidade sem coordenação não elimina o poder, mas o dispersa e o torna invisível, o que pode ser ainda mais prejudicial do que um poder explicitamente declarado.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">O que a orquestra tem a nos dizer?</h3>
              <p className="mb-4">
                A figura da orquestra, que emergiu nas conversas entre Evelyn, Márcia, Tarciana e Reisla, busca resolver essa tensão ao descrever um sistema que, por natureza, já não é nem vertical nem horizontal. Uma orquestra tem naipes (cordas, sopros e percussão), cada um com domínio técnico próprio e autonomia de execução dentro de sua função, mas nenhum naipe soa sozinho como música. O que os une não é uma ordem que desce hierarquicamente, atrasando cada movimento, e sim uma partitura compartilhada, um tempo comum e uma regência (que não toca nenhum instrumento), mas cuida para que a soma dos naipes permaneça inteligível. Nessa terceira opção, tenta-se capturar visualmente o organograma, com círculos entrelaçados, em vez de caixas e setas descendentes.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">Um centro diferente …</h3>
              <p className="mb-4">
                No desenho de Tarciana, o Conselho de Guardiãs ocupa o centro, ladeado, não sobreposto, pela Governança e assessoria de sustentabilidade e pela Curadoria e comunicações, com setas de mão dupla em todas as direções. Essa escolha gráfica corresponde à função que a planilha de 2025 atribuiu a "Círculo Coração": zelar pelos princípios, valores, visão e integridade do instituto, com decisões tomadas por consenso. Um conselho que decide por consenso é, na metáfora, mais próximo do maestro que escuta antes de marcar o tempo do que do maestro que impõe uma leitura fechada da partitura. As linhas curvas que atravessam a parte inferior do organograma, conectando os quatro núcleos, cumprem a mesma função visual e tornam explícito que Coordenação, Execução, Pesquisa e Bem-Estar não reportam apenas para cima; eles se escutam lateralmente como os naipes de uma orquestra ajustam entre si o fraseado antes de olhar para a regência.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">Os quatro naipes e sua interdependência</h3>
              <p className="mb-4">
                <strong>A Coordenação</strong>, denominada "círculo de fluxo", faz a ponte entre a visão e a prática, integrando as gestões financeira e operacional, a comunicação e a curadoria pedagógica, sempre em regime de planejamento. <br/>
                <strong>A Execução</strong>, chamada "círculo de saberes", concentra o protagonismo coletivo das pesquisadoras, abrangendo acolhimento, eventos, mentorias e publicações conjuntas. <br/>
                <strong>A Pesquisa</strong> sustenta as trocas metodológicas e a produção científica em parceria, por meio da escrita de artigos, da apresentação de trabalhos e da realização de grupos de estudo.<br/>
                <strong>O Bem-Estar</strong> assegura a integridade emocional e profissional das pesquisadoras diante de estruturas patriarcais, por meio de círculos de escuta, rodas de conversa e encaminhamento profissional quando necessário.
              </p>
              <p className="mb-4">
                Nenhum desses núcleos atua de forma isolada; atividades como "cursos, oficinas, mentorias e lives" atravessam Coordenação e Execução, enquanto “orientação e apoio em metodologia de pesquisa” envolvem simultaneamente Coordenação, Execução e Pesquisa. Esse atravessamento constante é o que a metáfora da orquestra expressa com maior precisão.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">A rotatividade …</h3>
              <p className="mb-4">
                A recomendação presente na planilha de 2025, segundo a qual cada área deve contar com uma coordenadora cujo princípio de trabalho seja a rotatividade saudável. Ou seja, suas atividades são temporárias e podem, sempre que necessário, ser assumidas por outra colega capacitada para desempenhá-las.
              </p>
              <p className="mb-4">
                Em uma orquestra, a rotação de posições impede a fixação da autoridade pessoal sobre funções coletivas, preserva a responsabilidade compartilhada e evita que o poder, mesmo restrito à coordenação de uma área, se torne propriedade permanente. Para um instituto cuja missão é desmantelar estruturas negativas de poder, esse aspecto do desenho organizacional representa a coerência entre princípios e práticas cotidianas de gestão.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">Concluindo …</h3>
              <p className="mb-4">
                O organograma funcional é uma expressão visual de uma lógica mapeada analiticamente na planilha de 2025, célula por célula, cruzamento por cruzamento. A contribuição de Tarciana foi criar uma imagem capaz de sintetizar, em um único olhar, o que a tabela expressava em mais de cem linhas: o Instituto Fluir+ não opera como uma pirâmide nem como uma rede solta, mas como uma orquestra, com naipes autônomos regidos por um conselho que decide por consenso e cuja principal função é garantir que todos atuem, com autonomia, em sintonia com a mesma partitura.
              </p>

              <h3 className="text-2xl font-bold mt-12 mb-4 text-primary">Referências para inspirar</h3>
              <p className="text-sm text-slate-600 space-y-4 flex flex-col">
                <span>BUTLER, Judith. Quem tem medo do gênero? São Paulo: Boitempo, 2024.</span>
                <span>RIBEIRO, Djamila. Quem tem medo do feminismo negro? São Paulo: Companhia das Letras, 2018.</span>
                <span>SAFFIOTI, Heleieth I. B. Gênero, patriarcado, violência. São Paulo: Expressão Popular, 2015.</span>
                <span>TIBURI, Márcia. A ideologia patriarcal. São Paulo: Rosa dos Tempos, 2020.</span>
                <span>BURIGO, Joanna. Patriarcado, gênero, feminismo. Porto Alegre: Zouk, 2024.</span>
                <span>TELES, Maria Amélia de Almeida. Feminismos, ações e histórias de mulheres. São Paulo: Expressão Popular, 2023.</span>
                <span>DINIZ, Debora; GEBARA, Ivone. Esperança feminista. Rio de Janeiro: Rosa dos Tempos, 2022.</span>
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

        {/* Iframe Canva */}
        <div className="relative w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-4 md:p-8 border border-primary/10">
          <div style={{ position: "relative", width: "100%", height: 0, paddingTop: "56.2500%", paddingBottom: 0, boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", marginTop: "1.6em", marginBottom: "0.9em", overflow: "hidden", borderRadius: "8px", willChange: "transform" }}>
            <iframe 
              loading="lazy" 
              style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }}
              src="https://www.canva.com/design/DAHSFmwZ-Eo/Or87qiy1cmEQAjMkZH5iTg/view?embed" 
              allowFullScreen
              allow="fullscreen"
            ></iframe>
          </div>
          <div className="text-center mt-2">
            <a 
              href="https://www.canva.com/design/DAHSFmwZ-Eo/Or87qiy1cmEQAjMkZH5iTg/view?utm_content=DAHSFmwZ-Eo&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              2026: Orgonograma Funcional Instituto Fluir+
            </a>
            <span className="text-sm text-muted-foreground"> de Evelyn</span>
          </div>
        </div>
      </div>
    </div>
  );
}
