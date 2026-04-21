import type { CtaContent, CtaIntent } from "@/types/cta";

export const businessContact = {
  businessName: "TP Electro",
  whatsappNumber: "27676997547",
  whatsappDisplay: "+27 67 699 7547",
  phoneNumber: "27676997547",
  phoneDisplay: "+27 67 699 7547",
  email: "rethabilegift240@gmail.com",

  // Deployed Google Apps Script web app URL
  appsScriptUrl:
    "https://script.google.com/macros/s/AKfycbxFQADYxLMBJgFU-i9rMXbzzcgChTw06LCaEAXrEZ7zLOa9ge82K5Inkp_Q3B-Tuqh-Gg/exec",

  responseHoursText:
    "WhatsApp and email enquiries are usually answered during business hours. Urgent support-related enquiries are prioritised as quickly as possible.",

  serviceAreasText:
    "Pretoria, Gauteng, and selected surrounding areas. Residential, backup power, and commercial enquiries outside the core service area can still be discussed.",

  businessHours: [
    "Monday to Friday: 08:00 - 17:00",
    "Saturday: By appointment",
    "Sunday: Closed",
  ],
} as const;

export const ctaContentMap: Record<CtaIntent, CtaContent> = {
  general_quote: {
    label: "Get a Quote",
    whatsappMessage:
      "Hi TP Electro, I would like a quote for an electrical, solar, or backup power solution. Please let me know the next step.",
    emailSubject: "Quote enquiry from website",
    emailBody:
      "Hello TP Electro,\n\nI would like a quote for an electrical, solar, or backup power solution. Please let me know the next step.\n",
  },

  residential_solar: {
    label: "Get Home Solar Quote",
    whatsappMessage:
      "Hi TP Electro, I’m interested in a solar solution for my home and would like guidance on the most suitable option and next steps.",
    emailSubject: "Residential solar enquiry",
    emailBody:
      "Hello TP Electro,\n\nI’m interested in a solar solution for my home and would like guidance on the most suitable option and next steps.\n",
  },

  commercial_solar: {
    label: "Discuss Commercial Solar",
    whatsappMessage:
      "Hi TP Electro, I’m looking for a commercial solar solution for my business and would like to discuss the most suitable options.",
    emailSubject: "Commercial solar enquiry",
    emailBody:
      "Hello TP Electro,\n\nI’m looking for a commercial solar solution for my business and would like to discuss the most suitable options.\n",
  },

  backup_power: {
    label: "Ask About Backup Power",
    whatsappMessage:
      "Hi TP Electro, I need a backup power solution for load shedding or outages and would like advice on the right setup.",
    emailSubject: "Backup power enquiry",
    emailBody:
      "Hello TP Electro,\n\nI need a backup power solution for load shedding or outages and would like advice on the right setup.\n",
  },

  battery_storage: {
    label: "Ask About Battery Storage",
    whatsappMessage:
      "Hi TP Electro, I’m interested in battery storage for a new or existing system and would like advice on suitable options.",
    emailSubject: "Battery storage enquiry",
    emailBody:
      "Hello TP Electro,\n\nI’m interested in battery storage for a new or existing system and would like advice on suitable options.\n",
  },

  maintenance_support: {
    label: "Request Maintenance Support",
    whatsappMessage:
      "Hi TP Electro, I need maintenance or support for an existing solar, backup, or electrical system. Please let me know the next step.",
    emailSubject: "Maintenance and support enquiry",
    emailBody:
      "Hello TP Electro,\n\nI need maintenance or support for an existing solar, backup, or electrical system. Please let me know the next step.\n",
  },

  coc_compliance: {
    label: "Ask About COC / Compliance",
    whatsappMessage:
      "Hi TP Electro, I would like assistance with COC or compliance-related electrical work and would like to discuss the requirements.",
    emailSubject: "COC / compliance enquiry",
    emailBody:
      "Hello TP Electro,\n\nI would like assistance with COC or compliance-related electrical work and would like to discuss the requirements.\n",
  },

  existing_system_upgrade: {
    label: "Discuss an Upgrade",
    whatsappMessage:
      "Hi TP Electro, I already have an existing system and would like to discuss an upgrade, expansion, or improvement.",
    emailSubject: "Existing system upgrade enquiry",
    emailBody:
      "Hello TP Electro,\n\nI already have an existing system and would like to discuss an upgrade, expansion, or improvement.\n",
  },

  contact_general: {
    label: "Contact Us",
    whatsappMessage:
      "Hi TP Electro, I found your website and would like to speak to your team about an electrical, solar, or backup power solution.",
    emailSubject: "General website enquiry",
    emailBody:
      "Hello TP Electro,\n\nI found your website and would like to speak to your team about an electrical, solar, or backup power solution.\n",
  },
};

export const contactQuickIntents: Array<{
  intent: CtaIntent;
  label: string;
}> = [
  { intent: "residential_solar", label: "Home Solar" },
  { intent: "backup_power", label: "Backup Power" },
  { intent: "commercial_solar", label: "Commercial" },
  { intent: "maintenance_support", label: "Maintenance" },
  { intent: "coc_compliance", label: "COC / Compliance" },
];

export const contactServiceOptions = [
  {
    value: "Residential Solar",
    label: "Residential Solar",
    description:
      "Best for homeowners looking for lower electricity costs, backup during outages, or a complete solar-and-battery solution.",
  },
  {
    value: "Commercial Solar",
    label: "Commercial Solar",
    description:
      "Ideal for businesses that need cost control, operational continuity, and a more tailored energy setup.",
  },
  {
    value: "Backup Power",
    label: "Backup Power",
    description:
      "For essential power during load shedding or outages, including inverter, battery, and hybrid backup solutions.",
  },
  {
    value: "Battery Storage",
    label: "Battery Storage",
    description:
      "For new or existing systems where you want improved backup capacity, night-time use, or storage upgrades.",
  },
  {
    value: "Maintenance / Support",
    label: "Maintenance / Support",
    description:
      "For inspections, troubleshooting, repairs, system checks, and support for an existing installation.",
  },
  {
    value: "COC / Compliance",
    label: "COC / Compliance",
    description:
      "For certificate of compliance work, safety-related electrical checks, and compliance-driven installation support.",
  },
  {
    value: "General Electrical Work",
    label: "General Electrical Work",
    description:
      "For broader electrical enquiries such as installations, rewiring, fault finding, upgrades, and related work.",
  },
] as const;