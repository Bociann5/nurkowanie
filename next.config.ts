import type { NextConfig } from "next";
import { previewRedirects } from "./lib/redirects";

/**
 * GitHub project Pages are served at `/<repo>`. The workflow sets BASE_PATH.
 * An empty value keeps `pnpm dev` and `pnpm build` at the site root.
 */
function pagesBasePath(): string {
  const raw = process.env.BASE_PATH?.trim() ?? "";
  if (raw === "" || raw === "/") return "";
  return (raw.startsWith("/") ? raw : `/${raw}`).replace(/\/+$/, "");
}

const basePath = pagesBasePath();
const exportForPages = basePath !== "" || process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(exportForPages
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        cacheComponents: true,
        partialPrefetching: true,
      }),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  async redirects() {
    return previewRedirects;
  },
  // Club photos belong in /public and are referenced by next/image.
  // Do not add remotePatterns — this site does not hotlink external images.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
