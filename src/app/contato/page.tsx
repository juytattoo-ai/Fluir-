import { Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contato | FLUIR+",
};

export default function ContatoPage() {
  return (
    <div className="bg-background min-h-[60vh] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl">Fale Conosco</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Entre em contato conosco para tirar dúvidas sobre cursos, mentorias ou parcerias.
        </p>

        <div className="mt-16 mx-auto max-w-3xl grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="glass-card p-10 flex flex-col items-center">
            <div className="bg-primary/20 p-4 rounded-full mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">E-mail</h3>
            <p className="text-muted-foreground">contato@fluirmais.com.br</p>
          </div>

          <div className="glass-card p-10 flex flex-col items-center justify-center">
            <div className="bg-primary/20 p-4 rounded-full mb-6">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp da Evelyn</h3>
            <a 
              href="https://wa.me/5571988172711" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-green-700 transition-colors"
            >
              Chamar no WhatsApp
            </a>
            <p className="mt-3 text-muted-foreground text-sm">(71) 98817-2711</p>
          </div>
        </div>
      </div>
    </div>
  );
}
