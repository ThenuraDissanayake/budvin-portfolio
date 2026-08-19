import { personalInfo } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";

/** Footer with wordmark, social links and copyright. Server-rendered (year computed once on the server). */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-end sm:justify-between">
        <p className="font-display text-3xl font-bold tracking-tight text-fg sm:text-5xl">
          {personalInfo.name}
        </p>

        <div className="flex items-center gap-2">
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
      </div>

      <div className="border-t border-line py-5 text-center text-xs text-muted">
        © {year} {personalInfo.name}. Built with Next.js, Tailwind CSS &amp;
        Framer Motion.
      </div>
    </footer>
  );
}
