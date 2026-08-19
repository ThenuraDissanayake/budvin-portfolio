import { Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";

/** Contact CTA: mailto button + social links on a flat surface panel. */
export function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-28">
        <SectionWrapper className="rounded-2xl border border-line bg-surface p-10 sm:p-14">
          <SectionHeading
            index="03"
            label="Contact"
            title="Let's Build Something"
          />
          <p className="mt-4 max-w-xl text-muted">
            I&apos;m open to new opportunities and collaborations. Drop me a
            message and I&apos;ll get back to you.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-semibold text-accent-ink transition hover:brightness-110"
            >
              <Mail className="h-4 w-4" />
              {personalInfo.email}
            </a>

            <div className="flex items-center gap-3">
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
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
