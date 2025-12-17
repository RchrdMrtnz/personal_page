"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "../../../content/site";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
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

export default function Hero({ locale }: { locale: string }) {
    const t = useTranslations("Hero");
    const role = locale === "en" ? siteConfig.profile.role.en : siteConfig.profile.role.es;
    const differentiator = locale === "en" ? siteConfig.profile.differentiator.en : siteConfig.profile.differentiator.es;

    const metrics = siteConfig.heroMetrics.map(metric => ({
        ...metric,
        label: locale === "en" ? metric.label.en : metric.label.es
    }));

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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-32">

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                        maskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)"
                    }}
                />

                {/* Floating Orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-nebula-accent/10 blur-3xl rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-purple-500/10 blur-3xl rounded-full"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left Panel: Text Content */}
                    <div className="flex flex-col items-start text-left space-y-6 lg:space-y-8 lg:order-first">

                        {/* Available Badge */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            <Badge variant="default" className="mb-4 md:mb-6 text-xs md:text-sm">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nebula-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-nebula-accent"></span>
                                </span>
                                Available for new projects
                            </Badge>
                        </motion.div>

                        {/* Headings */}
                        <div>
                            <motion.h1
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-display leading-tight"
                            >
                                {siteConfig.profile.name}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="text-xl sm:text-3xl lg:text-4xl text-nebula-accent mt-2 font-sans font-normal"
                            >
                                {role}
                            </motion.div>
                        </div>

                        {/* Differentiator */}
                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-sm md:text-lg text-gray-400 max-w-xl leading-relaxed"
                        >
                            {differentiator}
                        </motion.p>

                        {/* Skills Grid */}
                        <div className="flex flex-wrap gap-2">
                            {siteConfig.topSkills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + (index * 0.1) }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-3 py-1.5 text-xs md:text-sm font-mono text-gray-300 bg-white/5 border border-white/10 rounded-full hover:border-nebula-accent/50 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto pt-2"
                        >
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button size="lg" className="relative w-full sm:w-auto overflow-hidden group border-none text-white shadow-lg shadow-nebula-accent/20 hover:shadow-nebula-accent/40 transition-shadow duration-300">
                                    <span className="absolute inset-0 bg-gradient-to-r from-nebula-accent to-purple-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
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
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 hover:border-nebula-accent/50 backdrop-blur-sm text-gray-200 group transition-all duration-300"
                                >
                                    <Download className="mr-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                                    {t("downloadResume")}
                                </Button>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Panel: Metrics Grid */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                        className="relative lg:order-last"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[120%] md:h-[120%] bg-nebula-accent/5 blur-3xl rounded-full" />

                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            {metrics.map((metric, index) => (
                                <MetricCard key={index} metric={metric} index={index} />
                            ))}
                        </div>
                    </motion.div>

                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-gray-500 hover:text-nebula-accent transition-colors cursor-pointer"
            >
                <span className="text-xs font-mono tracking-wider">SCROLL</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-4 h-4" />
                </motion.div>
            </motion.div>
        </section>
    );
}

// Separated component for performance optimization and clean code
function MetricCard({ metric, index }: { metric: any, index: number }) {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <Card
                className="bg-nebula-ink/30 backdrop-blur-xl border border-white/10 hover:border-nebula-accent/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] transition-all duration-300 p-3 md:p-5 lg:p-6 h-full"
            >
                <div className="flex items-start justify-between mb-2 md:mb-4">
                    <div className={`p-1.5 md:p-2 rounded-lg bg-white/5 ${metric.color}`}>
                        <metric.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className="text-[10px] md:text-xs font-mono text-gray-500 tracking-wider">
                        SYS_0{index + 1}
                    </span>
                </div>
                <div className="space-y-1">
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white font-display tracking-tight">
                        <AnimatedCounter value={metric.value} />
                    </h3>
                    <p className="text-[10px] md:text-sm text-gray-400 font-medium line-clamp-1">
                        {metric.label}
                    </p>
                </div>

                {/* Performance Bar */}
                <div className="mt-2 md:mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        className={`h-full rounded-full ${metric.color.replace('text-', 'bg-')}`}
                        style={{ boxShadow: "0 0 10px rgba(139,92,246,0.3)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                    />
                </div>
            </Card>
        </motion.div>
    );
}
