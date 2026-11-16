import { asset } from "@/lib/asset";
import Link from "next/link";

export const NAV_LINKS = [
  { href: "/#home", id: "home", label: "Home" },
  { href: "/service", id: "service", label: "service" },
  { href: "/projects", id: "projects", label: "projects" },
] as const;

export type NavId = (typeof NAV_LINKS)[number]["id"];

export function SiteHeader({
  active = "home",
}: {
  active?: NavId;
}) {
  return (
    <header className="relative z-20 flex items-end justify-between px-[120px] pb-[24px] pt-[24px] text-[16px] tracking-[0.5px] text-ink">
      <Link
        href="/#home"
        aria-label="iPiFound 首页"
        className="pointer-events-auto relative block h-[64px] w-[220px] shrink-0"
      >
        <img
          decoding="async"
          src={asset("/figma/logo-combination.svg")}
          alt="iPiFound × 鲲图智权"
          className="absolute inset-0 size-full max-w-none object-contain object-left"
          width={220}
          height={64}
        />
      </Link>

      <nav
        aria-label="主导航"
        className="pointer-events-auto relative flex h-[28px] w-[264px] shrink-0 items-center justify-between px-[18px]"
      >
        <img
          decoding="async"
          src={asset("/figma/nav-pill.svg")}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[108%] max-w-none -translate-x-1/2 -translate-y-1/2"
        />
        {NAV_LINKS.map((navLink) => (
          <Link
            key={navLink.href}
            href={navLink.href}
            aria-current={navLink.id === active ? "page" : undefined}
            className={
              navLink.id === active
                ? "font-nav relative z-10 font-bold"
                : "font-nav relative z-10 font-normal"
            }
          >
            {navLink.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
