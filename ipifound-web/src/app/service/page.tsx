import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceContent } from "@/components/service/ServiceContent";

export const metadata = {
  title: "服务流程 | iPiFound X 鲲图智权",
  description: "服务流程、服务优势、公司介绍与服务过的企业",
};

export default function ServicePage() {
  return (
    <>
      <PageHeader active="service" />
      <ServiceContent />
    </>
  );
}
