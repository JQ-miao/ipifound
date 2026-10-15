import { SiteHeader } from "@/components/home/SiteHeader";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-hero"
      style={{ height: 820 }}
    >
      <h1 className="sr-only">Let&apos;s found found!!</h1>

      {/* hanging lampshade */}
      <img
        src={asset("/figma/hero-lampshade.png")}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[267px] w-[455px] max-w-none -translate-x-1/2"
      />

      {/* the rope holding the 98 */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[150px] h-[120px] w-[2px] -translate-x-1/2 bg-ink/70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, #333441 0 6px, transparent 6px 12px)",
        }}
      />

      <div className="pointer-events-none relative z-20">
        <SiteHeader />
      </div>

      {/* hero copy block */}
      <div className="pointer-events-none relative z-10 mx-auto flex w-[1440px] flex-col items-center pt-[150px] text-center">
        <p className="font-hand text-[28px] leading-none text-ink">
          灵感现货总库存
        </p>

        <div
          className="mt-[6px] font-display text-[300px] font-bold leading-[0.85] tracking-[-0.04em]"
          style={{
            backgroundImage: "linear-gradient(180deg, #bfe9ff 0%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "6px #ffffff",
            paintOrder: "stroke fill",
            filter: "drop-shadow(0 6px 0 rgba(51,52,65,0.12))",
          }}
        >
          98
        </div>

        <p className="font-hand mt-[18px] text-[44px] leading-none text-ink">
          Let&apos;s found found!!
        </p>
      </div>

      {/* characters hanging below the number */}
      <img
        src={asset("/figma/hero-characters.png")}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-[120px] left-1/2 h-[330px] w-[249px] max-w-none -translate-x-1/2"
      />

      {/* wavy bottom edge transitioning into the white section */}
      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: 120 }}
      >
        <path
          d="M0 60 C 180 110, 360 10, 540 50 C 720 90, 900 20, 1080 55 C 1260 90, 1380 40, 1440 60 L 1440 120 L 0 120 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
