import { personalInfo } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";

/** Footer with social links and copyright. Server-rendered (year computed once on the server). */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-white">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-zinc-500">{personalInfo.role}</p>
        </div>

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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-emerald-400/40 hover:text-emerald-400 hover:shadow-glow"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center text-xs text-zinc-600">
        © {year} {personalInfo.name}. Built with Next.js, Tailwind CSS &amp;
        Framer Motion.
      </div>
    </footer>
  );
}
