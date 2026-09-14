import { PageHeader } from "@/components/layout/PageHeader";
import {
  parseProjectCategory,
  ProjectsContent,
} from "@/components/projects/ProjectsContent";

export const metadata = {
  title: "案例展示 | iPiFound X 鲲图智权",
  description: "商标、IP、UI、文创与空间布局案例展示",
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const category = parseProjectCategory(params.cat);

  return (
    <>
      <PageHeader active="projects" />
      <ProjectsContent category={category} />
    </>
  );
}
