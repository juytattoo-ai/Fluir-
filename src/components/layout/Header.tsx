"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

type NavItem = {
  name: string;
  href?: string;
  dropdown?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
  { name: "Início", href: "/" },
  { 
    name: "Apoio à Pesquisadora", 
    href: "/suporte",
    dropdown: [
      { name: "Sobre a pesquisa", href: "/suporte#diagnostico" },
      { name: "Cursos, Oficinas e Seminários", href: "/suporte#cursos" },
      { name: "Mentorias e Consultorias", href: "/suporte#mentorias" },
      { name: "Autocuidado", href: "/suporte#autocuidado" },
    ]
  },
  { 
    name: "Defesas e Publicações", 
    href: "/defesas-publicacoes",
    dropdown: [
      { name: "Defesas", href: "/defesas-publicacoes#defesas" },
      { name: "Publicações", href: "/defesas-publicacoes#publicacoes" },
      { name: "Lattes", href: "/defesas-publicacoes#lattes" },
    ]
  },
  { 
    name: "Sobre nós", 
    href: "/quem-somos",
    dropdown: [
      { name: "Organograma Funcional", href: "/quem-somos#organograma" },
      { name: "História", href: "/quem-somos#historia" },
      { name: "Conselho do Instituto", href: "/quem-somos#conselho" },
      { name: "Modelo de Governança", href: "/quem-somos#governanca" },
      { name: "Apresentação da Mentora", href: "/quem-somos#mentora" },
    ]
  },
  { name: "Feedbacks", href: "/comentarios" },
  { name: "Contato", href: "/contato" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, userProfile } = useAuth();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-x-0 border-t-0 rounded-none bg-[#165EA0] shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 gap-x-6" aria-label="Global">
          <div className="flex lg:flex-1 justify-center">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group relative">
              <div className="bg-white rounded-full p-1 border border-gray-200 shadow-sm relative z-10 flex items-center justify-center -my-7 h-[6rem] w-[6rem]">
                <img src="/Instituto - LOGO nova.jpg" alt="Logo Fluir+" className="h-full w-auto object-contain rounded-full" />
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-x-2">
            {navigation.map((item) => {
              const isActive = item.href ? pathname === item.href : false;
              return (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    item.href ? (
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-1 text-sm font-medium leading-6 whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300",
                          isActive
                            ? "bg-white/20 text-white"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        )}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </Link>
                    ) : (
                      <button
                        className={cn(
                          "flex items-center gap-1 text-sm font-medium leading-6 whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300",
                          isActive
                            ? "bg-white/20 text-white"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        )}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    )
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={cn(
                        "text-sm font-medium leading-6 whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300",
                        isActive
                          ? "bg-white/20 text-white"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.dropdown && (
                    <div className="absolute left-0 top-full mt-2 w-64 rounded-xl bg-background border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-6 ml-auto">
            {user ? (
              <Link
                href={userProfile?.role === "admin" ? "/admin" : userProfile?.role === "mentorada" ? "/egregora" : "/aluno"}
                className="flex items-center gap-3 rounded-full bg-white/10 pl-3 pr-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Perfil" className="h-8 w-8 rounded-full border border-white/20 object-cover" />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#165EA0] font-bold">
                    {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                  </div>
                )}
                <span>Membros</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="rounded-full bg-white/20 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/30 border border-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                Área de Membros
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-[100]" : "hidden")}>
        {/* Overlay para fechar ao clicar fora */}
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        
        <div className="fixed inset-y-0 right-0 z-[101] w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-foreground/10 shadow-2xl h-[100dvh]">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img src="/Instituto - LOGO nova.jpg" alt="Logo Fluir+" className="h-8 w-auto rounded-full" />
              <span className="font-serif font-bold text-2xl text-primary tracking-tight">FLUIR+</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root pb-24">
            <div className="-my-6 divide-y divide-foreground/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  const isActive = item.href ? pathname === item.href : false;
                  return (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <>
                          <Link
                            href={item.href || "#"}
                            className={cn(
                              "flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-primary/5 transition-colors",
                              isActive ? "text-primary bg-primary/5" : "text-foreground"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                            <ChevronDown className="h-5 w-5 flex-none" aria-hidden="true" />
                          </Link>
                          <div className="pl-4 space-y-1">
                            {item.dropdown.map(subItem => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-primary-soft hover:text-primary transition-all duration-300"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          className={cn(
                            "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 transition-all duration-300",
                            isActive
                              ? "bg-primary/20 text-primary"
                              : "text-foreground hover:bg-primary-soft hover:text-primary"
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
              <div className="py-6 flex flex-col gap-4">
                <Link
                  href="/login"
                  className="rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Área de Membros
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
