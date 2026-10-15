"use client";

import { asset } from "@/lib/asset";
import { useState } from "react";

export const PROJECT_CATEGORIES = [
  { id: "trademark", label: "商标设计·注册" },
  { id: "ip", label: "IP设计·版权" },
  { id: "ui", label: "软件设计开发" },
  { id: "creative", label: "文创·版权" },
  { id: "space", label: "空间" },
  { id: "illustration", label: "插画绘制·版权" },
] as const;

export type ProjectCategoryId = (typeof PROJECT_CATEGORIES)[number]["id"];

const PAGE_SIZE = 12;
const TOTAL_CASES = 15;
const TOTAL_PAGES = Math.ceil(TOTAL_CASES / PAGE_SIZE);

const PROJECT_NAMES = [
  "VISION CAREER",
  "COFFEE TALK",
  "Looop",
  "Ocean Café",
  "Bread House",
  "Foot Rush",
  "KOFI",
  "Zzz Coffee",
  "Classic Lager",
  "You Can",
  "Geo Mail",
  "Mono Pack",
  "Spiral",
  "Night Owl",
  "Sunrise",
];

export function parseProjectCategory(
  raw: string | string[] | undefined,
): ProjectCategoryId {
  const value = Array.isArray(raw) ? raw[0] : raw;
  return (
    PROJECT_CATEGORIES.find((category) => category.id === value)?.id ??
    "trademark"
  );
}

function CanopyBlob({ className }: { className: string }) {
  return (
    <div
      aria-hidden
      className={`absolute rounded-[50%] ${className}`}
      style={{
        background: "radial-gradient(circle at 40% 30%, #ffe000 0%, #f9c400 100%)",
        boxShadow: "inset -10px -16px 30px rgba(180,130,0,0.35)",
      }}
    />
  );
}

function PagerButton({
  disabled,
  onClick,
  label,
  children,
}: {
  disabled: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={
        disabled
          ? "flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink/15 text-ink/30"
          : "flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink text-ink hover:bg-lucky-yellow"
      }
    >
      {children}
    </button>
  );
}

export function ProjectsContent({ category }: { category: ProjectCategoryId }) {
  const [page, setPage] = useState(1);
  const activeCategory = PROJECT_CATEGORIES.find((c) => c.id === category);

  const start = (page - 1) * PAGE_SIZE;
  const items = PROJECT_NAMES.slice(start, start + PAGE_SIZE);

  return (
    <section className="relative w-full overflow-hidden bg-white pb-[60px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 z-10 h-[150px] w-[2px] -translate-x-1/2"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, #333441 0 6px, transparent 6px 12px)",
        }}
      />
      <img
        src={asset("/figma/spotlight.svg")}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[140px] z-10 h-[120px] w-[260px] max-w-none -translate-x-1/2 opacity-80"
      />

      <div className="relative mx-auto mt-[40px] w-[1100px]">
        <div className="relative mx-auto h-[230px] w-[760px]">
          <CanopyBlob className="left-[60px] top-[40px] h-[170px] w-[200px]" />
          <CanopyBlob className="left-[230px] top-[10px] h-[200px] w-[260px]" />
          <CanopyBlob className="left-[460px] top-[30px] h-[180px] w-[220px]" />
          <CanopyBlob className="left-[260px] top-[60px] h-[150px] w-[200px]" />
          <h1
            className="font-display absolute left-1/2 top-[70px] -translate-x-1/2 text-[88px] font-bold leading-none"
            style={{ color: "#ffe000", WebkitTextStroke: "2px #333441" }}
          >
            IP ZOOM
          </h1>
        </div>

        <div className="relative mx-auto w-[820px]">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-[760px] w-[560px] -translate-x-1/2 rounded-b-[60px] rounded-t-[20px]"
            style={{
              background:
                "linear-gradient(90deg, #a06a3a 0%, #c98a4f 50%, #a06a3a 100%)",
              boxShadow: "inset 0 0 60px rgba(0,0,0,0.18)",
            }}
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-[760px] w-[560px] -translate-x-1/2 rounded-b-[60px] rounded-t-[20px] opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0 38px, rgba(80,40,10,0.25) 38px 40px), repeating-linear-gradient(180deg, transparent 0 120px, rgba(80,40,10,0.18) 120px 122px)",
            }}
          />

          <nav
            aria-label="案例分类"
            className="absolute top-[60px] left-[-40px] z-20 flex w-[200px] flex-col gap-[14px]"
          >
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = cat.id === category;
              return (
                <a
                  key={cat.id}
                  href={`?cat=${cat.id}`}
                  className="relative block rounded-[14px] border-2 border-ink px-5 py-3 text-[17px] font-bold shadow-md transition-transform hover:-translate-y-0.5"
                  style={{
                    backgroundColor: isActive ? "#f9ff58" : "#ffffff",
                    color: "#333441",
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute -top-2 left-3 h-3 w-3 rounded-full bg-ink"
                  />
                  {cat.label}
                </a>
              );
            })}
          </nav>

          <div className="relative z-10 mx-auto flex w-[460px] flex-col items-center pt-[60px]">
            <p className="font-hand mb-[20px] text-[20px] text-white/90">
              {activeCategory?.label} · 精选案例
            </p>
            <ul className="grid grid-cols-3 gap-x-[28px] gap-y-[28px]">
              {items.map((name, index) => (
                <li
                  key={`${name}-${index}`}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className="flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-ink bg-white text-center font-display text-[15px] font-bold leading-tight text-ink"
                  >
                    <span className="px-2">{name}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-[36px] flex items-center gap-3 text-[15px] text-ink">
              <span className="font-hand mr-2">
                共{TOTAL_PAGES}页，{TOTAL_CASES}个案例
              </span>
              <PagerButton
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                label="上一页"
              >
                ←
              </PagerButton>
              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  className={
                    p === page
                      ? "h-9 w-9 rounded-full bg-lucky-yellow text-[15px] font-bold text-ink"
                      : "h-9 w-9 rounded-full border-2 border-ink/20 text-[15px] font-bold text-ink hover:border-ink"
                  }
                >
                  {p}
                </button>
              ))}
              <PagerButton
                disabled={page === TOTAL_PAGES}
                onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
                label="下一页"
              >
                →
              </PagerButton>
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute top-[-30px] left-[40px] z-20 h-[180px] w-[2px]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #333441 0 6px, transparent 6px 12px)",
            }}
          />
          <img
            src={asset("/figma/hero-characters.png")}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[140px] left-[-10px] z-20 h-[150px] w-[113px] max-w-none"
          />

          <div className="absolute bottom-[10px] left-[20px] z-20 rotate-[-4deg] rounded-[10px] border-2 border-ink bg-[#e7c79a] px-5 py-2 font-hand text-[20px] text-ink shadow-md">
            Let&apos;s found found!!
          </div>
        </div>

        <div className="relative mx-auto mt-[-30px] h-[80px] w-[680px]">
          <div
            aria-hidden
            className="absolute bottom-0 left-[40px] h-[70px] w-[120px] rounded-[50%]"
            style={{ background: "radial-gradient(circle at 50% 40%, #2aa7e0 0%, #1c7fb8 100%)" }}
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-[180px] h-[80px] w-[140px] rounded-[50%]"
            style={{ background: "radial-gradient(circle at 50% 40%, #ffe000 0%, #f9c400 100%)" }}
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-[340px] h-[64px] w-[110px] rounded-[50%]"
            style={{ background: "radial-gradient(circle at 50% 40%, #2aa7e0 0%, #1c7fb8 100%)" }}
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-[460px] h-[74px] w-[130px] rounded-[50%]"
            style={{ background: "radial-gradient(circle at 50% 40%, #ffe000 0%, #f9c400 100%)" }}
          />
        </div>
      </div>
    </section>
  );
}
