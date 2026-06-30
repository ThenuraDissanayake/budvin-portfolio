"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { TechBadge } from "./TechBadge";

/** Project card with scale-on-hover, glow, tech tags, and a case-study link. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-emerald-400/40 hover:shadow-glow"
    >
      {/* corner gradient glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl transition-colors duration-500 group-hover:bg-cyan-400/20" />

      {project.badge && (
        <span className="mb-4 inline-flex w-fit items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          {project.badge}
        </span>
      )}

      <h3 className="text-xl font-bold text-white transition-colors group-hover:text-emerald-300">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-emerald-400/90">
        {project.role}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
        {project.tech.length > 4 && (
          <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
            +{project.tech.length - 4} more
          </span>
        )}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 transition-colors hover:text-cyan-300"
      >
        View Case Study
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}
