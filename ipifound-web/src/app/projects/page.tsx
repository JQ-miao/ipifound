import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsPageClient } from "@/components/projects/ProjectsPageClient";
import { Suspense } from "react";

export const metadata = {
  title: "案例展示 | iPiFound X 鲲图智权",
  description: "商标、IP、UI、文创与空间布局案例展示",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader active="projects" />
      <Suspense fallback={null}>
        <ProjectsPageClient />
      </Suspense>
    </>
  );
}
