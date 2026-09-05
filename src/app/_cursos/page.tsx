import CursosList from "./CursosList";
import Image from "next/image";

export const metadata = {
  title: "Cursos, Oficinas e Palestras | FLUIR+",
};

export default function CursosPage() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-serif font-bold tracking-normal [font-variant-ligatures:none] text-foreground sm:text-5xl">Cursos, oficinas e Seminários</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Formação de excelência para impulsionar a sua carreira acadêmica e científica.
          </p>
        </div>
        
        <div className="flex justify-center mt-6 mb-8 px-4">
          <div className="relative w-full max-w-[350px] aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(63,226,197,0.4)] border-4 border-white rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
            <Image src="/cursos,-oficinas,seminarios.png" alt="Cursos e Oficinas" fill className="object-cover" />
          </div>
        </div>
        
        <CursosList />
      </div>
    </div>
  );
}
