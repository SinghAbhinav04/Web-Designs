import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stride — Sustainable Footwear for the Modern World",
  description:
    "Premium sustainable sneakers crafted from natural materials. Comfort meets consciousness. Light on your feet, lighter on the planet.",
  keywords: [
    "sustainable shoes",
    "eco-friendly sneakers",
    "natural materials",
    "premium footwear",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
