import type { Metadata } from "next";
import { siteConfig } from "../../../../content/site";
import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
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

                <div className="grid grid-cols-1 gap-12">
                    {siteConfig.caseStudies.map((project, index) => (
                        <Card
                            key={project.id}
                            className="bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 hover:border-nebula-accent/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.18)] p-0 overflow-hidden group transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                                {/* Left: Identity panel */}
                                <div className="lg:col-span-4 bg-linear-to-br from-nebula-primary/10 to-foreground/5 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-foreground/10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-nebula-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between gap-2 mb-5">
                                            <span className="font-mono text-xs tracking-wider text-nebula-accent">PRJ_0{index + 1}</span>
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-muted/70 px-2 py-1 rounded-full bg-foreground/5 border border-foreground/10">
                                                {locale === "en" ? project.category.en : project.category.es}
                                            </span>
                                        </div>
                                        <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-foreground/5 border border-foreground/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300 shadow-lg mb-5">
                                            <project.icon size={26} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-display group-hover:text-nebula-accent transition-colors">
                                            {locale === "en" ? project.title.en : project.title.es}
                                        </h3>
                                        {project.client && (
                                            <div className="text-xs font-mono text-muted tracking-wide">
                                                {locale === "en" ? project.client.en : project.client.es}
                                            </div>
                                        )}
                                    </div>

                                    {/* Headline metric (only when there's a real number) */}
                                    {project.metric && (
                                        <div className="mt-8 relative z-10">
                                            <div className="text-3xl md:text-4xl font-bold font-display text-emerald-600 dark:text-emerald-400 tracking-tight">
                                                {locale === "en" ? project.metric.en : project.metric.es}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right: Content */}
                                <div className="lg:col-span-8 p-8 md:p-10 flex flex-col gap-7">
                                    {/* Overview */}
                                    <div>
                                        <div className="text-xs uppercase tracking-widest text-muted font-mono mb-2">
                                            {t("overview")}
                                        </div>
                                        <p className="text-muted-foreground text-base leading-relaxed">
                                            {locale === "en" ? project.description.en : project.description.es}
                                        </p>
                                    </div>

                                    {/* Impact */}
                                    <div>
                                        <div className="text-xs uppercase tracking-widest text-muted font-mono mb-3">
                                            {t("impact")}
                                        </div>
                                        <ul className="space-y-2.5">
                                            {project.impact.map((item, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                                                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                                                    <span>{locale === "en" ? item.en : item.es}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2 pt-1 mt-auto">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 text-xs font-mono text-muted-foreground bg-foreground/5 border border-foreground/10 rounded-full hover:border-nebula-accent/50 hover:bg-foreground/10 hover:text-foreground transition-colors cursor-default">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
