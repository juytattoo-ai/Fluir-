export default function SosPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-red-600 dark:text-red-400">SOS Situações Delicadas</h1>
        <p className="mt-2 text-muted-foreground">
          Área privada de apoio para situações acadêmicas sensíveis. Este é um espaço totalmente seguro e confidencial.
        </p>
      </div>
      <div className="glass-card p-8 border-red-500/20 bg-red-50/50 dark:bg-red-950/20">
        <h3 className="font-semibold text-lg text-red-700 dark:text-red-300 mb-4">Recursos de Apoio</h3>
        <ul className="space-y-3 text-red-900/80 dark:text-red-200/80">
          <li>• Materiais orientativos sobre assédio no ambiente acadêmico</li>
          <li>• Orientações sobre saúde mental na pesquisa</li>
          <li>• Contatos de redes de apoio</li>
        </ul>
        <div className="mt-8">
          <button className="rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors">
            Solicitar Orientação Confidencial
          </button>
        </div>
      </div>
    </div>
  );
}
