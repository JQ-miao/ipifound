import { BirthdayFilter } from "@/components/home/BirthdayFilter";
import { ZodiacFilter } from "@/components/home/ZodiacFilter";

export function BrandMatchers() {
  return (
    <section className="bg-white px-[220px] pb-20 pt-[100px] text-ink">
      <div className="mx-auto w-full max-w-[1000px]">
        <h2 className="font-heading-light text-[40px] leading-[1.2]">
          想知道你的品牌人格与品牌幸运色吗？
          <br />
          任选一种方式，揭晓答案
        </h2>

        <div className="mt-7 flex w-full flex-col gap-[34px]">
          <ZodiacFilter />
          <BirthdayFilter />
        </div>
      </div>
    </section>
  );
}
