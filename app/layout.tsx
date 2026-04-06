import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const BASE_URL = "https://kore7studio.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "KORE7 Studio | Treinamento Personalizado em São Luís - MA",
    template: "%s | KORE7 Studio",
  },
  description:
    "Studio de treinamento personalizado em São Luís, MA. Turmas reduzidas, personal trainer, avaliação física e consultoria online. Metodologia integrada com segurança e acompanhamento exclusivo. Agende sua aula experimental gratuita!",
  keywords: [
    "treinamento personalizado São Luís",
    "personal trainer São Luís MA",
    "studio fitness São Luís",
    "academia Altos do Calhau",
    "treino personalizado Maranhão",
    "KORE7",
    "KORE7 Studio",
    "musculação São Luís",
    "avaliação física São Luís",
    "consultoria fitness online",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "KORE7 Studio",
    title: "KORE7 Studio | Treinamento Personalizado em São Luís",
    description:
      "Fuja das academias lotadas. No KORE7 você tem turmas reduzidas, personal trainer e metodologia integrada. Agende sua aula experimental gratuita!",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KORE7 Studio — Treinamento Personalizado em São Luís, MA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KORE7 Studio | Treinamento Personalizado em São Luís",
    description:
      "Fuja das academias lotadas. No KORE7 você tem turmas reduzidas, personal trainer e metodologia integrada.",
    images: ["/opengraph-image"],
  },
  category: "fitness",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "KORE7 Studio",
  description:
    "Studio de treinamento personalizado com turmas reduzidas, personal trainer, avaliação física e consultoria online. Metodologia integrada com foco em condicionamento, mobilidade e prevenção de lesões.",
  url: BASE_URL,
  telephone: "+55-98-98578-9534",
  logo: `${BASE_URL}/logo-icon.png`,
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "Dinheiro, Cartão de crédito, Pix",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Xavier Chaves/da Caema, s/nº, Altos do Calhau Center, loja 06",
    addressLocality: "São Luís",
    addressRegion: "MA",
    postalCode: "65076-810",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -2.5284,
    longitude: -44.2654,
  },
  hasMap: "https://maps.google.com/?q=Altos+do+Calhau+Center+São+Luís+MA",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://wa.me/5598985789534",
    "https://www.instagram.com/kore7studio",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços KORE7",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Treino em Turma Reduzida",
          description: "Máximo 4 alunos por turma com acompanhamento profissional em cada sessão.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal Trainer",
          description: "Sessão 1:1 com acompanhamento exclusivo.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Avaliação Física",
          description: "Análise completa do histórico, objetivos e condição atual.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Consultoria Online",
          description: "Treinamento e orientação à distância com metodologia KORE7.",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "KORE7 Studio",
  url: BASE_URL,
  description: "Studio de treinamento personalizado em São Luís, Maranhão.",
  publisher: { "@id": `${BASE_URL}/#organization` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: BASE_URL },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={barlow.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
