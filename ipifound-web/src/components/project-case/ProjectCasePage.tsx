import type { ProjectCase } from "@/lib/design/project-cases";
import { BackToListButton } from "./BackToListButton";
import { CaseArtwork } from "./CaseArtwork";
import { CaseConcept } from "./CaseConcept";
import { CaseDetails } from "./CaseDetails";
import { CaseHero } from "./CaseHero";
import { CaseIntro } from "./CaseIntro";

/** Full case-detail canvas. Contact + Footer come from PageShell. */
export function ProjectCasePage({ data }: { data: ProjectCase }) {
  const backHref = `/projects/?cat=${data.category}`;

  if (data.mode === "artwork") {
    return (
      <main
        className="relative -mt-[112px] w-[1440px] overflow-hidden text-ink"
        style={{ height: data.contentHeight }}
      >
        <CaseArtwork data={data} />
        <BackToListButton href={backHref} />
      </main>
    );
  }

  return (
    <main className="relative -mt-[112px] h-[4212px] w-[1440px] overflow-hidden text-ink">
      <CaseHero data={data} />
      <BackToListButton href={backHref} />
      <CaseIntro data={data} />
      <CaseConcept data={data} />
      <CaseDetails data={data} />
    </main>
  );
}
