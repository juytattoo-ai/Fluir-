import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <img src="/Instituto - LOGO nova.jpg" alt="Logo Fluir+" className="h-8 w-auto rounded-full" />
              <span className="font-serif font-bold text-2xl text-primary tracking-tight">FLUIR+</span>
            </div>
            <div className="flex flex-col gap-y-4">
              <a href="https://www.instagram.com/tese.que.flui?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="text-xs font-semibold">Instagram</span>
              </a>
              <a href="https://wa.me/5571988172711" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs font-semibold">WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-primary tracking-wider uppercase">Plataforma</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/quem-somos" className="text-sm leading-6 text-primary hover:text-primary/80 transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/defesas-publicacoes" className="text-sm leading-6 text-foreground/80 hover:text-primary transition-colors">
                  Defesas e Publicações
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-primary tracking-wider uppercase">Apoio à Pesquisadora</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/mentorias" className="text-sm leading-6 text-foreground/80 hover:text-primary transition-colors">
                  Mentorias
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-sm leading-6 text-foreground/80 hover:text-primary transition-colors">
                  Cursos e Oficinas
                </Link>
              </li>
              <li>
                <Link href="/egregora" className="text-sm leading-6 text-foreground/80 hover:text-primary transition-colors flex items-center gap-2">
                  Comunidade Fluir+ <span className="inline-flex items-center rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent border border-accent/20">Restrito</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-primary tracking-wider uppercase">Fale Conosco</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="https://wa.me/5571988172711" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-foreground/80 hover:text-primary transition-colors">
                  WhatsApp: (71) 98817-2711
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-primary/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} FLUIR+. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
