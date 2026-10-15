import { PageShell } from "@/components/layout/PageShell";
import type { Metadata } from "next";
import {
  Blinker,
  Bricolage_Grotesque,
  Inter,
  Josefin_Sans,
  Noto_Sans_SC,
  Plus_Jakarta_Sans,
  ZCOOL_KuaiLe,
} from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const blinker = Blinker({
  variable: "--font-blinker",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const kuaile = ZCOOL_KuaiLe({
  variable: "--font-kuaile",
  subsets: ["latin"],
  weight: "400",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const noto = Noto_Sans_SC({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoLight = Noto_Sans_SC({
  variable: "--font-noto-light",
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "iPiFound X 鲲图智权",
  description: "灵感现货总库存 — 根据生日与生肖选择最适合你的品牌方案",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${josefin.variable} ${blinker.variable} ${kuaile.variable} ${bricolage.variable} ${jakarta.variable} ${inter.variable} ${noto.variable} ${notoLight.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-ink">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
