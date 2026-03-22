"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { siteConfig } from "../../../content/site";
import { Card } from "@/components/ui/Card";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
import { Code2, Layers, Cloud, Sparkles } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
    languages: Code2,
    frameworks: Layers,
    cloud: Cloud,
    ai: Sparkles,
};

export default function TechStackSection({ locale }: { locale: string }) {
    const t = useTranslations("Sections");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    };

    return (
        <section className="py-20 relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                            {t("techStack")}
                        </h2>
                        <div className="w-20 h-1 bg-linear-to-r from-nebula-accent to-purple-500 mx-auto rounded-full" />
                    </motion.div>
                </div>

                {/* Category cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {siteConfig.skillsByCategory.map((cat) => {
                        const Icon = categoryIcons[cat.id] ?? Code2;
                        const label = locale === "en" ? cat.label.en : cat.label.es;

                        return (
                            <motion.div
                                key={cat.id}
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            >
                                <Card
                                    hoverEffect
                                    className="h-full bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 hover:border-nebula-accent/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.18)] transition-all duration-300 p-6"
                                >
                                    {/* Icon */}
                                    <div className={`p-2.5 rounded-lg bg-foreground/5 ring-1 ring-foreground/10 w-fit mb-4 ${cat.color}`}>
                                        <Icon size={20} />
                                    </div>

                                    {/* Category name */}
                                    <h3 className="text-base font-semibold text-foreground mb-4 font-display">
                                        {label}
                                    </h3>

                                    {/* Skills as pills */}
                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className={`text-xs font-medium px-2.5 py-1 rounded-full ${cat.bgColor} ${cat.color}`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
