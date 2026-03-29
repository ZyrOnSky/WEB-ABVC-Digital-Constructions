import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Construction | Infraestructura que se vende mejor",
  description:
    "Landing page corporativa para una empresa que conecta construccion, visualizacion y ventas con experiencias digitales de alto impacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
