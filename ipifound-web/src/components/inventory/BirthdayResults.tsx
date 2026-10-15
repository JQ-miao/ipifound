import { InventoryResults } from "@/components/inventory/InventoryResults";
import type { Personality } from "@/lib/personalities";

const LUCKY_COLORS = [
  { color: "#7c5cff", name: "沉淀紫" },
  { color: "#2e7d32", name: "踏实绿" },
  { color: "#ff5722", name: "破局橙" },
  { color: "#ec407a", name: "温柔粉" },
  { color: "#f9a825", name: "领航金" },
  { color: "#00897b", name: "洞察青" },
  { color: "#1976d2", name: "奔跑蓝" },
  { color: "#8d6e63", name: "守艺棕" },
  { color: "#fbc02d", name: "灵动黄" },
  { color: "#c62828", name: "表达红" },
  { color: "#5d4037", name: "守护棕" },
  { color: "#6a1b9a", name: "丰盛紫" },
];

const BIRTHDAY_TITLES = [
  "稳得住的 长期主义者",
  "敢想敢做的 破局者",
  "温柔有光的 陪伴者",
  "自带气场的 引领者",
  "洞察先机的 策略家",
  "一路向前的 奔跑者",
  "有韧性的 守艺人",
  "灵动机变的 创新者",
  "精致会说的 表达者",
  "值得托付的 守护者",
  "松弛富足的 享乐者",
  "安静沉淀的 操盘手",
];

function hashDate(year: string, month: string, day: string): number {
  const y = Number.parseInt(year, 10) || 0;
  const m = Number.parseInt(month, 10) || 0;
  const d = Number.parseInt(day, 10) || 0;
  return Math.abs((y * 1000 + m * 50 + d) % 12);
}

export function BirthdayResults({
  year,
  month,
  day,
}: {
  year?: string;
  month?: string;
  day?: string;
}) {
  const hasDate = Boolean(year || month || day);
  const index = hasDate ? hashDate(year ?? "", month ?? "", day ?? "") : 0;
  const lucky = LUCKY_COLORS[index];
  const title = BIRTHDAY_TITLES[index];
  const dateLabel = hasDate
    ? `${year || "—"}年${month || "—"}月${day || "—"}日`
    : "你的好日子";

  const personality: Personality = {
    id: "birthday",
    name: "生日",
    title,
    tags: ["#幸运色", `#${lucky.name}`],
    description: `根据你给出的好日子 ${dateLabel}，我们为你匹配到专属的品牌幸运色「${lucky.name}」。它代表着你品牌当下最该被看见的气质，也是你与用户建立情绪连接的颜色。`,
    brandBox:
      "幸运色不是装饰，而是品牌的情绪锚点——它出现在标志、包装、空间与内容里，让品牌在用户心里拥有一个稳定的、可被回忆的颜色。",
    quote: `属于 ${dateLabel} 的颜色，是 ${lucky.name} ——灵感现货`,
    luckyColor: lucky.color,
    luckyColorName: lucky.name,
  };

  return (
    <InventoryResults
      backHref="/#birthday"
      backLabel="返回生日筛选"
      personality={personality}
      mascotName="生日"
      illustration={
        <div
          className="relative h-[360px] w-[420px] overflow-hidden rounded-[24px]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${lucky.color}33 0%, ${lucky.color}88 100%)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-display text-[180px] font-bold leading-none"
              style={{ color: "#ffffff", WebkitTextStroke: "3px rgba(0,0,0,0.15)" }}
            >
              {(month || "?").padStart(2, "0")}.{(day || "?").padStart(2, "0")}
            </span>
          </div>
        </div>
      }
    />
  );
}
