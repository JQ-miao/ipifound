import { asset } from "@/lib/asset";
import Link from "next/link";

export function BackToListButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      aria-label="返回列表"
      className="sketch-button absolute top-[142px] left-[120px] z-30 inline-flex h-[48px] w-[136px] items-center justify-center"
    >
      <img
        decoding="async"
        src={asset("/figma/ui/btn-back.svg")}
        alt=""
        aria-hidden
        className="button-shape pointer-events-none absolute inset-[-2px] size-[calc(100%+4px)] max-w-none"
      />
      <span className="relative z-10 flex items-center gap-[4px] leading-none">
        <img
          decoding="async"
          src={asset("/figma/ui/btn-back-icon.svg")}
          alt=""
          aria-hidden
          className="button-icon size-[24px] shrink-0 -scale-x-100"
        />
        <span className="font-hand pr-[4px] text-[20px] leading-none whitespace-nowrap">返回列表</span>
      </span>
    </Link>
  );
}
