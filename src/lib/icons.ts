import {
  Atom,
  BellRing,
  Boxes,
  Briefcase,
  Cloud,
  Code2,
  Container,
  Database,
  Feather,
  FileCode,
  Flame,
  GitBranch,
  GitFork,
  Hexagon,
  Leaf,
  Mail,
  Network,
  PenTool,
  Radio,
  Rocket,
  Route,
  Send,
  Server,
  Smartphone,
  Sparkles,
  Target,
  Triangle,
  Video,
  Wind,
  Workflow,
  Wrench,
  Zap,
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
  push: BellRing,
  eas: Rocket,
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
  rest: Network,
  // Database & Cloud
  postgresql: Database,
  mongodb: Leaf,
  firebase: Flame,
  aws: Cloud,
  ec2: Server,
  cloudrun: Container,
  supabase: Zap,
  // Tools
  git: GitBranch,
  github: GitFork,
  figma: PenTool,
  agile: Workflow,
  docker: Container,
  cicd: Workflow,
  postman: Send,

  // --- Social icons ---
  linkedin: Briefcase,
  mail: Mail,
};

/** Resolve an icon key to a component, with a safe generic fallback (never undefined). */
export function getIcon(key: string): LucideIcon {
  return ICON_MAP[key] ?? Boxes;
}
