import { siteConfig } from "../../../content/site";
import { asLocale } from "@/lib/seo";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Richard Pedraza — Senior Backend Engineer";
export const size = ogSize;
export const contentType = "image/png";

export default async function OpengraphImage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const lang = asLocale(locale);

    return renderOgImage({
        eyebrow: "RP.",
        title: siteConfig.profile.name,
        subtitle: siteConfig.profile.role[lang].split("|")[0].trim(),
        chips: siteConfig.topSkills,
    });
}
