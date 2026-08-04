"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

const directContactItems = [
  {
    label: "Instagram",
    value: "@lianghyy",
    href: "https://instagram.com/lianghyy",
    iconSrc: "/icons/instagram.png",
    external: true,
  },
  {
    label: "WhatsApp",
    value: "+1 (786) 967-4376",
    href: "https://wa.me/17869674376",
    iconSrc: "/icons/whatsapp.png",
    external: true,
  },
  {
    label: "Location",
    value: "Nueva York",
    href: "https://maps.google.com/?q=New+York+City",
    iconSrc: "/icons/location.png",
    external: true,
  },
] as const;

const serviceOptions = [
  "Bridal Makeup & Hair (Novias)",
  "Editorial & Campaign (Moda / Editorial)",
  "Special Event & Red Carpet (Eventos)",
  "Private Studio Session (Consulta Privada)",
  "Otros / General",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactContent() {
  const prefersReducedMotion = useReducedMotion();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: serviceOptions[0],
    message: "",
    b_website_url: "", // Invisible honeypot field for bot trapping
  });
  const [mountedTime, setMountedTime] = useState<number>(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setMountedTime(Date.now());
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: mountedTime,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          service: serviceOptions[0],
          message: "",
          b_website_url: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Hubo un problema al enviar tu mensaje. Intenta nuevamente.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("No se pudo conectar con el servidor. Verifica tu conexión.");
    }
  };

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
          <span className="contact-kicker">Contacto & Consultas</span>
          <h1 className="contact-display-title">
            Let&apos;s
            <span>Connect</span>
          </h1>
          <div className="contact-divider" />

          <motion.p className="contact-lead" {...revealUp(0.14)}>
            I&apos;d love to hear from you. Whether you have a question, want to collaborate, or are ready to book your luxury session in NYC, feel free to fill out the form below.
          </motion.p>

          {/* Interactive Anti-Bot Contact Form */}
          <motion.div className="contact-form-container" {...revealUp(0.2)}>
            {status === "success" ? (
              <div className="contact-success-banner">
                <div className="success-icon">✓</div>
                <h3>¡Mensaje Enviado con Éxito!</h3>
                <p>Gracias por contactarnos. Responderemos a tu solicitud a la brevedad posible.</p>
                <div className="success-actions">
                  <button
                    type="button"
                    className="contact-btn-secondary"
                    onClick={() => setStatus("idle")}
                  >
                    Enviar otro mensaje
                  </button>
                  <a
                    href="https://wa.me/17869674376"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-btn-whatsapp"
                  >
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Honeypot field - Invisible to humans, triggers bot trap if filled */}
                <div className="b-hp-field" aria-hidden="true">
                  <label htmlFor="b_website_url">Leave this field blank</label>
                  <input
                    type="text"
                    id="b_website_url"
                    name="b_website_url"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.b_website_url}
                    onChange={(e) => setFormData({ ...formData, b_website_url: e.target.value })}
                  />
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="contact-name">Nombre completo *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Tu nombre y apellido"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Correo electrónico *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="tu.email@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-service">Servicio de interés</label>

                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Mensaje / Detalles del Evento *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Cuéntanos sobre tu fecha, locación en NYC o consulta específica..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {status === "error" && (
                  <div className="contact-error-banner">{errorMessage}</div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="contact-submit-btn"
                >
                  {status === "submitting" ? (
                    <span className="submit-spinner">Enviando mensaje...</span>
                  ) : (
                    <span>Enviar Mensaje</span>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <div className="contact-editorial-links">
            {directContactItems.map((item, index) => (
              <motion.a
                key={item.label}
                className="contact-editorial-item"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                {...revealUp(0.35 + index * 0.08)}
              >
                <span className="contact-item-icon" aria-hidden="true">
                  <img src={item.iconSrc} alt={`${item.label} icon`} className="contact-icon-img" />
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
