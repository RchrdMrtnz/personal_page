"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight, Download, ArrowDown, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export default function Hero({ locale }: { locale: string }) {
    const t = useTranslations("Hero");

    const fullRole = locale === "en" ? siteConfig.profile.role.en : siteConfig.profile.role.es;
    const role = fullRole.split("|")[0].trim();
    const differentiator = locale === "en" ? siteConfig.profile.differentiator.en : siteConfig.profile.differentiator.es;

    const metrics = siteConfig.heroMetrics.map(metric => ({
        ...metric,
        label: locale === "en" ? metric.label.en : metric.label.es
    }));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 14 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="relative min-h-[calc(100vh-4rem)] flex flex-col overflow-hidden mt-16">
            <NebulaBackground />

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 flex items-center justify-center py-8 lg:items-start lg:pt-14 lg:pb-8"
            >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                    {/* ── Left Panel ── */}
                    <div className="flex flex-col items-start text-left space-y-5 lg:space-y-6">

                        {/* Terminal status line */}
                        <motion.div variants={itemVariant}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-foreground/5 border border-foreground/10 font-mono text-xs text-muted">
                                <Terminal size={11} className="text-nebula-accent shrink-0" />
                                <span className="text-muted/60">~$</span>
                                <span>status</span>
                                <span className="text-foreground/20">·</span>
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                                </span>
                                <span className="text-emerald-600 dark:text-emerald-400 font-medium">available</span>
                            </div>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={itemVariant}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight font-display leading-none"
                        >
                            {siteConfig.profile.name}
                        </motion.h1>

                        {/* Role */}
                        <motion.p variants={itemVariant} className="text-base sm:text-lg text-nebula-accent font-medium">
                            {role}
                        </motion.p>

                        {/* Differentiator */}
                        <motion.p variants={itemVariant} className="text-sm sm:text-base text-muted max-w-md leading-relaxed">
                            {differentiator}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={itemVariant}
                            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-1"
                        >
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="relative w-full sm:w-auto overflow-hidden group border-none text-white shadow-md shadow-nebula-accent/20 hover:shadow-nebula-accent/30 transition-shadow duration-300 bg-nebula-accent"
                                >
                                    <span className="absolute inset-0 bg-linear-to-r from-nebula-accent to-blue-500 dark:to-purple-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10 flex items-center justify-center">
                                        {t("cta")}
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Button>
                            </Link>

                            <a
                                href={locale === "en" ? siteConfig.profile.links.resume.en : siteConfig.profile.links.resume.es}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                                    <Download className="mr-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                                    {t("downloadResume")}
                                </Button>
                            </a>
                        </motion.div>
                    </div>

                    {/* ── Right Panel: Metric Cards ── hidden on mobile */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, x: 16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } } }}
                        className="hidden sm:block relative lg:order-last"
                    >
                        {/* Subtle glow behind cards */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-nebula-accent/5 blur-3xl rounded-full" />

                        {/* Single container: title bar + cards, no gap */}
                        <div className="rounded-xl border border-foreground/10 overflow-hidden">
                            {/* Terminal title bar */}
                            <div className="flex items-center gap-2 px-3 py-2 bg-foreground/5 border-b border-foreground/10 font-mono text-[10px] text-muted/60">
                                <span className="h-2 w-2 rounded-full bg-red-400/60" />
                                <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                                <span className="h-2 w-2 rounded-full bg-green-400/60" />
                                <span className="ml-2">system_metrics.ts</span>
                            </div>
                            {/* Cards grid */}
                            <div className="grid grid-cols-2 gap-2.5 p-3 bg-foreground/3">
                                {metrics.map((metric, index) => (
                                    <MetricCard key={index} metric={metric} index={index} />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 text-muted hover:text-nebula-accent transition-colors cursor-pointer"
            >
                <span className="font-mono text-[9px] tracking-widest uppercase opacity-60">scroll</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-3.5 h-3.5" />
                </motion.div>
            </motion.div>
        </section>
    );
}

interface HeroMetric {
    label: string;
    value: string;
    icon: React.ElementType;
    color: string;
    percentage: number;
}

function MetricCard({ metric, index }: { metric: HeroMetric; index: number }) {
    return (
        <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
        >
            <Card className="bg-surface dark:bg-nebula-ink/40 backdrop-blur-xl border-foreground/10 hover:border-nebula-accent/30 transition-all duration-300 p-4 h-full">
                <div className="flex items-start justify-between mb-3">
                    <div className={`p-1.5 rounded-md ${metric.color} bg-foreground/5`}>
                        <metric.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-mono text-[9px] text-muted/40 tracking-widest">
                        SYS_{String(index + 1).padStart(2, "0")}
                    </span>
                </div>

                <div className="space-y-0.5 mb-3">
                    <p className="font-mono text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                        <AnimatedCounter value={metric.value} />
                    </p>
                    <p className="text-[11px] text-muted line-clamp-1">{metric.label}</p>
                </div>

                <div className="h-px w-full bg-foreground/5 rounded-full overflow-hidden">
                    <motion.div
                        className={`h-full rounded-full ${metric.color.replace("text-", "bg-")}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    />
                </div>
            </Card>
        </motion.div>
    );
}
