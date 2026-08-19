import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/portfolio";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TechBadge } from "@/components/TechBadge";

// Next.js 14: `params` is a plain synchronous object (NOT a Promise — that's Next 15).
type PageProps = {
  params: { slug: string };
};

export function generateStaticParams(): { slug: string }[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  // notFound() returns `never`, so TypeScript narrows `project` to `Project` below.
  if (!project) {
    notFound();
  }

  return (
    <article className="relative">
      {/* hero header */}
      <header className="bg-grid relative overflow-hidden border-b border-line">
        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-16 sm:pt-24">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          {project.badge && (
            <span className="mt-8 inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {project.badge}
            </span>
          )}

          <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-tight tracking-tight text-fg sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg font-medium text-accent">{project.role}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {project.description}
          </p>

          {project.links && project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2 text-sm font-semibold text-fg transition-colors hover:border-accent/60 hover:text-accent"
                >
                  {link.label}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* tech stack */}
        <SectionWrapper>
          <h2 className="font-display text-2xl font-bold tracking-tight text-fg">
            Tech Stack
          </h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {project.tech.map((tech) => (
              <TechBadge key={tech} label={tech} className="px-4 py-1.5 text-sm" />
            ))}
          </div>
        </SectionWrapper>

        {/* key features */}
        <SectionWrapper className="mt-14">
          <h2 className="font-display text-2xl font-bold tracking-tight text-fg">
            Key Features &amp; Contributions
          </h2>
          <ul className="mt-6 space-y-4">
            {project.keyFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="mt-16 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-semibold text-accent-ink transition hover:brightness-110"
          >
            Interested? Let&apos;s talk
          </Link>
        </SectionWrapper>
      </div>
    </article>
  );
}
