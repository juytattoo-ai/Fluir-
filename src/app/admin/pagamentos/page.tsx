"use client";

import { useEffect, useState } from "react";
import { getPaymentLinks, updatePaymentLinks } from "@/services/paymentService";
import { Link as LinkIcon, Save, CheckCircle2, ShoppingCart } from "lucide-react";

export default function PagamentosPage() {
  const [mentoriaUrl, setMentoriaUrl] = useState("");
  const [pagamentosMestrado, setPagamentosMestrado] = useState({
    completo: "", aula1: "", aula2: "", aula3: "", aula4: "", aula5: "", aula6: ""
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await getPaymentLinks();
      setMentoriaUrl(data.mentoriaUrl || "");
      if (data.pagamentosMestrado) {
        setPagamentosMestrado(data.pagamentosMestrado);
      }
      setLoading(false);
    }
    load();
  }, []);

  const handlePagamentoChange = (field: keyof typeof pagamentosMestrado, value: string) => {
    setPagamentosMestrado(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    const success = await updatePaymentLinks({ 
      mentoriaUrl,
      pagamentosMestrado
    });
    if (success) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } else {
      alert("Erro ao salvar os links.");
    }
    setSaving(false);
  };

  const mestradoFields = [
    { key: "completo" as const, label: "Curso Completo (Mestrado)", tip: "Link para vender o pacote com todas as aulas juntas." },
    { key: "aula1" as const, label: "Aula 01 (15/09)", tip: "Motivação / Carreira" },
    { key: "aula2" as const, label: "Aula 02 (22/09)", tip: "Como Gerenciar Estruturas Patriarcais" },
    { key: "aula3" as const, label: "Aula 03 (29/09)", tip: "Instrumentos de Pesquisa" },
    { key: "aula4" as const, label: "Aula 04 (06/10)", tip: "Instrumentos e Questões Básicas" },
    { key: "aula5" as const, label: "Aula 05 (20/10)", tip: "Pesquisa Quali / Quanti" },
    { key: "aula6" as const, label: "Aula 06 (27/10)", tip: "Projeto a Longo Prazo" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">Pagamentos</h1>
        <p className="mt-2 text-muted-foreground">
          Gerencie os links de venda externos das suas mentorias e cursos.
        </p>
      </div>

      <div className="glass-card max-w-2xl overflow-hidden p-6 sm:p-8 space-y-6">
        {loading ? (
          <div className="py-10 text-center text-muted-foreground text-sm">
            Carregando configurações...
          </div>
        ) : (
          <>
            {/* Mentoria */}
            <div className="space-y-4">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                <LinkIcon className="h-4 w-4 text-primary" />
                Link de Pagamento da Mentoria em grupo feminino
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LinkIcon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <input
                  type="url"
                  value={mentoriaUrl}
                  onChange={(e) => setMentoriaUrl(e.target.value)}
                  className="block w-full rounded-md border-0 py-2.5 pl-10 text-foreground ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white/50"
                  placeholder="https://nubank.com.br/pagar/..."
                />
              </div>
            </div>

            {/* Curso Mestrado */}
            <div className="space-y-6 pt-6 border-t border-primary/10">
              <h3 className="text-lg font-serif font-bold text-foreground flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                Links de Pagamento (Curso Mestrado)
              </h3>
              
              {mestradoFields.map((field) => (
                <div key={field.key} className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    {field.label}
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <LinkIcon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <input
                      type="url"
                      value={pagamentosMestrado[field.key]}
                      onChange={(e) => handlePagamentoChange(field.key, e.target.value)}
                      className="block w-full rounded-md border-0 py-2 pl-10 text-foreground ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white/50"
                      placeholder="https://pay.kiwify.com.br/..."
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {field.tip}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 disabled:opacity-50"
              >
                {saving ? (
                  <span className="animate-spin text-lg leading-none">⟳</span>
                ) : (
                  <Save className="h-4 w-4" />
                )}
                Salvar Links
              </button>
              
              {saved && (
                <span className="flex items-center gap-1.5 text-sm text-green-600 font-medium">
                  <CheckCircle2 className="h-4 w-4" /> Salvo com sucesso!
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
