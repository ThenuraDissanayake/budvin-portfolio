import { getIcon } from "@/lib/icons";
import type { SkillCategory } from "@/types/portfolio";

/**
 * Flat surface card for one skill category: accent icon chip, display-face
 * category name, and the category's skills as small pill chips.
 * Pure presentational (server-renderable).
 */
export function SkillCard({ category }: { category: SkillCategory }) {
  const CategoryIcon = getIcon(category.icon);
  return (
    <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
      <div className="mb-5 flex items-center gap-3">
        <span className="rounded-lg bg-accent/10 p-2 text-accent">
          <CategoryIcon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </span>
        <h3 className="font-display text-lg font-bold tracking-tight text-fg">
          {category.category}
        </h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {category.skills.map((skill) => {
          const SkillIcon = getIcon(skill.icon);
          return (
            <li
              key={skill.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-sm text-muted"
            >
              <SkillIcon
                className="h-3.5 w-3.5 text-accent"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              {skill.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
