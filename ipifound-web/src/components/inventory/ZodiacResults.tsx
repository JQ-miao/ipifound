import { InventoryResults } from "@/components/inventory/InventoryResults";
import { getPersonality } from "@/lib/personalities";

export function ZodiacResults({ zodiacId }: { zodiacId?: string }) {
  return <InventoryResults backHref="/#zodiac" backLabel="返回生肖筛选" personality={getPersonality(zodiacId)} />;
}
