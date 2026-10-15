"use client";

import { FindInventoryButton } from "@/components/home/FindInventoryButton";
import { ZODIACS } from "@/lib/zodiacs";
import { useState } from "react";

const ART = {
  rat: { x: 2, y: 200, w: 48.8339, h: 57.9611, pw: 100, ph: 118 },
  ox: { x: 65.8346, y: 152.614, w: 77.9036, h: 105.854, pw: 160, ph: 215 },
  tiger: { x: 137, y: 151, w: 97.3465, h: 107.181, pw: 198, ph: 218 },
  rabbit: { x: 230, y: 154, w: 67.8268, h: 103.707, pw: 139, ph: 212 },
  dragon: { x: 298, y: 133, w: 81.0618, h: 125.301, pw: 167, ph: 255 },
  snake: { x: 390, y: 182, w: 64.7928, h: 75.58, pw: 134, ph: 155 },
  horse: { x: 454, y: 140, w: 90.1453, h: 117.888, pw: 185, ph: 240 },
  goat: { x: 535, y: 147, w: 76.5796, h: 111.431, pw: 157, ph: 227 },
  monkey: { x: 613, y: 157, w: 78.1572, h: 100.671, pw: 160, ph: 205 },
  rooster: { x: 701, y: 170, w: 84.717, h: 87.5807, pw: 174, ph: 180 },
  dog: { x: 777, y: 174, w: 61.0572, h: 83.51, pw: 127, ph: 171 },
  pig: { x: 842, y: 174, w: 69.7642, h: 84.4417, pw: 145, ph: 173 },
} as const;

export function ZodiacFilter() {
  const [selected, setSelected] = useState<string>("");

  return (
    <div id="zodiac" className="relative h-[466px] w-[1000px]">
      <img
        src="/figma/card-zodiac.svg"
        alt=""
        width={1018.19}
        height={484.197}
        className="pointer-events-none absolute max-w-none"
        style={{ left: -9.1, top: -5.126 }}
      />

      <div className="absolute top-10 left-11 w-[912px]">
        <h3 className="text-[30px] leading-none font-bold text-ink">
          通过生肖来匹配你的品牌方案
        </h3>
        <p className="mt-4 text-[18px] leading-none whitespace-nowrap text-ink">
          请选择你的生肖，或是最贴合你品牌气质的生肖，当然你也可以有你执着的选择啦~
        </p>

        <form action="/inventory/zodiac" className="mt-8">
          <fieldset>
            <legend className="sr-only">生肖</legend>
            <div className="flex h-[226px] items-end justify-between">
              {ZODIACS.map((zodiac, index) => {
                const art = ART[zodiac.id];
                const displayW = art.pw / 2;
                const displayH = art.ph / 2;
                const left = art.x + art.w / 2 - displayW / 2 - index * 78;
                const top = art.y - 96 + art.h / 2 - displayH / 2;

                return (
                  <label
                    key={zodiac.id}
                    className="relative flex h-[226px] w-[54px] cursor-pointer flex-col items-center justify-end"
                  >
                    <img
                      src={`/figma/zodiacs/${zodiac.id}.png`}
                      alt=""
                      width={displayW}
                      height={displayH}
                      className="absolute max-w-none"
                      style={{ left, top, width: displayW, height: displayH }}
                    />
                    <span className="font-hand text-[16px] leading-none text-ink">
                      {zodiac.name}
                    </span>
                    <span className="relative mt-4 block size-5">
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
                        width={20}
                        height={20}
                        className="absolute inset-0 size-5 peer-checked:hidden"
                      />
                      <img
                        src="/figma/radio-on.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="absolute inset-0 hidden size-5 peer-checked:block"
                      />
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <FindInventoryButton className="mt-6" />
        </form>
      </div>
    </div>
  );
}
