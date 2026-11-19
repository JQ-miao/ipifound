"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ProjectArtwork, type ArtworkLayer } from "@/components/projects/ProjectArtwork";
import artwork from "@/lib/design/projects.json";
import { hotspotsForCategory } from "@/lib/design/project-hotspots";
import { OutlinedLabel } from "@/components/ui/OutlinedLabel";

export const PROJECT_CATEGORIES = [
  { id: "trademark", label: "商标设计·注册" },
  { id: "ip", label: "IP设计·版权" },
  { id: "ui", label: "软件设计开发" },
  { id: "creative", label: "文创·版权" },
  { id: "space", label: "空间" },
  { id: "illustration", label: "插画绘制·版权" },
] as const;
export type ProjectCategoryId = (typeof PROJECT_CATEGORIES)[number]["id"];
export function parseProjectCategory(value?: string): ProjectCategoryId {
  return PROJECT_CATEGORIES.find((category) => category.id === value)?.id ?? "trademark";
}

export function ProjectsContent({ category }: { category: ProjectCategoryId }) {
  const params = useSearchParams();
  const page = category === "trademark" && params.get("page") === "2" ? 2 : 1;
  const key = page === 2 ? "trademark2" : category;
  const hotspots = hotspotsForCategory(category);
  return (
    <>
      <h1 className="sr-only">IP ZOOM — {PROJECT_CATEGORIES.find((item) => item.id === category)?.label}案例</h1>
      <ProjectArtwork layers={artwork.categories[key] as ArtworkLayer[]} />
      {hotspots.map((spot) => (
        <Link
          key={spot.slug}
          href={`/projects/${spot.slug}/`}
          aria-label={`查看案例：${spot.label}`}
          className="absolute z-10 rounded-full transition-[box-shadow] duration-200 hover:shadow-[0_0_0_4px_var(--lucky-yellow),0_0_20px_8px_rgba(249,255,88,0.45)] focus-visible:shadow-[0_0_0_4px_var(--lucky-yellow),0_0_20px_8px_rgba(249,255,88,0.45)] focus-visible:outline-none"
          style={{ left: spot.x, top: spot.y, width: spot.w, height: spot.h }}
        />
      ))}
      <nav aria-label="案例分类" className="absolute top-[749px] left-[146px] z-10 flex w-[190px] flex-col gap-[20px]">
        {PROJECT_CATEGORIES.map((item) => <Link key={item.id} href={`/projects/?cat=${item.id}`} scroll={false} aria-current={category === item.id ? "page" : undefined} className={`flex h-[73px] items-center justify-center rounded-[8px] border-4 border-ink px-[10px] leading-none whitespace-nowrap transition-colors hover:bg-radio hover:text-white ${category === item.id ? "bg-radio text-white" : "bg-[#fef1df] text-ink"}`}><OutlinedLabel name={`category-${item.id}`} /></Link>)}
      </nav>
      {category === "trademark" && <nav aria-label="商标案例分页" className="absolute top-[2281px] left-[866px] z-10 flex h-[40px] items-center gap-[8px] text-[16px]">
        <span className="mr-[48px] whitespace-nowrap">共2页，15个案例</span>
        <Link href={`/projects/?cat=trademark&page=${page === 1 ? 1 : page - 1}`} scroll={false} aria-label="上一页" aria-disabled={page === 1} tabIndex={page === 1 ? -1 : undefined} className={`project-page ${page === 1 ? "pointer-events-none" : ""}`}>←</Link>
        {[1, 2].map((n) => <Link key={n} href={`/projects/?cat=trademark&page=${n}`} scroll={false} aria-label={`第 ${n} 页`} aria-current={n === page ? "page" : undefined} className={`project-page ${n === page ? "bg-lucky-yellow" : "bg-white"}`}>{n}</Link>)}
        <Link href={`/projects/?cat=trademark&page=${page === 2 ? 2 : page + 1}`} scroll={false} aria-label="下一页" aria-disabled={page === 2} tabIndex={page === 2 ? -1 : undefined} className={`project-page ${page === 2 ? "pointer-events-none" : ""}`}>→</Link>
      </nav>}
    </>
  );
}
