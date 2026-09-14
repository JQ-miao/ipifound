const COLUMNS = [
  {
    title: "Home",
    links: [
      { href: "/#birthday", label: "生日筛选器" },
      { href: "/#zodiac", label: "生肖筛选器" },
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
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="font-footer bg-mist text-footer-ink">
      <div className="mx-auto flex max-w-[1440px] px-[60px] pb-[76px] pt-[94px]">
        <div className="w-[562px] shrink-0">
          <p className="text-[32px] font-medium tracking-[-0.96px] leading-[1.5]">
            iPiFound&nbsp;&nbsp;X&nbsp;&nbsp;鲲图智权
          </p>
          <p className="mt-[19px] text-[16px] font-medium tracking-[-0.32px] leading-[1.5]">
            slogan
          </p>
          <div className="mt-[38px] flex items-start gap-[30px]">
            <SocialMark label="小红书" />
            <SocialMark label="企业微信" />
          </div>
        </div>

        {COLUMNS.map((column, index) => (
          <div
            key={column.title}
            id={column.id}
            className={`w-[152px] shrink-0 ${index === 0 ? "" : "ml-[151px]"}`}
          >
            <p className="text-[20px] font-semibold tracking-[-0.4px] leading-[1.5]">
              {column.title}
            </p>
            <ul className="mt-[24px] space-y-[19px] text-[16px] font-medium tracking-[-0.32px] leading-[1.2]">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <a href={link.href} className="hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1440px] px-[60px] pb-[59px]">
        <img
          src="/figma/footer-line.svg"
          alt=""
          className="h-px w-full max-w-[1320px]"
        />
        <p className="mt-[36px] text-center text-[16px] font-semibold tracking-[-0.32px] leading-[1.5]">
          ©2026 Company Name. All rights reserved（怎么写）
        </p>
      </div>
    </footer>
  );
}

function SocialMark({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/figma/social-icon.svg"
        alt=""
        className="h-[34px] w-[34px] overflow-visible object-cover object-top"
        width={34}
        height={34}
      />
      <span className="mt-[-2px] text-[16px] font-medium tracking-[-0.32px] text-ink">
        {label}
      </span>
    </div>
  );
}
