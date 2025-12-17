"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function Hero({ locale }: { locale: string }) {
    const t = useTranslations("Hero");
    const role = locale === "en" ? siteConfig.profile.role.en : siteConfig.profile.role.es;

    const metrics = siteConfig.heroMetrics.map(metric => ({
        ...metric,
        label: locale === "en" ? metric.label.en : metric.label.es
    }));

    const floatingAnimation = {
        initial: { y: 0 },
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" as const
            }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 lg:pt-32">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Panel: Command Center */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start text-left"
                    >
                        <Badge variant="default" className="mb-6">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nebula-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-nebula-accent"></span>
                            </span>
                            Available for new projects
                        </Badge>

                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 font-display leading-tight">
                            Richard Pedraza
                            <span className="block text-3xl md:text-4xl text-gray-400 mt-2 font-sans font-normal">
                                {role}
                            </span>
                        </h1>

                        <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
                            {locale === "en" ? siteConfig.profile.differentiator.en : siteConfig.profile.differentiator.es}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto group">
                                    {t("cta")}
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>

                            <a
                                href={locale === "en" ? siteConfig.profile.links.resume.en : siteConfig.profile.links.resume.es}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    <Download className="mr-2 w-4 h-4" />
                                    {t("downloadResume")}
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Panel: Metrics Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {metrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    variants={floatingAnimation}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <Card
                                        hoverEffect
                                        className="bg-nebula-ink/50 backdrop-blur-sm border-nebula-surface/10"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`p-2 rounded-lg bg-white/5 ${metric.color}`}>
                                                <metric.icon size={20} />
                                            </div>
                                            <span className="text-xs font-mono text-gray-500">SYS_METRIC_0{index + 1}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-3xl font-bold text-white font-display tracking-tight">
                                                {metric.value}
                                            </h3>
                                            <p className="text-sm text-gray-400 font-medium">
                                                {metric.label}
                                            </p>
                                        </div>
                                        {/* Performance Bar */}
                                        <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${metric.color.replace('text-', 'bg-')}/50`}
                                                style={{ width: `${metric.percentage}%` }}
                                            />
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative elements behind */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-nebula-accent/5 blur-3xl rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
