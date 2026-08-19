import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";
import { SkillCard } from "./SkillCard";
import { StaggerContainer, StaggerItem } from "./StaggerContainer";

/** Skills section: bento grid of flat category cards, one per skill category. */
export function Skills() {
  // The bento asymmetry (first card double-wide) only reads well with the
  // expected five categories; otherwise fall back to a uniform grid.
  const bento = skillCategories.length === 5;

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionWrapper className="mb-12">
        <SectionHeading index="02" label="Stack" title="Skills & Tools" />
        <p className="mt-4 max-w-2xl text-muted">
          A modern toolkit spanning mobile, web, backend, and cloud
          infrastructure.
        </p>
      </SectionWrapper>

      <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <StaggerItem
            key={category.category}
            className={bento && index === 0 ? "lg:col-span-2" : undefined}
          >
            <SkillCard category={category} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
