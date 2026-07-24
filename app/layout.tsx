import type { Metadata } from "next";
import localFont from "next/font/local";
import { Jost } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../components/site-header";

const displayFont = localFont({
  src: "../bacalisties/Bacalisties.ttf",
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Lhiangy | Beauty Studio",
  description: "Minimalist makeup and hairstyling studio based in New York.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}