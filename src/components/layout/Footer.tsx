import Link from "next/link";
import { MessageCircle, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <Leaf className="h-10 w-10 text-primary" strokeWidth={1.5} />
            </div>
            <p className="text-sm leading-6 text-foreground/80">
              Pesquisa, desenvolvimento acadêmico e comunidade para mulheres que desejam transformar conhecimento em impacto.
            </p>
            <div className="flex gap-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Redes Sociais</span>
                <span className="text-xs font-semibold">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Redes Sociais</span>
                <span className="text-xs font-semibold">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs font-semibold">WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-primary tracking-wider uppercase">Plataforma</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/cursos" className="text-sm leading-6 text-foreground/80 hover:text-primary transition-colors">
                  Cursos e Oficinas
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-primary tracking-wider uppercase">Serviços</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/mentorias" className="text-sm leading-6 text-foreground/80 hover:text-primary transition-colors">
                  Mentorias
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
            <h3 className="text-sm font-semibold leading-6 text-primary tracking-wider uppercase">Contato</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/contato" className="text-sm leading-6 text-foreground/80 hover:text-primary transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <a href="mailto:contato@fluirmais.com.br" className="text-sm leading-6 text-foreground/80 hover:text-primary transition-colors">
                  contato@fluirmais.com.br
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
