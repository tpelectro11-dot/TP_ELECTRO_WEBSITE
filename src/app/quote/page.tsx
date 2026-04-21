import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = {
  title: "Get a Quote | TP Electro",
  description:
    "Get a solar, backup power, or electrical quote from TP Electro.",
};

export default function QuotePage() {
  const whatsappHref = buildWhatsAppUrl("general_quote", {
    sourcePage: "quote",
    sourceSection: "hero",
    audience: "general",
    service: "general",
    message:
      "Hi TP Electro, I'm interested in a quote for a solar, backup power, or electrical solution.",
  });

  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Get a Quote</h1>
      <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Tell us what you need and we’ll guide you to the right solution for your home,
        business, or backup power needs.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.9rem 1.2rem",
            borderRadius: "999px",
            textDecoration: "none",
            background: "#16a34a",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Chat on WhatsApp
        </a>

        <Link
          href="/contact"
          style={{
            display: "inline-block",
            padding: "0.9rem 1.2rem",
            borderRadius: "999px",
            textDecoration: "none",
            border: "1px solid #cbd5e1",
            color: "#0f172a",
            fontWeight: 600,
          }}
        >
          Go to Contact Page
        </Link>
      </div>
    </main>
  );
}