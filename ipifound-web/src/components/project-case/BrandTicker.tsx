import { asset } from "@/lib/asset";

const TICKER_COPY = "IPIFOUND · 鲲图智权 · IPIFOUND · 鲲图智权 · IPIFOUND · 鲲图智权 · IPIFOUND · 鲲图智权 · IPIFOUND";

/**
 * Shared slanted brand ribbons between intro and concept (Figma 210:4976).
 * Vector ribbons + live text — no raster ticker.png.
 */
export function BrandTicker() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-[1470px] left-0 z-[5] h-[162px] w-[1440px] overflow-hidden"
    >
      <img
        src={asset("/design/project-cases/shared/ticker-white.svg")}
        alt=""
        className="absolute top-[10px] left-[-4px] h-[65px] w-[1448px] max-w-none"
      />
      <img
        src={asset("/design/project-cases/shared/ticker-blue.svg")}
        alt=""
        className="absolute top-[72px] left-0 h-[59px] w-[1442px] max-w-none"
      />
      <p className="font-display absolute top-[22px] left-[72px] rotate-[-1.2deg] text-[28px] leading-[41px] font-semibold tracking-[0.04em] whitespace-nowrap text-ink">
        {TICKER_COPY}
      </p>
      <p className="font-display absolute top-[82px] left-[48px] rotate-[-1.2deg] text-[28px] leading-[41px] font-semibold tracking-[0.04em] whitespace-nowrap text-white">
        {TICKER_COPY}
      </p>
    </div>
  );
}
