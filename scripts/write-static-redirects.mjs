/**
 * `prepare` writes public/sitemap.xml and public/robots.txt.
 * Those stay static files so a Pages export does not need a dynamic route,
 * and a local build can keep Cache Components.
 *
 * `redirects` runs after `next build`. Next.js `redirects()` are ignored by
 * `output: 'export'`, so this writes one HTML page per concrete old path.
 * The blog archive and other paths with no new page are not redirected.
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import { previewRedirects } from "../lib/redirects.ts";
import { club, pageList } from "../content/site.ts";

const command = process.argv[2] ?? "redirects";

if (command === "prepare") {
  writeMetadata();
  process.exit(0);
}

if (command !== "redirects") {
  throw new Error(`Unknown command: ${command}`);
}

const outDir = resolve(process.cwd(), "out");
const pagesExport = Boolean(process.env.BASE_PATH?.trim()) || process.env.GITHUB_PAGES === "true";

if (!pagesExport || !existsSync(join(outDir, "index.html"))) {
  console.log("Static redirects skipped (this build is not a Pages export).");
  process.exit(0);
}

const basePath = normalizeBasePath(process.env.BASE_PATH ?? "");
const pairs = new Map();

for (const item of previewRedirects) {
  if (item.source.includes(":")) continue;
  pairs.set(item.source, item.destination);
}

for (const page of pageList()) {
  if (page.path === "/") continue;
  const source = `/index.php${page.path}`;
  if (!pairs.has(source)) pairs.set(source, page.path);
}

for (const item of previewRedirects) {
  if (item.source.includes(":") || item.source === "/index.php") continue;
  const source = `/index.php${item.source}`;
  if (!pairs.has(source)) pairs.set(source, item.destination);
}

const realPages = new Set(pageList().map((page) => page.path));

for (const [source, destination] of pairs) {
  if (realPages.has(source)) {
    throw new Error(`Refusing to overwrite a real page with a redirect: ${source}`);
  }
  const url = previewUrl(destination, basePath);
  const dir = resolve(outDir, source.replace(/^\/+/, ""));
  const fromOut = relative(outDir, dir);
  if (fromOut === "" || fromOut.startsWith("..") || fromOut.split(sep).includes("..")) {
    throw new Error(`Redirect path escapes out/: ${source}`);
  }
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), redirectHtml(url, canonicalUrl(destination)), "utf8");
}

writeFileSync(join(outDir, ".nojekyll"), "", "utf8");
console.log(`Wrote ${pairs.size} static redirect pages into out/.`);

function normalizeBasePath(value) {
  const raw = value.trim();
  if (raw === "" || raw === "/") return "";
  return (raw.startsWith("/") ? raw : `/${raw}`).replace(/\/+$/, "");
}

function previewUrl(destination, prefix) {
  const hashAt = destination.indexOf("#");
  const path = hashAt === -1 ? destination : destination.slice(0, hashAt);
  const hash = hashAt === -1 ? "" : destination.slice(hashAt);
  if (!path.startsWith("/")) {
    throw new Error(`Redirect destination must start with /: ${destination}`);
  }
  const slashed = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  return `${prefix}${slashed}${hash}`;
}

function canonicalUrl(destination) {
  return `https://klubpirania.pl${destination.startsWith("/") ? destination : `/${destination}`}`;
}

function redirectHtml(url, canonical) {
  const href = escapeAttr(url);
  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <title>Przekierowanie</title>
  <link rel="canonical" href="${escapeAttr(canonical)}">
  <meta http-equiv="refresh" content="0; url=${href}">
  <script>location.replace(${JSON.stringify(url)});</script>
</head>
<body>
  <p><a href="${href}">Przejdź dalej</a></p>
</body>
</html>
`;
}

function escapeAttr(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function writeMetadata() {
  const publicDir = resolve(process.cwd(), "public");
  mkdirSync(publicDir, { recursive: true });
  const urls = pageList().map((page) => ({
    loc: new URL(page.path, club.metadataBase).toString(),
    priority: page.path === "/" ? "1" : "0.7",
  }));
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url>
<loc>${escapeXml(url.loc)}</loc>
<changefreq>monthly</changefreq>
<priority>${url.priority}</priority>
</url>`,
  )
  .join("\n")}
</urlset>
`;
  const robots = `User-Agent: *
Allow: /

Host: ${club.metadataBase}
Sitemap: ${new URL("/sitemap.xml", club.metadataBase).toString()}
`;
  writeFileSync(join(publicDir, "sitemap.xml"), sitemap, "utf8");
  writeFileSync(join(publicDir, "robots.txt"), robots, "utf8");
}

function escapeXml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
