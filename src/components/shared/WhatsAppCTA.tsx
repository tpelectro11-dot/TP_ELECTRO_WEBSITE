"use client";

import type { ContactCTAProps } from "@/components/shared/ContactCTA";
import ContactCTA from "@/components/shared/ContactCTA";

type WhatsAppCTAProps = Omit<ContactCTAProps, "channel">;

export default function WhatsAppCTA(props: WhatsAppCTAProps) {
  return <ContactCTA {...props} channel="whatsapp" />;
}