"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { NebulaBackground } from "@/components/ui/NebulaBackground";

export default function FeaturedWork({ locale }: { locale: string }) {
    const t = useTranslations("Sections");
    const featured = siteConfig.caseStudies.slice(0, 3);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <section className="py-20 relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                            {t("featuredWork")}
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-nebula-accent to-purple-500 rounded-full" />
                    </motion.div>
                    <Link
                        href="/work"
                        className="hidden md:flex items-center text-nebula-accent hover:text-white transition-colors group"
                    >
                        View all projects <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {featured.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <Card hoverEffect className="h-full flex flex-col bg-nebula-ink/30 backdrop-blur-xl border-white/10 hover:border-nebula-accent/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] p-0 overflow-hidden group">
                                <div className="aspect-video relative overflow-hidden bg-nebula-ink">
                                    <img
                                        src={project.image || "/api/placeholder/400/320"}
                                        alt={locale === "en" ? project.title.en : project.title.es}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-nebula-primary/20 group-hover:bg-transparent transition-colors duration-500" />

                                    {/* Overlay ID */}
                                    <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-white/70">
                                        PRJ_0{index + 1}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white group-hover:text-nebula-accent transition-colors font-display mb-2">
                                        {locale === "en" ? project.title.en : project.title.es}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                                        {locale === "en" ? project.description.en : project.description.es}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.slice(0, 3).map((tag, i) => (
                                            <div
                                                key={tag}
                                                className="px-2 py-1 text-[10px] font-mono text-gray-300 bg-white/5 border border-white/10 rounded hover:border-nebula-accent/50 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                            >
                                                {tag}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-white/10 mt-auto">
                                        <div className="flex items-center gap-2">
                                            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                                            <span className="text-emerald-400 font-bold text-sm font-mono tracking-tight">
                                                {locale === "en" ? project.stats.en : project.stats.es}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/work">
                        <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:border-nebula-accent/50 backdrop-blur-sm text-white">
                            View all projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
