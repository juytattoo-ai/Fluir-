import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface PaymentLinks {
  mentoriaUrl: string;
  zoomUrlMestrado: string; // (Legado/Geral - mantido por compatibilidade)
  zoomLinksMestrado?: {
    completo: string;
    aula1: string;
    aula2: string;
    aula3: string;
    aula4: string;
    aula5: string;
    aula6: string;
  };
  pagamentosMestrado?: {
    completo: string;
    aula1: string;
    aula2: string;
    aula3: string;
    aula4: string;
    aula5: string;
    aula6: string;
  };
  cursosUrls: Record<string, string>;
}

const DEFAULT_LINKS: PaymentLinks = {
  mentoriaUrl: "https://wa.me/5511999999999?text=Olá,%20tenho%20interesse%20na%20Mentoria%20em%20grupo%20feminino!",
  zoomUrlMestrado: "",
  zoomLinksMestrado: {
    completo: "", aula1: "", aula2: "", aula3: "", aula4: "", aula5: "", aula6: ""
  },
  pagamentosMestrado: {
    completo: "", aula1: "", aula2: "", aula3: "", aula4: "", aula5: "", aula6: ""
  },
  cursosUrls: {}
};

/**
 * Busca os links de pagamento configurados no painel admin.
 */
export async function getPaymentLinks(): Promise<PaymentLinks> {
  try {
    const docRef = doc(db, "settings", "links");
    const snapshot = await getDoc(docRef);
    
    if (snapshot.exists()) {
      return { ...DEFAULT_LINKS, ...snapshot.data() } as PaymentLinks;
    }
  } catch (error) {
    console.error("Error fetching payment links:", error);
  }
  
  return DEFAULT_LINKS;
}

/**
 * Salva os links de pagamento atualizados pela administradora.
 */
export async function updatePaymentLinks(links: Partial<PaymentLinks>): Promise<boolean> {
  try {
    const docRef = doc(db, "settings", "links");
    await setDoc(docRef, links, { merge: true });
    return true;
  } catch (error) {
    console.error("Error updating payment links:", error);
    return false;
  }
}
