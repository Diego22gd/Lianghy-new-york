"use client";

import { motion, useReducedMotion } from "framer-motion";

const contactItems = [
  {
    label: "Email",
    value: "lianghy.mua@gmail.com",
    href: "mailto:lianghy.mua@gmail.com",
    icon: "✉",
    external: false,
  },
  {
    label: "Instagram",
    value: "@lianghy.mua",
    href: "https://instagram.com/lianghy.mua",
    icon: "◎",
    external: true,
  },
  {
    label: "WhatsApp",
    value: "Message me directly on WhatsApp.",
    href: "https://wa.me/",
    external: false,
    icon: "◌",
  },
  {
    label: "Location",
    value: "New York City, available for destination bookings.",
    href: "https://maps.google.com/?q=New+York+City",
    icon: "⌂",
    external: true,
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactPage() {
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
    <main className="inner-page contact-page">
      <section className="contact-editorial">
        <motion.div className="contact-editorial-copy" {...revealFromSide(-56)}>
          <span className="contact-kicker">Contact</span>
          <h1 className="contact-display-title">
            Let&apos;s
            <span>Connect</span>
          </h1>
          <div className="contact-divider" />

          <motion.p className="contact-lead" {...revealUp(0.14)}>
            I&apos;d love to hear from you. Whether you have a question, want to collaborate or you are ready to book, feel free to reach out.
          </motion.p>

          <div className="contact-editorial-links">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                className="contact-editorial-item"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                {...revealUp(0.18 + index * 0.08)}
              >
                <span className="contact-item-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="contact-item-copy">
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </span>
              </motion.a>
            ))}
          </div>

          <motion.p className="contact-signature-note" {...revealUp(0.5)}>
            Let&apos;s create something beautiful together.
          </motion.p>
        </motion.div>

        <motion.figure className="contact-editorial-visual" {...revealFromSide(56, 0.06)}>
          <div className="contact-photo-frame">
            <img
              src="https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1778702933/Rolando.Acunam_RWarehouse047_kpan2u.jpg"
              alt="Editorial beauty portrait for the contact section."
            />
          </div>
        </motion.figure>
      </section>
    </main>
  );
}