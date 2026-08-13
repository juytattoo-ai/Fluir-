import { Sparkles } from "lucide-react";

export default function EgregoraIndex() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Sparkles className="h-10 w-10 text-primary" />
      </div>
      <h1 className="text-4xl font-serif font-bold text-foreground max-w-2xl leading-tight">
        Boas vindas colegas pesquisadoras da Fluir+
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl">
        Utilize o menu lateral para navegar pelos conteúdos da Egrégora.
      </p>
    </div>
  );
}
