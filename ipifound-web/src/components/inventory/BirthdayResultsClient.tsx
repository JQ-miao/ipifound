"use client";

import { useSearchParams } from "next/navigation";
import { BirthdayResults } from "@/components/inventory/BirthdayResults";

export function BirthdayResultsClient() {
  const params = useSearchParams();
  const year = params.get("year") ?? "";
  const month = params.get("month") ?? "";
  const day = params.get("day") ?? "";
  return <BirthdayResults year={year} month={month} day={day} />;
}
