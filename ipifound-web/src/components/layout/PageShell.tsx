import { Contact } from "@/components/home/Contact";
import { SiteFooter } from "@/components/home/SiteFooter";
import { asset } from "@/lib/asset";
import type { CSSProperties, ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="home-shell min-h-full overflow-x-hidden bg-white" style={{
      "--button-search-hover": `url("${asset("/design/ui/search-hover.svg")}")`,
      "--button-search-pressed": `url("${asset("/design/ui/search-pressed.svg")}")`,
      "--button-back-hover": `url("${asset("/design/ui/back-hover.svg")}")`,
      "--button-back-pressed": `url("${asset("/design/ui/back-pressed.svg")}")`,
    } as CSSProperties}>
      <div className="home-canvas w-[1440px] bg-white">
        {children}
        <Contact />
        <SiteFooter />
      </div>
    </div>
  );
}
