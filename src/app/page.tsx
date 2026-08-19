import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Skills } from "@/components/Skills";
import { projects } from "@/data/portfolio";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <Hero />

      <section id="projects" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <SectionWrapper className="mb-14">
            <SectionHeading index="01" label="Work" title="Featured Projects" />
            <p className="mt-4 max-w-2xl text-muted">
              A selection of systems I&apos;ve designed and shipped across web
              and mobile.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, index) => (
              <SectionWrapper
                key={project.slug}
                delay={index * 0.1}
                className="h-full"
              >
                <ProjectCard project={project} />
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      <Skills />

      <Contact />
    </>
  );
}
