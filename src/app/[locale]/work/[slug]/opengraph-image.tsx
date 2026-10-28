import { siteConfig } from "../../../../../content/site";
import { asLocale } from "@/lib/seo";
import { getCaseStudy, loc } from "@/lib/content";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Case study — Richard Pedraza";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
    return siteConfig.caseStudies.map((c) => ({ slug: c.id }));
}

export default async function Image({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const lang = asLocale(locale);
    const project = getCaseStudy(slug);

    return renderOgImage({
        eyebrow: `${lang === "es" ? "Caso de estudio" : "Case study"} · RP.`,
        title: project ? loc(project.title, lang) : siteConfig.profile.name,
        subtitle: project?.metric ? loc(project.metric, lang) : project ? loc(project.category, lang) : undefined,
        chips: project?.tags,
    });
}
