"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";

type HeroMediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  fit: "cover" | "contain";
  position?: string;
};

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    text: "Share your property type, energy needs, and whether you want solar, backup, or both.",
  },
  {
    number: "02",
    title: "We assess the best fit",
    text: "We recommend a practical solution based on your usage, requirements, and site conditions.",
  },
  {
    number: "03",
    title: "Move forward with confidence",
    text: "We handle the installation and support process with a focus on reliability and service.",
  },
];

const heroMedia: HeroMediaItem[] = [
  {
    type: "image",
    src: "/images/tp-electro-hero-1.webp",
    alt: "TP Electro residential solar installation",
    fit: "cover",
    position: "center center",
  },
  {
    type: "image",
    src: "/images/tp-electro-hero-2.webp",
    alt: "TP Electro rooftop solar installation",
    fit: "cover",
    position: "center center",
  },
  {
    type: "image",
    src: "/images/pv_roof.jpeg",
    alt: "TP Electro rooftop solar panel installation",
    fit: "cover",
    position: "center center",
  },
  {
    type: "image",
    src: "/images/5kw_TREX.jpeg",
    alt: "TP Electro inverter and battery system installation",
    fit: "contain",
    position: "center center",
  },
  {
    type: "image",
    src: "/images/stackable.jpeg",
    alt: "TP Electro stackable battery installation",
    fit: "contain",
    position: "center center",
  },
  {
    type: "image",
    src: "/images/Thabang_site.jpeg",
    alt: "TP Electro technician working on site",
    fit: "contain",
    position: "center center",
  },
  {
    type: "image",
    src: "/images/Wiring.jpeg",
    alt: "TP Electro electrical wiring and installation work",
    fit: "contain",
    position: "center center",
  },
  {
    type: "image",
    src: "/images/happy_customer.jpeg",
    alt: "Happy TP Electro customer after installation",
    fit: "contain",
    position: "center center",
  },
  {
    type: "video",
    src: "/images/TP_Electro_vid.mp4",
    alt: "TP Electro installation project video",
    fit: "cover",
    position: "center center",
  },
  {
    type: "video",
    src: "/images/video_randavel.mp4",
    alt: "TP Electro solar installation walkthrough video",
    fit: "cover",
    position: "center center",
  },
];

const HERO_ROTATION_MS = 5000;

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPaused || heroMedia.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroMedia.length);
    }, HERO_ROTATION_MS);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion, isPaused]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video || heroMedia[index]?.type !== "video") return;

      if (index === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {
          // Ignore autoplay blocking
        });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (
    <main>
      <section className="page-section hero-section hero-section--stacked">
        <div className="site-container">
          <div
            className="hero-content hero-content--wide"
            style={{
              maxWidth: "820px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              className="hero-eyebrow"
              style={{
                justifyContent: "center",
              }}
            >
              Solar • Backup • Electrical
            </p>

            <h1
              className="hero-title hero-title--wide home-hero-title"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Reliable solar and backup power for homes and businesses.
            </h1>

            <p
              className="hero-text hero-text--wide home-hero-text"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              TP Electro provides practical solar, backup, and electrical
              services designed to keep your property powered, efficient, and
              supported.
            </p>

            <div className="hero-actions hero-actions--center">
              <WhatsAppCTA
                intent="general_quote"
                label="Get a Quote"
                sourcePage="home"
                sourceSection="hero"
                audience="general"
                service="general"
              />

              <Link href="/projects" className="secondary-button">
                View Projects
              </Link>
            </div>
          </div>

          <div className="hero-banner hero-banner--home">
            <div
              className="hero-slider"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {heroMedia.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={item.src}
                    className={`hero-slide ${isActive ? "is-active" : ""} ${
                      item.fit === "contain" ? "is-contained" : "is-cover"
                    }`}
                    aria-hidden={!isActive}
                  >
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        priority={index === 0}
                        className="hero-slide-image"
                        sizes="(max-width: 768px) 100vw, 1240px"
                        style={{
                          objectFit: item.fit,
                          objectPosition: item.position ?? "center center",
                        }}
                      />
                    ) : (
                      <video
                        ref={(node) => {
                          videoRefs.current[index] = node;
                        }}
                        className="hero-slide-video"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        style={{
                          objectFit: "cover",
                          objectPosition: item.position ?? "center center",
                        }}
                      >
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                );
              })}

              <div className="hero-slider-badge">
                Real TP Electro installations
              </div>

              <div
                className="hero-slider-controls"
                role="tablist"
                aria-label="Homepage media gallery"
              >
                {heroMedia.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={`${item.src}-dot`}
                      type="button"
                      className={`hero-slider-dot ${isActive ? "is-active" : ""}`}
                      aria-label={`Show slide ${index + 1}`}
                      aria-pressed={isActive}
                      onClick={() => setActiveIndex(index)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-soft">
        <div className="site-container">
          <div
            className="section-heading"
            style={{
              maxWidth: "760px",
              margin: "0 auto 2.75rem",
              textAlign: "center",
            }}
          >
            <p className="section-eyebrow">How it works</p>
            <h2
              className="page-title section-title--wide"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              A simple process from enquiry to installation.
            </h2>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article key={step.number} className="content-card step-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <div
            className="content-card help-cta-card"
            style={{
              display: "block",
              maxWidth: "980px",
              margin: "0 auto",
            }}
          >
            <div
              className="help-cta-content"
              style={{
                maxWidth: "760px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <p className="section-eyebrow">Need guidance?</p>
              <h2
                className="page-title section-title--wide"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Need help planning the right setup?
              </h2>
              <p
                className="page-text section-text--wide"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                TP Electro can help you understand the best fit for your
                property, power needs, and installation goals.
              </p>
            </div>

            <div
              className="help-cta-actions"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.9rem",
                marginTop: "1.25rem",
              }}
            >
              <WhatsAppCTA
                intent="contact_general"
                label="Chat on WhatsApp"
                sourcePage="home"
                sourceSection="planning-help"
                audience="general"
                service="general"
                message="Hi TP Electro, I need help planning the right solar, backup, or electrical setup for my property. Please advise on the best next step."
              />

              <Link href="/contact" className="secondary-button">
                Contact Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}