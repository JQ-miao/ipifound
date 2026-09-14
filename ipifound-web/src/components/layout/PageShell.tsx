import { Contact } from "@/components/home/Contact";
import { SiteFooter } from "@/components/home/SiteFooter";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full overflow-x-hidden bg-white">
      <div className="home-canvas mx-auto w-[1440px] origin-top-left bg-white">
        {children}
        <Contact />
        <SiteFooter />
      </div>
    </div>
  );
}
