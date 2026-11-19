import { asset } from "@/lib/asset";
import type { ProjectCaseStructured } from "@/lib/design/project-cases";

export function CaseHero({ data }: { data: ProjectCaseStructured }) {
  return (
    <section aria-label="案例主视觉" className="absolute top-0 left-0 h-[800px] w-[1440px] overflow-hidden">
      <img
        decoding="async"
        src={asset(data.assets.hero)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {data.assets.titleLogo ? (
        <img
          decoding="async"
          src={asset(data.assets.titleLogo)}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[166px] left-[728px] h-[274px] w-[508px] object-contain"
        />
      ) : null}
      <div className="absolute top-[498px] left-[940px] h-[262px] w-[380px] rounded-[16px] bg-black px-[32px] pt-[32px] text-white">
        <h1 className="font-display text-[24px] leading-[32px] font-semibold">{data.title}</h1>
        <p className="font-display mt-[12px] text-[16px] leading-[24px] font-medium whitespace-pre-wrap">{data.tags}</p>
        <p className="font-display mt-[20px] text-[16px] leading-[24px] font-medium text-justify">{data.heroSummary}</p>
      </div>
    </section>
  );
}
