# iPiFound × 鲲图智权 — 灵感现货营销网站

Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + TypeScript 的营销官网，对应 Figma 设计稿
`灵感现货网站设计开发专用`。包含首页（生肖 / 生日筛选器）、灵感库存结果页、服务流程页与案例展示页。

## 开发

```bash
npm install
npm run dev      # http://localhost:3000/ipifound/
npm run build    # 生成静态导出到 out/
npm run lint
```

> 项目使用 `basePath: /ipifound`，因此本地开发地址为 `http://localhost:3000/ipifound/`。
> 所有 `public/` 资源通过 `src/lib/asset.ts` 的 `asset()` / `link()` 辅助函数拼接 basePath，避免硬编码绝对路径。

## 静态导出 / GitHub Pages

`next.config.ts` 已配置：

- `output: 'export'`：构建产物输出到 `out/`
- `basePath: '/ipifound'`：匹配 `https://JQ-miao.github.io/ipifound/`
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
