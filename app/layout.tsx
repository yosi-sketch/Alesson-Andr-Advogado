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
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090a0d",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anapaulalima.adv.br"),
  title: "Ana Paula Lima Advocacia | Monte Azul · MG | Atendimento Presencial e Online",
  description:
    "⚖️ Dra. Ana Paula Lima — Advocacia Especializada em Direito de Família, Previdenciário (INSS), Trabalhista e Cível. Sede em Monte Azul - MG e Atendimento Online em Todo o Brasil. Nota Máxima 5,0 ★ no Google (13 avaliações).",
  keywords: [
    "Ana Paula Lima Advocacia",
    "Dra Ana Paula Lima",
    "Advogada em Monte Azul MG",
    "Advogado Monte Azul Minas Gerais",
    "Advogada Previdenciária Monte Azul",
    "Aposentadoria Rural e Urbana INSS",
    "BPC LOAS Monte Azul",
    "Auxílio Doença INSS Monte Azul",
    "Direito de Família Monte Azul",
    "Divórcio e Pensão Alimentícia",
    "Guarda de Filhos e Partilha",
    "Inventário e Sucessões MG",
    "Advogada Trabalhista Monte Azul",
    "Direitos do Trabalhador e Rescisão",
    "Horas Extras e Acidente de Trabalho",
    "Direito Cível e Consumidor",
    "Ações de Indenização Monte Azul",
    "Norte de Minas Gerais Advocacia",
    "Atendimento Jurídico Online Brasil",
  ],
  authors: [{ name: "Ana Paula Lima Advocacia" }],
  creator: "Ana Paula Lima Advocacia",
  publisher: "Ana Paula Lima Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=apl1", sizes: "any" },
      { url: "/favicon-32x32.png?v=apl1", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=apl1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=apl1", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=apl1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=apl1",
    apple: [{ url: "/apple-icon.png?v=apl1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.anapaulalima.adv.br",
    title: "Ana Paula Lima Advocacia | Monte Azul · MG | Atendimento Presencial e Online",
    description:
      "⚖️ Advocacia Especializada em Direito de Família, Previdenciário (INSS), Trabalhista e Cível. Nota máxima 5,0 ★ no Google (13 avaliações). R. Três de Outubro, 109, Monte Azul - MG.",
    siteName: "Ana Paula Lima Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Ana Paula Lima Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Paula Lima Advocacia | Monte Azul · MG",
    description:
      "⚖️ Advocacia Humanizada e Combativa em Direito de Família, Previdenciário, Trabalhista e Cível. Nota máxima 5,0 ★ no Google.",
    images: ["/logo.png"],
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
    name: "Ana Paula Lima Advocacia",
    alternateName: "Dra. Ana Paula Lima",
    legalName: "Ana Paula Lima Advocacia",
    telephone: "+55-38-99830-8579",
    email: "contato@anapaulalima.adv.br",
    url: "https://www.anapaulalima.adv.br",
    image: "https://www.anapaulalima.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Três de Outubro, 109",
      addressLocality: "Monte Azul",
      addressRegion: "MG",
      postalCode: "39500-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "13",
    },
    areaServed: [
      "Monte Azul",
      "Porteirinha",
      "Espinosa",
      "Janaúba",
      "Mato Verde",
      "Catuti",
      "Gameleiras",
      "Montes Claros",
      "Minas Gerais",
      "Norte de Minas",
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
      "https://www.instagram.com/adv.anapaulalimab",
      "https://wa.me/5538998308579",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=apl1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=apl1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=apl1" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=apl1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=apl1" />
        <link rel="shortcut icon" href="/favicon.ico?v=apl1" />
        <meta name="theme-color" content="#090a0d" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#b88628] selection:text-white">
        {children}
      </body>
    </html>
  );
}
