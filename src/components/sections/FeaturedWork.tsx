"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
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
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                            {t("featuredWork")}
                        </h2>
                        <div className="w-20 h-1 bg-linear-to-r from-nebula-accent to-purple-500 rounded-full" />
                    </motion.div>
                    <Link
                        href="/work"
                        className="hidden md:flex items-center text-nebula-accent hover:text-foreground transition-colors group"
                    >
                        {t("viewAllProjects")} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
                            <Card hoverEffect className="h-full flex flex-col bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 hover:border-nebula-accent/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.18)] p-0 overflow-hidden group">
                                {/* Icon + gradient header */}
                                <div className="relative h-36 overflow-hidden bg-linear-to-br from-nebula-primary/15 to-foreground/5 border-b border-foreground/10 flex items-center justify-center">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-nebula-accent/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
                                    <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground/5 border border-foreground/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300 shadow-lg">
                                        <project.icon className="w-7 h-7" />
                                    </div>

                                    {/* Overlay ID */}
                                    <div className="absolute top-4 right-4 px-2 py-1 bg-background/70 backdrop-blur-md border border-foreground/10 rounded text-[10px] font-mono text-muted-foreground">
                                        PRJ_0{index + 1}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-nebula-accent transition-colors font-display mb-2">
                                        {locale === "en" ? project.title.en : project.title.es}
                                    </h3>

                                    <p className="text-muted text-sm mb-6 flex-1 leading-relaxed">
                                        {locale === "en" ? project.description.en : project.description.es}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <div
                                                key={tag}
                                                className="px-2 py-1 text-[10px] font-mono text-muted-foreground bg-foreground/5 border border-foreground/10 rounded hover:border-nebula-accent/50 hover:bg-foreground/10 hover:text-foreground transition-colors cursor-default"
                                            >
                                                {tag}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-foreground/10 mt-auto flex items-center justify-between gap-2">
                                        <span className="text-[11px] font-mono uppercase tracking-widest text-muted/70">
                                            {locale === "en" ? project.category.en : project.category.es}
                                        </span>
                                        {project.metric && (
                                            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-sm font-mono tracking-tight">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                                                {locale === "en" ? project.metric.en : project.metric.es}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/work">
                        <Button variant="outline" className="w-full">
                            {t("viewAllProjects")} <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
