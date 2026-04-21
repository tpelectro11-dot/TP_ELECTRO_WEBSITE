import Link from "next/link";
import Image from "next/image";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";

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

export default function HomePage() {
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

          <div className="hero-banner">
            <div className="hero-slider">
              <div className="hero-slide hero-slide--one">
                <Image
                  src="/images/tp-electro-hero-1.webp"
                  alt="TP Electro residential solar installation"
                  fill
                  priority
                  className="hero-slide-image"
                  sizes="(max-width: 768px) 100vw, 1240px"
                />
              </div>

              <div className="hero-slide hero-slide--two">
                <Image
                  src="/images/tp-electro-hero-2.webp"
                  alt="TP Electro rooftop solar installation"
                  fill
                  priority
                  className="hero-slide-image"
                  sizes="(max-width: 768px) 100vw, 1240px"
                />
              </div>

              <div className="hero-slider-badge">
                Real TP Electro installations
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