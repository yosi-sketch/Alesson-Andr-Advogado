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
  metadataBase: new URL("https://www.valeriaraposo.adv.br"),
  title: "Valéria Raposo | Advogada em Manhuaçu · MG | Atendimento Presencial e Online",
  description:
    "⚖️ Dra. Valéria Raposo — Advocacia Especializada com atuação estratégica na defesa de direitos. Sede em Manhuaçu - MG (R. Cap. Rafael, 21 - Sl 103 - Centro) e Atendimento Online em Todo o Brasil. Nota Máxima 5,0 ★ no Google (10 avaliações).",
  keywords: [
    "Valéria Raposo Advogada",
    "Dra Valéria Raposo",
    "Valéria Raposo Advocacia",
    "Advogada em Manhuaçu MG",
    "Advogado Manhuaçu Minas Gerais",
    "Serviços Jurídicos Manhuaçu",
    "Atuação Estratégica na Defesa de Direitos",
    "Direito de Família Manhuaçu",
    "Divórcio e Pensão Alimentícia Manhuaçu",
    "Guarda e Partilha de Bens",
    "Inventário e Sucessões Manhuaçu",
    "Advogada Previdenciária Manhuaçu",
    "Aposentadoria Rural e Urbana INSS",
    "BPC LOAS Manhuaçu",
    "Auxílio Doença INSS Manhuaçu",
    "Direito Trabalhista Manhuaçu",
    "Direitos do Trabalhador e Rescisão",
    "Direito Cível e Responsabilidade Civil",
    "Direito do Consumidor e Golpes Bancários",
    "Zona da Mata Mineira Advocacia",
    "Vertente do Caparaó Advocacia",
    "Atendimento Jurídico Online Brasil",
  ],
  authors: [{ name: "Valéria Raposo Advocacia" }],
  creator: "Valéria Raposo Advocacia",
  publisher: "Valéria Raposo Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=vr1", sizes: "any" },
      { url: "/favicon-32x32.png?v=vr1", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=vr1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=vr1", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=vr1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=vr1",
    apple: [{ url: "/apple-icon.png?v=vr1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.valeriaraposo.adv.br",
    title: "Valéria Raposo | Advogada em Manhuaçu · MG | Atendimento Presencial e Online",
    description:
      "⚖️ Atuação estratégica na defesa de seus direitos. Nota máxima 5,0 ★ no Google (10 avaliações). R. Cap. Rafael, 21 - Sl 103 - Centro, Manhuaçu - MG.",
    siteName: "Valéria Raposo Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Valéria Raposo Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valéria Raposo | Advogada em Manhuaçu · MG",
    description:
      "⚖️ Advocacia Humanizada e Estratégica na Defesa de Direitos. Nota máxima 5,0 ★ no Google (10 avaliações).",
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
    name: "Valéria Raposo Advocacia",
    alternateName: "Dra. Valéria Raposo",
    legalName: "Valéria Raposo Advocacia",
    telephone: "+55-33-98834-8180",
    email: "contato@valeriaraposo.adv.br",
    url: "https://www.valeriaraposo.adv.br",
    image: "https://www.valeriaraposo.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Cap. Rafael, 21 - Sl 103 - Centro",
      addressLocality: "Manhuaçu",
      addressRegion: "MG",
      postalCode: "36900-010",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "10",
    },
    areaServed: [
      "Manhuaçu",
      "Reduto",
      "Simonésia",
      "Manhumirim",
      "Lajinha",
      "Ipanema",
      "Caratinga",
      "Ponte Nova",
      "Zona da Mata",
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
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/valeriaraposo.adv/",
      "https://wa.me/5533988348180",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=vr1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=vr1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=vr1" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=vr1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=vr1" />
        <link rel="shortcut icon" href="/favicon.ico?v=vr1" />
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
