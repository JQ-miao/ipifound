"use client";

import { FindInventoryButton } from "@/components/home/FindInventoryButton";
import { useState } from "react";

export function BirthdayFilter() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  return (
    <div id="birthday" className="relative h-[292px] w-[1000px]">
      <img
        src="/figma/card-birthday.svg"
        alt=""
        width={1018.19}
        height={310.225}
        className="pointer-events-none absolute max-w-none"
        style={{ left: -9.1, top: -5.081 }}
      />

      <div className="absolute top-10 left-11">
        <h3 className="text-[30px] leading-none font-bold whitespace-nowrap text-ink">
          通过好日子来匹配你的品牌方案
        </h3>
        <p className="mt-4 text-[18px] leading-none whitespace-nowrap text-ink">
          日期可以是你的生日/公司破壳日/当然也可以是要你管！我就喜欢！的日子等等
        </p>

        <form action="/inventory" className="mt-6 w-[598px]">
          <div className="flex items-center gap-2">
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

          <FindInventoryButton className="mt-9" />
        </form>
      </div>

      <img
        src="/figma/birthday-mascot.png"
        alt=""
        width={236.162}
        height={144.809}
        className="pointer-events-none absolute max-w-none"
        style={{ left: 693.765, top: 81.665, width: 236.162, height: 144.809 }}
      />
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
    <label className="flex h-12 w-[194px] items-center">
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
        className="font-hand h-full w-[156px] rounded-lg border-2 border-line bg-white pr-4 pl-2 text-right text-[18px] text-ink outline-none placeholder:text-ink/30"
      />
      <span className="font-hand flex h-full w-[38px] items-center justify-center text-[18px] leading-[0.9]">
        {label}
      </span>
    </label>
  );
}
