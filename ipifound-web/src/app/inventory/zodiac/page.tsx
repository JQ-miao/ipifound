import { PageHeader } from "@/components/layout/PageHeader";
import { ZodiacResultsClient } from "@/components/inventory/ZodiacResultsClient";
import { Suspense } from "react";

export const metadata = {
  title: "生肖筛选库存 | iPiFound X 鲲图智权",
  description: "根据主理人生肖查找到的灵感现货",
};

export default function ZodiacInventoryPage() {
  return (
    <>
      <PageHeader />
      <Suspense fallback={null}>
        <ZodiacResultsClient />
      </Suspense>
    </>
  );
}
