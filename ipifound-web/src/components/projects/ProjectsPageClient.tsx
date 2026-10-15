"use client";

import { useSearchParams } from "next/navigation";
import {
  parseProjectCategory,
  ProjectsContent,
} from "@/components/projects/ProjectsContent";

export function ProjectsPageClient() {
  const params = useSearchParams();
  const category = parseProjectCategory(params.get("cat") ?? undefined);
  return <ProjectsContent category={category} />;
}
