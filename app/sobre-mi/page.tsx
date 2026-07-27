import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "Sobre Mí | Lianghy Beauty Artist & Hairstylist NYC",
  description:
    "Learn about Lianghy, a professional makeup artist and hairstylist based in New York City with over 5 years of experience in bridal, editorial, and private bookings.",
  openGraph: {
    title: "Sobre Mí | Lianghy Beauty Artist & Hairstylist NYC",
    description:
      "Professional makeup artist and hairstylist based in New York City with over 5 years of experience.",
    images: [
      {
        url: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1779510820/aboutme_gv0ng0.jpg",
        width: 1200,
        height: 630,
        alt: "Lianghy Portrait",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}