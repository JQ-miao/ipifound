import { asset } from "@/lib/asset";
import type { Personality } from "@/lib/personalities";
import Link from "next/link";

/** One template for all twelve zodiacs and all nine date numbers. */
export function InventoryResults({ backHref, backLabel, personality: p }: {
  backHref: string; backLabel: string; personality: Personality;
}) {
  return (
    <main className="bg-white text-ink">
      <div className="px-[120px] pt-[30px]">
        <Link href={backHref} aria-label={backLabel} className="sketch-button relative inline-flex h-[48px] w-[136px] items-center justify-center">
          <img src={asset("/figma/ui/btn-back.svg")} alt="" aria-hidden className="button-shape pointer-events-none absolute inset-[-2px] size-[calc(100%+4px)] max-w-none" />
          <span className="font-hand relative z-10 flex items-center gap-[6px] text-[20px] leading-none">
            <img src={asset("/figma/ui/btn-back-icon.svg")} alt="" aria-hidden className="button-icon size-[26px] shrink-0 -scale-x-100" />返回重测
          </span>
        </Link>
      </div>
      <section aria-label="品牌人格解读" className="mx-auto mt-[24px] flex w-[1000px] items-end gap-[86px]" style={{ minHeight: p.height }}>
        <div className="w-[482px] shrink-0 self-start">
          <p className="text-[20px] leading-[20px]">你的品牌人格是：</p>
          <h1 className="mt-[12px] h-[132px] text-[60px] leading-[1.1] text-radio">
            <span className="sr-only">{p.title}</span>
            {/* Preserve the Figma display lettering, with accessible text in the data model. */}
            <img src={asset(p.titleArtwork)} alt="" aria-hidden width={p.titleWidth} height={132} className="block h-[132px] max-w-none object-contain object-left-top" style={{ width: p.titleWidth }} />
          </h1>
          <ul aria-label="人格关键词" className="mt-[24px] flex h-[24px] items-center gap-[12px]">
            {p.tags.map((tag) => <li key={tag} className="font-hand flex h-[24px] items-center rounded-full border-2 border-[#d3d76c] bg-[#f9ff58] px-[12px] text-[16px] leading-none">{tag}</li>)}
          </ul>
          <p className="mt-[16px] text-[16px] leading-[24px]" style={{ minHeight: p.height - 365 }}>{p.description}</p>
          <div className="relative mt-[20px] h-[117px] w-[482px]">
            <img src={asset("/figma/brand/tone-box.svg")} alt="" aria-hidden className="absolute top-[25px] left-px h-[92px] w-[481px] max-w-none" />
            <p className="absolute top-[49px] left-[31px] w-[414px] text-[18px] leading-[1.2]">{p.brandBox}</p>
            <img src={asset("/figma/brand/tone-badge.svg")} alt="" aria-hidden className="absolute top-0 left-0 h-[42px] w-[78px] max-w-none" />
            <span className="font-hand absolute top-[8px] left-[3px] -rotate-[16.86deg] text-[16px] leading-none text-lucky-yellow">品牌调性</span>
          </div>
        </div>
        <figure className="flex w-[432px] shrink-0 flex-col gap-[30px]">
          <img src={asset(p.artwork)} alt={`${p.name}型品牌人格插画`} width={432} height={312} className="h-[312px] w-[432px] object-contain" />
          <figcaption className="relative w-[432px]" style={{ height: p.quoteHeight }}>
            <span className="sr-only">{p.quote}——{p.quoteBy}</span>
            <img src={asset(p.quoteArtwork)} alt="" aria-hidden width={432} height={p.quoteHeight} className="h-full w-full object-contain object-right" />
          </figcaption>
        </figure>
      </section>
      <section aria-label="适配的灵感库存" className="mx-auto mt-[40px] w-[1200px] pb-[80px]">
        <div className="relative h-[1040px]">
          <img src={asset("/figma/ui/pick-yours.svg")} alt="Pick yours!" width={230} height={78} className="pointer-events-none absolute top-0 left-[28px] z-10 h-[78px] w-[230px] max-w-none" />
          <div className="absolute top-[38px] h-[1002px] w-full bg-[#f3f4eb] px-[104px] pt-[60px]">
            <img src={asset("/figma/ui/rat-icon.svg")} alt="" aria-hidden className="pointer-events-none absolute top-[60px] left-[24px] h-[52px] w-[64px]" />
            <h2 className="text-[24px] leading-[24px] font-bold">{p.name}型品牌适配的灵感库存</h2>
            <p className="mt-[8px] h-[24px] text-[16px] leading-[24px]">{p.inventoryIntro}</p>
            <ul className="mt-[30px] grid grid-cols-4 gap-[16px]">
              {Array.from({ length: 12 }, (_, i) => {
                const n = String(i + 1).padStart(2, "0");
                return <li key={n} className="h-[248px] w-[236px] overflow-hidden bg-white"><img src={asset(`/figma/inventory/${n}.png`)} alt={`${p.name}型灵感库存 ${n}`} width={236} height={248} loading="lazy" className="size-full object-cover" /></li>;
              })}
            </ul>
            <img src={asset("/figma/ui/rat-chair.svg")} alt="" aria-hidden className="pointer-events-none absolute right-[12px] bottom-[-16px] h-[100px] w-[100px] object-contain" />
          </div>
        </div>
      </section>
    </main>
  );
}
