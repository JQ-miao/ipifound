import type { ReactNode } from "react";

export function Placeholder({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-field text-[22px] leading-[27px] text-ink ${className}`}>
      {children}
    </div>
  );
}
