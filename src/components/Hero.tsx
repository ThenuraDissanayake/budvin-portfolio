"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const techStack = [
  "React Native",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Google Cloud Run",
  "Flutter",
  "Next.js",
  "Socket.IO",
  "WebRTC",
  "Docker",
  "Express.js",
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh flex-col">
      {/* subtle grid backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative flex flex-1 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32"
        >
          <motion.p
            variants={item}
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden />
            Open to new opportunities
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl font-bold tracking-tight text-fg sm:text-7xl lg:text-8xl"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-xl text-muted">
            {personalInfo.role}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-2xl text-muted">
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-3 flex items-center gap-2 text-sm text-muted"
          >
            <MapPin className="h-4 w-4 text-accent" aria-hidden />
            {personalInfo.location}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-semibold text-accent-ink transition hover:brightness-110"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 font-semibold text-fg transition-colors hover:border-accent/60 hover:text-accent"
            >
              Get in Touch
            </a>

            <div className="flex items-center gap-2 sm:ml-2">
              {personalInfo.socials.map((social) => {
                const Icon = getIcon(social.icon);
                const external = social.href.startsWith("http");
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* tech marquee */}
      <div className="marquee relative border-y border-line py-3">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex items-center"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center whitespace-nowrap text-sm font-medium uppercase tracking-[0.2em] text-muted"
                >
                  <span className="px-5">{tech}</span>
                  <span className="text-accent" aria-hidden>
                    ✦
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
