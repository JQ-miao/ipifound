import { asset } from "@/lib/asset";
import type { ReactNode } from "react";

const CONSULTANTS = [
  {
    character: asset("/figma/contact/character-ip.png"),
    characterWidth: 100,
    characterHeight: 114.356,
    gap: 16,
    title: (
      <>
        知识产权需求
        <br />
        请咨询我
      </>
    ),
    codes: [
      {
        src: asset("/figma/contact/qr-ip-wechat-block.png"),
        alt: "微信客服二维码",
      },
      {
        src: asset("/figma/contact/qr-ip-xhs-block.png"),
        alt: "小红书官方号二维码",
      },
    ],
  },
  {
    character: asset("/figma/contact/character-brand.png"),
    characterWidth: 98,
    characterHeight: 115.95,
    gap: 18,
    title: (
      <>
        品牌定制需求
        <br />
        找我了解
      </>
    ),
    codes: [
      {
        src: asset("/figma/contact/qr-brand-wechat-block.png"),
        alt: "微信客服二维码",
      },
      {
        src: asset("/figma/contact/qr-brand-xhs-block.png"),
        alt: "小红书官方号二维码",
      },
    ],
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="relative h-[412px] w-full text-ink">
      <img
        src={asset("/figma/contact/wave.svg")}
        alt=""
        width={1446.5}
        height={418.391}
        className="pointer-events-none absolute max-w-none"
        style={{ left: -3.312, top: -3.131 }}
      />

      <div className="relative mx-auto flex w-[1000px] items-start gap-[178px] pt-[76px]">
        <div className="flex w-[296px] shrink-0 flex-col gap-3">
          <div className="flex flex-col gap-4">
            <p className="font-nav text-[24px] leading-none font-semibold text-[#dab74c]">
              Contact Us
            </p>
            <h2 className="text-[40px] leading-[1.3] font-bold">
              更多个性化需求
              <br />
              欢迎扫码联系
            </h2>
          </div>

          <div className="flex flex-col gap-1">
            <img
              src={asset("/figma/contact/line.svg")}
              alt=""
              width={296}
              height={22.7264}
              className="h-[22.726px] w-[296px] max-w-none"
            />
            <p className="text-[24px] leading-[1.5] font-bold whitespace-pre">
              在线时段 :{"\n"}周一至周五9:00 - 18:00
            </p>
            <img
              src={asset("/figma/contact/line.svg")}
              alt=""
              width={296}
              height={22.7264}
              className="h-[22.726px] w-[296px] max-w-none"
            />
          </div>
        </div>

        <div className="flex w-[526px] flex-col gap-9">
          {CONSULTANTS.map((consultant) => (
            <ConsultantRow
              key={consultant.character}
              character={consultant.character}
              characterWidth={consultant.characterWidth}
              characterHeight={consultant.characterHeight}
              gap={consultant.gap}
              title={consultant.title}
              codes={consultant.codes}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultantRow({
  character,
  characterWidth,
  characterHeight,
  gap,
  title,
  codes,
}: {
  character: string;
  characterWidth: number;
  characterHeight: number;
  gap: number;
  title: ReactNode;
  codes: readonly { src: string; alt: string }[];
}) {
  return (
    <div className="flex items-start" style={{ gap }}>
      <img
        src={character}
        alt=""
        width={characterWidth}
        height={characterHeight}
        className="shrink-0"
        style={{ width: characterWidth, height: characterHeight }}
      />

      <div className="flex items-start gap-5">
        <div className="flex items-start">
          <div className="relative flex h-28 w-[150px] items-center pr-5 pl-2.5">
            <p className="font-hand text-[20px] leading-[1.3] whitespace-nowrap">
              {title}
            </p>
            <img
              src={asset("/figma/contact/underline.svg")}
              alt=""
              width={119.913}
              height={32.156}
              className="pointer-events-none absolute max-w-none"
              style={{ left: 8.58, top: 53.41 }}
            />
          </div>
          <img
            src={asset("/figma/contact/arrow.svg")}
            alt=""
            width={26.123}
            height={112}
            className="h-28 w-[26.123px] max-w-none shrink-0"
          />
        </div>

        <div className="flex items-start gap-4">
          {codes.map((code) => (
            <img
              key={code.src}
              src={code.src}
              alt={code.alt}
              width={100}
              height={124}
              className="h-[124px] w-[100px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
