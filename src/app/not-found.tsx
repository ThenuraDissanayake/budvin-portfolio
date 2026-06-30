import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <p className="text-gradient text-7xl font-black sm:text-9xl">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 font-semibold text-zinc-950 shadow-glow transition-transform hover:scale-105"
      >
        <Home className="h-4 w-4" />
        Back home
      </Link>
    </div>
  );
}
