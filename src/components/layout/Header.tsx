"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Mentoria", href: "/mentorias" },
  { name: "Cursos e Oficinas", href: "/cursos" },
  { name: "Defesas e Publicações", href: "/defesas-publicacoes" },
  { name: "Quem somos", href: "/quem-somos" },
  { name: "Contato", href: "/contato" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, userProfile } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-x-0 border-t-0 rounded-none bg-background/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 gap-x-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <img src="/aaa.png" alt="Logo Fluir+" className="h-8 w-auto" />
            <span className="font-serif font-bold text-2xl text-primary tracking-tight">FLUIR+</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium leading-6 whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300",
                  isActive
                    ? "bg-primary/20 text-primary"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-6 ml-auto">
          {user ? (
            <Link
              href={userProfile?.role === "admin" ? "/admin" : userProfile?.role === "mentorada" ? "/egregora" : "/aluno"}
              className="flex items-center gap-3 rounded-full bg-primary/10 pl-3 pr-4 py-1.5 text-sm font-semibold text-primary shadow-sm hover:bg-primary/20 transition-all duration-300"
            >
              {user.photoURL ? (
                <img src={user.photoURL} alt="Perfil" className="h-8 w-8 rounded-full border border-primary/20 object-cover" />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                </div>
              )}
              <span>Minha Conta</span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Comunidade Fluir+
            </Link>
          )}
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-foreground/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img src="/aaa.png" alt="Logo Fluir+" className="h-8 w-auto" />
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
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-foreground/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
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
                  );
                })}
              </div>
              <div className="py-6 flex flex-col gap-4">
                <Link
                  href="/login"
                  className="rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Comunidade Fluir+
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
