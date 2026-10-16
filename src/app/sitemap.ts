import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { site } from "@/lib/site";

// One entry per language, each listing the others as hreflang alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}`])),
    "x-default": `${site.url}/fr`,
  };
  return locales.map((l) => ({
    url: `${site.url}/${l}`,
    changeFrequency: "monthly",
    priority: l === "fr" ? 1 : 0.8,
    alternates: { languages },
  }));
}
