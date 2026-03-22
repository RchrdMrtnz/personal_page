import { siteConfig } from "../../../../content/site";
import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/Card";
import { ArrowUpRight, CheckCircle2, Layers, Zap } from "lucide-react";
import { NebulaBackground } from "@/components/ui/NebulaBackground";

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
                                {/* Left: Visual/Header */}
                                <div className="lg:col-span-4 bg-linear-to-br from-nebula-primary/10 to-foreground/5 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-foreground/10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-nebula-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 text-nebula-accent mb-4 font-mono text-sm tracking-wider">
                                            <span>PRJ_0{index + 1}</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-foreground mb-4 font-display group-hover:text-nebula-accent transition-colors">
                                            {locale === "en" ? project.title.en : project.title.es}
                                        </h3>
                                    </div>
                                    <div className="mt-8 relative z-10">
                                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-foreground/5 border border-foreground/10 text-foreground group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300 shadow-lg">
                                            <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Content */}
                                <div className="lg:col-span-8 p-8 md:p-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                        <div>
                                            <div className="flex items-center gap-2 text-foreground font-semibold mb-3">
                                                <div className="p-1.5 rounded bg-yellow-400/10 text-yellow-600 dark:text-yellow-400">
                                                    <Zap size={16} />
                                                </div>
                                                <span>{t("problemApproach")}</span>
                                            </div>
                                            <p className="text-muted text-sm leading-relaxed">
                                                {locale === "en" ? project.description.en : project.description.es}
                                            </p>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 text-foreground font-semibold mb-3">
                                                <div className="p-1.5 rounded bg-blue-400/10 text-blue-600 dark:text-blue-400">
                                                    <Layers size={16} />
                                                </div>
                                                <span>{t("techStack")}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <div key={tag} className="px-3 py-1 text-xs font-mono text-muted-foreground bg-foreground/5 border border-foreground/10 rounded-full hover:border-nebula-accent/50 hover:bg-foreground/10 hover:text-foreground transition-colors cursor-default">
                                                        {tag}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-foreground/10">
                                        <div className="flex items-center gap-2 text-foreground font-semibold mb-4">
                                            <div className="p-1.5 rounded bg-emerald-400/10 text-emerald-600 dark:text-emerald-400">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <span>{t("keyResults")}</span>
                                        </div>
                                        <div className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                                            <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono tracking-tight">
                                                {locale === "en" ? project.stats.en : project.stats.es}
                                            </span>
                                        </div>
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
