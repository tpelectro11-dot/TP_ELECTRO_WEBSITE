"use client";

import {
  CSSProperties,
  ChangeEvent,
  FormEvent,
  useMemo,
  useRef,
  useState,
} from "react";
import { businessContact, contactServiceOptions } from "@/content/contact";
import { buildPhoneUrl } from "@/lib/contact";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type ContactFormState = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  serviceNeeded: string;
  propertyType: string;
  existingSystem: string;
  preferredContactMethod: string;
  message: string;
  website: string;
};

const initialFormState: ContactFormState = {
  fullName: "",
  phone: "",
  email: "",
  location: "",
  serviceNeeded: "Residential Solar",
  propertyType: "Home",
  existingSystem: "No",
  preferredContactMethod: "WhatsApp",
  message: "",
  website: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitNotice, setSubmitNotice] = useState("");
  const submittedRef = useRef(false);

  const phoneHref = buildPhoneUrl();

  const whatsappHref = buildWhatsAppUrl("contact_general", {
    sourcePage: "contact",
    sourceSection: "hero",
    audience: "general",
    service: "general",
    message:
      "Hi TP Electro, I found your website and would like to speak to your team about an electrical, solar, or backup power solution.",
  });

  const selectedService = useMemo(
    () =>
      contactServiceOptions.find(
        (option) => option.value === formData.serviceNeeded
      ) ?? contactServiceOptions[0],
    [formData.serviceNeeded]
  );

  const fieldStyle: CSSProperties = {
    width: "100%",
    border: "1px solid var(--border)",
    borderRadius: "14px",
    padding: "0.9rem 1rem",
    fontSize: "1rem",
    background: "#fff",
    color: "var(--foreground)",
    outline: "none",
  };

  const labelStyle: CSSProperties = {
    display: "block",
    fontWeight: 600,
    marginBottom: "0.45rem",
    color: "var(--foreground)",
  };

  const responsiveGridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1rem",
  };

  const helperCardStyle: CSSProperties = {
    border: "1px solid var(--border)",
    borderRadius: "16px",
    padding: "1rem 1.1rem",
    background: "var(--primary-soft)",
    color: "var(--foreground)",
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (
      !businessContact.appsScriptUrl ||
      businessContact.appsScriptUrl.includes(
        "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"
      )
    ) {
      event.preventDefault();
      setSubmitSuccess(false);
      setSubmitNotice(
        "Please add your Google Apps Script web app URL in src/content/contact.ts before using the form."
      );
      return;
    }

    setSubmitNotice("");
    setSubmitSuccess(false);
    setIsSubmitting(true);
    submittedRef.current = true;
  };

  const handleIframeLoad = () => {
    if (!submittedRef.current) return;

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setSubmitNotice(
      "Thank you. Your enquiry has been submitted. If you do not receive a response during business hours, please follow up via WhatsApp or phone."
    );
    setFormData(initialFormState);
    submittedRef.current = false;
  };

  return (
    <main>
      <section className="page-section">
        <div className="site-container">
          <div
            className="page-intro"
            style={{
              maxWidth: "860px",
              margin: "0 auto 2.5rem",
              textAlign: "center",
            }}
          >
            <p className="page-eyebrow">Contact TP Electro</p>
            <h1
              className="page-title"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "20ch",
              }}
            >
              Let’s discuss your electrical, solar, or backup power needs
            </h1>
            <p
              className="page-text"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 0,
                maxWidth: "68ch",
              }}
            >
              Need a quote, installation, repair, maintenance visit, or guidance
              on the right solution? Complete the enquiry form below or contact
              TP Electro directly for a faster response.
            </p>
          </div>

          <div className="page-grid page-grid--content-aside">
            <div className="page-column">
              <div className="content-card">
                <p className="card-kicker">Smart enquiry form</p>
                <h2
                  style={{
                    marginTop: 0,
                    marginBottom: "0.85rem",
                    fontSize: "2rem",
                    lineHeight: 1.12,
                  }}
                >
                  Send a structured enquiry directly to our inbox
                </h2>

                <p
                  className="hero-text"
                  style={{
                    maxWidth: "none",
                    marginBottom: "1.25rem",
                  }}
                >
                  Share the key project details so we can respond with the right
                  guidance more efficiently and route your enquiry to the most
                  relevant solution path.
                </p>

                <div className="hero-actions" style={{ marginBottom: "1.5rem" }}>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button"
                  >
                    Chat on WhatsApp
                  </a>

                  <a href={phoneHref} className="secondary-button">
                    Call Now
                  </a>
                </div>

                <form
                  action={businessContact.appsScriptUrl}
                  method="POST"
                  target="contact-submit-frame"
                  onSubmit={handleSubmit}
                  style={{ display: "grid", gap: "1rem" }}
                >
                  <div style={responsiveGridStyle}>
                    <div>
                      <label htmlFor="fullName" style={labelStyle}>
                        Full name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        style={fieldStyle}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" style={labelStyle}>
                        Phone number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        style={fieldStyle}
                        placeholder="e.g. 07X XXX XXXX"
                      />
                    </div>
                  </div>

                  <div style={responsiveGridStyle}>
                    <div>
                      <label htmlFor="email" style={labelStyle}>
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        style={fieldStyle}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" style={labelStyle}>
                        Location
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        autoComplete="address-level2"
                        style={fieldStyle}
                        placeholder="e.g. Pretoria East"
                      />
                    </div>
                  </div>

                  <div style={responsiveGridStyle}>
                    <div>
                      <label htmlFor="serviceNeeded" style={labelStyle}>
                        Service needed
                      </label>
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        required
                        style={fieldStyle}
                      >
                        {contactServiceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="propertyType" style={labelStyle}>
                        Property type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        required
                        style={fieldStyle}
                      >
                        <option value="Home">Home</option>
                        <option value="Business">Business</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div style={helperCardStyle}>
                    <strong
                      style={{
                        display: "block",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {selectedService.label}
                    </strong>
                    <span>{selectedService.description}</span>
                  </div>

                  <div style={responsiveGridStyle}>
                    <div>
                      <label htmlFor="existingSystem" style={labelStyle}>
                        Do you already have a system?
                      </label>
                      <select
                        id="existingSystem"
                        name="existingSystem"
                        value={formData.existingSystem}
                        onChange={handleChange}
                        required
                        style={fieldStyle}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                        <option value="Partially">Partially</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="preferredContactMethod" style={labelStyle}>
                        Preferred contact method
                      </label>
                      <select
                        id="preferredContactMethod"
                        name="preferredContactMethod"
                        value={formData.preferredContactMethod}
                        onChange={handleChange}
                        required
                        style={fieldStyle}
                      >
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" style={labelStyle}>
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      rows={6}
                      style={{ ...fieldStyle, resize: "vertical" }}
                      placeholder="Tell us what you need, what problem you are trying to solve, and any useful site or system details."
                    />
                  </div>

                  <input type="hidden" name="sourcePage" value="contact" />
                  <input type="hidden" name="sourceSection" value="smart-form" />
                  <input type="hidden" name="audience" value="general" />
                  <input type="hidden" name="serviceContext" value="general" />

                  <div style={{ display: "none" }}>
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      value={formData.website}
                      onChange={handleChange}
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </div>

                  <button
                    type="submit"
                    className="primary-button"
                    disabled={isSubmitting}
                    style={{
                      justifyContent: "center",
                      opacity: isSubmitting ? 0.75 : 1,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {isSubmitting ? "Sending enquiry..." : "Send enquiry"}
                  </button>

                  {submitNotice ? (
                    <div
                      aria-live="polite"
                      style={{
                        border: "1px solid var(--border)",
                        borderRadius: "16px",
                        padding: "1rem 1.1rem",
                        background: submitSuccess
                          ? "var(--primary-soft)"
                          : "#fff8e8",
                        color: "var(--foreground)",
                      }}
                    >
                      {submitNotice}
                    </div>
                  ) : null}
                </form>

                <iframe
                  name="contact-submit-frame"
                  title="Contact form submission target"
                  style={{ display: "none" }}
                  onLoad={handleIframeLoad}
                />

                <div className="hero-card-list" style={{ marginTop: "1.5rem" }}>
                  <div className="hero-card-item">
                    <span className="hero-card-badge">P</span>
                    <div>
                      <h3>Phone</h3>
                      <p>
                        <a href={phoneHref}>{businessContact.phoneDisplay}</a>
                      </p>
                    </div>
                  </div>

                  <div className="hero-card-item">
                    <span className="hero-card-badge">E</span>
                    <div>
                      <h3>Email</h3>
                      <p>
                        <a href={`mailto:${businessContact.email}`}>
                          {businessContact.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="hero-card-item">
                    <span className="hero-card-badge">S</span>
                    <div>
                      <h3>Service areas</h3>
                      <p>{businessContact.serviceAreasText}</p>
                    </div>
                  </div>
                </div>

                <div className="highlight-item" style={{ marginTop: "1.25rem" }}>
                  <strong>What happens next</strong>
                  <span>
                    We review your enquiry, route it to the right solution path,
                    and respond during business hours. For urgent issues, WhatsApp
                    or a phone call is still the fastest option.
                  </span>
                </div>
              </div>
            </div>

            <aside className="page-column">
              <div className="hero-card" style={{ maxWidth: "none" }}>
                <img
                  src="/images/contact-installation.png"
                  alt="TP Electro electrical installation and backup system setup"
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    borderRadius: "18px",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                />

                <p className="card-kicker">Ready to talk?</p>
                <h2 className="hero-card-title">
                  Professional help for homes, businesses, and backup power needs
                </h2>

                <p
                  className="hero-text"
                  style={{ maxWidth: "none", marginBottom: "1rem" }}
                >
                  We help with installations, rewiring, repairs, maintenance, and
                  practical power solutions designed for reliability, safety, and
                  peace of mind.
                </p>

                <div
                  style={{
                    display: "grid",
                    gap: "0.75rem",
                    borderTop: "1px solid var(--border)",
                    paddingTop: "1rem",
                  }}
                >
                  <div>
                    <strong style={{ display: "block", marginBottom: "0.25rem" }}>
                      Response hours
                    </strong>
                    <span>{businessContact.responseHoursText}</span>
                  </div>

                  <div>
                    <strong style={{ display: "block", marginBottom: "0.25rem" }}>
                      Business hours
                    </strong>
                    {businessContact.businessHours.map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>

                  <div>
                    <strong style={{ display: "block", marginBottom: "0.25rem" }}>
                      Prefer faster support?
                    </strong>
                    <span>
                      For urgent enquiries, please use WhatsApp or phone so the
                      team can respond more quickly.
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}