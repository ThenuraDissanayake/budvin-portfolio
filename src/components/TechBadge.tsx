import { cn } from "@/lib/utils";

/** Neutral hairline pill for a single technology. Server-renderable (no motion). */
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
        "inline-flex items-center rounded-full border border-line bg-transparent px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-accent/60 hover:text-fg",
        className
      )}
    >
      {label}
    </span>
  );
}
