"use client";

import { useSearchParams } from "next/navigation";
import { ZodiacResults } from "@/components/inventory/ZodiacResults";

export function ZodiacResultsClient() {
  const params = useSearchParams();
  const zodiacId = params.get("zodiac") ?? undefined;
  return <ZodiacResults zodiacId={zodiacId} />;
}
