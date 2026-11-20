import { asset } from "@/lib/asset";
import type { ProjectCaseArtwork } from "@/lib/design/project-cases";
import type { CSSProperties } from "react";

/**
 * Artwork page fills — must match page.png (not pure white),
 * otherwise knockout plates show as visible boxes/borders.
 */
const PAGE_BG = "#f7f6f6";
const INTRO_BG = "#f9ff58";
const CARD_BG = "#f9ff58";

/** Per-line fill knocks out baked page.png glyphs without a solid plate covering doodles. */
const introLineFill: CSSProperties = {
  backgroundColor: INTRO_BG,
  boxDecorationBreak: "clone",
  WebkitBoxDecorationBreak: "clone",
  padding: "0 6px",
  margin: "0 -6px",
};

/**
 * Full Figma case frame with HTML copy overlays.
 *
 * Display titles「设计理念」「细节展示」stay in page.png (they sit under hand-drawn
 * underlines / loops — a rectangular plate would cut those decorations).
 * Body copy / hero / intro / feature cards / credit are real HTML on same-color plates.
 */
export function CaseArtwork({ data }: { data: ProjectCaseArtwork }) {
  const { layout: L } = data;
  const introTop = L.introY - 4;
  /** Stop above credit — credit + rule stay in page.png (HTML overlay caused a doubled「权」). */
  const introHeight = L.creditY - introTop - 28;
  /** Keep concept copy above feature cards — a taller plate would paint grey over yellow cards. */
  const conceptMaxH = Math.max(L.featureCardAY - L.conceptBodyY - 12, 120);
  /** Keep details copy above the gallery band (~244px below title in Figma). */
  const detailsMaxH = 220;

  return (
    <div
      className="absolute top-0 left-0 w-[1440px] overflow-hidden"
      style={{ height: data.contentHeight }}
    >
      <img
        decoding="async"
        src={asset(data.pageImage)}
        alt=""
        aria-hidden
        width={1440}
        height={data.frameHeight}
        className="pointer-events-none absolute top-0 left-0 h-auto max-w-none select-none"
        style={{ width: 1440, height: data.frameHeight }}
      />

      {/* Accessible page title (visual title lives in the hero card below) */}
      <h1 className="sr-only">
        {data.title} — {data.tags}
      </h1>

      {/* Hero card — solid black plate, overflow clipped, no stroke */}
      <div
        className="absolute z-[2] overflow-hidden rounded-[16px] bg-black px-[32px] pt-[32px] pb-[24px] text-white"
        style={{ left: 940, top: L.heroCardY, width: 380, height: 262 }}
        aria-hidden={false}
      >
        <p className="font-display text-[24px] leading-[32px] font-semibold">{data.title}</p>
        <p className="font-display mt-[12px] text-[16px] leading-[24px] font-medium">{data.tags}</p>
        <p className="font-display mt-[20px] text-[16px] leading-[24px] font-medium text-justify">
          {data.heroSummary}
        </p>
      </div>

      {/* Intro column — transparent shell; line fills only, so corner doodles stay visible */}
      <section
        aria-label="项目介绍"
        className="absolute z-[2]"
        style={{ left: 560, top: introTop, width: 780, height: introHeight }}
      >
        <div className="font-display ml-[10px] mt-[4px] w-[750px] text-[16px] leading-[24px] font-medium text-justify text-black">
          {data.introBody.map((paragraph, index) => (
            <p
              key={index}
              className={index < data.introBody.length - 1 ? "mb-[24px]" : undefined}
              style={introLineFill}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <p className="sr-only">{data.credit}</p>
      </section>

      {/* Concept body — page-bg plate, no border/radius; height clamped above feature cards */}
      <section
        aria-label="设计理念"
        className="font-display absolute z-[2] overflow-hidden text-[16px] leading-[24px] font-medium text-justify text-black"
        style={{
          left: 560,
          top: L.conceptBodyY - 4,
          width: 780,
          maxHeight: conceptMaxH,
          padding: "4px 10px 8px",
          background: PAGE_BG,
        }}
      >
        {data.conceptBody.map((paragraph, index) => (
          <p
            key={index}
            className={index < data.conceptBody.length - 1 ? "mb-[16px]" : undefined}
          >
            {paragraph}
          </p>
        ))}
      </section>

      <FeatureCardCopy
        left={121}
        top={L.featureCardAY}
        title={data.featureCardA.title}
        body={data.featureCardA.body}
        titleTop={30}
        bodyTop={74}
      />
      <FeatureCardCopy
        left={1036}
        top={L.featureCardBY}
        title={data.featureCardB.title}
        body={data.featureCardB.body}
        titleTop={28}
        bodyTop={72}
      />

      {/* Details body — clamped so plate doesn't cover doodles / gallery */}
      <section
        aria-label="细节展示"
        className="font-display absolute z-[2] overflow-hidden text-[16px] leading-[24px] font-medium text-justify text-black"
        style={{
          left: 556,
          top: L.detailsBodyY - 4,
          width: 780,
          maxHeight: detailsMaxH,
          padding: "4px 12px 10px",
          background: PAGE_BG,
        }}
      >
        {data.detailsBody.map((paragraph, index) => (
          <p
            key={index}
            className={index < data.detailsBody.length - 1 ? "mb-[16px]" : undefined}
          >
            {paragraph}
          </p>
        ))}
      </section>
    </div>
  );
}

function FeatureCardCopy({
  left,
  top,
  title,
  body,
  titleTop,
  bodyTop,
}: {
  left: number;
  top: number;
  title: string;
  body: string;
  titleTop: number;
  bodyTop: number;
}) {
  /**
   * Solid yellow plate over the card text band — must extend to the card’s right
   * edge so baked-in page.png glyphs cannot peek past per-line wraps.
   */
  return (
    <div
      className="absolute z-[2] overflow-hidden"
      style={{ left, top, width: 285, height: 170 }}
    >
      <div
        className="font-display absolute text-[#272727]"
        style={{
          left: 18,
          top: titleTop - 4,
          width: 255,
          bottom: 12,
          padding: "4px 10px 8px",
          background: CARD_BG,
        }}
      >
        <p className="text-[20px] leading-[28px] font-bold">{title}</p>
        <p
          className="text-[14px] leading-[22px] font-medium text-justify"
          style={{ marginTop: Math.max(bodyTop - titleTop - 28, 8) }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
