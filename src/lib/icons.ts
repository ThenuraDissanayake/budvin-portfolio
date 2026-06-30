import {
  Atom,
  Boxes,
  Briefcase,
  Cloud,
  Code2,
  Database,
  Feather,
  FileCode,
  Flame,
  GitBranch,
  GitFork,
  Hexagon,
  Leaf,
  Mail,
  PenTool,
  Radio,
  Route,
  Server,
  Smartphone,
  Sparkles,
  Target,
  Triangle,
  Video,
  Wind,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * Concept-key -> lucide icon. Lucide ships few brand logos, so we map by concept
 * (and reuse a few generic marks). All keys used in `@/data/portfolio` must exist here.
 */
export const ICON_MAP: Record<string, LucideIcon> = {
  // --- Category icons ---
  mobile: Smartphone,
  frontend: Code2,
  backend: Server,
  "database-cloud": Database,
  tools: Wrench,

  // --- Skill icons ---
  // Mobile
  flutter: Feather,
  dart: Target,
  "react-native": Atom,
  webrtc: Video,
  // Frontend
  nextjs: Triangle,
  react: Atom,
  typescript: FileCode,
  tailwind: Wind,
  zustand: Boxes,
  "framer-motion": Sparkles,
  // Backend
  nodejs: Hexagon,
  express: Route,
  serverless: Cloud,
  socketio: Radio,
  // Database & Cloud
  postgresql: Database,
  mongodb: Leaf,
  firebase: Flame,
  aws: Cloud,
  ec2: Server,
  // Tools
  git: GitBranch,
  github: GitFork,
  figma: PenTool,
  agile: Workflow,

  // --- Social icons ---
  linkedin: Briefcase,
  mail: Mail,
};

/** Resolve an icon key to a component, with a safe generic fallback (never undefined). */
export function getIcon(key: string): LucideIcon {
  return ICON_MAP[key] ?? Boxes;
}
