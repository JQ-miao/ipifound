const COLUMNS = [
  {
    title: "Home",
    links: [
      { href: "/#zodiac", label: "生肖筛选器" },
      { href: "/#birthday", label: "生日筛选器" },
      { href: "/#contact", label: "联系我们" },
    ],
  },
  {
    title: "Services",
    id: "service",
    links: [
      { href: "/service#process", label: "服务流程" },
      { href: "/service#advantages", label: "服务优势" },
      { href: "/service#about", label: "公司介绍" },
      { href: "/service#clients", label: "服务过的企业" },
      { href: "/#contact", label: "联系我们" },
    ],
  },
  {
    title: "Projects",
    id: "projects",
    links: [
      { href: "/projects?cat=trademark", label: "商标案例" },
      { href: "/projects?cat=ip", label: "IP案例" },
      { href: "/projects?cat=ui", label: "UI案例" },
      { href: "/projects?cat=creative", label: "文创案例" },
      { href: "/projects?cat=space", label: "空间布局案例" },
      { href: "/#contact", label: "联系我们" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="font-footer relative overflow-hidden bg-footer text-footer-ink">
      <div className="relative mx-auto flex max-w-[1440px] justify-between gap-[48px] px-[124px] pb-[48px] pt-[60px]">
        <div className="w-[455px] shrink-0">
          <a href="/#home" className="relative block h-[64px] w-[220px]">
            <img
              src="/figma/logo-combination.svg"
              alt="iPiFound × 鲲图智权"
              className="absolute inset-0 size-full max-w-none object-contain object-left"
              width={220}
              height={64}
            />
          </a>

          <div className="mt-[36px]">
            <div className="h-px w-full bg-lucky-yellow" />
            <p className="py-[12px] text-[14px] font-medium leading-[1.5] text-lucky-yellow">
              灵感现货 · 即选即用 —— iPiFound 设计美学与鲲图智权知产守护，助力你的品牌轻装上阵，快人一步。
            </p>
            <div className="h-px w-full bg-lucky-yellow" />
          </div>

          <p className="mt-[20px] text-[14px] font-medium leading-[21px] text-white/90">
            iPiFound × 鲲图智权，将设计美学与知识产权保护深度融合。我们打破
            &quot;从零构思&quot;的漫长等待，量身匹配灵感线索——让品牌方案可视、可选、可定制，并自带知产护航。选中心动的那一款，即刻联系我们，开启专属于你的品牌焕新之旅。
          </p>

          <p className="mt-[68px] text-[14px] font-medium leading-[24px] text-white/80">
            ©2026 iPiFound &amp; kuntuzhiquan. All rights reserved
          </p>
        </div>

        <div className="flex w-[383px] shrink-0 justify-between pt-[4px]">
          {COLUMNS.map((column) => (
            <div key={column.title} id={column.id} className="w-[90px] shrink-0">
              <p className="text-[16px] font-semibold leading-[20px] text-white">
                {column.title}
              </p>
              <ul className="mt-[16px] space-y-[9px] text-[14px] font-medium leading-[1.5] text-white/85">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a href={link.href} className="hover:text-lucky-yellow">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
