import { Wrench } from "lucide-react";

export const metadata = {
  title: "Cursos, Oficinas e Palestras | FLUIR+",
};

export default function CursosPage() {
  return (
    <div className="bg-background min-h-[80vh] flex flex-col items-center justify-center py-24 sm:py-32 px-6 lg:px-8">
      <div className="glass-card p-12 text-center max-w-2xl mx-auto flex flex-col items-center">
        <div className="bg-primary/20 p-6 rounded-full mb-8 animate-pulse">
          <Wrench className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl mb-6">
          Página em Construção
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">
          Estamos preparando conteúdos incríveis de excelência para impulsionar a sua carreira acadêmica e científica.
          Fique de olho, em breve teremos novidades!
        </p>
      </div>
    </div>
  );
}
