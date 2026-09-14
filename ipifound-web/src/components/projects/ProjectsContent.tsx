import { PageSection } from "@/components/layout/PageSection";

export const PROJECT_CATEGORIES = [
  { id: "trademark", label: "商标" },
  { id: "ip", label: "IP" },
  { id: "ui", label: "UI" },
  { id: "creative", label: "文创" },
  { id: "space", label: "空间" },
] as const;

export type ProjectCategoryId = (typeof PROJECT_CATEGORIES)[number]["id"];

const PROJECT_COUNT = 8;

export function parseProjectCategory(
  raw: string | string[] | undefined,
): ProjectCategoryId {
  const value = Array.isArray(raw) ? raw[0] : raw;
  return (
    PROJECT_CATEGORIES.find((category) => category.id === value)?.id ??
    "trademark"
  );
}

export function ProjectsContent({ category }: { category: ProjectCategoryId }) {
  return (
    <PageSection className="pb-[48px]">
      <h1 className="text-[32px] font-bold leading-[1.2]">案例展示</h1>

      <nav
        aria-label="案例分类"
        className="mt-[28px] flex items-center gap-[48px] border-b border-ink/15 pb-[14px] text-[22px] leading-[27px]"
      >
        {PROJECT_CATEGORIES.map((item) => (
          <a
            key={item.id}
            href={`/projects?cat=${item.id}`}
            className={
              item.id === category
                ? "font-bold underline decoration-ink decoration-2 underline-offset-[16px]"
                : "font-normal"
            }
          >
            {item.label}
          </a>
        ))}
      </nav>

      <ul className="mt-[36px] grid grid-cols-4 gap-x-[24px] gap-y-[24px]">
        {Array.from({ length: PROJECT_COUNT }, (_, index) => {
          const label = `project ${String(index + 1).padStart(2, "0")}`;
          return (
            <li key={label}>
              <article className="relative h-[240px] bg-field p-[16px]">
                <p className="text-[18px] leading-[22px]">{label}</p>
                <button
                  type="button"
                  className="absolute bottom-[16px] right-[16px] bg-white px-[14px] py-[6px] text-[14px] leading-none text-ink"
                >
                  view
                </button>
              </article>
            </li>
          );
        })}
      </ul>
    </PageSection>
  );
}
