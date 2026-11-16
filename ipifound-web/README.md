# iPiFound × 鲲图智权 — 灵感现货营销网站

Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + TypeScript 的营销官网，对应 Figma 设计稿
[`ipifound(copy)`](https://www.figma.com/design/VlEGOK4hbegYGLXG2nQUlG/ipifound-copy-?node-id=0-1)。包含首页（生肖 / 生日筛选器）、灵感库存结果页、服务流程页与案例展示页。

## 开发

```bash
npm install
npm run dev      # http://localhost:3000/
npm run build    # 生成静态导出到 out/
npm run lint
npm test        # 日期算法、边界日期、21 组内容及素材完整性
```

> 本地默认不设 basePath，地址为 `http://localhost:3000/`。
> 构建 GitHub Pages 时设置 `DEPLOY_TARGET=pages`（或 `NEXT_PUBLIC_BASE_PATH=/ipifound`），启用 `/ipifound` 前缀。
> 所有 `public/` 资源通过 `src/lib/asset.ts` 的 `asset()` / `link()` 辅助函数拼接 basePath，避免硬编码绝对路径。

## 静态导出 / GitHub Pages

`next.config.ts` 已配置：

- `output: 'export'`：构建产物输出到 `out/`
- Pages 构建时使用 `basePath: '/ipifound'`，匹配 `https://JQ-miao.github.io/ipifound/`
- `trailingSlash: true`：每个路由生成独立目录的 `index.html`，便于静态托管
- `images.unoptimized: true`：静态导出使用原始图片

仓库根目录的 `.github/workflows/deploy.yml` 会在推送到 `main` 时自动构建 `ipifound-web/` 并部署到 GitHub Pages。

### 一次性 GitHub Pages 设置（首次部署前）

1. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
2. 推送 `main` 触发 `Deploy iPiFound to GitHub Pages` 工作流。
3. 部署完成后访问 `https://JQ-miao.github.io/ipifound/`。

## 目录约定

- `src/app/` — 路由页面（首页、`/inventory`、`/inventory/zodiac`、`/service`、`/projects`）
- `src/components/` — 复用组件（导航、页脚、筛选器、结果页、案例树等）
- `src/lib/` — 数据与辅助（生肖、品牌人格、basePath 资源拼接）
- `public/figma/` — 来自 Figma 的设计资产（只读复用，请勿改动）


## 结果页与设计数据

- `src/components/inventory/InventoryResults.tsx` 是生肖和日期结果共用的模板，不为每个结果单独维护页面。
- `src/lib/design/personalities.json` 包含 12 个生肖、9 个数字的标题、标签、说明、品牌调性、引语、库存引导和插画。`figmaNode` 对应原稿节点。
- `src/lib/date-personality.ts` 校验真实日期，并将年月日的所有数字相加、反复求和至 1–9。例：2026-11-16 → 19 → 1。`src/lib/personalities.ts` 负责选择相应数据。
- Figma 手写大标题和引语按原稿导出为展示素材，模板同时保留对应文字供搜索、复制和辅助技术读取。正文为 HTML 文本。
- `src/lib/design/projects.json` 保存案例树的共用背景图层及各分类素材；`ProjectArtwork` 统一渲染，分类与分页使用真实链接和 URL 参数。
- `public/design/` 是本次从新版 Figma 导出的插画、文字与案例素材。案例位图已转为 WebP；保留原始 SVG 纹理。不要在代码中引用临时 MCP 地址。
- `public/fonts/` 本地托管 Noto Sans SC、Josefin Sans、Blinker 及 Yomogi 的页面字集，附 SIL OFL 授权。新增文字若包含当前字集外的字符，应重新生成字集；系统字体会先行兜底。Figma 的 851tegakizatsu 展示字样采用原稿导出，其他手写界面文字以 Yomogi / Noto 兜底，后续可接入原字体进一步对齐。

## 保留的交互与本次范围

首页继续使用 `public/videos/hero.mp4`（点击播放）；service 页继续使用 `TrackingEyes` 进行鼠标视线跟随。公共导航、首页筛选、结果页、服务页和案例分类列表参与本次对齐，案例详情页暂不实现。

设计以 1440px 画布为基准，窄屏沿用整体等比缩放。空间和插画分类当前原稿为留空的圆形案例位，按原稿展示；暂未添加虚构案例。

## 设计与性能复核

[2026-11-16 逐页复核记录](docs/design-performance-audit-2026-11-16.md) 包含检查范围、图片体积比较和验证结果。

`asset()` 会优先使用 `public/optimized/` 下的无损 WebP 副本，原始 Figma 导出保持完整。更新原图后运行 `npm run optimize:assets`。复杂 SVG 副本采用两倍设计尺寸，PNG 副本保留原分辨率。页面字体使用本地 WOFF2；重新生成字体副本可执行 `python scripts/optimize-fonts.py`（需 `fonttools`、`brotli`）。

软件开发分类使用 `public/design/projects/software/` 下 11 张独立圆形缩略图，`projects.json` 保留对应 Figma 节点和位置。图片已裁切并带透明角落，浏览器无需加载整张项目图再执行遮罩。重新制作可运行 `node scripts/prepare-software-thumbnails.mjs <单个圆形节点导出目录>`。
