import type { ReactNode } from "react";

export function PageSection({
  id,
  className = "",
  innerClassName = "",
  children,
}: {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`bg-white px-[163px] text-ink ${className}`}>
      <div className={`mx-auto max-w-[1114px] ${innerClassName}`}>{children}</div>
    </section>
  );
}
