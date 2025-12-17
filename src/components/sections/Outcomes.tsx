"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "../../../content/site";
import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
import { useEffect, useRef } from "react";

const AnimatedCounter = ({ value, className }: { value: string, className?: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    // Extract numeric part and non-numeric parts
    const match = value.match(/([^0-9.]*)([0-9.]+)([^0-9.]*)/);
    const prefix = match ? match[1] : "";
    const number = match ? parseFloat(match[2]) : 0;
    const suffix = match ? match[3] : "";

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000 });
    const rounded = useTransform(springValue, (latest) => latest.toFixed(value.includes(".") ? 1 : 0));

    useEffect(() => {
        if (inView) {
            motionValue.set(number);
        }
    }, [inView, number, motionValue]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                            {t("metrics")}
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-nebula-accent to-purple-500 mx-auto rounded-full" />
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {siteConfig.metrics.map((metric, index) => (
                        <motion.div
                            key={metric.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <Card
                                hoverEffect
                                className="h-full bg-nebula-ink/30 backdrop-blur-xl border-white/10 hover:border-nebula-accent/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] flex flex-col items-center justify-center p-8 text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-nebula-accent mb-3 font-display">
                                    <AnimatedCounter value={metric.value} />
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
                </motion.div>
            </div>
        </section>
    );
}
