import { asset } from "@/lib/asset";
import type { Personality } from "@/lib/personalities";
import Link from "next/link";
import type { ReactNode } from "react";

const INVENTORY_COUNT = 12;

const DEFAULT_INVENTORY_INTRO =
  '这类品牌自带一种"退一步反而更抢镜"的气质——不喧宾夺主，但看一眼就记住。深浅可自由浮动，冷调、克制是唯一不能丢的底线。';

export function InventoryResults({
  backHref,
  backLabel,
  personality,
  illustration,
  mascotName,
  variant = "zodiac",
}: {
  backHref: string;
  backLabel: string;
  personality: Personality;
  illustration: ReactNode;
  mascotName: string;
  /** Zodiac matches Figma result page; birthday keeps lucky-color block. */
  variant?: "zodiac" | "birthday";
}) {
  const inventoryIntro =
    personality.inventoryIntro?.trim() || DEFAULT_INVENTORY_INTRO;
  const showLuckyColor = variant === "birthday";
  // Rat frame assets from Figma; hide for other zodiacs / birthday.
  const showRatDecor = variant === "zodiac" && personality.id === "rat";

  return (
    <div className="bg-white text-ink">
      {/* Back — Figma x=120, y≈142, 136×48 */}
      <div className="px-[120px] pt-[30px]">
        <Link
          href={backHref}
          aria-label={backLabel}
          className="relative inline-flex h-[48px] w-[136px] items-center justify-center transition-transform hover:-translate-x-0.5"
        >
          <img
            src={asset("/figma/ui/btn-back.svg")}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-[-2px] size-[calc(100%+4px)] max-w-none"
          />
          <span className="font-hand relative z-10 flex items-center gap-[6px] text-[16px] leading-none text-ink">
            <img
              src={asset("/figma/ui/btn-back-icon.svg")}
              alt=""
              aria-hidden
              className="size-[26px] shrink-0 -scale-x-100"
              width={26}
              height={26}
            />
            返回重测
          </span>
        </Link>
      </div>

      {/* Brand Interpretation — Figma x=220, w=1000 */}
      <section className="mt-[24px] px-[220px]">
        <div className="mx-auto flex w-full max-w-[1000px] items-start gap-[86px]">
          {/* Left column */}
          <div className="min-w-0 w-[482px] shrink-0">
            <p className="text-[20px] leading-[20px] text-ink">你的品牌人格是：</p>
            <h2 className="font-hand mt-[12px] whitespace-pre-line text-[60px] leading-[1.1] text-[#0080fe]">
              {personality.title}
            </h2>

            <div className="mt-[24px] flex flex-wrap gap-3">
              {personality.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border-2 border-[#d3d76c] bg-[#f9ff58] px-4 py-[2px] text-[14px] leading-[20px] text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-[40px] text-[16px] leading-[1.5] text-ink">
              {personality.description}
            </p>

            {/* 品牌调性 sketch box */}
            <div className="relative mt-[20px] w-full max-w-[482px] pt-[25px]">
              <div className="relative">
                <img
                  src={asset("/figma/brand/tone-box.svg")}
                  alt=""
                  aria-hidden
                  className="pointer-events-none block h-auto w-full max-w-none"
                />
                <p className="absolute top-[26px] right-[36px] left-[31px] text-[14px] leading-[22px] text-ink">
                  {personality.brandBox}
                </p>
              </div>
              <div className="absolute top-0 left-0 z-10 h-[42px] w-[78px] -rotate-[17deg]">
                <img
                  src={asset("/figma/brand/tone-badge.svg")}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute inset-0 size-full max-w-none"
                />
                <span className="font-hand absolute inset-0 flex items-center justify-center text-[14px] leading-none text-lucky-yellow">
                  品牌调性
                </span>
              </div>
            </div>

            {showLuckyColor ? (
              <p className="mt-[24px] text-[18px] font-bold text-ink">
                品牌幸运色：
                <span className="ml-2 inline-flex items-center gap-2 align-middle">
                  <span
                    aria-hidden
                    className="inline-block size-4 rounded-full"
                    style={{ backgroundColor: personality.luckyColor }}
                  />
                  {personality.luckyColorName}
                </span>
              </p>
            ) : null}
          </div>

          {/* Right column */}
          <div className="relative min-w-0 flex-1 pt-[80px]">
            <div className="relative mx-auto w-full max-w-[432px]">
              {illustration}
            </div>
            <div className="mx-auto mt-[28px] w-full max-w-[300px]">
              <p className="font-hand text-center text-[30px] leading-[30px] text-ink">
                {personality.quote}
              </p>
              {personality.quoteBy ? (
                <p className="font-hand mt-[11px] text-right text-[24px] leading-[24px] text-ink">
                  ——{personality.quoteBy}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Pick yours — Figma x=120, w=1200 */}
      <section className="mt-[40px] px-[120px] pb-[80px]">
        <div className="relative mx-auto w-full max-w-[1200px]">
          <img
            src={asset("/figma/ui/pick-yours.svg")}
            alt="Pick yours!"
            className="pointer-events-none relative z-10 ml-[28px] h-[78px] w-[230px] max-w-none"
            width={230}
            height={78}
          />

          <div className="relative -mt-[40px] bg-[#f3f4eb] px-[104px] pt-[60px] pb-[80px]">
            {showRatDecor ? (
              <img
                src={asset("/figma/ui/rat-icon.svg")}
                alt=""
                aria-hidden
                className="pointer-events-none absolute top-[60px] left-[24px] h-[52px] w-[64px] max-w-none"
                width={64}
                height={52}
              />
            ) : null}

            <div className="relative">
              <h3 className="text-[24px] leading-[24px] font-bold text-ink">
                {mascotName}型品牌适配的灵感库存
              </h3>
              <p className="mt-[8px] max-w-[938px] text-[16px] leading-[24px] text-ink">
                {inventoryIntro}
              </p>
            </div>

            <ul className="mt-[30px] grid grid-cols-4 justify-between gap-x-4 gap-y-4">
              {Array.from({ length: INVENTORY_COUNT }, (_, index) => {
                const n = String(index + 1).padStart(2, "0");
                return (
                  <li
                    key={n}
                    className="relative h-[248px] w-full overflow-hidden bg-white"
                  >
                    <img
                      src={asset(`/figma/inventory/${n}.png`)}
                      alt={`${mascotName}型灵感库存 ${n}`}
                      className="absolute inset-0 size-full object-cover"
                    />
                  </li>
                );
              })}
            </ul>

            {showRatDecor ? (
              <img
                src={asset("/figma/ui/rat-chair.svg")}
                alt=""
                aria-hidden
                className="pointer-events-none absolute right-[12px] bottom-[-16px] h-[96px] w-[90px] max-w-none"
                width={90}
                height={96}
              />
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
