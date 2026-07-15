import { BookOpen, Award, FileText } from "lucide-react";

export default function DefesasPublicacoesPage() {
  const destaques = [
    {
      tipo: "Artigo Publicado",
      titulo: "O impacto da mentoria no desenvolvimento de jovens pesquisadoras",
      autora: "Ana Carolina Santos",
      revista: "Revista Brasileira de Educação Superior",
      ano: "2026"
    },
    {
      tipo: "Defesa de Mestrado",
      titulo: "Estratégias de Inovação em Ecossistemas Tecnológicos",
      autora: "Beatriz Oliveira",
      revista: "Universidade Estadual de Campinas",
      ano: "2026"
    },
    {
      tipo: "Capítulo de Livro",
      titulo: "Acolhimento e Excelência na Pós-Graduação",
      autora: "Comunidade Fluir+",
      revista: "Editora Ciência Moderna",
      ano: "2025"
    }
  ];

  return (
    <main className="min-h-screen py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-6">Defesas e Publicações</h1>
        <p className="text-lg text-muted-foreground">
          Celebramos o rigor acadêmico e as conquistas de nossa comunidade. Conheça as pesquisas, defesas e os artigos publicados pelas nossas mentoradas.
        </p>
      </div>

      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destaques.map((item, index) => (
          <div key={index} className="glass-card p-8 flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              {item.tipo.includes("Defesa") ? (
                <Award className="h-24 w-24 text-primary" />
              ) : item.tipo.includes("Artigo") ? (
                <FileText className="h-24 w-24 text-primary" />
              ) : (
                <BookOpen className="h-24 w-24 text-primary" />
              )}
            </div>
            
            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
              {item.tipo}
            </div>
            <h3 className="text-lg font-bold mb-4 flex-1 line-clamp-3 leading-snug">
              {item.titulo}
            </h3>
            
            <div className="mt-auto pt-4 border-t border-foreground/10">
              <p className="font-semibold text-sm">{item.autora}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {item.revista} • {item.ano}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 mx-auto max-w-3xl text-center p-8 bg-primary/5 rounded-2xl border border-primary/20">
        <h3 className="text-2xl font-bold mb-4">Tem uma conquista para compartilhar?</h3>
        <p className="text-muted-foreground mb-6">
          Se você é aluna ou fez parte das Mentorias Fluir+, envie sua defesa ou publicação para integrar nosso banco de talentos.
        </p>
        <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-sm">
          Enviar Publicação
        </button>
      </div>
    </main>
  );
}
