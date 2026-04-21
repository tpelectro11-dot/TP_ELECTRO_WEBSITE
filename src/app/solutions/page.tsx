import Link from "next/link";

const solutions = [
  {
    title: "Residential Solar",
    text: "Practical solar and backup solutions designed for homes.",
    href: "/solutions/residential-solar",
  },
  {
    title: "Commercial Solar",
    text: "Reliable solar solutions for businesses that need efficiency and continuity.",
    href: "/solutions/commercial-solar",
  },
];

export default function SolutionsPage() {
  return (
    <main className="page-section">
      <div className="site-container">
        <div className="page-intro">
          <p className="page-eyebrow">Solutions</p>
          <h1 className="page-title">Energy solutions built around real needs.</h1>
          <p className="page-text">
            Explore practical solar and electrical solutions for homes and businesses.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <article key={solution.href} className="content-card solution-card">
              <div className="solution-card-accent" />
              <h2>{solution.title}</h2>
              <p>{solution.text}</p>
              <Link href={solution.href} className="text-link">
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}