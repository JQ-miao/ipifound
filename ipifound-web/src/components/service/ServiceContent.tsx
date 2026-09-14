import { PageSection } from "@/components/layout/PageSection";
import { Placeholder } from "@/components/ui/Placeholder";

const CLIENT_SLOTS = 8;

export function ServiceContent() {
  return (
    <PageSection className="pb-[48px]" innerClassName="flex flex-col gap-[72px]">
      <section id="process">
        <h2 className="text-[26px] font-bold leading-[31px]">服务流程</h2>
        <Placeholder className="mt-[28px] flex h-[520px] items-center justify-center">
          流程图
        </Placeholder>
      </section>

      <section id="advantages">
        <h2 className="text-[26px] font-bold leading-[31px]">服务优势</h2>
        <div className="mt-[28px] flex items-stretch gap-[24px]">
          <Placeholder className="flex h-[420px] flex-1 items-center justify-center">
            答题互动
          </Placeholder>
          <Placeholder className="flex h-[420px] w-[320px] shrink-0 items-center justify-center">
            视频
          </Placeholder>
        </div>
      </section>

      <section id="about">
        <h2 className="text-[26px] font-bold leading-[31px]">公司介绍</h2>
        <div className="mt-[28px] flex flex-col gap-[24px]">
          <Placeholder className="flex h-[360px] items-center justify-center">
            A公司
          </Placeholder>
          <Placeholder className="flex h-[360px] items-center justify-center">
            B公司
          </Placeholder>
        </div>
      </section>

      <section id="clients">
        <h2 className="text-[26px] font-bold leading-[31px]">服务过的企业</h2>
        <ul className="mt-[40px] grid grid-cols-4 justify-items-center gap-x-[48px] gap-y-[40px]">
          {Array.from({ length: CLIENT_SLOTS }, (_, index) => (
            <li
              key={index}
              className="size-[160px] rounded-full bg-field"
              aria-label={`合作企业 ${index + 1}`}
            />
          ))}
        </ul>
      </section>
    </PageSection>
  );
}
