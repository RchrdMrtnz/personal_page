"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export default function Outcomes({ locale }: { locale: string }) {
    const t = useTranslations("Sections");

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                        {t("metrics")}
                    </h2>
                    <div className="w-20 h-1 bg-nebula-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {siteConfig.metrics.map((metric, index) => (
                        <motion.div
                            key={metric.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card hoverEffect className="h-full bg-nebula-surface/5 border-nebula-surface/10">
                                <div className="text-4xl md:text-5xl font-bold text-nebula-accent mb-2 font-display">
                                    {metric.value}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {locale === "en" ? metric.label.en : metric.label.es}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {locale === "en" ? metric.detail.en : metric.detail.es}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
