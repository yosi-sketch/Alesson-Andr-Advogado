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
  themeColor: "#0d0b0a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ionebarcelos.adv.br"),
  title: "Ione Barcelos — Advogada | Direito Trabalhista · Vale do Aço · MG",
  description:
    "⚖️ Dra. Ione Barcelos — Advocacia Trabalhista com acolhimento humano, escuta atenta e firmeza técnica no Vale do Aço (Coronel Fabriciano, Ipatinga, Timóteo) e em todo o Brasil. Foco em Saúde Mental no Trabalho, Burnout, Doenças Ocupacionais, Rescisão Indireta e Direitos do Trabalhador. Nota 5,0 ★ no Google (22 avaliações).",
  keywords: [
    "Ione Barcelos Advogada",
    "Dra Ione Barcelos",
    "Advogada Trabalhista Vale do Aço",
    "Advogado Trabalhista Coronel Fabriciano",
    "Advogado Trabalhista Ipatinga",
    "Advogado Trabalhista Timóteo",
    "Saúde Mental no Trabalho",
    "Advogada Burnout",
    "Depressão e Trabalho",
    "Rescisão Indireta Vale do Aço",
    "Doença Ocupacional MG",
    "Acidente de Trabalho Ipatinga",
    "Direito do Trabalho Minas Gerais",
    "Horas Extras Vale do Aço",
    "Adicional de Insalubridade Vale do Aço",
  ],
  authors: [{ name: "Ione Barcelos — Advogada" }],
  creator: "Ione Barcelos — Advogada",
  publisher: "Ione Barcelos — Advogada",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=ione3", sizes: "any" },
      { url: "/favicon-32x32.png?v=ione3", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=ione3", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=ione3", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico?v=ione3",
    apple: [{ url: "/apple-icon.png?v=ione3", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.ionebarcelos.adv.br",
    title: "Ione Barcelos — Advogada | Direito Trabalhista · Vale do Aço · MG",
    description:
      "⚖️ Trabalhar faz parte da vida. Adoecer por causa do trabalho não deveria fazer. Advocacia Trabalhista Humanizada e Resolutiva. Nota 5,0 ★ no Google (22 avaliações). Vale do Aço - MG.",
    siteName: "Ione Barcelos — Advogada",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 426,
        alt: "Ione Barcelos — Advogada",
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
    name: "Ione Barcelos — Advogada",
    alternateName: "Dra. Ione Barcelos Advocacia Trabalhista",
    legalName: "Ione Barcelos — Advogada",
    telephone: "+55-31-98828-1637",
    email: "contato@ionebarcelos.adv.br",
    url: "https://www.ionebarcelos.adv.br",
    image: "https://www.ionebarcelos.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vale do Aço (Coronel Fabriciano / Ipatinga / Timóteo)",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "22",
    },
    areaServed: [
      "Vale do Aço",
      "Coronel Fabriciano",
      "Ipatinga",
      "Timóteo",
      "Santana do Paraíso",
      "Belo Horizonte",
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
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/ionebarcelos.adv",
      "https://wa.me/5531988281637",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=ione3" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=ione3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=ione3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=ione3" />
        <link rel="shortcut icon" href="/favicon.ico?v=ione3" />
        <meta name="theme-color" content="#0d0b0a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#0d0b0a] font-sans text-[#faf6f2] antialiased selection:bg-[#c5987f] selection:text-[#0d0b0a]">
        {children}
      </body>
    </html>
  );
}
