/**
 * Editorial section header: a small accent "kicker" line ("01 / Projects")
 * followed by an oversized display-face title.
 */
export function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div>
      <p
        className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
        aria-hidden="true"
      >
        {index} / {label}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-fg sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
