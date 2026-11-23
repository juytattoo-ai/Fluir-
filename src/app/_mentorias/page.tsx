"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Users, Sparkles, Leaf, Droplets, Flower2, Quote } from "lucide-react";
import Image from "next/image";
import { getPaymentLinks } from "@/services/paymentService";

export default function MentoriasPage() {
  const [mentoriaUrl, setMentoriaUrl] = useState<string>("#");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getPaymentLinks();
      setMentoriaUrl(data.mentoriaUrl);
      setLoading(false);
    }
    load();
  }, []);

  const mentorias = [
    {
      id: "grupo",
      title: "Mentoria em grupo feminino",
      description: "Apoio colaborativo em pequenos grupos de mulheres pesquisadoras. Compartilhe experiências, tire dúvidas e construa networking em um ambiente acolhedor.",
      icon: Users,
      link: mentoriaUrl
    }
  ];

  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl">Mentorias e Consultorias</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Escolha o formato que melhor se adapta ao seu momento acadêmico.
          </p>
        </div>
        
        <div className="flex justify-center mt-10 mb-8 px-4">
          <div className="relative w-full max-w-[350px] aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(63,226,197,0.4)] border-4 border-white rotate-[2deg] hover:rotate-0 transition-transform duration-300">
             <Image src="/m.jpg" alt="Mentorias e Consultorias" fill className="object-cover" />
          </div>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 lg:items-start">
          {mentorias.map((item) => (
            <div key={item.id} className="flex flex-col glass-card p-10 group hover:border-primary/50 transition-colors">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary transition-colors mb-6">
                <item.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground flex-1">
                {item.description}
              </p>
              <div className="mt-8 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 w-full">
                <div className="flex flex-wrap items-center gap-3 w-full">
                  <Link 
                    href={`/mentorias/${item.id}-feminino`} 
                    className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors items-center justify-center text-center"
                  >
                    Saiba mais
                  </Link>
                  <a 
                    href="/contato" 
                    className="inline-flex rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary/20 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Entre em contato
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Card de Depoimento */}
          <div className="flex flex-col glass-card p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Quote className="w-32 h-32 text-primary" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4 w-max border border-primary/20">Depoimento</span>
              <h4 className="text-[15px] font-bold text-slate-800 mb-6 leading-snug">
                Encantador feedback de uma das participantes do último grupo feminino de mentoria, ou seja, do grupo do segundo semestre de 2026.
              </h4>
              <div className="text-[15px] text-slate-700 leading-relaxed space-y-4 italic font-medium">
                <p>
                  "Uma mentoria<br />
                  Dois ciclos<br />
                  Três horas, por manhã<br />
                  Quatro luas, 4 reinos<br />
                  Seis mulheres<br />
                  Oito encontros e<br />
                  Um infinito de possibilidades para fluir na vida com leveza, inteireza e presença.
                </p>
                <p>
                  Assim sinto, vejo e eternizo numa imagem afetiva, em meu coração, esta experiência tão especial.
                </p>
                <p>
                  Gratidão a cada uma e a todas vocês, companheiras de jornada, pela oportunidade de unir nossos infinitos particulares nesta egrégora poderosa e abundante que encerra uma forma hoje para desabrochar na primavera das amizades profundas e belas, oferecida pela vida quando estamos prontas para cultivá-las..."
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-primary/10 flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-slate-900">Namastê</p>
                  <p className="font-bold text-primary">Carla Vanessa</p>
                </div>
                <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">03.10.26</span>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo de Tese que flui (migrado) */}
        <div className="mx-auto max-w-4xl mt-20">
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/60 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="absolute -top-12 -right-12 opacity-5">
              <Sparkles className="w-64 h-64 text-[#2EBFA5]" />
            </div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2EBFA5] mb-6">
                Tese que Flui
              </h2>
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
                  Estamos muito animadas em ver você avançando com qualidade de vida em sua jornada acadêmica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
