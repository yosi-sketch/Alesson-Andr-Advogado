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
  themeColor: "#050c18",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.weslleysantos.adv.br"),
  title: "Escritório de Advocacia Weslley Santos | Advogado em Oliveira · MG | Atendimento 24h & Online",
  description:
    "⚖️ Dr. Weslley Santos — Advocacia Especializada e Consultoria Jurídica em Oliveira - MG. Atuação combativa em Direito Criminal, Tribunal do Júri, Especialista em Lei de Drogas, Perícia Digital e Grafotécnica, Cível e Previdenciário. Nota máxima 5,0 ★ no Google (239 avaliações). Plantão 24 Horas.",
  keywords: [
    "Weslley Santos Advocacia",
    "Dr Weslley Santos",
    "Advogado Weslley Santos",
    "Advogado em Oliveira MG",
    "Escritório de Advocacia Oliveira MG",
    "Advogado Criminalista Oliveira MG",
    "Tribunal do Júri Oliveira MG",
    "Especialista em Lei de Drogas MG",
    "Perícia Digital Forense MG",
    "Perícia Grafotécnica Oliveira MG",
    "Audiência de Custódia Oliveira",
    "Habeas Corpus Plantão 24 Horas",
    "Advogado Previdenciário Oliveira MG",
    "Aposentadoria INSS Oliveira",
    "BPC LOAS Oliveira MG",
    "Direito de Família Oliveira",
    "Divórcio e Pensão Oliveira",
    "Direito Cível Indenizações Oliveira",
    "Advogado Campo Belo Carmópolis Divinópolis",
    "Plantão Criminal 24 Horas",
  ],
  authors: [{ name: "Escritório de Advocacia Weslley Santos" }],
  creator: "Escritório de Advocacia Weslley Santos",
  publisher: "Escritório de Advocacia Weslley Santos",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=ws2", sizes: "any" },
      { url: "/favicon-32x32.png?v=ws2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=ws2", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=ws2", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=ws2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=ws2",
    apple: [{ url: "/apple-icon.png?v=ws2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.weslleysantos.adv.br",
    title: "Escritório de Advocacia Weslley Santos | Advogado em Oliveira · MG",
    description:
      "⚖️ Advocacia Especializada e Combate Técnico na Defesa de Seus Direitos. Nota máxima 5,0 ★ no Google (239 avaliações). Sede em Oliveira - MG (R. Batista de Almeida, 240 - Sl 12 - Centro). Plantão 24h.",
    siteName: "Escritório de Advocacia Weslley Santos",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 682,
        alt: "Escritório de Advocacia Weslley Santos - Advocacia Especializada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escritório de Advocacia Weslley Santos | Oliveira · MG",
    description:
      "⚖️ Advocacia Especializada: Criminal, Júri, Lei de Drogas, Perícia Digital, Cível e Previdenciário. 5,0 ★ no Google (239 avaliações).",
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
    name: "Escritório de Advocacia Weslley Santos",
    alternateName: "Dr. Weslley Santos Advocacia",
    legalName: "Escritório de Advocacia Weslley Santos",
    telephone: "+55-37-99869-3626",
    email: "contato@weslleysantos.adv.br",
    url: "https://www.weslleysantos.adv.br",
    image: "https://www.weslleysantos.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Batista de Almeida, 240 - Sl 12 - Centro",
      addressLocality: "Oliveira",
      addressRegion: "MG",
      postalCode: "35540-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-20.6963",
      longitude: "-44.9016",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "239",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Oliveira",
      "Carmópolis de Minas",
      "Campo Belo",
      "Santo Antônio do Amparo",
      "Passa Tempo",
      "Cláudio",
      "Divinópolis",
      "São Francisco de Paula",
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
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.instagram.com/weslley_santos_advocacia",
      "https://wa.me/5537998693626",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=ws2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=ws2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=ws2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=ws2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=ws2" />
        <link rel="shortcut icon" href="/favicon.ico?v=ws2" />
        <meta name="theme-color" content="#050c18" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#c59b3f] selection:text-white">
        {children}
      </body>
    </html>
  );
}
