import { PageSection } from "@/components/layout/PageSection";
import Link from "next/link";
import type { ReactNode } from "react";

const INVENTORY_COUNT = 12;

export function InventoryResults({
  backHref,
  backLabel,
  visual,
  description,
}: {
  backHref: string;
  backLabel: string;
  visual: ReactNode;
  description: string;
}) {
  return (
    <PageSection className="pb-[80px] pt-[12px]">
      <Link
        href={backHref}
        aria-label={backLabel}
        className="flex size-[48px] items-center text-[42px] leading-none text-ink transition-opacity hover:opacity-70"
      >
        ←
      </Link>

      <div className="mt-[28px]">{visual}</div>

      <p className="mt-[24px] text-[22px] leading-[27px] text-ink">
        {description}
      </p>

      <div className="mt-[48px] text-ink">
        <p className="text-[48px] font-bold leading-[1.2]">太幸运啦！</p>
        <p className="mt-[12px] text-[26px] font-bold leading-[31px]">
          查找到
          <span className="font-display mx-[8px] inline-block text-[56px] font-normal leading-none">
            {INVENTORY_COUNT}
          </span>
          种适合你的灵感现货
        </p>
      </div>

      <ul className="mt-[48px] grid grid-cols-3 gap-x-[24px] gap-y-[24px]">
        {Array.from({ length: INVENTORY_COUNT }, (_, index) => (
          <li
            key={index}
            className="h-[250px] bg-card"
            aria-label={`灵感现货 ${index + 1}`}
          />
        ))}
      </ul>
    </PageSection>
  );
}
