import { InventoryResults } from "@/components/inventory/InventoryResults";

export function BirthdayResults() {
  return (
    <InventoryResults
      backHref="/#birthday"
      backLabel="返回生日筛选"
      visual={
        <div className="flex items-start gap-[24px]">
          <span className="size-[200px] shrink-0 bg-lucky-yellow" />
          <span className="size-[200px] shrink-0 bg-lucky-pink" />
        </div>
      }
      description="阐述（例：根据您的生日您企业的幸运色是..）"
    />
  );
}
