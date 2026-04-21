"use client";

import type { ReactNode } from "react";
import { buildMailtoUrl, getCtaContent, resolveChannel, trackCtaClick } from "@/lib/contact";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type {
  ContactChannel,
  CtaBuildOptions,
  CtaIntent,
  CtaVariant,
} from "@/types/cta";

export interface ContactCTAProps extends CtaBuildOptions {
  intent: CtaIntent;
  channel?: ContactChannel;
  label?: string;
  variant?: CtaVariant;
  className?: string;
  openInNewTab?: boolean;
  icon?: ReactNode;
  ariaLabel?: string;
}

const variantClassMap: Record<CtaVariant, string> = {
  primary: "primary-button",
  secondary: "secondary-button",
  text: "",
};

function joinClasses(...values: Array<string | undefined | false | null>) {
  return values.filter(Boolean).join(" ");
}

export default function ContactCTA({
  intent,
  channel = "auto",
  label,
  variant = "primary",
  className,
  openInNewTab = true,
  icon,
  ariaLabel,
  sourcePage,
  sourceSection,
  audience,
  service,
  campaign,
  message,
  emailSubject,
  emailBody,
}: ContactCTAProps) {
  const resolvedChannel = resolveChannel(channel);
  const options: CtaBuildOptions = {
    label,
    sourcePage,
    sourceSection,
    audience,
    service,
    campaign,
    message,
    emailSubject,
    emailBody,
  };

  const content = getCtaContent(intent, options);

  const href =
    resolvedChannel === "email"
      ? buildMailtoUrl(intent, options)
      : buildWhatsAppUrl(intent, options);

  const handleClick = () => {
    trackCtaClick({
      intent,
      channel: resolvedChannel,
      label: content.label,
      href,
      sourcePage,
      sourceSection,
      audience,
      service,
      campaign,
    });
  };

  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel ?? content.label}
      className={joinClasses(variantClassMap[variant], className)}
      onClick={handleClick}
      data-cta-intent={intent}
      data-cta-channel={resolvedChannel}
      data-cta-source-page={sourcePage}
      data-cta-source-section={sourceSection}
    >
      {icon ? (
        <span
          aria-hidden="true"
          style={{
            display: "inline-flex",
            alignItems: "center",
            marginRight: "0.45rem",
          }}
        >
          {icon}
        </span>
      ) : null}
      {content.label}
    </a>
  );
}