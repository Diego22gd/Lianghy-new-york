"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <main className={`home-page ${isReady ? "home-ready" : "home-loading"}`}>
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/logo.png"
      >
        <source src="/mi-video.webm" type="video/webm" />
        <source src="/mi-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <section className="hero-content hero-content-minimal">
        <div className="logo-halo" aria-hidden="true" />
        <Image
          src="/logo.png"
          alt="Lhiangy"
          width={575}
          height={575}
          priority
          sizes="(max-width: 640px) 76vw, 600px"
          style={{ width: "min(600px, 82vw)", height: "auto" }}
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