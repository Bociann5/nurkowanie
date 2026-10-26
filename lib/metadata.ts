import type { Metadata } from "next";
import type { PageMeta } from "@/content/site";

export function metadataFor(page: PageMeta): Metadata {
  return {
    title: page.path === "/" ? { absolute: page.title } : page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
  };
}
