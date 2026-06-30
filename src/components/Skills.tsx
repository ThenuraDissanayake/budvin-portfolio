import { skillCategories } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";
import { SectionWrapper } from "./SectionWrapper";
import { SkillCard } from "./SkillCard";
import { StaggerContainer, StaggerItem } from "./StaggerContainer";

/** Skills section: a glass card per category with a cascading grid of skill chips. */
export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionWrapper className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Tech Stack
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Skills &amp; Technologies
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          A modern toolkit spanning mobile, web, backend, and cloud
          infrastructure.
        </p>
      </SectionWrapper>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => {
          const CategoryIcon = getIcon(category.icon);
          return (
            <SectionWrapper
              key={category.category}
              className="glass rounded-2xl p-6 shadow-glass"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient text-zinc-950">
                  <CategoryIcon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {category.category}
                </h3>
              </div>
              <StaggerContainer className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {category.skills.map((skill) => (
                  <StaggerItem key={skill.name}>
                    <SkillCard skill={skill} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SectionWrapper>
          );
        })}
      </div>
    </section>
  );
}
