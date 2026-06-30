import { getIcon } from "@/lib/icons";
import type { Skill } from "@/types/portfolio";

/** Single skill chip with a concept icon. Pure presentational (server-renderable). */
export function SkillCard({ skill }: { skill: Skill }) {
  const Icon = getIcon(skill.icon);
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/5 hover:shadow-glow">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-900/80 text-emerald-400 ring-1 ring-white/10 transition-colors group-hover:text-cyan-300">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
    </div>
  );
}
