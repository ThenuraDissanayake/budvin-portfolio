import { cn } from "@/lib/utils";

/** Static accent-tinted pill for a single technology. Server-renderable (no motion). */
export function TechBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-300/90 transition-colors hover:border-emerald-400/40 hover:text-emerald-200",
        className
      )}
    >
      {label}
    </span>
  );
}
