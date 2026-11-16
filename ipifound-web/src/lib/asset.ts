import optimizedAssets from "./design/optimized-assets.json";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${(optimizedAssets as Record<string, string>)[path] ?? path}`;
}

export function link(href: string): string {
  if (!href.startsWith("/")) return href;
  return `${BASE_PATH}${href}`;
}
