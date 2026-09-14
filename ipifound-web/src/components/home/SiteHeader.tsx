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
    <header className="relative z-20 flex h-[159px] items-start justify-between bg-mist px-[102px] pt-[75px] text-[18px] tracking-[0.5px] text-ink">
      <a
        href="/#home"
        className="font-nav flex items-center gap-2 whitespace-nowrap"
      >
        <span>iPiFound X</span>
        <span>鲲图智权</span>
      </a>
      <nav className="font-nav flex items-center gap-[73px]">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={
              link.id === active
                ? "font-bold underline decoration-ink decoration-1 underline-offset-[4px]"
                : "font-normal"
            }
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
