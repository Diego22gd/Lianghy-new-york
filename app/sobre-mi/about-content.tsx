"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type AboutMediaItem = {
  id: string;
  type: "image" | "video";
  url: string;
  videoMp4Url?: string;
  title: string;
  category: string;
};

const aboutParagraphs = [
  {
    text: "I am a professional makeup artist, hairstylist and content creator with over 5 years of experience, focused on creating looks that elevate each client's natural beauty.",
    image: "https://res.cloudinary.com/dqcpmau9i/image/upload/f_auto,q_auto/v1784902703/Photo_Jul_21_2026_11_33_27_AM_xeuptb.jpg",
    alt: "Editorial makeup detail 1",
  },
  {
    text: "My approach combines creativity, attention to detail, polished skin and techniques tailored to the mood, light and rhythm of every booking.",
    image: "https://res.cloudinary.com/dqcpmau9i/image/upload/f_auto,q_auto/v1784902705/Photo_Jul_21_2026_11_33_27_AM_3_s2zyqb.jpg",
    alt: "Editorial makeup detail 2",
  },
  {
    text: "Alongside client work, I test and review beauty products with an honest eye so I can recommend the right finish, texture and overall balance for each look.",
    image: "https://res.cloudinary.com/dqcpmau9i/image/upload/f_auto,q_auto/v1785177717/Photo_Jul_27_2026_11_09_35_AM_1_capcw3.jpg",
    alt: "Editorial makeup detail 3",
  },
];

const galleryItems: AboutMediaItem[] = [
  {
    id: "about-media-1",
    type: "video",
    url: "https://res.cloudinary.com/dqcpmau9i/video/upload/ac_none,so_0,eo_10,f_mp4,q_auto/v1784902702/Video_Feb_12_2026_11_46_10_AM_lxlbby.mp4",
    videoMp4Url: "https://res.cloudinary.com/dqcpmau9i/video/upload/ac_none,so_0,eo_10,f_mp4,q_auto/v1784902702/Video_Feb_12_2026_11_46_10_AM_lxlbby.mp4",
    title: "Glam & Hair Prep Reel",
    category: "Video Reel",
  },
  {
    id: "about-media-4",
    type: "image",
    url: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784902710/Photo_Jul_21_2026_11_33_27_AM_7_hwyly3.jpg",
    title: "Hairstyling & Polished Finish",
    category: "Featured Work",
  },
  {
    id: "about-media-7",
    type: "image",
    url: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1784902704/Photo_Jul_21_2026_11_33_27_AM_1_uoscmv.jpg",
    title: "Editorial Beauty Portrait",
    category: "Featured Work",
  },
  {
    id: "about-media-8",
    type: "image",
    url: "https://res.cloudinary.com/dqcpmau9i/image/upload/v1785177765/Photo_Feb_09_2026_12_59_20_PM_pzihfk.jpg",
    title: "Editorial Makeup Direction",
    category: "Featured Work",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutContent() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const activeItem = selectedIdx !== null ? galleryItems[selectedIdx] : null;

  useEffect(() => {
    if (selectedIdx === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIdx(null);
      } else if (event.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1));
      } else if (event.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0));
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIdx]);

  const revealFromSide = (x: number, delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, x },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.28 },
          transition: { duration: 0.9, delay, ease },
        };

  const revealUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.28 },
          transition: { duration: 0.72, delay, ease },
        };

  return (
    <main className="inner-page about-page">
      <section className="about-editorial">
        <motion.figure className="about-editorial-visual" {...revealFromSide(-56)}>
          <div className="about-photo-frame">
            <img
              src="https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1779510820/aboutme_gv0ng0.jpg"
              alt="Portrait of Lianghy."
            />
          </div>
          <figcaption>Beauty artist, hairstylist and visual storyteller.</figcaption>
        </motion.figure>

        <motion.div className="about-editorial-copy" {...revealFromSide(56, 0.06)}>
          <span className="about-kicker">About Me</span>
          <h1 className="about-display-title">
            Hi! I&apos;m
            <span>Lianghy</span>
          </h1>
          <div className="about-divider" />

          <div className="about-paragraph-stack">
            {aboutParagraphs.map((item, index) => (
              <div key={index} className="about-paragraph-block">
                <p>{item.text}</p>
                <div className="about-inline-photo">
                  <img src={item.image} alt={item.alt} />
                </div>
              </div>
            ))}
          </div>

          <motion.p className="about-script-note" {...revealUp(0.34)}>
            Soft structure, luminous skin and a finish that feels personal.
          </motion.p>
        </motion.div>
      </section>

      {/* Featured Works & Video Reels Gallery Section */}
      <section className="about-gallery-section" id="about-gallery">
        <div className="about-gallery-head">
          <span className="about-kicker">Portfolio Highlights</span>
          <h2>Selected Work &amp; Video Reels</h2>
        </div>

        <div className="about-gallery-grid">
          {galleryItems.map((item, idx) => (
            <motion.article
              key={item.id}
              className="about-gallery-card"
              onClick={() => setSelectedIdx(idx)}
              {...revealUp(0.1 + idx * 0.06)}
            >
              {item.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="about-gallery-video"
                >
                  {item.videoMp4Url && <source src={item.videoMp4Url} type="video/mp4" />}
                  <source src={item.url} type="video/quicktime" />
                </video>
              ) : (
                <img src={item.url} alt={item.title} loading="lazy" />
              )}
            </motion.article>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for About Gallery */}
      {selectedIdx !== null && activeItem && (
        <div className="portfolio-lightbox" role="dialog" aria-modal="true">
          <div className="portfolio-lightbox-backdrop" onClick={() => setSelectedIdx(null)} />
          <div className="portfolio-lightbox-content">
            <button
              type="button"
              className="portfolio-lightbox-close"
              onClick={() => setSelectedIdx(null)}
              aria-label="Close modal"
            >
              Close
            </button>

            {activeItem.type === "video" ? (
              <video
                controls
                autoPlay
                playsInline
                className="portfolio-lightbox-image"
                key={activeItem.id}
              >
                {activeItem.videoMp4Url && <source src={activeItem.videoMp4Url} type="video/mp4" />}
                <source src={activeItem.url} type="video/quicktime" />
              </video>
            ) : (
              <img
                src={activeItem.url}
                alt={activeItem.title}
                className="portfolio-lightbox-image"
              />
            )}
          </div>
        </div>
      )}
    </main>
  );
}
