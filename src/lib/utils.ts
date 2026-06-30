import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Conflict-safe Tailwind class merge.
 * twMerge MUST wrap clsx so later classes win conflicts (e.g. `px-2 px-4` -> `px-4`).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
