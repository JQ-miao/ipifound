import { asset } from "@/lib/asset";
import type { ProjectCaseStructured } from "@/lib/design/project-cases";
import { BrandTicker } from "./BrandTicker";

export function CaseIntro({ data }: { data: ProjectCaseStructured }) {
  const { doodles } = data.assets;
  return (
    <>
      <section aria-label="项目介绍" className="absolute top-[800px] left-0 h-[780px] w-[1440px] overflow-hidden bg-lucky-yellow">
        <div className="absolute top-[-29px] left-[329px] size-[220px] rounded-full bg-lucky-yellow" aria-hidden />

        <div className="absolute top-[78px] left-[121px] h-[351px] w-[360px]">
          <div
            aria-hidden
            className="absolute top-[5px] left-[44px] h-[312px] w-[278px] rotate-[7.7deg] rounded-[16px] border-4 border-ink bg-[#cedfff]"
          />
          <div className="absolute top-0 left-0 size-[312px] overflow-hidden rounded-[16px] shadow-[8px_8px_10px_0_rgba(0,0,0,0.1)]">
            <img
              decoding="async"
              src={asset(data.assets.portrait)}
              alt={`${data.title}形象`}
              className="size-full object-cover"
            />
            {data.assets.portraitFrame ? (
              <img
                decoding="async"
                src={asset(data.assets.portraitFrame)}
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 size-full object-cover"
              />
            ) : null}
          </div>
          {data.assets.badge ? (
            <img
              decoding="async"
              src={asset(data.assets.badge)}
              alt=""
              aria-hidden
              className="pointer-events-none absolute -top-[76px] left-[239px] size-[158px]"
            />
          ) : null}
        </div>

        <div className="absolute top-[139px] left-[570px] w-[750px]">
          <div className="font-display text-[16px] leading-[24px] font-medium text-justify text-black">
            {data.introBody.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "mb-[24px]" : index < data.introBody.length - 1 ? "mb-[24px]" : undefined}>
                {index === 0 ? (
                  <>
                    <span className="font-bold">{data.title}</span>
                    {paragraph.startsWith(data.title) ? paragraph.slice(data.title.length) : paragraph}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
          <div className="mt-[50px] h-px w-full bg-[#1e1e1e]" />
          <p className="font-display mt-[24px] text-[16px] leading-[24px] font-medium whitespace-pre-wrap text-black">
            {data.credit}
          </p>
        </div>

        {doodles.spark ? (
          <img
            decoding="async"
            src={asset(doodles.spark)}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[350px] left-[51px] h-[33px] w-[44px]"
          />
        ) : null}
        {doodles.seagulls?.[0] ? (
          <img
            decoding="async"
            src={asset(doodles.seagulls[0])}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[460px] left-[200px] h-[51px] w-[83px]"
          />
        ) : null}
        {doodles.seagulls?.[1] ? (
          <img
            decoding="async"
            src={asset(doodles.seagulls[1])}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[521px] left-[385px] h-[36px] w-[69px]"
          />
        ) : null}
        {doodles.seagulls?.[2] ? (
          <img
            decoding="async"
            src={asset(doodles.seagulls[2])}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[588px] left-[322px] h-[22px] w-[47px]"
          />
        ) : null}
        {doodles.fence ? (
          <img
            decoding="async"
            src={asset(doodles.fence)}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[676px] left-[30px] h-[68px] w-[379px]"
          />
        ) : null}
        {doodles.bike ? (
          <img
            decoding="async"
            src={asset(doodles.bike)}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[463px] left-[1109px] h-[227px] w-[261px]"
          />
        ) : null}
      </section>
      <BrandTicker />
    </>
  );
}
