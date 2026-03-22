"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export default function Outcomes({ locale }: { locale: string }) {
    const t = useTranslations("Sections");

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
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                            {t("metrics")}
                        </h2>
                        <div className="w-20 h-1 bg-linear-to-r from-nebula-accent to-purple-500 mx-auto rounded-full" />
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {siteConfig.metrics.map((metric) => (
                        <motion.div
                            key={metric.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <Card
                                hoverEffect
                                className="h-full bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 hover:border-nebula-accent/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.18)] flex flex-col items-center justify-center p-8 text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-nebula-accent mb-3 font-display">
                                    <AnimatedCounter value={metric.value} />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {locale === "en" ? metric.label.en : metric.label.es}
                                </h3>
                                <p className="text-sm text-muted">
                                    {locale === "en" ? metric.detail.en : metric.detail.es}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
