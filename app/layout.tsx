import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Playfair_Display,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfairFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marianabrumbahia.adv.br"),
  title: "Mariana Brum Bahia — Advocacia | Especialista em Mutum · MG",
  description:
    "⚖️ Dra. Mariana Brum Bahia (OAB/MG 241.996) — Advocacia Humanizada, Segura e Estratégica em Mutum e Região. Especialista em Direito de Família, Sucessões, Previdenciário (INSS), Cível e Trabalhista. Atendimento Presencial e Online em todo o Brasil. Nota Máxima 5,0 ★ no Google (16 avaliações).",
  keywords: [
    "Mariana Brum Bahia Advocacia",
    "Dra Mariana Brum Bahia",
    "Advogada em Mutum MG",
    "Advogado Mutum Minas Gerais",
    "Direito de Família Mutum",
    "Divórcio e Separação Mutum",
    "Pensão Alimentícia Mutum MG",
    "Guarda dos Filhos Mutum",
    "Inventário e Partilha Mutum",
    "Advogada Previdenciária Mutum",
    "Aposentadoria INSS Mutum MG",
    "Correspondente Jurídico Mutum",
    "OAB MG 241996",
    "Lajinha MG Advogado",
    "Ipanema MG Advogado",
    "Manhuaçu MG Advocacia",
  ],
  authors: [{ name: "Mariana Brum Bahia — Advocacia" }],
  creator: "Mariana Brum Bahia — Advocacia",
  publisher: "Mariana Brum Bahia — Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=mb1", sizes: "any" },
      { url: "/favicon-32x32.png?v=mb1", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=mb1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=mb1", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico?v=mb1",
    apple: [{ url: "/apple-icon.png?v=mb1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.marianabrumbahia.adv.br",
    title: "Mariana Brum Bahia — Advocacia | Mutum · MG",
    description:
      "⚖️ Advocacia Humanizada, Segura e Resolutiva. Especialista em Direito das Famílias, Sucessões, Previdenciário e Cível. Nota máxima 5,0 ★ no Google (16 avaliações). Praça Benedito Valadares - Mutum, MG.",
    siteName: "Mariana Brum Bahia — Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Mariana Brum Bahia — Advocacia",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Mariana Brum Bahia — Advocacia",
    alternateName: "Dra. Mariana Brum Bahia Advocacia",
    legalName: "Mariana Brum Bahia — Advocacia",
    telephone: "+55-33-99999-7644",
    email: "contato@marianabrumbahia.adv.br",
    url: "https://www.marianabrumbahia.adv.br",
    image: "https://www.marianabrumbahia.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça Benedito Valadares",
      addressLocality: "Mutum",
      addressRegion: "MG",
      postalCode: "36955-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "16",
    },
    areaServed: [
      "Mutum",
      "Lajinha",
      "Aimorés",
      "Ipanema",
      "Manhuaçu",
      "Taparuba",
      "Leste de Minas",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/marianabrumbahia.adv?igsh=ZW55cXhmbTRvMTVj",
      "https://wa.me/5533999997644",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=mb1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=mb1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=mb1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=mb1" />
        <link rel="shortcut icon" href="/favicon.ico?v=mb1" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#9e1836] selection:text-white">
        {children}
      </body>
    </html>
  );
}
