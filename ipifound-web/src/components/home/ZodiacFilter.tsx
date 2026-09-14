"use client";

import { FindInventoryButton } from "@/components/home/FindInventoryButton";
import { ZODIACS } from "@/lib/zodiacs";
import { useState } from "react";

export function ZodiacFilter() {
  const [selected, setSelected] = useState<string>("");

  return (
    <div id="zodiac" className="relative w-full max-w-[1000px]">
      <div className="absolute inset-0 rounded-[40px] bg-card-blue" />
      <img
        src="/figma/frame-sketch-lg.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full max-w-none"
      />

      <div className="relative px-[44px] pb-[48px] pt-[40px]">
        <h3 className="text-[30px] font-bold leading-[30px] text-ink">
          通过生肖来匹配你的品牌方案
        </h3>
        <p className="mt-[16px] text-[18px] leading-[18px] text-ink">
          请选择你的生肖，或是最贴合你品牌气质的生肖，当然你也可以有你执着的选择啦~
        </p>

        <form action="/inventory/zodiac" className="mt-[32px]">
          <fieldset>
            <legend className="sr-only">生肖</legend>
            <div className="flex items-end justify-between">
              {ZODIACS.map((zodiac) => (
                <label
                  key={zodiac.id}
                  className="flex w-[54px] cursor-pointer flex-col items-center"
                >
                  <span className="flex h-[118px] w-[90px] items-end justify-center">
                    <img
                      src={`/figma/zodiacs/${zodiac.id}.png`}
                      alt=""
                      className="max-h-[118px] w-auto max-w-[90px] object-contain object-bottom"
                    />
                  </span>
                  <span className="font-hand mt-[12px] text-[16px] leading-none text-ink">
                    {zodiac.name}
                  </span>
                  <span className="relative mt-[16px] block size-[20px]">
                    <input
                      type="radio"
                      name="zodiac"
                      value={zodiac.id}
                      required
                      checked={selected === zodiac.id}
                      onChange={() => setSelected(zodiac.id)}
                      className="peer sr-only"
                    />
                    <img
                      src="/figma/radio-off.svg"
                      alt=""
                      aria-hidden
                      className="absolute inset-0 size-[20px] peer-checked:hidden"
                    />
                    <img
                      src="/figma/radio-on.svg"
                      alt=""
                      aria-hidden
                      className="absolute inset-0 hidden size-[20px] peer-checked:block"
                    />
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <FindInventoryButton className="mt-[28px]" />
        </form>
      </div>
    </div>
  );
}
