import Image from "next/image";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const servicePoints = [
  {
    badge: "C",
    title: "COC & Compliance",
    text: "Work carried out with safety, inspection, testing, and compliance in mind, including support from a registered person where applicable.",
  },
  {
    badge: "S",
    title: "Solar & Backup Support",
    text: "Practical solar, inverter, battery, and backup power solutions designed around real operating needs.",
  },
  {
    badge: "M",
    title: "Maintenance & Repairs",
    text: "From fault finding and upgrades to rewiring, servicing, and ongoing support, we help keep systems running properly.",
  },
];

const trustHighlights = [
  {
    label: "Established",
    value: "2024",
    text: "Built on quality workmanship, customer satisfaction, and dependable service.",
  },
  {
    label: "Service Focus",
    value: "Residential • Commercial • Industrial",
    text: "Practical electrical and energy support across multiple client environments.",
  },
  {
    label: "Compliance",
    value: "Registered Person Support",
    text: "Inspection, testing, and qualifying compliance work handled with care and professionalism.",
  },
  {
    label: "After-Sales",
    value: "Support That Continues",
    text: "Maintenance, troubleshooting, upgrades, and warranty-related guidance after installation.",
  },
];

const introPoints = [
  "Safety-first workmanship",
  "Registered person support",
  "Practical solar and backup solutions",
];

export default function AboutPage() {
  const aboutQuoteHref = buildWhatsAppUrl("contact_general", {
    sourcePage: "about",
    sourceSection: "next-step",
    audience: "general",
    service: "general",
    message:
      "Hi TP Electro, I viewed your About page and would like to discuss an electrical, solar, backup power, inspection, upgrade, or maintenance project.",
  });

  return (
    <main>
      <section className="page-section">
        <div className="site-container">
          <div
            className="page-intro"
            style={{
              maxWidth: "860px",
              margin: "0 auto 1.4rem",
              textAlign: "center",
            }}
          >
            <p className="page-eyebrow">About TP Electro</p>

            <h1
              className="page-title"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "1rem",
                maxWidth: "18ch",
              }}
            >
              Practical electrical and solar solutions you can trust
            </h1>

            <p
              className="page-text"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 0,
                maxWidth: "70ch",
              }}
            >
              TP Electro provides dependable electrical, backup power, and
              solar-related services for residential, commercial, and
              industrial clients. Our work is built around safety, quality,
              compliance, and real-world reliability, with practical support
              for installations, maintenance, upgrades, inspections, and
              ongoing system care.
            </p>
          </div>

          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto 1.5rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.75rem",
            }}
          >
            {introPoints.map((point) => (
              <span
                key={point}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.7rem 1rem",
                  borderRadius: "999px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  boxShadow: "0 8px 18px rgba(8, 25, 18, 0.04)",
                }}
              >
                {point}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginBottom: "1.65rem",
            }}
          >
            {trustHighlights.map((item) => (
              <div
                key={item.label}
                className="content-card"
                style={{
                  padding: "1.1rem 1.15rem",
                  minHeight: "100%",
                }}
              >
                <p className="card-kicker" style={{ marginBottom: "0.45rem" }}>
                  {item.label}
                </p>

                <h2
                  style={{
                    margin: "0 0 0.55rem",
                    fontSize: "1.08rem",
                    lineHeight: 1.35,
                    color: "var(--foreground)",
                  }}
                >
                  {item.value}
                </h2>

                <p
                  className="hero-text"
                  style={{
                    margin: 0,
                    maxWidth: "none",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="page-grid page-grid--content-aside">
            <div className="page-column">
              <div className="content-card" style={{ padding: "1rem" }}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "430px",
                    borderRadius: "18px",
                    overflow: "hidden",
                    marginBottom: "1rem",
                  }}
                >
                  <Image
                    src="/images/about-technician.png"
                    alt="TP Electro technician inspecting an installed battery and inverter system"
                    fill
                    sizes="(max-width: 980px) 100vw, 60vw"
                    style={{
                      objectFit: "cover",
                    }}
                    priority
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <p className="card-kicker">Our approach</p>
                    <p
                      className="hero-text"
                      style={{ margin: 0, maxWidth: "none" }}
                    >
                      We approach every project with professionalism, technical
                      care, and attention to detail. Our focus is simple: do the
                      work properly, communicate clearly, and deliver solutions
                      that match the client’s actual needs.
                    </p>
                  </div>

                  <div>
                    <p className="card-kicker">What clients can expect</p>
                    <p
                      className="hero-text"
                      style={{ margin: 0, maxWidth: "none" }}
                    >
                      Clear advice, practical recommendations, reliable
                      workmanship, and support that does not end the moment the
                      installation is complete.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="page-column">
              <div className="hero-card" style={{ maxWidth: "none" }}>
                <p className="card-kicker">What we do best</p>

                <h2 className="hero-card-title">
                  Reliable support for installations, repairs, and backup power
                </h2>

                <div className="hero-card-list">
                  {servicePoints.map((item) => (
                    <div key={item.title} className="hero-card-item">
                      <span className="hero-card-badge">{item.badge}</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    height: "1px",
                    background: "var(--border)",
                    margin: "1.35rem 0",
                  }}
                />

                <p className="card-kicker">Why clients choose TP Electro</p>
                <p
                  className="hero-text"
                  style={{ maxWidth: "none", marginBottom: "1rem" }}
                >
                  We combine electrical expertise with practical service delivery,
                  helping clients with installations, inspections, maintenance,
                  backup systems, upgrades, and solar-related support that is
                  suited to real operating conditions.
                </p>

                <p className="card-kicker">Warranty & support</p>
                <p
                  className="hero-text"
                  style={{ maxWidth: "none", marginBottom: 0 }}
                >
                  We also guide clients on applicable product warranties,
                  workmanship expectations, and after-sales support so the full
                  solution remains clear from the start.
                </p>
              </div>
            </aside>
          </div>

          <div
            className="content-card"
            style={{
              marginTop: "1.75rem",
              padding: "1.35rem 1.35rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <div>
                <p className="card-kicker">Next step</p>
                <h2
                  style={{
                    margin: "0 0 0.6rem",
                    fontSize: "clamp(1.5rem, 2vw, 2rem)",
                    lineHeight: 1.15,
                    color: "var(--foreground)",
                  }}
                >
                  Need a dependable team for your next electrical or solar project?
                </h2>
                <p
                  className="hero-text"
                  style={{
                    margin: 0,
                    maxWidth: "60ch",
                  }}
                >
                  Speak to TP Electro about installations, backup power,
                  inspections, upgrades, repairs, maintenance, or project support.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.85rem",
                  justifyContent: "flex-start",
                }}
              >
                <a
                  href={aboutQuoteHref}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "48px",
                    padding: "0.9rem 1.35rem",
                    borderRadius: "999px",
                    background: "var(--primary)",
                    color: "#ffffff",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 12px 24px rgba(14, 122, 53, 0.18)",
                  }}
                >
                  Get a Quote
                </a>

                <Link
                  href="/projects"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "48px",
                    padding: "0.9rem 1.35rem",
                    borderRadius: "999px",
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    color: "var(--foreground)",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}