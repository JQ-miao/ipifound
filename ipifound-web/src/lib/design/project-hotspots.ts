import type { ProjectCategoryId } from "@/components/projects/ProjectsContent";

/**
 * Clickable circular case thumbnails on /projects.
 * Coordinates follow the 268×268 tree-trunk grid used by projects.json.
 * Matching uses Figma「案例列表」named nodes (list_logo_* / list_ip_* / list_web_* / list_app_*).
 */
export type ProjectHotspot = {
  category: ProjectCategoryId;
  /**
   * Trademark list spans two artwork pages. Hotspots only apply on the matching page
   * (page 2 must not reuse page-1 coordinates — that linked the wrong icons).
   */
  page?: 1 | 2;
  /** Optional basename hint when the list icon is a flat software/*.webp. */
  thumb?: string;
  /** Figma list_logo_* circle drawn over the tree hole (puts detail cases up front). */
  cover?: string;
  slug: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
};

const TM = "/design/projects/hotspots";

/** Hotspots currently matched to detail pages. */
export const PROJECT_HOTSPOTS: ProjectHotspot[] = [
  // —— Trademark: four logos with details, front of page-1 grid ——
  {
    category: "trademark",
    page: 1,
    cover: `${TM}/visioncareer.png`,
    slug: "visioncareer",
    x: 341,
    y: 867,
    w: 268,
    h: 268,
    label: "聘界",
  },
  {
    category: "trademark",
    page: 1,
    cover: `${TM}/antclump-01.png`,
    slug: "antclump-01",
    x: 648,
    y: 867,
    w: 268,
    h: 268,
    label: "蚂丛ANT CLUMP",
  },
  {
    category: "trademark",
    page: 1,
    cover: `${TM}/antclump-02.png`,
    slug: "antclump-02",
    x: 955,
    y: 867,
    w: 268,
    h: 268,
    label: "蚂丛部落ANT CLUMP",
  },
  {
    category: "trademark",
    page: 1,
    cover: `${TM}/lantucloud.png`,
    slug: "lantucloud",
    x: 341,
    y: 1205,
    w: 268,
    h: 268,
    label: "蓝图云母",
  },

  // —— IP (Figma list_ip_*) ——
  {
    category: "ip",
    slug: "zhamao",
    x: 341,
    y: 867,
    w: 268,
    h: 268,
    label: "炸毛ZHAMAO",
  },
  {
    category: "ip",
    slug: "wendang",
    x: 648,
    y: 867,
    w: 268,
    h: 268,
    label: "墨熊兄弟",
  },
  {
    category: "ip",
    slug: "mipom",
    x: 955,
    y: 867,
    w: 268,
    h: 268,
    label: "咪珀家族Mipom",
  },

  // —— UI / software (Figma list_web_* / list_app_* with flat webp thumbs) ——
  {
    category: "ui",
    thumb: "web_avris.webp",
    slug: "avris",
    x: 341,
    y: 1205,
    w: 268,
    h: 268,
    label: "AVRIS官网",
  },
  {
    category: "ui",
    thumb: "web_shenmacloud.webp",
    slug: "shenmacloud",
    x: 648,
    y: 1205,
    w: 268,
    h: 268,
    label: "神码数云官网",
  },
  {
    category: "ui",
    thumb: "web_omoda.webp",
    slug: "omoda",
    x: 955,
    y: 1205,
    w: 268,
    h: 268,
    label: "越己官网",
  },
  {
    category: "ui",
    thumb: "app_feifei.webp",
    slug: "feifei",
    x: 956,
    y: 1557,
    w: 268,
    h: 268,
    label: "肥肥超市",
  },
  {
    category: "ui",
    thumb: "app_zhufangwang.webp",
    slug: "zhufangwang",
    x: 341,
    y: 1895,
    w: 268,
    h: 268,
    label: "租房网官网优化",
  },
  {
    category: "ui",
    thumb: "app_lantuyun.webp",
    slug: "lantucloud",
    x: 648,
    y: 1895,
    w: 268,
    h: 268,
    label: "蓝图云母",
  },
];

/**
 * Detail pages that exist but still have no list icon wired.
 * - kugou-tom: Figma has a detail frame, but no list_* thumbnail in「案例列表」.
 */
export const UNWIRED_PROJECT_CASE_SLUGS = ["kugou-tom"] as const;

/**
 * List icons that exist on /projects but have no Figma detail frame yet.
 * (UI category flat thumbs without a matching 案例展示_* page.)
 */
export const LIST_ICONS_WITHOUT_DETAIL = [
  "app_piaoliuping.webp",
  "app_eryueer.webp",
  "app_zhongzhi.webp",
  "app_qixiang.webp",
  "app_fengtian.webp",
] as const;

export function hotspotsForCategory(
  category: ProjectCategoryId,
  page: 1 | 2 = 1,
): ProjectHotspot[] {
  return PROJECT_HOTSPOTS.filter(
    (item) => item.category === category && (item.page == null || item.page === page),
  );
}
