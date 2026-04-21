import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const solutionLinks = [
  { label: "Residential Solar", href: "/contact" },
  { label: "Commercial Projects", href: "/contact" },
  { label: "Backup Power", href: "/contact" },
  { label: "Battery Storage", href: "/contact" },
  { label: "Maintenance & Upgrades", href: "/contact" },
];

const trustTags = ["Registered person support", "COC-related work"];

export default function Footer() {
  const year = new Date().getFullYear();

  const footerQuoteHref = buildWhatsAppUrl("general_quote", {
    sourcePage: "global",
    sourceSection: "footer",
    audience: "general",
    service: "general",
    message:
      "Hi TP Electro, I would like a quote for an electrical, solar, backup power, or battery solution.",
  });

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid footer-grid--enhanced">
          <div className="footer-column footer-column--brand">
            <h3 className="footer-title">TP Electro</h3>

            <p className="footer-text">
              Dependable electrical, solar, backup power, and battery solutions
              for homes, businesses, and industrial environments.
            </p>

            <div className="footer-company-meta">
              <p className="footer-meta-item">
                Residential • Commercial • Industrial
              </p>
              <p className="footer-meta-item">
                <strong>Registration No:</strong> 2024/400450/07
              </p>
              <p className="footer-meta-item">
                <strong>CSD Supplier No:</strong> MAAA1626827
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Solutions</h4>
            <ul className="footer-links">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column footer-column--cta">
            <h4 className="footer-heading">Work With Us</h4>

            <p className="footer-text">
              Speak to us about installations, backup power systems, upgrades,
              compliance support, repairs, or ongoing electrical project work.
            </p>

            <div className="footer-tag-list">
              {trustTags.map((tag) => (
                <span key={tag} className="footer-tag">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={footerQuoteHref}
              target="_blank"
              rel="noreferrer"
              className="footer-cta"
            >
              Get a Quote
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} TP Electro. All rights reserved.</p>
          <p>Built for dependable electrical and energy support.</p>
        </div>
      </div>
    </footer>
  );
}