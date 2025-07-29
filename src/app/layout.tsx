import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-zinc-50 dark:bg-gray-900 dark:text-gray-200 transition-colors`}
      >
        {children}
      </body>
    </html>
  );
}

