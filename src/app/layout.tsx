import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Gabriel Lemes | Portfólio",
  description:
    "Explore o portfólio de Gabriel Lemes, um desenvolvedor de software focado em criar aplicações modernas e performáticas",
  openGraph: {
    title: "Gabriel Lemes | Portfolio",
    description:
      "Explore o portfólio de Gabriel Lemes, um desenvolvedor de software focado em criar aplicações modernas e performáticas",
    url: "https://gabrielmlemes.vercel.app/",
    siteName: "Gabriel Lemes",
    images: [
      {
        url: "/gabriel-image.png",
        width: 800,
        height: 600,
        alt: "Gabriel Lemes",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Lemes | Portfólio",
    description:
      "Explore o portfólio de Gabriel Lemes, um desenvolvedor de software focado em criar aplicações modernas e performáticas",
    images: ["/gabriel-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

