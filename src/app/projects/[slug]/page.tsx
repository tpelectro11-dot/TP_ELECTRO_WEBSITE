type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  return (
    <main className="page-section">
      <div className="site-container">
        <p className="page-eyebrow">Project</p>
        <h1 className="page-title">{slug.replace(/-/g, " ")}</h1>
        <p className="page-text">
          This is the project detail page for <strong>{slug}</strong>.
        </p>
      </div>
    </main>
  );
}