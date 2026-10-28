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
  themeColor: "#07090e",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alessonandre.adv.br"),
  title: "Alesson André | Advogado Criminal e Trabalhista em Carmo do Rio Claro · MG",
  description:
    "⚖️ Dr. Alesson André — Advogado Criminal e Trabalhista (OAB/MG 233.850). Atuação combativa em Direito Criminal, Plantão em Delegacias e Flagrantes, Fóruns, Cartórios, Direito Trabalhista e Previdenciário. Nota máxima 5,0 ★ no Google (136 avaliações). Sede no Andar dos Advogados, Carmo do Rio Claro - MG.",
  keywords: [
    "Alesson André",
    "Alesson André Advogado",
    "Advogado Alesson André",
    "Advogado em Carmo do Rio Claro MG",
    "Advogado Criminalista Carmo do Rio Claro",
    "Advogado Trabalhista Carmo do Rio Claro",
    "Advogado Criminalista Sul de Minas",
    "Audiência de Custódia Carmo do Rio Claro",
    "Habeas Corpus Carmo do Rio Claro",
    "Delegacia e Flagrantes Carmo do Rio Claro",
    "Advogado Correspondente Carmo do Rio Claro",
    "Direito do Trabalho Carmo do Rio Claro",
    "Rescisão Trabalhista e Direitos do Trabalhador",
    "Andar dos Advogados Carmo do Rio Claro",
    "OAB MG 233850",
    "Alfenas Passos Campo do Meio Carmo do Rio Claro",
  ],
  authors: [{ name: "Alesson André — Advogado" }],
  creator: "Alesson André — Advogado",
  publisher: "Alesson André — Advogado",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=aa3", sizes: "any" },
      { url: "/favicon-32x32.png?v=aa3", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=aa3", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=aa3", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=aa3", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=aa3",
    apple: [{ url: "/apple-icon.png?v=aa3", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.alessonandre.adv.br",
    title: "Alesson André | Advogado Criminal e Trabalhista em Carmo do Rio Claro · MG",
    description:
      "⚖️ Defesa técnica, combativa e estratégica. Atuação em Direito Criminal, Trabalhista, Administrativa, Fóruns, Delegacias e Cartórios. 5,0 ★ no Google (136 avaliações). Sede no Andar dos Advogados, Carmo do Rio Claro - MG.",
    siteName: "Alesson André — Advogado",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Alesson André - Advogado Criminal & Trabalhista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alesson André | Advogado Criminal e Trabalhista · Carmo do Rio Claro - MG",
    description:
      "⚖️ Advocacia Criminal e Trabalhista com rigor técnico e combatividade. 5,0 ★ no Google (136 avaliações).",
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
    name: "Alesson André — Advogado",
    alternateName: "Alesson André Advocacia Criminal e Trabalhista",
    legalName: "Alesson André — Advogado (OAB/MG 233.850)",
    telephone: "+55-35-99720-0713",
    email: "contato@alessonandre.adv.br",
    url: "https://www.alessonandre.adv.br",
    image: "https://www.alessonandre.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ANDAR DOS ADVOGADOS - R. Cap. Pedro Augusto Corrêa, 74 - Sala 03 - Centro",
      addressLocality: "Carmo do Rio Claro",
      addressRegion: "MG",
      postalCode: "37150-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-20.9719",
      longitude: "-46.1189",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "136",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Carmo do Rio Claro",
      "Alfenas",
      "Passos",
      "Campo do Meio",
      "Conceição da Aparecida",
      "Guapé",
      "Boa Esperança",
      "Varginha",
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
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.instagram.com/alesson.advogado/",
      "https://wa.me/5535997200713",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=aa3" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=aa3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=aa3" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=aa3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=aa3" />
        <link rel="shortcut icon" href="/favicon.ico?v=aa3" />
        <meta name="theme-color" content="#07090e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#d49d2c] selection:text-white">
        {children}
      </body>
    </html>
  );
}
