"use client";

import { useState } from "react";
import { Phone, Send } from "lucide-react";

export default function ContatoPage() {
  const [message, setMessage] = useState("");

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const phoneNumber = "5571988172711";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setMessage(""); // clear after sending
  };

  return (
    <div className="bg-background min-h-[60vh] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl">Fale Conosco</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Fale com uma das colegas pesquisadoras do Conselho do Instituto Fluir+
        </p>

        <div className="mt-16 mx-auto w-full max-w-2xl">
          <div className="glass-card p-8 md:p-12 flex flex-col items-center">
            <div className="bg-[#3fe2c5]/20 p-4 rounded-full mb-6">
              <Phone className="h-8 w-8 text-primary" />
            </div>

            <form onSubmit={handleSendWhatsApp} className="w-full text-left">
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Sua mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full rounded-md border-0 py-3 px-4 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-background/50 resize-none transition-all duration-300"
                  placeholder="Escreva sua dúvida aqui..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-primary/90 transition-colors transform hover:-translate-y-0.5 duration-300"
              >
                <Send className="h-4 w-4" />
                Enviar para o WhatsApp
              </button>
              <div className="mt-4 flex flex-col items-center gap-1 text-center">
                <p className="text-muted-foreground text-sm">
                  WhatsApp: (71) 98817-2711
                </p>
                <p className="text-sm font-medium text-primary">
                  Respondemos em menos de 48 horas.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
