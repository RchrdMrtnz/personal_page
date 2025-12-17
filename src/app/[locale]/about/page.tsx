import { siteConfig } from "../../../../content/site";
import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GitCommit, Terminal, User, Target } from "lucide-react";

export default async function AboutPage({
    params
}: {
    params: { locale: string };
}) {
    const { locale } = await params;
    const t = await getTranslations("Sections");

    return (
        <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-nebula-accent/10 text-nebula-accent">
                        <User size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white font-display">
                        About Me
                    </h1>
                </div>

                <Card className="bg-nebula-ink/50 backdrop-blur-sm border-nebula-surface/10 mb-16">
                    <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                        <Terminal size={16} className="text-gray-500" />
                        <span className="text-sm font-mono text-gray-500">bio.txt</span>
                    </div>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-xl text-gray-300 leading-relaxed font-light">
                            {locale === "en"
                                ? siteConfig.about.bio.en
                                : siteConfig.about.bio.es}
                        </p>

                        <div className="mt-8 border-t border-white/5 pt-8">
                            <span className="text-nebula-accent font-mono text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Target size={16} />
                                {locale === "en" ? "My Mission" : "Mi Misión"}
                            </span>
                            <p className="text-lg text-white font-medium italic">
                                "{locale === "en" ? siteConfig.about.mission.en : siteConfig.about.mission.es}"
                            </p>
                        </div>
                    </div>
                </Card>

                <div className="flex items-center gap-2 mb-8">
                    <GitCommit className="text-nebula-accent" />
                    <h2 className="text-2xl font-bold text-white font-display">
                        {t("experience")}
                    </h2>
                </div>

                <div className="space-y-4">
                    {siteConfig.experience.map((exp, index) => (
                        <Card
                            key={index}
                            className="bg-nebula-ink/50 backdrop-blur-sm border-nebula-surface/10 hover:bg-nebula-surface/10 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-white font-display">{exp.company}</h3>
                                        <Badge variant="secondary" className="bg-white/5 text-gray-300 border-white/5">
                                            {exp.period}
                                        </Badge>
                                    </div>
                                    <div className="text-nebula-accent font-medium mb-4 flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-nebula-accent" />
                                        {locale === "en" ? exp.role.en : exp.role.es}
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
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
