"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function FeaturedWork({ locale }: { locale: string }) {
    const t = useTranslations("Sections");
    const featured = siteConfig.caseStudies.slice(0, 3);

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                            {t("featuredWork")}
                        </h2>
                        <div className="w-20 h-1 bg-nebula-accent rounded-full" />
                    </div>
                    <Link
                        href="/work"
                        className="hidden md:flex items-center text-nebula-accent hover:text-white transition-colors"
                    >
                        View all projects <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featured.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card hoverEffect className="h-full flex flex-col bg-nebula-surface/5 border-nebula-surface/10 p-0 overflow-hidden group">
                                <div className="aspect-video relative overflow-hidden bg-nebula-ink">
                                    {/* Placeholder for actual image source logic if/when Next.js Image is fully configured with domains using standard img for now for simplicity with local/external placeholder flexibility */}
                                    <img
                                        src={project.image || "/api/placeholder/400/320"}
                                        alt={locale === "en" ? project.title.en : project.title.es}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-nebula-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white group-hover:text-nebula-accent transition-colors font-display mb-2">
                                        {locale === "en" ? project.title.en : project.title.es}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                                        {locale === "en" ? project.description.en : project.description.es}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs bg-white/5 text-gray-300 border-white/5">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-white/10">
                                        <div className="flex items-center gap-2">
                                            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                                            <span className="text-nebula-accent font-bold text-sm font-mono">
                                                {locale === "en" ? project.stats.en : project.stats.es}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/work">
                        <Button variant="outline" className="w-full">
                            View all projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
