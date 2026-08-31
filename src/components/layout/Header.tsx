"use client";

import { useState } from "react";
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
  GraduationCap
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firebase";
import { cn } from "@/lib/utils";

// Links principais da Fluir+ organizados
const navigation = [
  { name: "Início", href: "/" },
  {
    name: "Apoio à Pesquisadora",
    href: "/suporte",
    dropdown: [
      { name: "Diagnóstico de pesquisa", href: "/suporte#diagnostico" },
      { name: "Missão da pesquisa", href: "/suporte#missao" },
      { 
        name: "Cursos e oficinas", 
        href: "/suporte#cursos",
        subDropdown: [
          { name: "Preparatório para Mestrado", href: "/cursos/mestrado" },
          { name: "Oficina Aulas de Yoga", href: "/suporte#cursos" },
        ]
      },
      { 
        name: "Mentorias e Consultorias", 
        href: "/suporte#mentorias",
        subDropdown: [
          { name: "Mentoria em Grupo Feminino", href: "/mentorias/grupo-feminino" },
        ]
      },
      { name: "Seminário TESE QUE FLUI", href: "/suporte#seminario" },
      { 
        name: "Autocuidado", 
        href: "/suporte#autocuidado",
        subDropdown: [
          { name: "Meditações das fases lunares", href: "/suporte#autocuidado" },
        ]
      },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<Record<string, boolean>>({});
  const [expandedMobileSubMenus, setExpandedMobileSubMenus] = useState<Record<string, boolean>>({});

  const pathname = usePathname();
  const { user, userProfile } = useAuth();

  const isMember = userProfile?.role === "mentorada" || userProfile?.role === "admin";
  const isAdmin = userProfile?.role === "admin";

  const allNavigation = [
    ...navigation,
    { name: "Área de Membros", href: user ? "/aluno" : "/login" },
  ];

  const allMobileNavigation = [
    ...navigation,
    { name: "Área de Membros", href: user ? "/aluno" : "/login" },
  ];

  const toggleMobileMenu = (name: string) => {
    setExpandedMobileMenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const toggleMobileSubMenu = (name: string) => {
    setExpandedMobileSubMenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const inicioLink = allNavigation.find(item => item.name === "Início");
  const middleLinks = allNavigation.filter(item => item.name !== "Início");
  const isInicioActive = pathname === "/";
  const isMembrosActive = pathname.startsWith("/login") || pathname.startsWith("/aluno") || pathname.startsWith("/admin");

  return (
    <>
      <header 
        className="sticky top-0 z-50 w-full shadow-md bg-cover bg-center bg-no-repeat transition-all duration-300 min-h-[110px] lg:min-h-[120px] py-8 lg:py-9 flex items-center"
        style={{ backgroundImage: "url('/menuflor.jpg')" }}
      >
        <nav className="w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
          
          {/* Extremo Esquerdo: Botão Início (estilo pill branca com 50% transparência) */}
          <div className="flex items-center">
            {inicioLink && (
              <Link
                href={inicioLink.href || "/"}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border shadow-sm",
                  isInicioActive 
                    ? "bg-[#3fe2c5] text-slate-900 border-[#3fe2c5]" 
                    : "bg-white hover:bg-[#3fe2c5]/30 text-slate-800 border-white"
                )}
              >
                {inicioLink.name}
              </Link>
            )}
          </div>

          {/* Botão Mobile Hamburger */}
          <div className="flex 2xl:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-900 bg-white border border-white shadow-sm"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Centro: Menus Centrais Agrupados em Pills Brancas 50% */}
          <div className="hidden 2xl:flex items-center justify-center gap-x-3">
            {middleLinks.map((item) => {
              const isActive = item.href ? (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))) : false;

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
                        "flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border shadow-sm",
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
                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border shadow-sm",
                    isActive
                      ? "bg-[#3fe2c5] text-slate-900 border-[#3fe2c5] font-semibold"
                      : "bg-white hover:bg-[#3fe2c5]/30 text-slate-800 border-white"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Extremo Direito (removido) */}
        </nav>
      </header>

      {/* Menu Mobile Retrátil, Luminous & Clear */}
      <div className={cn("2xl:hidden", mobileMenuOpen ? "fixed inset-0 z-[100]" : "hidden")}>
        <div className="fixed inset-0 bg-black/25 backdrop-blur-xs" onClick={() => setMobileMenuOpen(false)} />
        
        <div className="fixed inset-y-0 right-0 z-[101] w-full overflow-y-auto bg-white/95 backdrop-blur-xl border-l border-white/60 px-6 py-6 sm:max-w-sm shadow-2xl h-[100dvh]">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <span className="font-serif font-bold text-2xl text-[#2EBFA5] tracking-tight">FLUIR+</span>
            <button
              type="button"
              className="-m-2.5 rounded-full p-2 text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="mt-6 flow-root pb-24">
            <div className="-my-6 divide-y divide-slate-100">
              <div className="space-y-2 py-6">
                {allMobileNavigation.map((item) => {
                  const isActive = item.href ? (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))) : false;
                  const isMenuExpanded = !!expandedMobileMenus[item.name];

                  return (
                    <div key={item.name} className="overflow-hidden">
                      {item.dropdown ? (
                        <>
                          <button
                            type="button"
                            onClick={() => toggleMobileMenu(item.name)}
                            className={cn(
                              "flex w-full items-center justify-between rounded-xl py-3 px-4 text-base font-semibold leading-7 transition-all duration-200 text-left",
                              isActive || isMenuExpanded 
                                ? "text-slate-900 bg-[#3fe2c5]/25 font-semibold" 
                                : "text-slate-800 hover:bg-[#3fe2c5]/15"
                            )}
                          >
                            <span>{item.name}</span>
                            <ChevronDown 
                              className={cn(
                                "h-5 w-5 flex-none text-slate-600 transition-transform duration-300",
                                isMenuExpanded ? "rotate-180 text-[#2EBFA5]" : ""
                              )} 
                              aria-hidden="true" 
                            />
                          </button>

                          {/* Submenu Retrátil */}
                          {isMenuExpanded && (
                            <div className="pl-3 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-xl mt-1.5 border border-slate-200/60 animate-in fade-in slide-in-from-top-2 duration-200">
                              {/* Link para página raiz do menu */}
                              {item.href && (
                                <Link
                                  href={item.href}
                                  className="block rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#2EBFA5] hover:bg-[#3fe2c5]/20 transition-all duration-200 mb-1 border-b border-slate-200/50"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  Ver página principal →
                                </Link>
                              )}

                              {item.dropdown.map(subItem => {
                                const isSubExpanded = !!expandedMobileSubMenus[subItem.name];

                                if (subItem.subDropdown) {
                                  return (
                                    <div key={subItem.name} className="overflow-hidden">
                                      <button
                                        type="button"
                                        onClick={() => toggleMobileSubMenu(subItem.name)}
                                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-[#3fe2c5]/20 hover:text-slate-900 font-medium transition-all duration-200 text-left"
                                      >
                                        <span>{subItem.name}</span>
                                        <ChevronDown 
                                          className={cn(
                                            "h-4 w-4 flex-none text-slate-500 transition-transform duration-300",
                                            isSubExpanded ? "rotate-180 text-[#2EBFA5]" : ""
                                          )} 
                                        />
                                      </button>

                                      {isSubExpanded && (
                                        <div className="pl-3 space-y-1 mt-1 border-l-2 border-[#2EBFA5]/40 ml-3 mb-2 animate-in fade-in slide-in-from-top-1 duration-150">
                                          {subItem.subDropdown.map((nestedItem) => (
                                            <Link
                                              key={nestedItem.name}
                                              href={nestedItem.href}
                                              className="block rounded-lg px-3 py-1.5 text-xs text-slate-600 hover:bg-[#3fe2c5]/20 hover:text-slate-900 font-medium transition-all duration-200"
                                              onClick={() => setMobileMenuOpen(false)}
                                            >
                                              {nestedItem.name}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  );
                                }

                                return (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href || "#"}
                                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-[#3fe2c5]/20 hover:text-slate-900 font-medium transition-all duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          className={cn(
                            "block rounded-xl px-4 py-3 text-base font-medium leading-7 transition-all duration-200",
                            isActive
                              ? "bg-[#3fe2c5]/30 text-slate-900 font-semibold"
                              : "text-slate-800 hover:bg-[#3fe2c5]/15"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
