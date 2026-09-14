import { SiteHeader, type NavId } from "@/components/home/SiteHeader";
import { LampDecor } from "@/components/layout/LampDecor";

export function PageHeader({ active = "home" }: { active?: NavId }) {
  return (
    <section className="relative h-[159px] overflow-hidden">
      <LampDecor />
      <div className="relative">
        <SiteHeader active={active} />
      </div>
    </section>
  );
}
