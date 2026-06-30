import type { PersonalInfo, Project, SkillCategory } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Budvin Dissanayake",
  role: "Software Engineer | Full-Stack & Mobile Developer",
  tagline:
    "Building scalable web & mobile applications with real-time data flow and clean UI/UX.",
  bio: "BSc Software Engineering graduate from the University of Plymouth (Second Class Honours, Upper Division). I specialize in building scalable web and mobile applications, combining modern front-end frameworks with robust back-end cloud architectures. Focused on performance, real-time data flow, and clean UI/UX.",
  location: "Colombo, Sri Lanka",
  email: "thenurabudvin@gmail.com",
  socials: [
    {
      label: "GitHub",
      // Space in the source handle intentionally removed.
      href: "https://github.com/Thenura-Dissanayake",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/budvin-dissanayake-6554a42a9",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:thenurabudvin@gmail.com",
      icon: "mail",
    },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Mobile",
    icon: "mobile",
    skills: [
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
      { name: "React Native (Expo)", icon: "react-native" },
      { name: "WebRTC", icon: "webrtc" },
    ],
  },
  {
    category: "Frontend",
    icon: "frontend",
    skills: [
      { name: "Next.js 14", icon: "nextjs" },
      { name: "React.js", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Zustand", icon: "zustand" },
      { name: "Framer Motion", icon: "framer-motion" },
    ],
  },
  {
    category: "Backend",
    icon: "backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Serverless Functions", icon: "serverless" },
      { name: "Socket.IO (Real-time)", icon: "socketio" },
    ],
  },
  {
    category: "Database & Cloud",
    icon: "database-cloud",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
      { name: "AWS (Cognito, S3, SES)", icon: "aws" },
      { name: "EC2", icon: "ec2" },
    ],
  },
  {
    category: "Tools",
    icon: "tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Figma", icon: "figma" },
      { name: "Agile", icon: "agile" },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "enterprise-comm-platform",
    title: "Real-Time Enterprise Communication & Logistics Platform",
    badge: "Flagship Project",
    role: "Full-Stack & Mobile Developer",
    summary:
      "A cross-platform system pairing a React Native VoIP/WebRTC mobile app with a Next.js 14 admin dashboard.",
    description:
      "A comprehensive cross-platform system featuring a React Native mobile app with VoIP/WebRTC capabilities and a Next.js admin dashboard.",
    tech: [
      "Next.js 14",
      "React Native (Expo)",
      "WebRTC",
      "Node.js (ESM)",
      "PostgreSQL",
      "AWS Cognito/S3",
      "Socket.IO",
    ],
    keyFeatures: [
      "Engineered real-time WebSocket services with Socket.IO for low-latency messaging and presence.",
      "Implemented secure authentication flows via AWS Cognito.",
      "Developed complex state management using Zustand and React Hook Form.",
      "Delivered VoIP/WebRTC calling inside a React Native (Expo) mobile app.",
    ],
    featured: true,
  },
  {
    slug: "shuttle-service-system",
    title: "University Shuttle Service System",
    badge: "Final Year Project",
    role: "Mobile App Developer",
    summary:
      "A real-time transportation booking app with live GPS tracking and secure in-app payments.",
    description:
      "A real-time transportation booking mobile application ensuring seamless seat reservations and live tracking.",
    tech: ["Flutter", "Firebase (Firestore)", "PayHere API", "Google Maps API"],
    keyFeatures: [
      "Leveraged Firebase Firestore for highly scalable, synchronized data storage.",
      "Integrated the Google Maps API for live GPS tracking of shuttles.",
      "Integrated the PayHere API for secure transaction processing.",
      "Delivered seamless seat reservations with real-time availability updates.",
    ],
    featured: true,
  },
  {
    slug: "restaurant-ordering-app",
    title: "Restaurant SaaS Ordering Web App",
    role: "Full-Stack Web Developer",
    summary:
      "A full-featured restaurant management web application built from scratch and deployed to AWS.",
    description:
      "A full-featured restaurant management web application built from scratch and deployed to AWS.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "AWS EC2",
    ],
    keyFeatures: [
      "Designed optimized MongoDB schemas for users, menus, and orders.",
      "Built robust REST APIs with Express.",
      "Implemented responsive, real-time UI/UX with React.",
      "Built from scratch and deployed to AWS EC2.",
    ],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
