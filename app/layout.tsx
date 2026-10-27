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
  themeColor: "#09090b",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mariaeduardanoronha.adv.br"),
  title: "Maria Eduarda Noronha — Advocacia e Consultoria Jurídica | Luz · MG",
  description:
    "⚖️ Dra. Maria Eduarda Noronha — Advocacia Especializada em Direito Bancário, Agronegócio, Imobiliário e Registro de Marcas no INPI. Sede em Luz - MG e Atendimento em Todo o Brasil. Nota Máxima 5,0 ★ no Google (14 avaliações).",
  keywords: [
    "Maria Eduarda Noronha Advocacia",
    "Dra Maria Eduarda Noronha",
    "Advogada em Luz MG",
    "Advogado Luz Minas Gerais",
    "Advogada Bancária e do Agro",
    "Direito Bancário Luz MG",
    "Revisão de Contratos Bancários",
    "Juros Abusivos e Execuções",
    "Direito do Agronegócio Minas Gerais",
    "Crédito Rural e Dívidas Rurais",
    "Renegociação de CPR e MCR",
    "Contratos Agrários e Arrendamento",
    "Direito Imobiliário Luz MG",
    "Regularização Fundiária e Usucapião",
    "Procuradora do INPI",
    "Registro de Marcas INPI",
    "Registro de Marcas Agronegócio",
    "Divisa Agrícola Advocacia",
  ],
  authors: [{ name: "Maria Eduarda Noronha — Advocacia e Consultoria Jurídica" }],
  creator: "Maria Eduarda Noronha — Advocacia e Consultoria Jurídica",
  publisher: "Maria Eduarda Noronha — Advocacia e Consultoria Jurídica",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=men2", sizes: "any" },
      { url: "/favicon-32x32.png?v=men2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=men2", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=men2", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=men2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=men2",
    apple: [{ url: "/apple-icon.png?v=men2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.mariaeduardanoronha.adv.br",
    title: "Maria Eduarda Noronha — Advocacia e Consultoria Jurídica | Luz · MG",
    description:
      "⚖️ Advocacia Especializada em Direito Bancário, Agronegócio, Imobiliário e Registro de Marcas no INPI. Nota máxima 5,0 ★ no Google (14 avaliações). R. Monsenhor Geraldo Mendes Vasconcelos, 280 - Luz, MG.",
    siteName: "Maria Eduarda Noronha — Advocacia e Consultoria Jurídica",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Maria Eduarda Noronha — Advocacia e Consultoria Jurídica",
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
    name: "Maria Eduarda Noronha — Advocacia e Consultoria Jurídica",
    alternateName: "Dra. Maria Eduarda Noronha Advocacia",
    legalName: "Maria Eduarda Noronha Advocacia e Consultoria Jurídica",
    telephone: "+55-37-99972-0495",
    email: "contato@mariaeduardanoronha.adv.br",
    url: "https://www.mariaeduardanoronha.adv.br",
    image: "https://www.mariaeduardanoronha.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Monsenhor Geraldo Mendes Vasconcelos, 280 - Dom Belchior",
      addressLocality: "Luz",
      addressRegion: "MG",
      postalCode: "35595-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "14",
    },
    areaServed: [
      "Luz",
      "Bom Despacho",
      "Lagoa da Prata",
      "Dores do Indaiá",
      "Santo Antônio do Monte",
      "Formiga",
      "Minas Gerais",
      "Centro-Oeste de Minas",
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
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/adv.marianoronha",
      "https://wa.me/5537999720495",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=men2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=men2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=men2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=men2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=men2" />
        <link rel="shortcut icon" href="/favicon.ico?v=men2" />
        <meta name="theme-color" content="#09090b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#b8783e] selection:text-white">
        {children}
      </body>
    </html>
  );
}
