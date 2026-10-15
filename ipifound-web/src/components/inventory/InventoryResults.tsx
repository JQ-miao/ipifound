import { PageSection } from "@/components/layout/PageSection";
import { link } from "@/lib/asset";
import type { Personality } from "@/lib/personalities";
import Link from "next/link";
import type { ReactNode } from "react";

const INVENTORY_COUNT = 12;

const INVENTORY_LABELS = [
  "经典拉格",
  "面包房",
  "贴纸系列",
  "人物插画",
  "励志卡片",
  "海洋咖啡",
  "帆布包",
  "鞋护品牌",
  "太空咖啡",
  "晚安咖啡",
  "几何信封",
  "极简人像",
];

export function InventoryResults({
  backHref,
  backLabel,
  personality,
  illustration,
  mascotName,
}: {
  backHref: string;
  backLabel: string;
  personality: Personality;
  illustration: ReactNode;
  mascotName: string;
}) {
  return (
    <PageSection className="pb-[80px] pt-[24px]" innerClassName="max-w-[1114px]">
      {/* back button */}
      <Link
        href={backHref}
        aria-label={backLabel}
        className="inline-flex h-[44px] items-center gap-2 rounded-full bg-lucky-yellow px-5 text-[16px] font-bold text-ink transition-transform hover:-translate-x-0.5"
      >
        <span aria-hidden className="text-[18px] leading-none">
          ←
        </span>
        返回查询
      </Link>

      {/* personality result */}
      <div className="mt-[36px] flex items-start gap-[56px]">
        <div className="w-[640px] shrink-0">
          <p className="font-hand text-[24px] leading-none text-ink/70">
            你的品牌人格是：
          </p>
          <h2 className="font-hand mt-[10px] text-[52px] leading-[1.1] text-ink">
            {personality.title}
          </h2>

          <div className="mt-[18px] flex flex-wrap gap-3">
            {personality.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-lucky-yellow px-4 py-1.5 text-[16px] font-bold text-ink"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-[24px] text-[18px] leading-[1.8] text-ink">
            {personality.description}
          </p>

          <div className="mt-[24px] rounded-[20px] bg-lucky-yellow/30 p-6">
            <p className="text-[16px] leading-[1.8] text-ink">
              {personality.brandBox}
            </p>
          </div>

          <p className="mt-[24px] text-[18px] font-bold text-ink">
            品牌幸运色：
            <span
              className="ml-2 inline-flex items-center gap-2 align-middle"
            >
              <span
                aria-hidden
                className="inline-block size-4 rounded-full"
                style={{ backgroundColor: personality.luckyColor }}
              />
              {personality.luckyColorName}
            </span>
          </p>
        </div>

        <div className="relative w-[420px] shrink-0">
          {illustration}
          <p className="font-hand mt-[20px] text-[18px] leading-[1.5] text-ink/80">
            “{personality.quote}”
          </p>
        </div>
      </div>

      {/* Pick yours! inventory grid */}
      <div className="relative mt-[72px]">
        <div className="flex items-end justify-between">
          <div>
            <h3
              className="font-hand text-[64px] leading-none text-ink"
              style={{ transform: "rotate(-3deg)", transformOrigin: "left bottom" }}
            >
              Pick yours!
            </h3>
            <p className="font-hand mt-[14px] text-[22px] leading-[1.4] text-ink">
              {mascotName}型品牌适配的灵感库存
            </p>
            <p className="mt-[8px] max-w-[640px] text-[16px] leading-[1.7] text-ink/70">
              克制、留白、不喧哗——为这类品牌精选的灵感现货，气质相投，可直接挑选优化。
            </p>
          </div>
          <div className="h-[80px] w-[80px] shrink-0">{illustration}</div>
        </div>

        <ul className="mt-[36px] grid grid-cols-3 gap-x-[24px] gap-y-[24px]">
          {Array.from({ length: INVENTORY_COUNT }, (_, index) => (
            <li
              key={index}
              className="group relative h-[260px] overflow-hidden rounded-[18px] border border-ink/10 bg-white"
            >
              <div
                aria-hidden
                className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${personality.luckyColor}22 0%, ${personality.luckyColor}55 100%)`,
                }}
              />
              <div className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[15px] font-bold text-ink">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-hand text-[18px] text-ink">
                  {INVENTORY_LABELS[index]}
                </span>
                <span className="text-[13px] font-bold text-ink/60">
                  灵感现货
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-[28px] text-right">
          <span className="font-hand text-[16px] text-ink/60">
            共 {INVENTORY_COUNT} 款灵感现货 · 持续上新中
          </span>
        </div>
      </div>

      <div className="mt-[40px] text-center">
        <Link
          href={link("/#contact")}
          className="inline-flex items-center gap-2 rounded-full bg-lucky-yellow px-7 py-3 text-[18px] font-bold text-ink transition-transform hover:scale-[1.02]"
        >
          没找到合适的？联系我们定制 →
        </Link>
      </div>
    </PageSection>
  );
}
