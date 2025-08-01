import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Gabriel Lemes | Portfolio",
  description:
    "Explore o portfólio de Gabriel Lemes, um desenvolvedor de software focado em criar aplicações modernas e performáticas",
  openGraph: {
    title: "Gabriel Lemes | Portfolio",
    description:
      "Explore o portfólio de Gabriel Lemes, um desenvolvedor de software focado em criar aplicações modernas e performáticas",
    url: "https://gabriellemes.vercel.app",
    siteName: "Gabriel Lemes",
    images: [
      {
        url: "/me.jpeg",
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
    title: "Gabriel Lemes | Portfolio",
    description:
      "Explore o portfólio de Gabriel Lemes, um desenvolvedor de software focado em criar aplicações modernas e performáticas",
    images: ["/me.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

