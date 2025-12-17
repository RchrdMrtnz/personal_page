import { siteConfig } from "../../../../content/site";
import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, CheckCircle2, Layers, Zap } from "lucide-react";

export default async function WorkPage({
    params
}: {
    params: { locale: string };
}) {
    const { locale } = await params;
    const t = await getTranslations("Sections");

    return (
        <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                        {t("featuredWork")}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        Selected case studies demonstrating high-impact automation and system architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {siteConfig.caseStudies.map((project, index) => (
                        <Card
                            key={project.id}
                            hoverEffect
                            className="bg-nebula-ink/50 backdrop-blur-sm border-nebula-surface/10 p-0 overflow-hidden"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                                {/* Left: Visual/Header */}
                                <div className="lg:col-span-4 bg-gradient-to-br from-nebula-primary/20 to-nebula-ink p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-nebula-surface/10">
                                    <div>
                                        <div className="flex items-center gap-2 text-nebula-accent mb-4 font-mono text-sm">
                                            <span>CASE_STUDY_0{index + 1}</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4 font-display">
                                            {locale === "en" ? project.title.en : project.title.es}
                                        </h3>
                                    </div>
                                    <div className="mt-8">
                                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-nebula-accent/10 text-nebula-accent">
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Content */}
                                <div className="lg:col-span-8 p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                        <div>
                                            <div className="flex items-center gap-2 text-white font-semibold mb-2">
                                                <Zap size={16} className="text-yellow-400" />
                                                <span>Problem & Approach</span>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {locale === "en" ? project.description.en : project.description.es}
                                            </p>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 text-white font-semibold mb-2">
                                                <Layers size={16} className="text-blue-400" />
                                                <span>Tech Stack</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <Badge key={tag} variant="secondary" className="text-xs bg-white/5 text-gray-300 border-white/5">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/5">
                                        <div className="flex items-center gap-2 text-white font-semibold mb-4">
                                            <CheckCircle2 size={16} className="text-green-400" />
                                            <span>Key Results</span>
                                        </div>
                                        <div className="inline-flex items-center px-4 py-2 rounded-lg bg-green-400/10 border border-green-400/20">
                                            <span className="text-green-400 font-bold font-mono">
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
