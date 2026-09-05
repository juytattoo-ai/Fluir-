"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  User, 
  LogOut,
  Sparkles,
  BookOpen,
  Users,
  Compass,
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firebase";
import { cn } from "@/lib/utils";

type NavigationItem = {
  name: string;
  href?: string;
  dropdown?: {
    name: string;
    href: string;
    subDropdown?: {
      name: string;
      href: string;
    }[];
  }[];
};

// Links principais da Fluir+ organizados
const navigation: NavigationItem[] = [
  { name: "Início", href: "/" },
  {
    name: "Apoio à Pesquisadora",
    href: "/suporte",
    dropdown: [
      { name: "Sobre o pesquisar", href: "/suporte#sobre" },
      { name: "Cursos, Oficinas e Seminários", href: "/suporte#cursos" },
      { name: "Mentorias e Consultorias", href: "/suporte#mentorias" },
      { name: "Qualidade de vida com metodologia de pesquisa", href: "/suporte#qualidade" },
      { name: "Café com pesquisa", href: "/suporte#cafe" },
      { name: "Roda de conversa", href: "/suporte#roda-de-conversa" },
      { name: "Como contribuir", href: "/suporte#como-contribuir" },
    ]
  },
  { name: "Defesas e Publicações", href: "/defesas-publicacoes" },
  { name: "Depoimentos", href: "/comentarios" },
  {
    name: "Sobre nós",
    href: "/quem-somos",
    dropdown: [
      { name: "Organograma Funcional", href: "/quem-somos#organograma" },
      { name: "História", href: "/quem-somos#historia" },
      { name: "Conselho do Instituto", href: "/quem-somos#conselho" },
      { name: "Modelo de Governança", href: "/quem-somos#governanca" },
      { name: "Participantes do Conselho", href: "/quem-somos#participantes" },
      { name: "Apresentação da Mentora", href: "/quem-somos#mentora" },
    ]
  },
  { name: "Contato", href: "/contato" },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const { user, userProfile } = useAuth();

  const isMember = userProfile?.role === "mentorada" || userProfile?.role === "admin";
  const isAdmin = userProfile?.role === "admin";

  const allNavigation = [
    ...navigation,
  ];

  const isMembrosActive = pathname.startsWith("/login") || pathname.startsWith("/aluno") || pathname.startsWith("/admin");
  const inicioLink = allNavigation.find(item => item.name === "Início");
  const isInicioActive = pathname === "/";

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className="sticky top-0 z-50 w-full shadow-md bg-cover bg-center bg-no-repeat transition-all duration-300 min-h-[78px] lg:min-h-[88px] py-4 lg:py-5 flex items-center border-b-4 border-white"
        style={{ backgroundImage: "url('/menuflor.jpg')" }}
      >
        <nav className="w-full px-2 sm:px-4 md:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Extremo Esquerdo: Logo e Botão Início (desktop) */}
          <div className="flex items-center shrink-0 2xl:flex-1">
            <div className="relative z-10 flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center">
              <img 
                src="/Instituto - LOGO nova.jpg" 
                alt="Instituto Fluir+ Logo" 
                className="w-full h-full object-cover scale-[1.25]"
              />
            </div>

            {/* Espaço flexível para centralizar o botão Início entre a Logo e o Menu Central */}
            <div className="hidden 2xl:flex flex-1 justify-center">
              {inicioLink && (
                <Link
                  href={inicioLink.href || "/"}
                  className={cn(
                    "px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border shadow-sm shrink-0 whitespace-nowrap",
                    isInicioActive 
                      ? "bg-[#3fe2c5] text-slate-900 border-[#3fe2c5]" 
                      : "bg-white hover:bg-[#3fe2c5]/30 text-slate-800 border-white"
                  )}
                >
                  {inicioLink.name}
                </Link>
              )}
            </div>
          </div>

          {/* Centro: Menus Centrais Agrupados em Pills Brancas, com scroll horizontal no mobile */}
          <div className="hidden md:block flex-1 2xl:flex-auto mx-1 md:mx-6 overflow-hidden 2xl:overflow-visible relative min-w-0 group/slider">
            
            {/* Botão de scroll Esquerdo */}
            <button
              onClick={scrollLeft}
              className="2xl:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary transition-all ml-1"
              aria-label="Rolar para a esquerda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex items-center gap-x-2 md:gap-x-3 overflow-x-auto 2xl:overflow-x-visible no-scrollbar py-2 w-full 2xl:justify-center mobile-slider-mask"
            >
              {/* Espaçador para a máscara funcionar no início */}
              <div className="2xl:hidden shrink-0 w-12 md:w-16"></div>

            {allNavigation.map((item) => {
              const isActive = item.href ? (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))) : false;

              if (item.name === "Início") {
                return (
                  <Link
                    key={item.name}
                    href={item.href || "#"}
                    className={cn(
                      "2xl:hidden shrink-0 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 border shadow-sm whitespace-nowrap",
                      isActive
                        ? "bg-[#3fe2c5] text-slate-900 border-[#3fe2c5] font-semibold"
                        : "bg-white hover:bg-[#3fe2c5]/30 text-slate-800 border-white"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              }

              if (item.dropdown) {
                return (
                  <div 
                    key={item.name} 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href || "#"}
                      className={cn(
                        "flex shrink-0 items-center gap-1.5 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 border shadow-sm whitespace-nowrap",
                        isActive || activeDropdown === item.name
                          ? "bg-[#3fe2c5] text-slate-900 border-[#3fe2c5] font-semibold"
                          : "bg-white hover:bg-[#3fe2c5]/30 text-slate-800 border-white"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4 opacity-70" />
                    </Link>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72 z-50">
                        <div className="rounded-2xl bg-white/95 p-3 shadow-xl ring-1 ring-black/5 backdrop-blur-md border border-white/40">
                          {item.dropdown.map((subItem) => (
                            <div key={subItem.name} className="relative group/sub">
                              <Link
                                href={subItem.href}
                                className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-[#3fe2c5]/20 hover:text-slate-900 transition-colors"
                              >
                                <span>{subItem.name}</span>
                                {subItem.subDropdown && (
                                  <ChevronDown className="h-3 w-3 -rotate-90 opacity-50" />
                                )}
                              </Link>

                              {/* Nested Sub-dropdown */}
                              {subItem.subDropdown && (
                                <div className="hidden group-hover/sub:block absolute left-full top-0 pl-2 w-64">
                                  <div className="rounded-2xl bg-white/95 p-3 shadow-xl ring-1 ring-black/5 backdrop-blur-md border border-white/40">
                                    {subItem.subDropdown.map((nestedItem) => (
                                      <Link
                                        key={nestedItem.name}
                                        href={nestedItem.href}
                                        className="block rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-[#3fe2c5]/20 hover:text-slate-900 transition-colors"
                                      >
                                        {nestedItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href || "#"}
                  className={cn(
                    "shrink-0 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 border shadow-sm whitespace-nowrap",
                    isActive
                      ? "bg-[#3fe2c5] text-slate-900 border-[#3fe2c5] font-semibold"
                      : "bg-white hover:bg-[#3fe2c5]/30 text-slate-800 border-white"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            
            <Link
              href={user ? "/aluno" : "/login"}
              className={cn(
                "2xl:hidden flex shrink-0 items-center gap-1.5 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-semibold text-slate-900 transition-all duration-300 border shadow-sm whitespace-nowrap",
                isMembrosActive
                  ? "bg-[#3fe2c5] border-[#3fe2c5]"
                  : "bg-white hover:bg-[#3fe2c5]/30 border-white"
              )}
            >
              Área de Membros
            </Link>

              {/* Espaçador para a máscara funcionar no final */}
              <div className="2xl:hidden shrink-0 w-12 md:w-16"></div>
            </div>

            {/* Botão de scroll Direito */}
            <button
              onClick={scrollRight}
              className="2xl:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary transition-all mr-1"
              aria-label="Rolar para a direita"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Extremo Direito: Botão Área de Membros (desktop) */}
          <div className="hidden 2xl:flex items-center justify-center shrink-0 2xl:flex-1">
            <Link
              href={user ? "/aluno" : "/login"}
              className={cn(
                "px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-semibold text-slate-900 transition-all duration-300 border shadow-sm whitespace-nowrap",
                isMembrosActive
                  ? "bg-[#3fe2c5] border-[#3fe2c5]"
                  : "bg-white hover:bg-[#3fe2c5]/30 border-white"
              )}
            >
              Área de Membros
            </Link>
          </div>
          {/* Botão Sanduíche (Apenas Celular) */}
          <button 
            className="md:hidden p-2.5 text-slate-800 bg-white/95 backdrop-blur-sm rounded-full shadow-md ml-auto border border-slate-100 flex items-center justify-center transition-all active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Overlay do Menu Sanduíche (Apenas Celular) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-slate-100 flex flex-col p-4 gap-1 z-40 max-h-[85vh] overflow-y-auto">
            {allNavigation.map((item) => {
              const isActive = item.href ? (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))) : false;
              
              return (
                <div key={item.name} className="flex flex-col">
                  <Link
                    href={item.href || "#"}
                    className={cn(
                      "px-4 py-3 rounded-2xl text-base font-semibold transition-all",
                      isActive ? "bg-[#3fe2c5]/20 text-slate-900" : "text-slate-700 hover:bg-slate-50"
                    )}
                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {item.dropdown && (
                    <div className="pl-6 pr-2 py-1 flex flex-col gap-1 border-l-2 border-[#3fe2c5]/30 ml-6 mb-2">
                      {item.dropdown.map(subItem => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            
            <Link
              href={user ? "/aluno" : "/login"}
              className="mt-4 mx-2 px-4 py-3.5 rounded-full text-base font-bold text-center bg-[#3fe2c5] text-slate-900 shadow-md transition-all active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Área de Membros
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
