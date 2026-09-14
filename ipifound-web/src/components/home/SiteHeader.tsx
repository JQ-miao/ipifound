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
    <header className="relative z-20 flex items-end justify-between px-[220px] pb-[24px] pt-[24px] text-[16px] tracking-[0.5px] text-ink">
      <a
        href="/#home"
        className="pointer-events-auto relative block h-[64px] w-[220px] shrink-0"
      >
        <img
          src="/figma/logo-combination.svg"
          alt="iPiFound × 鲲图智权"
          className="absolute inset-0 size-full max-w-none object-contain object-left"
          width={220}
          height={64}
        />
      </a>

      <nav
        aria-label="主导航"
        className="pointer-events-auto relative flex h-[28px] w-[264px] shrink-0 items-center justify-between px-[18px]"
      >
        <img
          src="/figma/nav-pill.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-[-8%_-1%] size-[116%] max-w-none"
        />
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={
              link.id === active
                ? "font-nav relative z-10 font-bold"
                : "font-nav relative z-10 font-normal"
            }
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
