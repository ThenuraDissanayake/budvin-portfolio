import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl font-bold tracking-tight text-accent sm:text-9xl">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:brightness-110"
      >
        <Home className="h-4 w-4" />
        Back home
      </Link>
    </div>
  );
}
