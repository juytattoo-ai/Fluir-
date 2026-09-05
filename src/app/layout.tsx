import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FLUIR+ | Comunidade para Mulheres Pesquisadoras",
  description: "Pesquisa, desenvolvimento acadêmico e comunidade para mulheres que desejam transformar conhecimento em impacto.",
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body 
        className="min-h-full flex flex-col text-foreground font-sans selection:bg-primary/20"
        style={{
          background: "linear-gradient(135deg, rgba(255, 175, 125, 0.45) 0%, rgba(255, 220, 190, 0.3) 25%, rgba(195, 248, 238, 0.35) 75%, rgba(63, 226, 197, 0.55) 100%)",
          backgroundAttachment: "fixed"
        }}
      >
        <AuthProvider>
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
