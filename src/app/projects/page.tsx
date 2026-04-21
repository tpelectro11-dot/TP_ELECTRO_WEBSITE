"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectItem = {
  id: string;
  category: string;
  title: string;
  shortText: string;
  overview: string;
  image: string;
  imageAlt: string;
  clientType: string;
  sector: string;
  location: string;
  systemType: string;
  challenge: string;
  solution: string;
  outcome: string;
};

const projects: ProjectItem[] = [
  {
    id: "residential",
    category: "Residential",
    title: "Pascal Residence Mobile Backup Trolley System",
    shortText:
      "A compact residential backup solution designed to keep essential home circuits running during load shedding.",
    overview:
      "This residential project focused on creating a neat, movable backup setup for a client who needed dependable power support without committing to a bulky permanent installation. The result was a practical inverter-and-battery trolley system that could integrate with the existing electrical setup while giving the household flexible backup capability.",
    image: "/images/pascal-residential-backup.webp",
    imageAlt:
      "Mobile residential backup trolley system with inverter and battery units on wheels.",
    clientType: "Private homeowner",
    sector: "Residential energy backup",
    location: "Client residence",
    systemType:
      "Mobile inverter and battery backup trolley connected to essential loads",
    challenge:
      "The client wanted reliable backup during outages, while also needing a compact, tidy, and movable solution that would work well within the home environment.",
    solution:
      "TP Electro assembled and installed a mobile backup rack consisting of inverter and battery equipment configured for practical day-to-day residential use and easier placement within the home.",
    outcome:
      "The homeowner gained a cleaner and more flexible backup solution that supports essential household power needs during load shedding while remaining easy to position and manage.",
  },
  {
    id: "commercial",
    category: "Commercial",
    title: "Roodie Academy Classroom Backup Power Upgrade",
    shortText:
      "A commercial backup installation structured to support uninterrupted teaching, screens, and projector-based learning.",
    overview:
      "This school-based project was designed around continuity in teaching and learning. With classrooms increasingly depending on projectors, automated learning tools, and smart display systems, backup power became essential. The installation used a parallel inverter arrangement to strengthen reliability and provide a more suitable commercial-grade solution for the site.",
    image: "/images/roodie-academy-commercial.webp",
    imageAlt:
      "Commercial inverter installation with multiple parallel inverters mounted on a wall for school backup power.",
    clientType: "School / education client",
    sector: "Commercial and education backup power",
    location: "Roodie Academy",
    systemType:
      "Parallel inverter backup installation for key classroom and learning loads",
    challenge:
      "The school needed critical teaching equipment such as projectors, smart screens, and automated learning systems to remain available during load shedding and power interruptions.",
    solution:
      "TP Electro implemented a structured backup system using multiple parallel inverters and supporting electrical integration to improve supply resilience for important education-related circuits.",
    outcome:
      "The school benefited from stronger continuity during outages, helping staff maintain learning activities with fewer interruptions to classroom technology and teaching flow.",
  },
  {
    id: "backup",
    category: "Backup",
    title: "SABC Mobile Broadcast Backup Power Support",
    shortText:
      "A backup-focused power solution supporting mobile broadcast operations where continuity is mission-critical.",
    overview:
      "This project supported a broadcast environment where uninterrupted power is closely tied to field operations, equipment readiness, and response capability. Working around SABC’s mobile broadcasting setup, the goal was to strengthen backup support for technical systems that could not afford extended downtime during utility interruptions.",
    image: "/images/sabc-mobile-backup.webp",
    imageAlt:
      "SABC mobile broadcast truck and support vehicle used for backup power and field operations.",
    clientType: "Broadcast / media operations client",
    sector: "Mobile technical and field backup systems",
    location: "Operational fleet environment",
    systemType:
      "Backup power support for mobile broadcast and technical field equipment",
    challenge:
      "Mobile broadcast teams require dependable power continuity for sensitive equipment, support systems, and operational readiness, especially when grid stability cannot be guaranteed.",
    solution:
      "TP Electro delivered backup-oriented electrical support tailored to the mobile broadcast environment, helping ensure that essential technical systems could remain supported when outages or interruptions occurred.",
    outcome:
      "The client gained improved power resilience for field-based broadcast work, helping reduce operational risk and supporting more dependable deployment readiness.",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <main className="projects-page">
      <section className="projects-section">
        <div className="site-container">
          <div className="projects-intro">
            <p className="projects-eyebrow">Projects</p>
            <h1 className="projects-title">
              Selected work across our main service categories.
            </h1>
            <p className="projects-text">
              A simple look at residential, commercial, and backup projects that
              reflect TP Electro’s practical approach to reliable power
              solutions.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-card-top">
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-image-shell">
                  <div className="project-image-wrap">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1080px) 100vw, 33vw"
                      className="project-image"
                    />
                  </div>
                </div>

                <div className="project-card-body">
                  <h2 className="project-title-card">{project.title}</h2>
                  <p className="project-short-text">{project.shortText}</p>

                  <button
                    type="button"
                    className="project-toggle"
                    onClick={() => setSelectedProject(project)}
                    aria-haspopup="dialog"
                    aria-expanded={selectedProject?.id === project.id}
                  >
                    More info
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            <div className="project-modal-body">
              <span className="project-modal-category">
                {selectedProject.category}
              </span>

              <h2 id="project-modal-title" className="project-modal-title">
                {selectedProject.title}
              </h2>

              <p className="project-modal-overview">
                {selectedProject.overview}
              </p>

              <div className="project-modal-grid">
                <div className="project-modal-item">
                  <span>Client type</span>
                  <strong>{selectedProject.clientType}</strong>
                </div>

                <div className="project-modal-item">
                  <span>Sector</span>
                  <strong>{selectedProject.sector}</strong>
                </div>

                <div className="project-modal-item">
                  <span>Location</span>
                  <strong>{selectedProject.location}</strong>
                </div>

                <div className="project-modal-item">
                  <span>System</span>
                  <strong>{selectedProject.systemType}</strong>
                </div>

                <div className="project-modal-item project-modal-item-wide">
                  <span>Challenge</span>
                  <strong>{selectedProject.challenge}</strong>
                </div>

                <div className="project-modal-item project-modal-item-wide">
                  <span>Solution</span>
                  <strong>{selectedProject.solution}</strong>
                </div>

                <div className="project-modal-item project-modal-item-wide">
                  <span>Outcome</span>
                  <strong>{selectedProject.outcome}</strong>
                </div>
              </div>

              <div className="project-modal-actions">
                <button
                  type="button"
                  className="project-modal-button"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects-page {
          background: #f4f7f5;
          color: #0f172a;
        }

        .site-container {
          width: min(1200px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .projects-section {
          padding: 5.5rem 0 6rem;
        }

        .projects-intro {
          max-width: 760px;
          margin: 0 auto 2.75rem;
          text-align: center;
        }

        .projects-eyebrow {
          margin: 0 0 0.75rem;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0e7a35;
        }

        .projects-title {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.35rem);
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #0f172a;
        }

        .projects-text {
          margin: 1rem auto 0;
          max-width: 700px;
          font-size: 1.05rem;
          line-height: 1.75;
          color: #5f6b76;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.4rem;
          align-items: stretch;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #ffffff;
          border: 1px solid #d8e3dc;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 28px rgba(8, 25, 18, 0.06);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px rgba(8, 25, 18, 0.09);
          border-color: #c5d8cb;
        }

        .project-card-top {
          padding: 1.1rem 1.25rem 0;
        }

        .project-category {
          display: inline-flex;
          align-items: center;
          padding: 0.45rem 0.8rem;
          border-radius: 999px;
          background: #e7f6eb;
          color: #0e7a35;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .project-image-shell {
          margin: 1rem 1.25rem 0;
        }

        .project-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #e2ebe5;
          background: #edf3ee;
        }

        :global(.project-image) {
          object-fit: cover;
          object-position: center;
        }

        .project-card-body {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 1.25rem;
        }

        .project-title-card {
          margin: 0;
          font-size: 1.22rem;
          line-height: 1.34;
          color: #0f172a;
        }

        .project-short-text {
          margin: 0.85rem 0 1.15rem;
          font-size: 0.98rem;
          line-height: 1.72;
          color: #5f6b76;
        }

        .project-toggle {
          margin-top: auto;
          align-self: flex-start;
          appearance: none;
          border: 1px solid #cddad1;
          background: #ffffff;
          color: #0f172a;
          border-radius: 999px;
          padding: 0.8rem 1.05rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .project-toggle:hover {
          background: #f7faf8;
          border-color: #0e7a35;
          color: #0e7a35;
          transform: translateY(-1px);
        }

        .project-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          background: rgba(8, 18, 12, 0.54);
          backdrop-filter: blur(6px);
        }

        .project-modal {
          position: relative;
          width: min(760px, 100%);
          max-height: 88vh;
          overflow-y: auto;
          border-radius: 28px;
          background: #ffffff;
          border: 1px solid rgba(216, 227, 220, 0.95);
          box-shadow: 0 30px 80px rgba(5, 17, 10, 0.22);
        }

        .project-modal-close {
          position: sticky;
          top: 1rem;
          margin-left: auto;
          margin-right: 1rem;
          margin-top: 1rem;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: 1px solid #d8e3dc;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.98);
          color: #0f172a;
          font-size: 1.55rem;
          line-height: 1;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            color 0.2s ease;
        }

        .project-modal-close:hover {
          transform: scale(1.04);
          border-color: #0e7a35;
          color: #0e7a35;
        }

        .project-modal-body {
          padding: 0.25rem 1.5rem 1.5rem;
        }

        .project-modal-category {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 0.85rem;
          border-radius: 999px;
          background: #e7f6eb;
          color: #0e7a35;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .project-modal-title {
          margin: 1rem 0 0;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #0f172a;
        }

        .project-modal-overview {
          margin: 1rem 0 0;
          max-width: 720px;
          font-size: 1rem;
          line-height: 1.82;
          color: #5f6b76;
        }

        .project-modal-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.95rem;
          margin-top: 1.5rem;
        }

        .project-modal-item {
          padding: 1rem 1.05rem;
          border-radius: 18px;
          background: #f8fbf9;
          border: 1px solid #e2ebe5;
        }

        .project-modal-item-wide {
          grid-column: 1 / -1;
        }

        .project-modal-item span {
          display: block;
          margin-bottom: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0e7a35;
        }

        .project-modal-item strong {
          display: block;
          font-size: 0.97rem;
          line-height: 1.68;
          color: #0f172a;
          font-weight: 600;
        }

        .project-modal-actions {
          margin-top: 1.35rem;
          display: flex;
          justify-content: flex-end;
        }

        .project-modal-button {
          appearance: none;
          border: 1px solid #cddad1;
          background: #ffffff;
          color: #0f172a;
          border-radius: 999px;
          padding: 0.85rem 1.15rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .project-modal-button:hover {
          background: #f7faf8;
          border-color: #0e7a35;
          color: #0e7a35;
          transform: translateY(-1px);
        }

        @media (max-width: 1080px) {
          .projects-grid {
            grid-template-columns: 1fr;
            max-width: 760px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .project-modal {
            width: 100%;
            max-height: 92vh;
            border-radius: 24px;
          }

          .project-modal-grid {
            grid-template-columns: 1fr;
          }

          .project-modal-item-wide {
            grid-column: auto;
          }
        }

        @media (max-width: 640px) {
          .projects-section {
            padding: 4.5rem 0 5rem;
          }

          .site-container {
            width: min(100% - 1.2rem, 1200px);
          }

          .projects-intro {
            margin-bottom: 2rem;
          }

          .project-card-top {
            padding: 1rem 1rem 0;
          }

          .project-image-shell {
            margin: 0.9rem 1rem 0;
          }

          .project-card-body {
            padding: 1rem;
          }

          .project-title-card {
            font-size: 1.12rem;
          }

          .project-toggle {
            width: 100%;
            align-self: stretch;
          }

          .project-modal-overlay {
            padding: 0.85rem;
            align-items: flex-end;
          }

          .project-modal {
            max-height: 94vh;
            border-radius: 22px;
          }

          .project-modal-close {
            width: 40px;
            height: 40px;
            margin-right: 0.85rem;
            margin-top: 0.85rem;
            font-size: 1.4rem;
          }

          .project-modal-body {
            padding: 0.15rem 1rem 1rem;
          }

          .project-modal-title {
            font-size: 1.5rem;
          }

          .project-modal-overview {
            font-size: 0.96rem;
            line-height: 1.75;
          }

          .project-modal-actions {
            justify-content: stretch;
          }

          .project-modal-button {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}