"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

export default function AnalyticsTracker({ gaId }: { gaId: string }) {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // 1. Checa ao montar o componente
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie_consent");
      if (consent === "accepted") {
        setConsentGiven(true);
      }
    };

    checkConsent();

    // 2. Ouve o evento disparado pelo CookieBanner
    window.addEventListener("cookie_consent_accepted", checkConsent);
    
    return () => {
      window.removeEventListener("cookie_consent_accepted", checkConsent);
    };
  }, []);

  // Só renderiza e injeta o Google Analytics SE o usuário tiver aceitado e se existir o ID
  if (!gaId || !consentGiven) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
