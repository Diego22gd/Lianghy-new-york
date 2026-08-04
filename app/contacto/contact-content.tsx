"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

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

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

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
            I&apos;d love to hear from you. Whether you have a question, want to collaborate, or are ready to book your luxury session in NYC, select any channel below or send a direct email message.
          </motion.p>

          <div className="contact-editorial-links">
            {/* EMAIL ITEM - Triggers Contact Modal */}
            <motion.button
              type="button"
              className="contact-editorial-item contact-item-btn"
              onClick={() => setIsModalOpen(true)}
              {...revealUp(0.18)}
            >
              <span className="contact-item-icon" aria-hidden="true">
                <img src="/icons/email.png" alt="Email icon" className="contact-icon-img" />
              </span>
              <span className="contact-item-copy">
                <strong>Email</strong>
                <span>Enviar mensaje por formulario</span>
              </span>
            </motion.button>

            {/* INSTAGRAM ITEM */}
            <motion.a
              className="contact-editorial-item"
              href="https://instagram.com/lianghyy"
              target="_blank"
              rel="noreferrer"
              {...revealUp(0.26)}
            >
              <span className="contact-item-icon" aria-hidden="true">
                <img src="/icons/instagram.png" alt="Instagram icon" className="contact-icon-img" />
              </span>
              <span className="contact-item-copy">
                <strong>Instagram</strong>
                <span>@lianghyy</span>
              </span>
            </motion.a>

            {/* WHATSAPP ITEM */}
            <motion.a
              className="contact-editorial-item"
              href="https://wa.me/17869674376"
              target="_blank"
              rel="noreferrer"
              {...revealUp(0.34)}
            >
              <span className="contact-item-icon" aria-hidden="true">
                <img src="/icons/whatsapp.png" alt="WhatsApp icon" className="contact-icon-img" />
              </span>
              <span className="contact-item-copy">
                <strong>WhatsApp</strong>
                <span>+1 (786) 967-4376</span>
              </span>
            </motion.a>

            {/* LOCATION ITEM */}
            <motion.a
              className="contact-editorial-item"
              href="https://maps.google.com/?q=New+York+City"
              target="_blank"
              rel="noreferrer"
              {...revealUp(0.42)}
            >
              <span className="contact-item-icon" aria-hidden="true">
                <img src="/icons/location.png" alt="Location icon" className="contact-icon-img" />
              </span>
              <span className="contact-item-copy">
                <strong>Location</strong>
                <span>Nueva York</span>
              </span>
            </motion.a>
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

      {/* CONTACT FORM MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="contact-modal-overlay" onClick={() => setIsModalOpen(false)}>
            <motion.div
              className="contact-modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.3, ease }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="contact-modal-header">
                <div>
                  <span className="contact-kicker">Contacto por Email</span>
                  <h2 id="modal-title" className="contact-modal-title">
                    Enviar Mensaje
                  </h2>
                </div>
                <button
                  type="button"
                  className="contact-modal-close"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Cerrar formulario"
                >
                  ✕
                </button>
              </div>

              {status === "success" ? (
                <div className="contact-success-banner">
                  <div className="success-icon">✓</div>
                  <h3>¡Mensaje Enviado con Éxito!</h3>
                  <p>Gracias por contactarnos. Responderemos a tu consulta lo antes posible.</p>
                  <div className="success-actions">
                    <button
                      type="button"
                      className="contact-btn-secondary"
                      onClick={() => setStatus("idle")}
                    >
                      Enviar otro mensaje
                    </button>
                    <button
                      type="button"
                      className="contact-btn-secondary"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cerrar ventana
                    </button>
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
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
