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

          <div className="glass-card p-10 flex flex-col items-center">
            <div className="bg-primary/20 p-4 rounded-full mb-6">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground">(11) 99999-9999</p>
          </div>
        </div>
      </div>
    </div>
  );
}
