import { businessContact, ctaContentMap } from "@/content/contact";
import type {
  ContactChannel,
  CtaBuildOptions,
  CtaContent,
  CtaIntent,
  TrackCtaPayload,
} from "@/types/cta";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, unknown> }
    ) => void;
    umami?: {
      track: (eventName: string, payload?: Record<string, unknown>) => void;
    };
  }
}

export function getCtaContent(
  intent: CtaIntent,
  overrides: CtaBuildOptions = {}
): CtaContent {
  const base = ctaContentMap[intent];

  return {
    label: overrides.label ?? base.label,
    whatsappMessage: overrides.message ?? base.whatsappMessage,
    emailSubject: overrides.emailSubject ?? base.emailSubject,
    emailBody: overrides.emailBody ?? base.emailBody,
  };
}

export function buildCtaContextLines(
  options: CtaBuildOptions = {}
): string[] {
  const lines: string[] = [];

  if (options.sourcePage) {
    lines.push(`Source page: ${options.sourcePage}`);
  }

  if (options.sourceSection) {
    lines.push(`Section: ${options.sourceSection}`);
  }

  if (options.audience) {
    lines.push(`Audience: ${options.audience}`);
  }

  if (options.service) {
    lines.push(`Service: ${options.service}`);
  }

  if (options.campaign) {
    lines.push(`Campaign: ${options.campaign}`);
  }

  return lines;
}

export function buildMailtoUrl(
  intent: CtaIntent,
  options: CtaBuildOptions = {}
): string {
  const content = getCtaContent(intent, options);
  const subject = encodeURIComponent(content.emailSubject);
  const body = encodeURIComponent(content.emailBody.trim());

  return `mailto:${businessContact.email}?subject=${subject}&body=${body}`;
}

export function buildPhoneUrl(): string {
  return `tel:${businessContact.phoneNumber.replace(/\s+/g, "")}`;
}

export function resolveChannel(
  channel: ContactChannel = "auto"
): Exclude<ContactChannel, "auto"> {
  return channel === "email" ? "email" : "whatsapp";
}

export function trackCtaClick(payload: TrackCtaPayload): void {
  if (typeof window === "undefined") {
    return;
  }

  const eventName =
    payload.channel === "whatsapp"
      ? "whatsapp_cta_click"
      : payload.channel === "email"
      ? "email_cta_click"
      : "contact_cta_click";

  const eventPayload: Record<string, unknown> = {
    intent: payload.intent,
    channel: payload.channel,
    label: payload.label,
    href: payload.href,
    sourcePage: payload.sourcePage,
    sourceSection: payload.sourceSection,
    audience: payload.audience,
    service: payload.service,
    campaign: payload.campaign,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventPayload);
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...eventPayload,
    });
  }

  if (typeof window.plausible === "function") {
    window.plausible(eventName, { props: eventPayload });
  }

  if (window.umami?.track) {
    window.umami.track(eventName, eventPayload);
  }

  if (process.env.NODE_ENV !== "production") {
    console.info("[CTA TRACK]", eventName, eventPayload);
  }
}

export { businessContact };