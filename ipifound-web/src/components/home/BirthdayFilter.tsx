"use client";

import { FindInventoryButton } from "@/components/home/FindInventoryButton";
import { useState } from "react";

export function BirthdayFilter() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  return (
    <div id="birthday" className="relative w-full max-w-[1000px]">
      <div className="absolute inset-0 rounded-[40px] bg-card-blue" />
      <img
        src="/figma/frame-sketch-sm.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full max-w-none"
      />

      <div className="relative flex items-end justify-between gap-[24px] px-[44px] pb-[40px] pt-[40px]">
        <div className="min-w-0 flex-1">
          <h3 className="text-[30px] font-bold leading-[30px] text-ink">
            通过好日子来匹配你的品牌方案
          </h3>
          <p className="mt-[16px] max-w-[627px] text-[18px] leading-[18px] text-ink">
            日期可以是你的生日/公司破壳日/当然也可以是要你管！我就喜欢！的日子等等
          </p>

          <form action="/inventory" className="mt-[24px]">
            <div className="flex flex-wrap items-center gap-x-[8px] gap-y-[12px]">
              <DateField
                name="year"
                value={year}
                onChange={setYear}
                label="年"
                placeholder="2026"
                maxLength={4}
                required
                minLength={4}
              />
              <DateField
                name="month"
                value={month}
                onChange={setMonth}
                label="月"
                placeholder="12"
                maxLength={2}
                required
                minLength={1}
              />
              <DateField
                name="day"
                value={day}
                onChange={setDay}
                label="日"
                placeholder="12"
                maxLength={2}
                required
                minLength={1}
              />
            </div>

            <FindInventoryButton className="mt-[36px]" />
          </form>
        </div>

        <img
          src="/figma/birthday-mascot.png"
          alt=""
          className="mb-[-8px] h-[210px] w-auto max-w-[275px] shrink-0 object-contain"
          width={275}
          height={255}
        />
      </div>
    </div>
  );
}

function DateField({
  name,
  value,
  onChange,
  label,
  placeholder,
  maxLength,
  required,
  minLength,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
  maxLength: number;
  required?: boolean;
  minLength?: number;
}) {
  return (
    <label className="flex h-[48px] w-[194px] items-center">
      <input
        name={name}
        value={value}
        onChange={(event) =>
          onChange(event.target.value.replace(/\D/g, "").slice(0, maxLength))
        }
        inputMode="numeric"
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        className="font-hand h-full w-[156px] rounded-[8px] border-2 border-line bg-white px-[8px] pr-[16px] text-right text-[18px] text-ink outline-none placeholder:text-ink/30"
      />
      <span className="font-hand flex h-full w-[38px] items-center justify-center text-[18px] leading-[0.9]">
        {label}
      </span>
    </label>
  );
}
