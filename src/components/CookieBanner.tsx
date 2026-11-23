"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já consentiu
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowBanner(false);
    // Dispara um evento para o AnalyticsTracker saber que pode carregar
    window.dispatchEvent(new Event("cookie_consent_accepted"));
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 bg-background/95 backdrop-blur-md border-t border-primary/20 shadow-lg z-50 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex-1 text-sm text-muted-foreground">
        <p>
          Utilizamos cookies para melhorar sua experiência em nossa plataforma, analisar o tráfego e personalizar conteúdo. Ao continuar navegando, você concorda com nossa{" "}
          <Link href="#" className="text-primary hover:underline font-medium">
            Política de Privacidade
          </Link>.
        </p>
      </div>
      <div className="flex gap-3 shrink-0">
        <button 
          onClick={rejectCookies}
          className="px-4 py-2 text-sm font-medium text-foreground bg-muted rounded-full hover:bg-muted/80 transition-colors"
        >
          Rejeitar
        </button>
        <button 
          onClick={acceptCookies}
          className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors shadow-md"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
