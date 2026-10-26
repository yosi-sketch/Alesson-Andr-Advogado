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
  themeColor: "#0f0508",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carolinavasconcelos.adv.br"),
  title: "Carolina Vasconcelos — Advocacia | Direito de Família & Sucessões · Paraguaçu · MG",
  description:
    "⚖️ Dra. Carolina Vasconcelos — Advocacia Humanizada e de Alta Precisão em Direito das Famílias e Sucessões. Especialista em Divórcio, Pensão Alimentícia, Guarda de Filhos, Inventário e Partilha de Bens. Atendimento em Paraguaçu, Alfenas, Varginha, Sul de Minas e em todo o Brasil. Nota Máxima 5,0 ★ no Google (21 avaliações).",
  keywords: [
    "Carolina Vasconcelos Advocacia",
    "Dra Carolina Vasconcelos",
    "Advogada Familiarista Paraguaçu",
    "Advogado de Família Paraguaçu MG",
    "Divórcio e Separação Paraguaçu",
    "Pensão Alimentícia Paraguaçu MG",
    "Guarda dos Filhos e Convivência",
    "Inventário e Sucessões Paraguaçu",
    "Partilha de Bens Sul de Minas",
    "Advogada de Família Alfenas",
    "Advogado de Família Varginha",
    "Direito das Famílias Minas Gerais",
    "Contrato de Convivência e União Estável",
  ],
  authors: [{ name: "Carolina Vasconcelos — Advocacia" }],
  creator: "Carolina Vasconcelos — Advocacia",
  publisher: "Carolina Vasconcelos — Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=cv2", sizes: "any" },
      { url: "/favicon-32x32.png?v=cv2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=cv2", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=cv2", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico?v=cv2",
    apple: [{ url: "/apple-icon.png?v=cv2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.carolinavasconcelos.adv.br",
    title: "Carolina Vasconcelos — Advocacia | Direito de Família & Sucessões",
    description:
      "⚖️ Advocacia Humanizada, Segura e Resolutiva. Especialista em Pensão, Guarda, Divórcio e Inventário. Mais de 300 processos e nota máxima 5,0 ★ no Google (21 avaliações). Paraguaçu - MG.",
    siteName: "Carolina Vasconcelos — Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 682,
        alt: "Carolina Vasconcelos — Advocacia",
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
    name: "Carolina Vasconcelos — Advocacia",
    alternateName: "Dra. Carolina Vasconcelos Advocacia Familiarista",
    legalName: "Carolina Vasconcelos — Advocacia",
    telephone: "+55-35-98406-3030",
    email: "contato@carolinavasconcelos.adv.br",
    url: "https://www.carolinavasconcelos.adv.br",
    image: "https://www.carolinavasconcelos.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Gonçalves Leite, 156 - Centro",
      addressLocality: "Paraguaçu",
      addressRegion: "MG",
      postalCode: "37120-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "21",
    },
    areaServed: [
      "Paraguaçu",
      "Alfenas",
      "Varginha",
      "Machado",
      "Poços de Caldas",
      "Pouso Alegre",
      "Sul de Minas",
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
      "https://www.instagram.com/carolinav.advogada/",
      "https://wa.me/5535984063030",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=cv2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=cv2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=cv2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=cv2" />
        <link rel="shortcut icon" href="/favicon.ico?v=cv2" />
        <meta name="theme-color" content="#0f0508" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#0f0508] font-sans text-[#fbfaf5] antialiased selection:bg-[#dca94e] selection:text-[#0f0508]">
        {children}
      </body>
    </html>
  );
}
