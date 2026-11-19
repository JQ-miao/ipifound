import { asset } from "@/lib/asset";
import type { ProjectCaseStructured } from "@/lib/design/project-cases";

export function CaseConcept({ data }: { data: ProjectCaseStructured }) {
  const { featureCardA, featureCardB, skinStripA, skinStripB, doodles } = data.assets;

  return (
    <section aria-label="设计理念" className="absolute top-[1580px] left-0 h-[1100px] w-[1440px] bg-white">
      {doodles.swirlTop ? (
        <img
          decoding="async"
          src={asset(doodles.swirlTop)}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[-2px] left-[13px] h-[476px] w-[458px]"
        />
      ) : null}

      <h2 className="font-hand absolute top-[117px] left-[142px] text-[56px] leading-[58px] text-[#161616]">设计理念</h2>
      {doodles.titleUnderline ? (
        <img
          decoding="async"
          src={asset(doodles.titleUnderline)}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[187px] left-[183px] h-[12px] w-[143px]"
        />
      ) : null}

      <div className="font-display absolute top-[132px] left-[571px] w-[750px] text-[16px] leading-[24px] font-medium text-justify text-black">
        {data.conceptBody.map((paragraph, index) => (
          <p key={index} className={index === 0 ? "mb-0" : undefined}>
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

      {/* Feature card A + skin strip A */}
      <div className="absolute top-[336px] left-[121px] size-[285px] overflow-hidden rounded-[16px] border-[3px] border-ink bg-[#f9ff58]">
        <p className="font-display absolute top-[30px] left-[26px] w-[233px] text-[20px] leading-[28px] font-bold text-[#272727]">
          {featureCardA.title}
        </p>
        <p className="font-display absolute top-[74px] left-[26px] w-[233px] text-[14px] leading-[22px] font-medium text-justify text-[#272727]">
          <span className="font-bold">{data.title}</span>
          {featureCardA.body.startsWith(data.title) ? featureCardA.body.slice(data.title.length) : featureCardA.body}
        </p>
        {featureCardA.doodles?.[0] ? (
          <img
            decoding="async"
            src={asset(featureCardA.doodles[0])}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[175px] left-[14px] h-[111px] w-[122px]"
          />
        ) : null}
        {featureCardA.doodles?.[1] ? (
          <img
            decoding="async"
            src={asset(featureCardA.doodles[1])}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[175px] left-[140px] h-[113px] w-[117px]"
          />
        ) : null}
      </div>

      <div className="absolute top-[336px] left-[426px] h-[285px] w-[895px] overflow-hidden rounded-[16px]">
        <img decoding="async" src={asset(skinStripA)} alt={`${data.title}角色皮肤展示`} className="size-full object-cover" />
      </div>

      {/* Skin strip B + feature card B */}
      <div className="absolute top-[641px] left-[121px] h-[285px] w-[895px] overflow-hidden rounded-[16px]">
        <img decoding="async" src={asset(skinStripB)} alt={`${data.title}IP形象展示`} className="size-full object-cover" />
      </div>

      <div className="absolute top-[641px] left-[1036px] size-[285px] overflow-hidden rounded-[16px] border-[3px] border-ink bg-[#f9ff58]">
        <p className="font-display absolute top-[28px] left-[26px] w-[233px] text-[20px] leading-[28px] font-bold text-[#272727]">
          {featureCardB.title}
        </p>
        <p className="font-display absolute top-[72px] left-[26px] w-[233px] text-[14px] leading-[22px] font-medium text-[#272727]">
          {featureCardB.body}
        </p>
        {featureCardB.doodles?.[0] ? (
          <img
            decoding="async"
            src={asset(featureCardB.doodles[0])}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[171px] left-[80px] h-[117px] w-[122px]"
          />
        ) : null}
        {featureCardB.doodles?.[1] ? (
          <img
            decoding="async"
            src={asset(featureCardB.doodles[1])}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[235px] left-[219px] h-[50px] w-[41px]"
          />
        ) : null}
      </div>

      {doodles.swirlBottom ? (
        <img
          decoding="async"
          src={asset(doodles.swirlBottom)}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[897px] left-[35px] h-[378px] w-[1210px]"
        />
      ) : null}
    </section>
  );
}
