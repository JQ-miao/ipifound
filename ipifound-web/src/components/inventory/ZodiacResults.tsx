import { InventoryResults } from "@/components/inventory/InventoryResults";
import { asset } from "@/lib/asset";
import { getPersonality } from "@/lib/personalities";

export function ZodiacResults({ zodiacId }: { zodiacId?: string }) {
  const personality = getPersonality(zodiacId);
  const isRat = personality.id === "rat";

  return (
    <InventoryResults
      backHref="/#zodiac"
      backLabel="返回生肖筛选"
      personality={personality}
      mascotName={personality.name}
      variant="zodiac"
      illustration={
        isRat ? (
          <img
            src={asset("/figma/brand/rat-desk.svg")}
            alt={`${personality.name}型品牌人格`}
            className="block h-auto w-full max-w-[432px]"
            width={432}
            height={312}
          />
        ) : (
          <img
            src={asset(`/figma/zodiacs/${personality.id}.png`)}
            alt={`${personality.name}型品牌人格`}
            className="mx-auto block h-auto max-h-[312px] w-auto max-w-[432px] object-contain"
          />
        )
      }
    />
  );
}
