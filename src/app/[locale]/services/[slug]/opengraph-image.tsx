import { siteConfig } from "../../../../../content/site";
import { asLocale } from "@/lib/seo";
import { getService, loc } from "@/lib/content";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Service — Richard Pedraza";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
    return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export default async function Image({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const lang = asLocale(locale);
    const service = getService(slug);

    return renderOgImage({
        eyebrow: `${lang === "es" ? "Servicio" : "Service"} · Richard Pedraza`,
        title: service ? loc(service.seoTitle, lang) : siteConfig.profile.name,
        chips: service?.stack,
    });
}
