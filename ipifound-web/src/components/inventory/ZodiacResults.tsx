import { InventoryResults } from "@/components/inventory/InventoryResults";
import { asset } from "@/lib/asset";
import { getPersonality } from "@/lib/personalities";

export function ZodiacResults({ zodiacId }: { zodiacId?: string }) {
  const personality = getPersonality(zodiacId);

  return (
    <InventoryResults
      backHref="/#zodiac"
      backLabel="返回生肖筛选"
      personality={personality}
      mascotName={personality.name}
      illustration={
        <div className="relative h-[320px] w-[360px] overflow-hidden rounded-[24px] bg-lucky-yellow/20">
          <img
            src={asset(`/figma/zodiacs/${personality.id}.png`)}
            alt={`${personality.name}型品牌人格`}
            className="absolute inset-0 m-auto h-[260px] w-auto max-w-none object-contain"
          />
        </div>
      }
    />
  );
}
