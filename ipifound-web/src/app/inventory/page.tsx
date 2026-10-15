import { BirthdayResultsClient } from "@/components/inventory/BirthdayResultsClient";
import { PageHeader } from "@/components/layout/PageHeader";
import { Suspense } from "react";

export const metadata = {
  title: "生日筛选库存 | iPiFound X 鲲图智权",
  description: "根据主理人生日查找到的灵感现货",
};

export default function InventoryPage() {
  return (
    <>
      <PageHeader />
      <Suspense fallback={null}>
        <BirthdayResultsClient />
      </Suspense>
    </>
  );
}
