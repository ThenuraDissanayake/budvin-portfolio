/**
 * Shared content types for the portfolio.
 *
 * NOTE: icons are stored as string KEYS (IconKey), never as React components.
 * Components are functions and cannot cross the server -> client boundary as props.
 * Resolve keys to lucide icons via `getIcon()` in `@/lib/icons`.
 */

export type IconKey = string;

export interface SocialLink {
  label: string;
  href: string;
  icon: IconKey;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  socials: SocialLink[];
}

export interface Skill {
  name: string;
  icon: IconKey;
}

export interface SkillCategory {
  category: "Mobile" | "Frontend" | "Backend" | "Database & Cloud" | "Tools";
  icon: IconKey;
  skills: Skill[];
}

export interface Project {
  slug: string;
  title: string;
  /** Short label shown on the card, e.g. "Flagship Project". */
  badge?: string;
  role: string;
  /** Short blurb for the project card. */
  summary: string;
  /** Longer description for the case-study page + metadata. */
  description: string;
  tech: string[];
  keyFeatures: string[];
  featured?: boolean;
}
