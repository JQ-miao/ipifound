"use client";

import { FindInventoryButton } from "@/components/home/FindInventoryButton";
import { PageSection } from "@/components/layout/PageSection";
import { useState } from "react";

export function BirthdayFilter() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  return (
    <PageSection id="birthday" className="pb-[70px] pt-[117px]">
      <h2 className="text-[26px] font-bold leading-[31px] text-ink">
        根据主理人的生日选择最适合你的品牌方案（暂定）
      </h2>
      <p className="mt-[24px] text-[22px] leading-[27px] text-ink">
        请输入你的生日
      </p>

      <form action="/inventory" className="mt-[24px]">
        <div className="flex flex-wrap items-center gap-x-[24px] gap-y-[16px]">
          <DateField
            name="year"
            value={year}
            onChange={setYear}
            label="年"
            placeholder="YYYY"
            maxLength={4}
            required
            minLength={4}
          />
          <DateField
            name="month"
            value={month}
            onChange={setMonth}
            label="月"
            placeholder="MM"
            maxLength={2}
            required
            minLength={1}
          />
          <DateField
            name="day"
            value={day}
            onChange={setDay}
            label="日"
            placeholder="DD"
            maxLength={2}
            required
            minLength={1}
          />
        </div>

        <FindInventoryButton className="mt-[49px]" />
      </form>
    </PageSection>
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
    <label className="flex items-center gap-[24px] text-[22px] leading-[27px] text-ink">
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
        className="h-[81px] w-[261px] rounded-[8px] bg-field px-[24px] text-[22px] text-ink outline-none placeholder:text-ink/25"
      />
      {label}
    </label>
  );
}
