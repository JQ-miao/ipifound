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
    <section id={id} className={`bg-white px-[220px] text-ink ${className}`}>
      <div className={`mx-auto w-full max-w-[1000px] ${innerClassName}`}>{children}</div>
    </section>
  );
}
