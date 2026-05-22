"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation, primaryCta } from "../../content/navigation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { buildPhoneUrl } from "@/lib/contact";
import { businessContact } from "@/content/contact";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const mobileMenuQuoteHref = buildWhatsAppUrl("general_quote", {
    sourcePage: "global",
    sourceSection: "mobile-menu",
    audience: "general",
    service: "general",
    message:
      "Hi TP Electro, I would like a quote for an electrical, solar, backup power, or battery solution.",
  });

  const phoneHref = buildPhoneUrl();

  useEffect(() => {
    if (!isOpen) return;

    const previousFocusedElement = document.activeElement as HTMLElement | null;

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

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 30);

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
      previousFocusedElement?.focus?.();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]);

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
          tabIndex={-1}
        >
          <div className="mobile-menu-panel-top">
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

            <button
              ref={closeButtonRef}
              type="button"
              className="mobile-menu-close"
              onClick={onClose}
              aria-label="Close mobile menu"
            >
              ×
            </button>
          </div>

          <div className="mobile-menu-intro">
            <p className="mobile-menu-eyebrow">Quick Navigation</p>
            <p className="mobile-menu-text">
              Choose a page below or contact TP Electro directly for the fastest
              response.
            </p>
          </div>

          <nav className="mobile-menu-nav" aria-label="Mobile navigation">
            {mainNavigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-menu-link ${isActive ? "is-active" : ""}`}
                  onClick={onClose}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  <span className="mobile-menu-arrow" aria-hidden="true">
                    ›
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mobile-menu-support">
            <a
              href={mobileMenuQuoteHref}
              className="mobile-menu-cta"
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
            >
              {primaryCta.label}
            </a>

            <a
              href={phoneHref}
              className="mobile-menu-secondary"
              onClick={onClose}
            >
              Call {businessContact.phoneDisplay}
            </a>

            <p className="mobile-menu-support-note">
              Fastest response on WhatsApp during business hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}