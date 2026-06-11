import type { Metadata } from "next";
import "./globals.css";
import "./premium.css";
import "./landing.css";

export const metadata: Metadata = {
  title: "SiPosMA - Sistem Informasi Posyandu",
  description: "Aplikasi Manajemen Posyandu Terintegrasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
