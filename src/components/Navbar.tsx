"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-nav shadow-glass"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/#home"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-gradient text-sm font-black text-zinc-950">
            B
          </span>
          <span className="text-white">
            Budvin<span className="text-emerald-400">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-emerald-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className="hidden rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-zinc-950 transition-shadow hover:shadow-glow md:inline-flex"
        >
          Get in touch
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="text-zinc-200 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass-nav overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
