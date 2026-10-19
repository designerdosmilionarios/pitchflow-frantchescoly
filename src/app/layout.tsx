import type { Metadata } from "next";
import { Inter, Barlow_Condensed, Anton, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PitchFlow Movement 2027 | Frantchescoly Vilella",
  description:
    "Uma jornada nacional em 2027 para conectar pessoas, ideias e oportunidades. Palestras, eventos e podcasts que aproximam startups, investidores e negocios por todo o Brasil.",
  keywords: [
    "PitchFlow Movement",
    "Frantchescoly Vilella",
    "Palestras Startups",
    "Investimentos",
    "Turne 2027",
    "Empreendedorismo",
    "Podcasts de Negocios",
  ],
  authors: [{ name: "Frantchescoly Vilella" }],
  metadataBase: new URL("https://pitchflowmovement.com.br"),
  openGraph: {
    title: "PitchFlow Movement 2027 | Frantchescoly Vilella",
    description:
      "One Movement. Infinite Opportunities. Do Brasil para o mundo. Conectando as 27 unidades federativas.",
    url: "https://pitchflowmovement.com.br",
    siteName: "PitchFlow Movement",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/photos/hero-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Frantchescoly Vilella - PitchFlow Movement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PitchFlow Movement 2027",
    description: "Uma jornada nacional em 2027 para conectar pessoas, ideias e oportunidades.",
    images: ["/assets/photos/hero-portrait.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${barlowCondensed.variable} ${anton.variable} ${caveat.variable} bg-bg-primary text-text-primary min-h-screen selection:bg-brand-blue selection:text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
