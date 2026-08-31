import CursosList from "./CursosList";

export const metadata = {
  title: "Cursos, Oficinas e Palestras | FLUIR+",
};

export default function CursosPage() {
  return (
    <div className="bg-background min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-serif font-bold tracking-normal [font-variant-ligatures:none] text-foreground sm:text-5xl">Cursos e Oficinas</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Formação de excelência para impulsionar a sua carreira acadêmica e científica.
          </p>
        </div>
        
        <CursosList />
      </div>
    </div>
  );
}
