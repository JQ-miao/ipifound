import { LampDecor } from "@/components/layout/LampDecor";
import { SiteHeader } from "./SiteHeader";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-mist"
      style={{ minHeight: 782 }}
    >
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1440px]">
        <img
          src="/figma/spotlight.svg"
          alt=""
          className="absolute left-[87.5px] top-[17.5px] h-[1035.5px] w-[1280.5px] max-w-none"
        />
        <img
          src="/figma/dashed-line.svg"
          alt=""
          className="absolute left-[804px] top-[67px] h-[509px] w-[2px] max-w-none"
        />
      </div>
      <LampDecor />

      <div className="relative mx-auto max-w-[1440px]">
        <SiteHeader />

        <div className="flex flex-col items-center pb-[180px] pt-[26px] text-center text-ink">
          <h1 className="font-display text-[76px] font-normal leading-[0.9]">
            Let&apos;s
            <br />
            found found!
          </h1>
          <p className="font-display mt-[30px] text-[325px] font-normal leading-[0.85] tracking-[-0.04em]">
            999
          </p>
          <p className="mt-[9px] text-[22px] leading-[31px]">灵感现货总库存</p>
        </div>
      </div>
    </section>
  );
}
