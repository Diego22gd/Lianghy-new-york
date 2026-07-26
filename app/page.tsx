"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="home-page">
      <Image
        src="/portada.jpg"
        alt="Lhiangy Studio Cover Desktop"
        fill
        priority
        sizes="(max-width: 768px) 1px, 100vw"
        className="hero-bg-image hero-bg-desktop"
      />
      <Image
        src="/portadatelefono.jpg"
        alt="Lhiangy Studio Cover Mobile"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1px"
        className="hero-bg-image hero-bg-mobile"
      />

      <div className="hero-overlay" />

      <section className="hero-content hero-content-minimal">
        <Image
          src="/logo.png"
          alt="Lhiangy"
          width={575}
          height={575}
          priority
          sizes="(max-width: 640px) 85vw, 520px"
          style={{ width: "min(460px, 75vw)", height: "auto" }}
          className="hero-logo hero-logo-large"
        />
        <div className="hero-copy hero-copy-minimal">
          <span className="hero-eyebrow">New York Makeup & Hair</span>
          <p className="hero-tagline">Timeless Beauty. Modern Artistry. Crafted with intention.</p>
          <p className="hero-subtext">
            Luxury makeup & hairstyling for brides, editorials and private clients.
          </p>
        </div>

        <div className="hero-mission-vision">
          <div className="mission-vision-card">
            <h3 className="mission-vision-title">Misión</h3>
            <p className="mission-vision-text">
              To provide refined makeup and hairstyling services that celebrate each client’s unique beauty through personalized artistry, attention to detail, and a commitment to excellence. Every experience is designed to inspire confidence, elegance, and lasting memories.
            </p>
          </div>
          <div className="mission-vision-card">
            <h3 className="mission-vision-title">Visión</h3>
            <p className="mission-vision-text">
              To become a trusted artist in the beauty industry, known for timeless artistry, uncompromising excellence, and a heart for serving every client. Through continuous growth and limitless creativity, my vision is to create beauty that empowers confidence and honors the uniqueness of every person.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}