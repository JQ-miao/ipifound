import type { NextConfig } from "next";

// Local preview: no basePath (http://localhost:3000/).
// GitHub Pages / CI: set NEXT_PUBLIC_BASE_PATH=/ipifound (or DEPLOY_TARGET=pages).
const basePath =
  process.env.DEPLOY_TARGET === "pages" ||
  process.env.NEXT_PUBLIC_BASE_PATH === "/ipifound"
    ? "/ipifound"
    : "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
