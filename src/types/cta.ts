export type CtaIntent =
  | "general_quote"
  | "residential_solar"
  | "commercial_solar"
  | "backup_power"
  | "battery_storage"
  | "maintenance_support"
  | "coc_compliance"
  | "existing_system_upgrade"
  | "contact_general";

export type ContactChannel = "whatsapp" | "email" | "auto";

export type CtaVariant = "primary" | "secondary" | "text";

export type CtaAudience =
  | "general"
  | "homeowner"
  | "business"
  | "property_manager"
  | "existing_customer";

export type CtaService =
  | "general"
  | "residential_solar"
  | "commercial_solar"
  | "backup_power"
  | "battery_storage"
  | "maintenance"
  | "coc"
  | "upgrade";

export interface CtaMetadata {
  sourcePage?: string;
  sourceSection?: string;
  audience?: CtaAudience | string;
  service?: CtaService | string;
  campaign?: string;
}

export interface CtaContent {
  label: string;
  whatsappMessage: string;
  emailSubject: string;
  emailBody: string;
}

export interface CtaBuildOptions extends CtaMetadata {
  label?: string;
  message?: string;
  emailSubject?: string;
  emailBody?: string;
}

export interface TrackCtaPayload extends CtaMetadata {
  intent: CtaIntent;
  channel: Exclude<ContactChannel, "auto">;
  label?: string;
  href?: string;
}