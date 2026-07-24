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
          style={{ width: "min(500px, 80vw)", height: "auto" }}
          className="hero-logo hero-logo-large"
        />
        <div className="hero-copy hero-copy-minimal">
          <span className="hero-eyebrow">New York Makeup & Hair</span>
          <p>
            Makeup and hairstyling with a clean, refined and quietly modern point of view for brides, editorials and private events.
          </p>
        </div>
      </section>
    </main>
  );
}