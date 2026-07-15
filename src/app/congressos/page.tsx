import { Calendar, MapPin, Users } from "lucide-react";

export default function CongressosPage() {
  const congressos = [
    {
      id: 1,
      titulo: "I Congresso Nacional Fluir+",
      data: "15 a 17 de Outubro, 2026",
      local: "Online (Transmissão ao vivo)",
      descricao: "O principal evento do nosso ecossistema, focado em desenvolvimento de carreira, inovação na pesquisa e integração profissional.",
      status: "Inscrições Abertas"
    },
    {
      id: 2,
      titulo: "Simpósio de Mulheres na Ciência",
      data: "05 de Março, 2027",
      local: "São Paulo, SP / Híbrido",
      descricao: "Um encontro para debatermos os desafios e avanços das mulheres na academia e no mercado de trabalho tecnológico e científico.",
      status: "Em Breve"
    }
  ];

  return (
    <main className="min-h-screen py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-6">Congressos e Eventos</h1>
        <p className="text-lg text-muted-foreground">
          Participe dos nossos encontros e amplie sua rede de contatos. Aprenda com grandes referências e compartilhe sua trajetória.
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-8">
        {congressos.map((congresso) => (
          <div key={congresso.id} className="glass-card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                {congresso.status}
              </div>
              <h2 className="text-2xl font-bold mb-4">{congresso.titulo}</h2>
              <p className="text-muted-foreground mb-6">{congresso.descricao}</p>
              
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  {congresso.data}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {congresso.local}
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-sm">
                Saiba Mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
