import { siteConfig } from "../../../../content/site";
import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GitCommit, Terminal, User, Target, Briefcase } from "lucide-react";
import { NebulaBackground } from "@/components/ui/NebulaBackground";

export default async function AboutPage({
    params
}: {
    params: { locale: string };
}) {
    const { locale } = await params;
    const t = await getTranslations("Sections");

    return (
        <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-nebula-accent shadow-lg shadow-nebula-accent/10">
                        <User size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white font-display">
                        About Me
                    </h1>
                </div>

                <Card className="bg-nebula-ink/30 backdrop-blur-xl border-white/10 mb-16 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-nebula-accent/5 rounded-full blur-3xl -z-10" />

                    <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                        <Terminal size={16} className="text-gray-500" />
                        <span className="text-sm font-mono text-gray-500">bio.txt</span>
                    </div>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-xl text-gray-300 leading-relaxed font-light">
                            {locale === "en"
                                ? siteConfig.profile.differentiator.en
                                : siteConfig.profile.differentiator.es}
                        </p>

                        <div className="mt-8 border-t border-white/10 pt-8">
                            <span className="text-nebula-accent font-mono text-sm uppercase tracking-wider mb-4 flex items-center gap-2 px-3 py-1 rounded-full bg-nebula-accent/10 border border-nebula-accent/20 w-fit">
                                <Target size={14} />
                                {locale === "en" ? "My Focus" : "Mi Enfoque"}
                            </span>
                            <p className="text-lg text-white font-medium italic pl-4 border-l-2 border-nebula-accent/50">
                                "{locale === "en" ? siteConfig.consulting.pitch.en : siteConfig.consulting.pitch.es}"
                            </p>
                        </div>
                    </div>
                </Card>

                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-nebula-accent">
                        <Briefcase size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-white font-display">
                        {t("experience")}
                    </h2>
                </div>

                <div className="space-y-6">
                    {siteConfig.experience.map((exp, index) => (
                        <Card
                            key={index}
                            className="bg-nebula-ink/30 backdrop-blur-xl border-white/10 hover:border-nebula-accent/30 hover:bg-nebula-ink/50 transition-all duration-300 group"
                        >
                            <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                                        <h3 className="text-xl font-bold text-white font-display group-hover:text-nebula-accent transition-colors">{exp.company}</h3>
                                        <div className="px-3 py-1 text-xs font-mono text-gray-300 bg-white/5 border border-white/10 rounded-full">
                                            {exp.period}
                                        </div>
                                    </div>
                                    <div className="text-nebula-accent font-medium mb-4 flex items-center gap-2 text-sm md:text-base">
                                        <span className="h-1.5 w-1.5 rounded-full bg-nebula-accent animate-pulse" />
                                        {locale === "en" ? exp.role.en : exp.role.es}
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                                        {locale === "en" ? exp.description.en : exp.description.es}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
