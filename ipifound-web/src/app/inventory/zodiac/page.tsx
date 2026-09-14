import { ZodiacResults } from "@/components/inventory/ZodiacResults";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "生肖筛选库存 | iPiFound X 鲲图智权",
  description: "根据主理人生肖查找到的灵感现货",
};

export default async function ZodiacInventoryPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const raw = params.zodiac;
  const zodiacId = Array.isArray(raw) ? raw[0] : raw;

  return (
    <>
      <PageHeader />
      <ZodiacResults zodiacId={zodiacId} />
    </>
  );
}
