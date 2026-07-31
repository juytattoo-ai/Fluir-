export default function ConfiguracoesAdminPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
      <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <span className="text-4xl">⚙️</span>
      </div>
      <h1 className="text-3xl font-serif font-bold text-foreground">Configurações em Construção</h1>
      <p className="text-lg text-muted-foreground max-w-md">
        Este painel de controle está sendo estruturado para que você possa gerenciar todos os detalhes da plataforma em breve.
      </p>
    </div>
  );
}
