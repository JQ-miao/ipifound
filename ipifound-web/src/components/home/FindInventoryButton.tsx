import { asset } from "@/lib/asset";
import { OutlinedLabel } from "@/components/ui/OutlinedLabel";

export function FindInventoryButton({ className }: { className?: string }) {
  return (
    <button
      type="submit"
      className={`sketch-button relative flex h-[48px] w-[172px] items-center justify-center ${className ?? ""}`}
    >
      <img
        loading="lazy"
        decoding="async"
        src={asset("/figma/btn-search-shape.svg")}
        alt=""
        aria-hidden
        className="button-shape pointer-events-none absolute inset-[-2px] size-[calc(100%+4px)] max-w-none"
      />
      <span className="relative z-10 flex items-center pr-[4px] leading-none">
        <OutlinedLabel name="search-label" />
        <img
          loading="lazy"
          decoding="async"
          src={asset("/figma/btn-search-go.svg")}
          alt=""
          aria-hidden
          className="button-icon ml-[4px] size-[24px]"
          width={24}
          height={24}
        />
      </span>
    </button>
  );
}
