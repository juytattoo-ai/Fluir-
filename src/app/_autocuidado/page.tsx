"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Moon, Heart, ChevronDown } from "lucide-react";

export default function AutocuidadoPage() {
  const [isYogaExpanded, setIsYogaExpanded] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-soft/30 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="absolute inset-0 bg-[url('/autocuidado.jpg')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-6xl mb-6">
                Autocuidado
              </h1>
              <p className="text-2xl font-serif font-medium text-foreground mb-4">
                Benefícios para o corpo, mente e espírito.
              </p>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto lg:mx-0">
                Encontros semanais de meditação e Práticas semanais de Yoga, exclusivamente para pesquisadoras.
              </p>
            </div>
            <div className="lg:w-1/2 w-full max-w-md lg:max-w-none mx-auto flex justify-center items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 bg-primary/10 inline-block p-1">
                <img
                  src="/autocuidado.jpg"
                  alt="Autocuidado - Benefícios para o corpo, mente e espírito"
                  className="w-full h-auto max-h-[60vh] object-contain rounded-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Práticas de Yoga */}
            <div className="relative group rounded-3xl border border-primary/10 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-fit">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Heart className="w-32 h-32 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary-soft rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Oficina Aulas de Yoga
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium mb-4">
                  Uma pausa para respirar, mover e voltar para si.
                </p>
                
                <div className={`text-muted-foreground leading-relaxed text-sm space-y-4 overflow-hidden transition-all duration-500 relative ${isYogaExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-24 opacity-80'}`}>
                  <p>A rotina de pesquisa exige concentração, produtividade, criatividade e muita dedicação. Entre prazos, leituras, escrita, reuniões e cobranças, o corpo e a mente muitas vezes ficam em segundo plano.</p>
                  
                  <p>A Oficina de Aulas de Yoga foi pensada especialmente para as pesquisadoras da Mentoria Fluir+, como um espaço de pausa, presença e reconexão.</p>
                  
                  <p>As práticas serão construídas de forma acessível e acolhedora, respeitando os diferentes corpos, níveis de experiência e momentos de cada participante. Não é necessário ter experiência prévia com Yoga.</p>

                  <p>Por meio de movimentos conscientes, respiração, alongamentos, exercícios de mobilidade, práticas de presença e momentos de relaxamento, a proposta é criar uma experiência que ajude as participantes a desacelerar, liberar tensões e recuperar a conexão com o próprio corpo.</p>

                  <h4 className="font-bold text-foreground pt-2">Práticas alinhadas ao Fluir+</h4>
                  <ul className="space-y-2 pl-2">
                    <li><span className="mr-2">🌿</span><strong>Desaceleração e regulação</strong></li>
                    <li><span className="mr-2">🧘</span><strong>Presença e consciência corporal</strong></li>
                    <li><span className="mr-2">🌬️</span><strong>Respiração consciente</strong></li>
                    <li><span className="mr-2">💻</span><strong>Alívio das tensões da rotina acadêmica</strong></li>
                    <li><span className="mr-2">✨</span><strong>Energia e disposição</strong></li>
                    <li><span className="mr-2">🌙</span><strong>Relaxamento e recuperação</strong></li>
                    <li><span className="mr-2">🌱</span><strong>Autocuidado possível</strong></li>
                  </ul>

                  <h4 className="font-bold text-foreground pt-2">Mais do que uma aula</h4>
                  <p>A proposta é oferecer uma experiência de Yoga que acompanhe o processo da Mentoria Fluir+: um convite para encontrar um ritmo mais sustentável, reconhecer os próprios limites e perceber que produtividade também pode coexistir com presença, cuidado e bem-estar.</p>
                  
                  <p className="font-medium italic text-primary">Cada encontro é um momento para sair um pouco da cabeça, voltar ao corpo e lembrar que fluir também é saber pausar.</p>

                  {/* Gradient mask when collapsed */}
                  {!isYogaExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
                  )}
                </div>
                
                <button 
                  onClick={() => setIsYogaExpanded(!isYogaExpanded)}
                  className="mt-4 text-primary font-semibold text-sm flex items-center gap-1 hover:text-primary/80 transition-colors"
                >
                  {isYogaExpanded ? 'Ler menos' : 'Ler mais'}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isYogaExpanded ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Professora Aiza */}
                <div className="flex items-center gap-4 bg-primary-soft/50 p-4 rounded-2xl mt-8">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-sm flex-shrink-0 bg-white">
                    <Image
                      src="/aiza.jpeg"
                      alt="Aiza Fortuna"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">Assessora de comunicação e prof. de yoga</p>
                    <p className="text-base font-bold text-foreground">Aiza Fortuna</p>
                  </div>
                </div>

                {/* Inscrição e Valores */}
                <div className="mt-8 bg-background border border-primary/20 p-5 rounded-2xl flex flex-col items-center text-center shadow-sm hover:border-primary/40 transition-colors">
                  <span className="inline-block px-3 py-1 bg-primary-soft text-primary text-xs font-bold rounded-full mb-3 border border-primary/10">
                    Práticas Online Semanais
                  </span>
                  <div className="text-3xl font-serif font-bold text-foreground mb-1">
                    R$ 80<span className="text-base font-sans font-normal text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-sm font-medium text-green-600 mb-5 bg-green-50 px-3 py-1 rounded-full">
                    Gratuito para mentoradas da Egrégora
                  </p>
                  <button className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-xl shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                    Quero me inscrever
                  </button>
                </div>
              </div>
            </div>

            {/* Meditação */}
            <div className="relative group rounded-3xl border border-primary/10 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Moon className="w-32 h-32 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary-soft rounded-2xl flex items-center justify-center mb-6">
                  <Moon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Meditações das Fases Lunares
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Encontros guiados para alinhar suas intenções e promover paz interior, respeitando os ciclos naturais.
                </p>
                
                {/* Mentora */}
                <div className="flex items-center gap-4 bg-primary-soft/50 p-4 rounded-2xl">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-sm flex-shrink-0">
                    <Image
                      src="/evelyn.png"
                      alt="Dra. Evelyn Verônica Hartoch"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Mentora</p>
                    <p className="text-base font-bold text-foreground">Dra. Evelyn Verônica Hartoch</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
