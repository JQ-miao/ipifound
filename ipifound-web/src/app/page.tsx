import { BirthdayFilter } from "@/components/home/BirthdayFilter";
import { Hero } from "@/components/home/Hero";
import { ZodiacFilter } from "@/components/home/ZodiacFilter";

export default function Home() {
  return (
    <>
      <Hero />
      <BirthdayFilter />
      <ZodiacFilter />
    </>
  );
}
