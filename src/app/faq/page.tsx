"use client";

import { useState } from "react";

type FAQItem = {
  category: string;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    category: "Planning",
    question: "How do I know if solar is right for my property?",
    answer:
      "We assess your energy usage, available installation space, operating hours, and backup requirements to recommend a solution that suits your home or business.",
  },
  {
    category: "Backup Power",
    question: "Can I install a system mainly for load shedding backup?",
    answer:
      "Yes. Some systems are designed mainly to keep essential circuits running during outages, while others combine backup support with long-term solar savings.",
  },
  {
    category: "Services",
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. We provide electrical, solar, backup power, and upgrade solutions for homes, businesses, and other practical operating environments.",
  },
  {
    category: "Compliance",
    question: "Do you provide a Certificate of Compliance (COC)?",
    answer:
      "Yes. TP Electro can inspect, test, and issue a Certificate of Compliance for qualifying electrical installation work through a registered person, where applicable to the scope of work.",
  },
  {
    category: "Compliance",
    question: "Are your installations done with compliance and safety in mind?",
    answer:
      "Yes. We approach every installation with safety, compliance, and workmanship standards in mind. We also take care to ensure that qualifying work is properly inspected and tested where required.",
  },
  {
    category: "Warranties",
    question: "What warranties do you offer?",
    answer:
      "Warranty cover depends on the system design and product brands selected. We explain the applicable equipment warranties for components such as panels, inverters, and batteries, together with workmanship cover where offered, before installation begins.",
  },
  {
    category: "Support",
    question: "Do you assist with warranty claims and after-sales support?",
    answer:
      "Yes. We assist with after-sales support, inspections, fault finding, and guidance on warranty-related issues in line with the product supplier and installation scope.",
  },
  {
    category: "Installation",
    question: "How long does installation usually take?",
    answer:
      "The timeline depends on the size and complexity of the project. Smaller installations can often be completed faster, while larger or more customised systems may take longer.",
  },
  {
    category: "Quotations",
    question: "Do you provide quotations and site assessments?",
    answer:
      "Yes. We can discuss your needs, assess the site, and recommend the most suitable solution before installation starts.",
  },
  {
    category: "Maintenance",
    question: "Can you help with repairs, upgrades, or existing systems?",
    answer:
      "Yes. We assist with repairs, maintenance, inspections, upgrades, battery additions, inverter replacements, and general system checks depending on the type and condition of the existing installation.",
  },
  {
    category: "Solutions",
    question: "What is the difference between backup power and full solar?",
    answer:
      "Backup power systems are mainly designed to keep selected loads running during outages, while full solar systems can also help reduce grid electricity usage over time.",
  },
  {
    category: "Getting Started",
    question: "How do I get started?",
    answer:
      "The easiest way is to contact TP Electro with a short description of your needs. From there, we can guide you toward the right next step, whether that is a quote, site assessment, repair, upgrade, or installation plan.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="page-section">
      <div className="site-container">
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto 2rem",
            textAlign: "center",
          }}
        >
          <p className="page-eyebrow">FAQ</p>
          <h1
            className="page-title"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "16ch",
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="page-text"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 0,
              maxWidth: "66ch",
            }}
          >
            Find answers about solar installations, backup power, quotations,
            compliance, warranties, maintenance, and getting started with the
            right solution.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1rem",
          }}
        >
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="content-card"
                style={{ padding: 0, overflow: "hidden" }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  style={{
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    padding: "1.4rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "grid", gap: "0.45rem" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        width: "fit-content",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "999px",
                        background: "var(--primary-soft)",
                        color: "var(--primary)",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.category}
                    </span>

                    <span
                      style={{
                        fontSize: "1.08rem",
                        fontWeight: 700,
                        lineHeight: 1.4,
                        color: "var(--foreground)",
                      }}
                    >
                      {item.question}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "999px",
                      background: "var(--primary-soft)",
                      color: "var(--primary)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      flexShrink: 0,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.3s ease",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div
                      style={{
                        padding: isOpen ? "0 1.5rem 1.5rem" : "0 1.5rem 0",
                        borderTop: isOpen
                          ? "1px solid var(--border)"
                          : "1px solid transparent",
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen
                          ? "translateY(0)"
                          : "translateY(-6px)",
                        transition:
                          "opacity 0.25s ease, transform 0.25s ease, padding 0.25s ease, border-color 0.25s ease",
                      }}
                    >
                      <p
                        style={{
                          margin: "1rem 0 0",
                          color: "var(--muted)",
                          lineHeight: 1.75,
                          fontSize: "1rem",
                          maxWidth: "72ch",
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}