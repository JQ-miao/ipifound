import { BirthdayFilter } from "@/components/home/BirthdayFilter";
import { ZodiacFilter } from "@/components/home/ZodiacFilter";

export function BrandMatchers() {
  return (
    <section className="bg-white px-[220px] pb-[80px] pt-[100px] text-ink">
      <h2 className="max-w-[680px] text-[32px] font-bold leading-[48px]">
        想知道你的品牌人格与品牌幸运色吗？
        <br />
        任选一种方式，揭晓答案
      </h2>

      <div className="mt-[28px] flex flex-col gap-[34px]">
        <ZodiacFilter />
        <BirthdayFilter />
      </div>
    </section>
  );
}
