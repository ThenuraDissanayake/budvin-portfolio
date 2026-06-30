"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

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

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* ambient background layers */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[length:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 animate-float rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-48 h-72 w-72 animate-float rounded-full bg-cyan-500/10 blur-3xl [animation-delay:2s]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-36"
      >
        <motion.p
          variants={item}
          className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for opportunities
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance text-5xl font-extrabold tracking-tight sm:text-7xl"
        >
          Hi, I&apos;m <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl"
        >
          {personalInfo.role}
        </motion.p>
        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-xl text-zinc-500"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex items-center justify-center gap-2 text-sm text-zinc-500"
        >
          <MapPin className="h-4 w-4 text-emerald-400" />
          {personalInfo.location}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-7 py-3 font-semibold text-zinc-950 shadow-glow animate-pulse-glow transition-transform hover:scale-105"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-zinc-100 backdrop-blur transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
