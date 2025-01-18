import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blocklens",
  description: "Explore Media, Magazine, Art, Store, Articles, Print, Books, Conferences, and more.",
  keywords: "Media, Magazine, Art, Store, Articles, Print, Book, Conference, Corporation, UTXO",
  openGraph: {
    title: "Blocklens",
    description: "Discover the world of Media, Art, and Innovation.",
    type: "website",
    url: "https://blocklens-flame.vercel.app",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
