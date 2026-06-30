import { Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";
import { SectionWrapper } from "./SectionWrapper";

/** Contact CTA: mailto button + social links inside a glass panel. */
export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-24">
      <SectionWrapper className="glass relative overflow-hidden rounded-3xl p-10 text-center shadow-glass sm:p-16">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-radial-fade" />
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Get in touch
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Let&apos;s build something together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          I&apos;m open to new opportunities and collaborations. Drop me a
          message and I&apos;ll get back to you.
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-7 py-3 font-semibold text-zinc-950 shadow-glow transition-transform hover:scale-105"
        >
          <Mail className="h-4 w-4" />
          {personalInfo.email}
        </a>

        <div className="mt-8 flex items-center justify-center gap-3">
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-emerald-400/40 hover:text-emerald-400 hover:shadow-glow"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </SectionWrapper>
    </section>
  );
}
