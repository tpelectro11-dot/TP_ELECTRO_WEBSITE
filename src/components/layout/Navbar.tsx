"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNavigation, primaryCta } from "../../content/navigation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navbarQuoteHref = buildWhatsAppUrl("general_quote", {
    sourcePage: "global",
    sourceSection: "navbar",
    audience: "general",
    service: "general",
    message:
      "Hi TP Electro, I would like a quote for an electrical, solar, backup power, or battery solution.",
  });

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-container navbar">
        <Link
          href="/"
          className="brand-logo-link"
          onClick={closeMenu}
          aria-label="TP Electro Home"
        >
          <Image
            src="/images/tp-electro-logo.png"
            alt="TP Electro logo"
            width={420}
            height={126}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {mainNavigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <a
            href={navbarQuoteHref}
            className="nav-cta desktop-cta"
            target="_blank"
            rel="noreferrer"
          >
            {primaryCta.label}
          </a>

          <button
            type="button"
            className={`menu-toggle ${isOpen ? "active" : ""}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </header>
  );
}