import { asset } from "@/lib/asset";

export function LampDecor({ large = false }: { large?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1440px]">
      <img
        src={asset(large ? "/figma/service/hanger.png" : "/design/ui/result-lamp.svg")}
        alt=""
        aria-hidden
        className={large ? "absolute left-[640px] top-[-1px] h-[210.83px] w-[167px] max-w-none" : "absolute left-[638.65px] top-[-2.46px] h-[175.71px] w-[139.35px] max-w-none"}
      />
    </div>
  );
}
