import Link from "next/link";
import { InventoryResults } from "@/components/inventory/InventoryResults";
import { getLuckyNumber, getNumberPersonality } from "@/lib/personalities";

export function BirthdayResults({ year = "", month = "", day = "" }: { year?: string; month?: string; day?: string }) {
  const number = getLuckyNumber(year, month, day);
  if (number === null) return (
    <section className="mx-auto flex min-h-[600px] w-[1000px] flex-col items-start justify-center gap-6">
      <h1 className="text-[36px]">先选一个属于你的好日子</h1>
      <p className="text-[18px]">请输入完整、有效的年月日，再来揭晓你的品牌人格。</p>
      <Link href="/#birthday" className="sketch-button px-6 py-3">返回日期筛选</Link>
    </section>
  );
  return <InventoryResults backHref="/#birthday" backLabel="返回日期筛选" personality={getNumberPersonality(number)} />;
}
