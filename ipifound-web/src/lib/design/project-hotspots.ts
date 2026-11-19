import type { ProjectCategoryId } from "@/components/projects/ProjectsContent";

/**
 * Clickable circular case thumbnails on /projects.
 * Coordinates follow the 268×268 tree-trunk grid used by projects.json.
 * Matching uses Figma「案例列表」named nodes (list_logo_* / list_ip_* / list_web_* / list_app_*).
 */
export type ProjectHotspot = {
  category: ProjectCategoryId;
  /** Optional basename hint when the list icon is a flat software/*.webp. */
  thumb?: string;
  slug: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
};

/** Hotspots currently matched to detail pages. */
export const PROJECT_HOTSPOTS: ProjectHotspot[] = [
  // —— Trademark (Figma list_logo_* → page1 grid) ——
  {
    category: "trademark",
    slug: "visioncareer",
    x: 341,
    y: 867,
    w: 268,
    h: 268,
    label: "聘界",
  },
  {
    category: "trademark",
    slug: "antclump-01",
    x: 648,
    y: 867,
    w: 268,
    h: 268,
    label: "蚂丛ANT CLUMP",
  },
  {
    category: "trademark",
    slug: "antclump-02",
    x: 955,
    y: 867,
    w: 268,
    h: 268,
    label: "蚂丛部落ANT CLUMP",
  },
  {
    category: "trademark",
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

export function hotspotsForCategory(category: ProjectCategoryId): ProjectHotspot[] {
  return PROJECT_HOTSPOTS.filter((item) => item.category === category);
}
