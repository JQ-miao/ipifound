import { PageShell } from "@/components/layout/PageShell";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iPiFound X 鲲图智权",
  description: "灵感现货总库存 — 根据生日与生肖选择最适合你的品牌方案",
};

/** System / local stacks — Google Fonts often blocked on CN networks. */
const fontVars = [
  "[--font-josefin:ui-sans-serif,system-ui,'PingFang SC','Hiragino Sans GB','Noto Sans SC','Microsoft YaHei',sans-serif]",
  "[--font-blinker:ui-sans-serif,system-ui,'PingFang SC','Noto Sans SC',sans-serif]",
  "[--font-kuaile:'PingFang SC','Hiragino Sans GB','Microsoft YaHei',cursive,sans-serif]",
  "[--font-bricolage:ui-serif,Georgia,'Songti SC',serif]",
  "[--font-jakarta:ui-sans-serif,system-ui,'PingFang SC',sans-serif]",
  "[--font-inter:ui-sans-serif,system-ui,'PingFang SC','Noto Sans SC',sans-serif]",
  "[--font-noto:'PingFang SC','Hiragino Sans GB','Noto Sans SC','Microsoft YaHei',sans-serif]",
  "[--font-noto-light:'PingFang SC','Hiragino Sans GB','Noto Sans SC','Microsoft YaHei',sans-serif]",
].join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className={`${fontVars} h-full antialiased`}>
      <body className="min-h-full bg-white text-ink">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
