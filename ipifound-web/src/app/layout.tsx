import { PageShell } from "@/components/layout/PageShell";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const noto = localFont({
  src: [
    { path: "../../public/fonts/noto-300.ttf", weight: "300" },
    { path: "../../public/fonts/noto-400.ttf", weight: "400" },
    { path: "../../public/fonts/noto-500.ttf", weight: "500" },
    { path: "../../public/fonts/noto-700.ttf", weight: "700" },
  ], variable: "--font-noto", display: "swap", preload: false,
});
const josefin = localFont({ src: [
  { path: "../../public/fonts/josefin-400.ttf", weight: "400" },
  { path: "../../public/fonts/josefin-600.ttf", weight: "600" },
  { path: "../../public/fonts/josefin-700.ttf", weight: "700" },
], variable: "--font-josefin", display: "swap", preload: false });
const blinker = localFont({ src: [
  { path: "../../public/fonts/blinker-400.ttf", weight: "400" },
  { path: "../../public/fonts/blinker-600.ttf", weight: "600" },
  { path: "../../public/fonts/blinker-700.ttf", weight: "700" },
], variable: "--font-blinker", display: "swap", preload: false });
const handwriting = localFont({ src: "../../public/fonts/hand.ttf", variable: "--font-handwriting", display: "swap", preload: false });

export const metadata: Metadata = {
  title: "iPiFound X 鲲图智权",
  description: "灵感现货总库存 — 根据生日与生肖选择最适合你的品牌方案",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth" className={`${noto.variable} ${josefin.variable} ${blinker.variable} ${handwriting.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-ink"><PageShell>{children}</PageShell></body>
    </html>
  );
}
