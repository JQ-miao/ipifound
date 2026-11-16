import { SiteHeader, type NavId } from "@/components/home/SiteHeader";
import { LampDecor } from "@/components/layout/LampDecor";

export function PageHeader({ active = "home" }: { active?: NavId }) {
  return (
    <section className="relative z-20 bg-white">
      <LampDecor large={active === "projects"} />
      <div className="relative">
        <SiteHeader active={active} />
      </div>
    </section>
  );
}
