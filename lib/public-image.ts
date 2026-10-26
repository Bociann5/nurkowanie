/**
 * `next/image` with `images.unoptimized` does not prepend `basePath`.
 * Pages builds set `BASE_PATH` (for example `/nurkowanie`); local builds leave it empty.
 */
export function publicImageSrc(src: `/${string}`): string {
  const raw = process.env.BASE_PATH?.trim() ?? "";
  if (raw === "" || raw === "/") return src;
  const prefix = (raw.startsWith("/") ? raw : `/${raw}`).replace(/\/+$/, "");
  return `${prefix}${src}`;
}
