"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { TechBadge } from "./TechBadge";

/** Flat editorial project card: surface panel, hairline border, accent hover, case-study link. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/60"
    >
      {project.badge && (
        <span className="mb-4 inline-flex w-fit items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {project.badge}
        </span>
      )}

      <h3 className="font-display text-xl font-bold tracking-tight text-fg transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-accent/80">{project.role}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
        {project.tech.length > 4 && (
          <span className="inline-flex items-center rounded-full border border-line px-3 py-1 text-xs text-muted">
            +{project.tech.length - 4} more
          </span>
        )}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:brightness-110"
      >
        View Case Study
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}
