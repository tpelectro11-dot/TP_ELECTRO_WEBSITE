"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { mainNavigation, primaryCta } from "../../content/navigation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  const mobileMenuQuoteHref = buildWhatsAppUrl("general_quote", {
    sourcePage: "global",
    sourceSection: "mobile-menu",
    audience: "general",
    service: "general",
    message:
      "Hi TP Electro, I would like a quote for an electrical, solar, backup power, or battery solution.",
  });

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (panelRef.current && target && !panelRef.current.contains(target)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-menu"
      className={`mobile-menu ${isOpen ? "open" : ""}`}
      aria-hidden={!isOpen}
    >
      <div className="mobile-menu-shell">
        <div
          ref={panelRef}
          className="mobile-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mobile-menu-brand-row">
            <Link
              href="/"
              className="mobile-menu-brand"
              onClick={onClose}
              aria-label="Go to homepage"
            >
              <Image
                src="/images/tp-electro-logo.png"
                alt="TP Electro logo"
                width={200}
                height={60}
                className="mobile-menu-brand-logo"
                priority
              />
            </Link>
          </div>

          <nav className="mobile-menu-nav" aria-label="Mobile navigation">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-menu-link"
                onClick={onClose}
              >
                <span>{item.label}</span>
                <span className="mobile-menu-arrow" aria-hidden="true">
                  ›
                </span>
              </Link>
            ))}

            <a
              href={mobileMenuQuoteHref}
              className="mobile-menu-cta"
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
            >
              {primaryCta.label}
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}