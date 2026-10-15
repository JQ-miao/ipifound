import { asset, link } from "@/lib/asset";

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
    <footer className="relative h-[439px] overflow-hidden bg-footer text-white">
      <img
        src={asset("/figma/footer/scribble.svg")}
        alt=""
        width={544.5}
        height={324}
        className="pointer-events-none absolute top-0 max-w-none"
        style={{ left: 612.25 }}
      />
      <img
        src={asset("/figma/footer/lamp.svg")}
        alt=""
        width={102.711}
        height={113.235}
        className="pointer-events-none absolute max-w-none"
        style={{ left: 1190.61, top: 275.383 }}
      />
      <img
        src={asset("/figma/footer/mascot-a.svg")}
        alt=""
        width={60}
        height={42.555}
        className="pointer-events-none absolute max-w-none"
        style={{ left: 582.37, top: 351 }}
      />
      <img
        src={asset("/figma/footer/mascot-b.svg")}
        alt=""
        width={49.702}
        height={33.738}
        className="pointer-events-none absolute max-w-none"
        style={{
          left: 527.38,
          top: 358.28,
          transform: "rotate(-4.71deg)",
        }}
      />

      <div className="relative flex items-start gap-[354px] px-[124px] pt-[60px]">
        <div className="flex w-[455px] shrink-0 flex-col gap-[68px]">
          <div className="flex flex-col gap-9">
            <a href={link("/#home")} className="block h-7 w-[279px]">
              <img
                src={asset("/figma/footer/logo.svg")}
                alt="iPiFound × 鲲图智权"
                width={279}
                height={28}
                className="h-7 w-[279px] max-w-none"
              />
            </a>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <img
                  src={asset("/figma/footer/rule.svg")}
                  alt=""
                  width={456.458}
                  height={2.289}
                  className="h-[2.289px] w-[456.458px] max-w-none"
                />
                <p className="text-[18px] leading-[1.5] font-bold text-lucky-yellow">
                  灵感现货 · 即选即用 —— iPiFound
                  设计美学与鲲图智权知产守护，助力你的品牌轻装上阵，快人一步。
                </p>
                <img
                  src={asset("/figma/footer/rule.svg")}
                  alt=""
                  width={456.458}
                  height={2.289}
                  className="h-[2.289px] w-[456.458px] max-w-none"
                />
              </div>
              <p className="w-[449px] text-[14px] leading-[1.5]">
                iPiFound × 鲲图智权，将设计美学与知识产权保护深度融合。我们打破&quot;从零构思&quot;的漫长等待，量身匹配灵感线索——让品牌方案可视、可选、可定制，并自带知产护航。选中心动的那一款，即刻联系我们，开启专属于你的品牌焕新之旅。
              </p>
            </div>
          </div>

          <p className="text-[16px] leading-[1.5] whitespace-pre">
            ©2026  iPiFound &amp; kuntuzhiquan. All rights reserved
          </p>
        </div>

        <nav className="flex w-[383px] shrink-0 gap-16">
          {COLUMNS.map((column) => (
            <div
              key={column.title}
              id={column.id}
              className={column.title === "Home" ? "w-[75px] shrink-0" : "shrink-0"}
            >
              <p className="font-nav text-[20px] leading-none font-semibold">
                {column.title}
              </p>
              <ul className="mt-4 text-[15px] leading-[1.8] font-medium">
                {column.links.map((footerLink) => (
                  <li key={`${column.title}-${footerLink.label}`}>
                    <a href={link(footerLink.href)} className="hover:text-lucky-yellow">
                      {footerLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
