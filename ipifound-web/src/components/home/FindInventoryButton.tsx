import { asset } from "@/lib/asset";

export function FindInventoryButton({ className }: { className?: string }) {
  return (
    <button
      type="submit"
      className={`relative flex h-[48px] w-[172px] items-center justify-center ${className ?? ""}`}
    >
      <img
        src={asset("/figma/btn-search-shape.svg")}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-[-2px] size-[calc(100%+4px)] max-w-none"
      />
      <span className="font-hand relative z-10 flex items-center pr-[4px] text-[20px] leading-none text-ink">
        查找灵感库存
        <img
          src={asset("/figma/btn-search-go.svg")}
          alt=""
          aria-hidden
          className="ml-[4px] size-[24px]"
          width={24}
          height={24}
        />
      </span>
    </button>
  );
}
