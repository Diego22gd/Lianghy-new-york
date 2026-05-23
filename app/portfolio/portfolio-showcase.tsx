"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Autoplay, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import type { PortfolioAsset, PortfolioModule } from "./portfolio-data";

type PortfolioShowcaseProps = {
  assets: PortfolioAsset[];
  module: PortfolioModule;
};

function withTransform(url: string, transform: string) {
  return url.includes("/upload/") ? url.replace("/upload/", `/upload/${transform}/`) : url;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function PortfolioShowcase({ assets, module }: PortfolioShowcaseProps) {
  const heroRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<PortfolioAsset | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [24, -24]);
  const copyY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-10, 10]);
  const canAnimate = mounted && !prefersReducedMotion;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedAsset) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedAsset(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedAsset]);

  const galleryAssets = assets;
  const featuredAssets = assets.slice(0, Math.max(assets.length, 1));
  const heroAsset = assets[0];

  return (
    <main className="portfolio-page">
      <div className="portfolio-shell">
        <section className="portfolio-topbar">
          <motion.div
            className="portfolio-brand"
            initial={false}
            animate={canAnimate ? { opacity: [0, 1], y: [16, 0] } : undefined}
            transition={{ duration: 0.75, ease }}
          >
            <strong>Makeup Portfolio</strong>
          </motion.div>
          <div className="portfolio-chip-row" aria-label="Portfolio tags">
            {module.tags.map((chip, index) => (
              <motion.span
                key={chip}
                className="portfolio-chip"
                initial={false}
                animate={canAnimate ? { opacity: [0, 1], y: [-8, 0] } : undefined}
                transition={{ duration: 0.55, delay: 0.12 + index * 0.08, ease }}
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </section>

        <section ref={heroRef} className="portfolio-hero" id="portfolio-top">
          <motion.figure
            className="portfolio-hero-visual"
            initial={false}
            animate={canAnimate ? { opacity: [0, 1], y: [18, 0] } : undefined}
            transition={{ duration: 0.9, ease }}
          >
            <motion.img
              className="portfolio-hero-media"
              src={withTransform(heroAsset.imageUrl, "f_auto,q_auto,c_fill,g_auto,w_1400,h_1700")}
              alt={heroAsset.alt}
              width={heroAsset.width}
              height={heroAsset.height}
              style={mounted ? { y: mediaY, scale: canAnimate ? 1.02 : 1 } : undefined}
            />
          </motion.figure>

          <motion.div
            className="portfolio-hero-copy"
            style={mounted ? { y: copyY } : undefined}
            initial={false}
            animate={canAnimate ? { opacity: [0, 1], y: [26, 0] } : undefined}
            transition={{ duration: 0.95, delay: 0.08, ease }}
          >
            <motion.p className="portfolio-script-note" initial={false} animate={canAnimate ? { opacity: [0, 1] } : undefined} transition={{ duration: 0.5, delay: 0.18 }}>
              Portfolio
            </motion.p>
            <motion.h1 className="portfolio-title" initial={false} animate={canAnimate ? { opacity: [0, 1], y: [32, 0] } : undefined} transition={{ duration: 0.85, delay: 0.12, ease }}>
              {module.title}
            </motion.h1>
            <motion.p className="portfolio-description" initial={false} animate={canAnimate ? { opacity: [0, 1], y: [18, 0] } : undefined} transition={{ duration: 0.7, delay: 0.22, ease }}>
              {module.subtitle}
            </motion.p>
            <motion.div className="portfolio-action-row" initial={false} animate={canAnimate ? { opacity: [0, 1], y: [14, 0] } : undefined} transition={{ duration: 0.7, delay: 0.28, ease }}>
              <a className="portfolio-link" href="#portfolio-gallery">
                View Gallery
              </a>
              <a className="portfolio-link portfolio-link-secondary" href="#portfolio-carousel">
                View Sequence
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="portfolio-section" id="portfolio-gallery">
          <div className="portfolio-section-head">
            <div>
              <span className="portfolio-script-note">Gallery</span>
              <h2>{module.galleryHeading}</h2>
            </div>
          </div>

          <div className="portfolio-gallery-grid">
            {galleryAssets.map((asset, index) => (
              <article
                key={asset.id}
                className="portfolio-gallery-card"
              >
                <button
                  type="button"
                  className="portfolio-media-trigger"
                  aria-label={`Open ${asset.title} in full view`}
                  onClick={() => setSelectedAsset(asset)}
                >
                  <img
                    src={withTransform(
                      asset.imageUrl,
                      index === 0 ? "f_auto,q_auto,c_fill,g_auto,w_1200,h_760" : "f_auto,q_auto,c_fill,g_auto,w_700,h_880",
                    )}
                    alt={asset.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    width={asset.width}
                    height={asset.height}
                  />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-section" id="portfolio-carousel">
          <div className="portfolio-section-head">
            <div>
              <span className="portfolio-script-note">Sequence</span>
              <h2>{module.sequenceHeading}</h2>
            </div>
          </div>

          <div className="portfolio-swiper-shell">
            <Swiper
              className="portfolio-swiper"
              modules={[Autoplay, EffectCreative]}
              effect="creative"
              loop={featuredAssets.length > 1}
              speed={900}
              centeredSlides
              grabCursor
              slidesPerView={2.15}
              spaceBetween={18}
              autoplay={
                featuredAssets.length > 1
                  ? {
                      delay: 2000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                      reverseDirection: true,
                    }
                  : false
              }
              creativeEffect={{
                limitProgress: 2,
                prev: {
                  translate: ["-78%", 0, -1],
                  scale: 0.9,
                  opacity: 0.6,
                },
                next: {
                  translate: ["78%", 0, -1],
                  scale: 0.96,
                  opacity: 0.86,
                },
              }}
              breakpoints={{
                641: {
                  slidesPerView: 2.9,
                  spaceBetween: 18,
                },
                901: {
                  slidesPerView: 3.35,
                  spaceBetween: 20,
                },
              }}
              aria-label="Portfolio sequence"
            >
            {featuredAssets.map((asset, index) => (
              <SwiperSlide key={asset.id} className="portfolio-swiper-slide">
                <article className="portfolio-swiper-card">
                  <button
                    type="button"
                    className="portfolio-media-trigger"
                    aria-label={`Open ${asset.title} in full view`}
                    onClick={() => setSelectedAsset(asset)}
                  >
                    <img
                      src={withTransform(asset.imageUrl, "f_auto,q_auto,c_fit,w_760,h_1180")}
                      alt={asset.alt}
                      loading="lazy"
                      width={asset.width}
                      height={asset.height}
                    />
                  </button>
                </article>
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </section>
      </div>

      {selectedAsset ? (
        <div className="portfolio-lightbox" role="dialog" aria-modal="true" aria-label={selectedAsset.title} onClick={() => setSelectedAsset(null)}>
          <button
            type="button"
            className="portfolio-lightbox-close"
            aria-label="Close full view"
            onClick={() => setSelectedAsset(null)}
          >
            Close
          </button>
          <div className="portfolio-lightbox-stage" onClick={(event) => event.stopPropagation()}>
            <img
              className="portfolio-lightbox-image"
              src={withTransform(selectedAsset.imageUrl, "f_auto,q_auto,w_1800")}
              alt={selectedAsset.alt}
              width={selectedAsset.width}
              height={selectedAsset.height}
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}