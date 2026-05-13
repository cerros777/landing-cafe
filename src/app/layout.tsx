import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grano Santo Café — Donde el café se convierte en ritual.",
  description: "Grano Santo es un café artesanal premium en San Salvador, El Salvador. Vive la experiencia del café como ritual.",
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
