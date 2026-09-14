import { SiteHeader, type NavId } from "@/components/home/SiteHeader";

export function PageHeader({ active = "home" }: { active?: NavId }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative">
        <SiteHeader active={active} />
      </div>
    </section>
  );
}
