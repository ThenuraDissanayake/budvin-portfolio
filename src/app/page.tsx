import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Skills } from "@/components/Skills";
import { projects } from "@/data/portfolio";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <Hero />
      <Skills />

      <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
        <SectionWrapper className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            A selection of systems I&apos;ve designed and shipped across web and
            mobile.
          </p>
        </SectionWrapper>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <SectionWrapper
              key={project.slug}
              delay={index * 0.12}
              className="h-full"
            >
              <ProjectCard project={project} />
            </SectionWrapper>
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
}
