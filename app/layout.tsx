import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingIcons from "./components/FloatingIcons"; // Ajout des icônes flottantes
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Ornel Rony Diffo Tandjong",
  description: "Bienvenue sur mon portfolio. Découvrez mes compétences et projets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Ajout des métadonnées importantes */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Portfolio, Développeur, Systèmes embarqués, Electronique, Projets"
        />
        <meta name="author" content="Ornel Rony Diffo Tandjong" />
        <meta name="theme-color" content="#007BFF" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800`}
      >
        {/* Contenu principal */}
        <div className="relative">
          {children}
        </div>

        {/* Ajout des icônes flottantes */}
        <FloatingIcons />
      </body>
    </html>
  );
}
