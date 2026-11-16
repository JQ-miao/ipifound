import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsPageClient } from "@/components/projects/ProjectsPageClient";
import { Suspense } from "react";
import { ProjectArtwork, type ArtworkLayer } from "@/components/projects/ProjectArtwork";
import artwork from "@/lib/design/projects.json";

export const metadata = {
  title: "案例展示 | iPiFound X 鲲图智权",
  description: "商标、IP、UI、文创与空间布局案例展示",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader active="projects" />
      <main className="relative -mt-[112px] h-[2558px] w-[1440px] overflow-hidden text-ink">
        {/* Shared scene is exported as HTML, so the tree appears before hydration. */}
        <ProjectArtwork layers={artwork.scenery as ArtworkLayer[]} />
        <Suspense fallback={<div aria-busy="true" aria-label="正在加载案例" />}>
          <ProjectsPageClient />
        </Suspense>
      </main>
    </>
  );
}
