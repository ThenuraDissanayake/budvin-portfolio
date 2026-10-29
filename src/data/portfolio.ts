import type { PersonalInfo, Project, SkillCategory } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Budvin Dissanayake",
  role: "Software Engineer | Full-Stack & Mobile Developer",
  tagline:
    "I build web and mobile applications end to end — interfaces, APIs, databases, and the cloud they run on.",
  bio: "Software Engineer working across web and mobile. I build applications end to end — React and Next.js on the web, React Native and Flutter on mobile, with the Node.js and PostgreSQL APIs behind them and the cloud infrastructure they run on. Focused on real-time data, secure payment flows, and interfaces people enjoy using. BSc (Hons) Software Engineering, University of Plymouth (Second Class Honours, Upper Division).",
  location: "Colombo, Sri Lanka",
  email: "thenurabudvin@gmail.com",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/ThenuraDissanayake",
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
      { name: "React Native (Expo)", icon: "react-native" },
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
      { name: "WebRTC", icon: "webrtc" },
      { name: "Push Notifications (FCM/APNs)", icon: "push" },
      { name: "EAS Build & OTA Updates", icon: "eas" },
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
      { name: "REST API Design", icon: "rest" },
      { name: "Socket.IO (Real-time)", icon: "socketio" },
      { name: "Serverless Functions", icon: "serverless" },
    ],
  },
  {
    category: "Database & Cloud",
    icon: "database-cloud",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Supabase", icon: "supabase" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
      { name: "AWS (EC2, Cognito, S3, SES)", icon: "aws" },
      { name: "Google Cloud Run", icon: "cloudrun" },
    ],
  },
  {
    category: "Tools",
    icon: "tools",
    skills: [
      { name: "Git & GitHub", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions (CI/CD)", icon: "cicd" },
      { name: "Postman", icon: "postman" },
      { name: "Figma", icon: "figma" },
      { name: "Agile", icon: "agile" },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "enterprise-comm-platform",
    title: "Real-Time Delivery & Communication Platform",
    badge: "Industry Project",
    role: "Mobile & Backend Developer",
    summary:
      "A production four-role delivery platform, live on Google Play. Built for a Malaysian partner company of my employer \u2014 I developed the entire mobile app and its 113-endpoint backend.",
    description:
      "A production delivery platform live on Google Play, built during my software engineering internship, for a Malaysian partner company of my employer. I developed the mobile application and its backend: 53 screens across four user roles in React Native + TypeScript, and a 113-endpoint Node.js API over a 53-table PostgreSQL schema, deployed on AWS EC2 behind Nginx.",
    tech: [
      "React Native (Expo)",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "AWS EC2",
      "Socket.IO",
      "WebRTC",
    ],
    keyFeatures: [
      "Built the full mobile app \u2014 53 screens across four user roles \u2014 and the entire 113-endpoint REST API behind it.",
      "Integrated payment-gateway checkout and automated payouts with RSA-verified payment webhooks, refunds and wallet ledgers.",
      "Implemented in-app voice calling over WebRTC + CallKeep, ringing on the lock screen on both Android and iOS.",
      "Delivered real-time order tracking and chat over Socket.IO with background geolocation and live ETAs.",
      "Handled the full Google Play release \u2014 signing, store listing, closed testing, production rollout \u2014 plus dual-language localisation.",
    ],
    featured: true,
  },
  {
    slug: "encrypted-dating-app",
    title: "Encrypted Dating & Community App",
    badge: "Industry Project",
    role: "Lead Full-Stack Developer",
    summary:
      "A dating and community app, live on Google Play and in App Store review. I took over an early Flutter frontend and built it into the full Android and iOS product.",
    description:
      "A dating and community app built at my current employer, live on Google Play and in App Store review. I took over an early Flutter frontend that ran on mock data with no backend, and built it out into the full Android and iOS app \u2014 backend, security, payments, calls, push notifications, releases and QA.",
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Supabase",
      "PostgreSQL",
      "Edge Functions (Deno)",
      "Agora",
      "CallKit + PushKit",
      "Google Play Billing",
      "StoreKit",
      "Shorebird",
    ],
    keyFeatures: [
      "Designed the Supabase (PostgreSQL) backend: 230+ migrations, row-level security on every table, server-side business rules, scheduled jobs and 19 edge functions, with separate staging and production environments.",
      "Built end-to-end encrypted chat (X3DH + Double Ratchet, one-time prekeys) and encrypted voice/video calls with a per-call key the servers never see.",
      "Built native iOS calling with CallKit + PushKit, so calls ring on a locked iPhone, plus FCM and APNs push notifications on both platforms.",
      "Integrated Google Play Billing and Apple StoreKit: subscriptions, prepaid plans, promo codes and refunds, with server-side receipt checks and real-time store notifications.",
      "Built the admin panel\u2019s backend: 50+ admin APIs gated by role-based permissions, with an append-only audit log.",
      "Wrote 1,250+ automated tests, set up GitHub Actions CI, and shipped over-the-air updates with Shorebird.",
    ],
    featured: true,
  },
  {
    slug: "ev-charging-platform",
    title: "EV Charging Platform",
    badge: "Client Project",
    role: "Mobile & Backend Developer",
    summary:
      "An EV charging platform for a client of my employer. I built the mobile app and the entire API behind both the mobile app and the web client.",
    description:
      "An EV charging platform delivered by my employer for a client. The platform is live; my mobile app is pending store release. I built the 34-screen React Native app and the entire Node.js and Express API, which serves both the mobile app and the web client built by the web team.",
    tech: [
      "React Native (Expo)",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Google Cloud Run",
      "GitHub Actions",
    ],
    keyFeatures: [
      "Built the 34-screen React Native mobile app and the entire Node.js and Express API shared by the mobile app and the web client.",
      "Containerised the API with Docker and automated deployment to Google Cloud Run via GitHub Actions.",
      "Integrated subscription payments with webhook idempotency and replay protection, verified by a 17-scenario end-to-end simulation.",
      "Hardened the API with authorisation middleware, object-level access controls, rate limiting and stateless OTP, with 44 passing tests.",
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
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/ThenuraDissanayake/shuttle_service",
      },
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
