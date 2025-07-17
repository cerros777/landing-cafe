import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tierra Negra Café — Donde el café se convierte en ritual.",
  description: "Landing page premium para café Tierra Negra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="font-sans antialiased bg-charcoal text-bone">
        {children}
      </body>
    </html>
  );
}
