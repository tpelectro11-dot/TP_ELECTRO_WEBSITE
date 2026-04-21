import { businessContact } from "@/content/contact";
import { getCtaContent } from "@/lib/contact";
import type { CtaBuildOptions, CtaIntent } from "@/types/cta";

export function sanitizePhoneNumber(value: string): string {
  return value.replace(/[^\d]/g, "");
}

export function buildWhatsAppMessage(
  intent: CtaIntent,
  options: CtaBuildOptions = {}
): string {
  const content = getCtaContent(intent, options);
  return content.whatsappMessage.trim();
}

export function buildWhatsAppUrl(
  intent: CtaIntent,
  options: CtaBuildOptions = {}
): string {
  const phone = sanitizePhoneNumber(businessContact.whatsappNumber);
  const message = encodeURIComponent(buildWhatsAppMessage(intent, options));

  return `https://wa.me/${phone}?text=${message}`;
}