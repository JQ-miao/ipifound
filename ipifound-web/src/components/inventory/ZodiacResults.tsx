import { InventoryResults } from "@/components/inventory/InventoryResults";
import { getZodiac } from "@/lib/zodiacs";

export function ZodiacResults({ zodiacId }: { zodiacId?: string }) {
  const zodiac = getZodiac(zodiacId);

  return (
    <InventoryResults
      backHref="/#zodiac"
      backLabel="返回生肖筛选"
      visual={
        <div className="size-[200px] overflow-clip">
          <img
            src={`/figma/zodiacs/${zodiac.id}.png`}
            alt={zodiac.name}
            width={200}
            height={200}
            className="h-full w-full object-contain object-left"
          />
        </div>
      }
      description={`阐述（例：根据您的生肖${zodiac.name}，您企业适合...）`}
    />
  );
}
