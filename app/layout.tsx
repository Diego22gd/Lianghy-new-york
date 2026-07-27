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
  metadataBase: new URL("https://lianghy.com"),
  title: {
    default: "Lianghy | New York Luxury Makeup & Hairstyling",
    template: "%s | Lianghy Beauty Studio",
  },
  description:
    "Refined makeup and hairstyling studio based in New York City for brides, editorials, and private clients. Timeless beauty, modern artistry, crafted with intention.",
  keywords: [
    "New York makeup artist",
    "NYC hairstylist",
    "bridal makeup NYC",
    "luxury bridal hair",
    "editorial makeup artist New York",
    "Lianghy beauty",
    "beauty studio NYC",
  ],
  authors: [{ name: "Lianghy" }],
  creator: "Lianghy",
  openGraph: {
    type: "website",
    locale: "es_US",
    url: "https://lianghy.com",
    siteName: "Lianghy Beauty Studio",
    title: "Lianghy | New York Luxury Makeup & Hairstyling",
    description:
      "Refined makeup and hairstyling studio based in New York City for brides, editorials, and private clients.",
    images: [
      {
        url: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703619/Mira-7423_leg8rt.jpg",
        width: 1200,
        height: 630,
        alt: "Lianghy Beauty Studio New York",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lianghy | New York Luxury Makeup & Hairstyling",
    description:
      "Refined makeup and hairstyling studio based in New York City for brides, editorials, and private clients.",
    images: ["https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703619/Mira-7423_leg8rt.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Lianghy Beauty Studio",
  "image": "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703619/Mira-7423_leg8rt.jpg",
  "description": "Refined makeup and hairstyling services in New York City celebrating unique beauty for brides, editorials, and private clients.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "telephone": "+17869674376",
  "email": "lianghym14@gmail.com",
  "url": "https://lianghy.com",
  "sameAs": [
    "https://instagram.com/lianghyy"
  ],
  "priceRange": "$$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}