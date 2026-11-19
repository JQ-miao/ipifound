import { asset } from "@/lib/asset";
import type { ProjectCaseStructured } from "@/lib/design/project-cases";

export function CaseDetails({ data }: { data: ProjectCaseStructured }) {
  const { doodles } = data.assets;

  return (
    <section aria-label="细节展示" className="absolute top-[2680px] left-0 h-[1532px] w-[1440px] bg-white">
      <h2 className="font-hand absolute top-[11px] left-[120px] text-[56px] leading-[58px] text-[#161616]">
        {data.detailsTitle}
      </h2>
      {doodles.titleUnderline ? (
        <img
          decoding="async"
          src={asset(doodles.titleUnderline)}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[81px] left-[160px] h-[12px] w-[143px]"
        />
      ) : null}
      <div className="font-display absolute top-[15px] left-[568px] w-[746px] text-[16px] leading-[24px] font-medium text-justify text-black">
        {data.detailsBody.map((paragraph, index) => (
          <p key={index} className={index < data.detailsBody.length - 1 ? "mb-[24px]" : undefined}>
            {paragraph}
          </p>
        ))}
      </div>

      {doodles.detailsSeagulls?.[0] ? (
        <img
          decoding="async"
          src={asset(doodles.detailsSeagulls[0])}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[-71px] left-[250px] h-[22px] w-[47px]"
        />
      ) : null}
      {doodles.detailsSeagulls?.[1] ? (
        <img
          decoding="async"
          src={asset(doodles.detailsSeagulls[1])}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[-35px] left-[334px] h-[36px] w-[69px] rotate-[21deg]"
        />
      ) : null}
      {doodles.detailsBlue ? (
        <img
          decoding="async"
          src={asset(doodles.detailsBlue)}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[106px] left-[323px] h-[129px] w-[322px]"
        />
      ) : null}
      {doodles.detailsYellow ? (
        <img
          decoding="async"
          src={asset(doodles.detailsYellow)}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[106px] left-[513px] h-[129px] w-[162px]"
        />
      ) : null}
      {doodles.detailsFence ? (
        <img
          decoding="async"
          src={asset(doodles.detailsFence)}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[168px] left-[1062px] h-[68px] w-[379px]"
        />
      ) : null}

      {data.assets.gallery.map((slot) => (
        <div
          key={`${slot.x}-${slot.y}`}
          className="absolute overflow-hidden rounded-[16px]"
          style={{ left: slot.x, top: slot.y - 2680, width: slot.w, height: slot.h }}
        >
          <img
            decoding="async"
            loading="lazy"
            src={asset(slot.src)}
            alt=""
            className="size-full object-cover"
          />
        </div>
      ))}
    </section>
  );
}
