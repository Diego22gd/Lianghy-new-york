import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lianghy | New York Luxury Makeup & Hairstyling",
  description:
    "Refined makeup and hairstyling studio in New York City for brides, editorials, and private clients. Timeless beauty, modern artistry, crafted with intention.",
  openGraph: {
    title: "Lianghy | New York Luxury Makeup & Hairstyling",
    description:
      "Refined makeup and hairstyling studio in New York City for brides, editorials, and private clients.",
    images: [
      {
        url: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778703619/Mira-7423_leg8rt.jpg",
        width: 1200,
        height: 630,
        alt: "Lianghy Studio Cover",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="home-page">
      <div className="hero-cover-section">
        <h1 className="sr-only">Lianghy Studio — Luxury Makeup &amp; Hairstyling in New York</h1>
        <Image
          src="/portada.jpg"
          alt="Lianghy Studio Cover Desktop"
          fill
          priority
          sizes="(max-width: 768px) 1px, 100vw"
          className="hero-bg-image hero-bg-desktop"
        />
        <Image
          src="/portadatelefono.jpg"
          alt="Lianghy Studio Cover Mobile"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1px"
          className="hero-bg-image hero-bg-mobile"
        />

        <div className="hero-overlay" />

        <section className="hero-content hero-content-minimal">
          <Image
            src="/logo.png"
            alt="Lianghy"
            width={575}
            height={575}
            priority
            sizes="(max-width: 640px) 85vw, 520px"
            style={{ width: "min(460px, 75vw)", height: "auto" }}
            className="hero-logo hero-logo-large"
          />
          <div className="hero-copy hero-copy-minimal">
            <span className="hero-eyebrow">New York Makeup &amp; Hair</span>
            <p className="hero-tagline">Timeless Beauty. Modern Artistry. Crafted with intention.</p>
            <p className="hero-subtext">
              Luxury makeup &amp; hairstyling for brides, editorials and private clients.
            </p>
          </div>

          <div className="hero-mission-vision hero-mission-vision-desktop">
            <div className="mission-vision-card">
              <h2 className="mission-vision-title">Misión</h2>
              <p className="mission-vision-text">
                To provide refined makeup and hairstyling services that celebrate each client’s unique beauty through personalized artistry, attention to detail, and a commitment to excellence. Every experience is designed to inspire confidence, elegance, and lasting memories.
              </p>
            </div>
            <div className="mission-vision-card">
              <h2 className="mission-vision-title">Visión</h2>
              <p className="mission-vision-text">
                To become a trusted artist in the beauty industry, known for timeless artistry, uncompromising excellence, and a heart for serving every client. Through continuous growth and limitless creativity, my vision is to create beauty that empowers confidence and honors the uniqueness of every person.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="hero-mission-vision-section-mobile">
        <div className="hero-mission-vision hero-mission-vision-mobile">
          <div className="mission-vision-card">
            <h2 className="mission-vision-title">Misión</h2>
            <p className="mission-vision-text">
              To provide refined makeup and hairstyling services that celebrate each client’s unique beauty through personalized artistry, attention to detail, and a commitment to excellence. Every experience is designed to inspire confidence, elegance, and lasting memories.
            </p>
          </div>
          <div className="mission-vision-card">
            <h2 className="mission-vision-title">Visión</h2>
            <p className="mission-vision-text">
              To become a trusted artist in the beauty industry, known for timeless artistry, uncompromising excellence, and a heart for serving every client. Through continuous growth and limitless creativity, my vision is to create beauty that empowers confidence and honors the uniqueness of every person.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}