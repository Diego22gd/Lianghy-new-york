"use client";

import { motion, useReducedMotion } from "framer-motion";

const aboutParagraphs = [
  "I am a professional makeup artist, hairstylist and content creator with over 5 years of experience, focused on creating looks that elevate each client's natural beauty.",
  "My approach combines creativity, attention to detail, polished skin and techniques tailored to the mood, light and rhythm of every booking.",
  "Alongside client work, I test and review beauty products with an honest eye so I can recommend the right finish, texture and overall balance for each look.",
];

const aboutHighlights = [
  {
    label: "Beauty Direction",
    value: "Makeup and hairstyling for bridal, editorial and private bookings.",
  },
  {
    label: "On-Set Rhythm",
    value: "Calm preparation, clear timing and support that keeps the schedule moving.",
  },
  {
    label: "Photoshoot Ready",
    value: "Skin, texture and product choices built to hold up beautifully on camera.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion();

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
              alt="Portrait of Lhiangy."
            />
          </div>
          <figcaption>Beauty artist, hairstylist and visual storyteller.</figcaption>
        </motion.figure>

        <motion.div className="about-editorial-copy" {...revealFromSide(56, 0.06)}>
          <span className="about-kicker">About Me</span>
          <h1 className="about-display-title">
            Hi! I&apos;m
            <span>Lhiangy</span>
          </h1>
          <div className="about-divider" />

          <div className="about-paragraph-stack">
            {aboutParagraphs.map((paragraph, index) => (
              <motion.p key={paragraph} {...revealUp(0.14 + index * 0.08)}>
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.p className="about-script-note" {...revealUp(0.34)}>
            Soft structure, luminous skin and a finish that feels personal.
          </motion.p>

          <div className="about-detail-row">
            {aboutHighlights.map((highlight, index) => (
              <motion.article key={highlight.label} className="about-detail-card" {...revealUp(0.22 + index * 0.08)}>
                <strong>{highlight.label}</strong>
                <span>{highlight.value}</span>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}