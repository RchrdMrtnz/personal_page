import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { buildMetadata, pageMeta, asLocale } from "@/lib/seo";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata({ locale: asLocale(locale), ...pageMeta.work[asLocale(locale)] });
}

export default async function WorkPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations("Sections");

    return (
        <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-display">
                        {t("featuredWork")}
                    </h1>
                    <p className="text-xl text-muted max-w-2xl leading-relaxed">
                        {locale === "en"
                            ? "Selected case studies demonstrating high-impact automation and system architecture."
                            : "Casos de estudio seleccionados que demuestran automatización de alto impacto y arquitectura de sistemas."}
                    </p>
                    <div className="w-20 h-1 bg-linear-to-r from-nebula-accent to-purple-500 rounded-full mt-8" />
                </div>

                <ProjectsCarousel locale={locale} />
            </div>
        </div>
    );
}
