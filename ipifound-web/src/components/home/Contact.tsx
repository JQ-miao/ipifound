import type { ReactNode } from "react";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-contact text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[72px] bg-white"
        style={{
          clipPath:
            "path('M0,0 H1440 V28 C1200,70 980,8 720,36 C460,64 220,12 0,40 Z')",
        }}
      />

      <div className="relative mx-auto flex max-w-[1440px] items-start justify-between gap-[48px] px-[220px] pb-[76px] pt-[92px]">
        <div className="w-[296px] shrink-0">
          <p className="font-contact text-[16px] leading-[24px] text-[#d6b07a]">
            Contact Us
          </p>
          <h2 className="mt-[16px] max-w-[280px] text-[40px] font-bold leading-[1.3]">
            更多个性化需求
            <br />
            欢迎扫码联系
          </h2>

          <div className="mt-[28px]">
            <div className="h-[3px] w-[280px] rounded-full bg-[#c9836a]/80" />
            <p className="py-[12px] text-[16px] leading-[24px]">
              在线时段 :
              <br />
              周一至周五9:00 - 18:00
            </p>
            <div className="h-[3px] w-[280px] rounded-full bg-[#c9836a]/80" />
          </div>
        </div>

        <div className="flex w-[526px] flex-col gap-[36px]">
          <ConsultantRow
            title={
              <>
                知识产权需求
                <br />
                请咨询我
              </>
            }
            underline
          />
          <ConsultantRow
            title={
              <>
                品牌定制需求
                <br />
                找我了解
              </>
            }
            underline
          />
        </div>
      </div>
    </section>
  );
}

function ConsultantRow({
  title,
  underline,
}: {
  title: ReactNode;
  underline?: boolean;
}) {
  return (
    <div className="flex items-start gap-[16px]">
      <div className="flex w-[150px] shrink-0 flex-col justify-center pt-[30px] text-[18px] font-semibold leading-[26px]">
        <span
          className={
            underline
              ? "underline decoration-[#c9836a] decoration-2 underline-offset-[6px]"
              : undefined
          }
        >
          {title}
        </span>
      </div>
      <span
        aria-hidden
        className="mt-[44px] inline-block size-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-ink"
      />
      <div className="flex items-start gap-[16px]">
        <QrBlock title="微信客服" />
        <QrBlock title="小红书官方号" />
      </div>
    </div>
  );
}

function QrBlock({ title }: { title: string }) {
  return (
    <div className="flex w-[100px] flex-col items-center">
      <div className="flex size-[100px] items-center justify-center rounded-[4px] bg-white text-center text-[12px] leading-[16px] text-ink/50">
        {title}
        <br />
        二维码
      </div>
      <p className="mt-[8px] text-center text-[14px] leading-[16px]">{title}</p>
    </div>
  );
}
