import type { MetadataRoute } from "next";
import { SITE_URL, type Locale } from "@/lib/seo";
import { siteConfig } from "../../content/site";
import { getPostLocales, getPosts } from "@/lib/blog";

const locales = ["en", "es"] as const;

const entry = (
    route: string,
    priority: number,
    available: readonly Locale[] = locales,
): MetadataRoute.Sitemap =>
    available.map((locale) => ({
        url: `${SITE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority,
        alternates: {
            languages: Object.fromEntries([
                ...available.map((l) => [l, `${SITE_URL}/${l}${route}`]),
                ["x-default", `${SITE_URL}/${available.includes("en") ? "en" : available[0]}${route}`],
            ]),
        },
    }));

export default function sitemap(): MetadataRoute.Sitemap {
    const blogSlugs = [...new Set(locales.flatMap((l) => getPosts(l).map((p) => p.slug)))];
    const hasBlog = blogSlugs.length > 0;

    return [
        ...entry("", 1),
        ...entry("/services", 0.9),
        ...siteConfig.services.flatMap((s) => entry(`/services/${s.slug}`, 0.9)),
        ...entry("/work", 0.8),
        ...siteConfig.caseStudies.flatMap((c) => entry(`/work/${c.id}`, 0.8)),
        ...(hasBlog ? entry("/blog", 0.7, locales.filter((l) => getPosts(l).length > 0)) : []),
        ...blogSlugs.flatMap((slug) => entry(`/blog/${slug}`, 0.7, getPostLocales(slug))),
        ...entry("/about", 0.7),
        ...entry("/contact", 0.6),
    ];
}
