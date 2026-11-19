import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectCasePage } from "@/components/project-case/ProjectCasePage";
import { getAllProjectCaseSlugs, getProjectCase } from "@/lib/design/project-cases";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllProjectCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getProjectCase(slug);
  if (!data) return { title: "案例详情 | iPiFound X 鲲图智权" };
  return {
    title: `${data.title} | iPiFound X 鲲图智权`,
    description: data.heroSummary,
  };
}

export default async function ProjectCaseRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getProjectCase(slug);
  if (!data) notFound();

  return (
    <>
      <PageHeader active="projects" />
      <ProjectCasePage data={data} />
    </>
  );
}
