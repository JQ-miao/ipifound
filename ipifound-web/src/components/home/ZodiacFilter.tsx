"use client";

import { FindInventoryButton } from "@/components/home/FindInventoryButton";
import { PageSection } from "@/components/layout/PageSection";
import { ZODIACS } from "@/lib/zodiacs";
import { useState } from "react";

export function ZodiacFilter() {
  const [selected, setSelected] = useState("tiger");

  return (
    <PageSection id="zodiac" className="pb-[90px] pt-[24px]">
      <h2 className="text-[26px] font-bold leading-[31px] text-ink">
        根据主理人的生肖选择最适合你的品牌方案（暂定）
      </h2>
      <p className="mt-[21px] text-[22px] leading-[27px] text-ink">
        请选择你的生肖
      </p>

      <form action="/inventory/zodiac" className="mt-[55px]">
        <fieldset className="relative">
          <legend className="sr-only">生肖</legend>
          <img
            src="/figma/zodiac.png"
            alt="十二生肖插画"
            className="h-auto w-full max-w-[1062px]"
            width={1063}
            height={179}
          />
          <div className="relative mt-[16px] h-[17px] max-w-[1062px]">
            {ZODIACS.map((zodiac) => (
              <label
                key={zodiac.id}
                className="absolute top-0 size-[17px] -translate-x-1/2 cursor-pointer"
                style={{ left: zodiac.left }}
              >
                <input
                  type="radio"
                  name="zodiac"
                  value={zodiac.id}
                  checked={selected === zodiac.id}
                  onChange={() => setSelected(zodiac.id)}
                  className="peer sr-only"
                />
                <span className="flex size-[17px] items-center justify-center rounded-[2px] border border-ink peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink">
                  <span
                    className={`block size-[7px] rounded-[1px] bg-ink ${selected === zodiac.id ? "opacity-100" : "opacity-0"}`}
                  />
                  <span className="sr-only">{zodiac.name}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <FindInventoryButton className="mt-[47px]" />
      </form>
    </PageSection>
  );
}
