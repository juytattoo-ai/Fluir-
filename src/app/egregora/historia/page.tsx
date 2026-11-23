"use client";

export default function NossaHistoriaPage() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">
          Nossa História
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          O Instituto Fluir+ nasceu do desejo de transformar o ambiente acadêmico em um espaço de acolhimento, desenvolvimento e excelência para mulheres.
        </p>
      </div>

      <div className="glass-card overflow-hidden rounded-2xl w-full max-w-4xl mx-auto shadow-sm p-2 md:p-4 border border-primary/10 bg-white/40 backdrop-blur-md hover:border-primary/30 transition-all duration-300">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-inner">
          <iframe
            src="https://www.youtube.com/embed/-b_csH5h6QM"
            title="Nossa História - Instituto Fluir+"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
