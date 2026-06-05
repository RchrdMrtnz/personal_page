import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes = ["", "/work", "/about", "/contact"];
const locales = ["en", "es"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.flatMap((route) =>
        locales.map((locale) => ({
            url: `${SITE_URL}/${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: route === "" ? 1 : 0.8,
            alternates: {
                languages: {
                    en: `${SITE_URL}/en${route}`,
                    es: `${SITE_URL}/es${route}`,
                },
            },
        }))
    );
}
