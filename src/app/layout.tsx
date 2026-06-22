import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudeste Atacado | Distribuidor de Tecnologia em Segurança",
  description:
    "CFTV, controle de acesso, redes, automação e energia das principais marcas do mercado — com estoque imediato e suporte técnico dedicado à sua revenda. ES · RJ · MG.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body data-hero="split" data-cats="grid" data-type="grotesk">
        {children}
      </body>
    </html>
  );
}
