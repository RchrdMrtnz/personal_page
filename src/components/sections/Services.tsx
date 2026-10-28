"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { siteConfig } from "../../../content/site";
import { Card } from "@/components/ui/Card";
import { buttonStyles } from "@/components/ui/Button";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

export default function Services({ locale }: { locale: string }) {
    const t = useTranslations("Sections");
    const tServices = useTranslations("Services");
    const services = siteConfig.services;

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
        <section className="py-14 md:py-20 relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                            {t("servicesTitle")}
                        </h2>
                        <p className="text-muted max-w-2xl mx-auto text-base md:text-lg">
                            {t("servicesSubtitle")}
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <Link href={`/services/${service.slug}`} className="block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-nebula-accent/40">
                            <Card
                                hoverEffect
                                className="group h-full flex flex-col bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 hover:border-nebula-accent/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.18)] transition-all duration-300 p-6"
                            >
                                <div className="flex justify-between items-start mb-4 md:mb-6">
                                    <div className="p-3 bg-foreground/5 rounded-lg text-nebula-accent ring-1 ring-foreground/10">
                                        <service.icon size={24} />
                                    </div>
                                    <span className="text-xs font-mono text-muted/70 tracking-wider">
                                        SRV_0{index + 1}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3 font-display group-hover:text-nebula-accent transition-colors">
                                    {locale === "en" ? service.title.en : service.title.es}
                                </h3>
                                <p className="text-muted leading-relaxed mb-5">
                                    {locale === "en" ? service.desc.en : service.desc.es}
                                </p>
                                <span className="mt-auto inline-flex items-center text-sm font-medium text-nebula-accent">
                                    {tServices("learnMore")}
                                    <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Card>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-8 md:mt-10 text-center">
                    <Link href="/services" className={buttonStyles({ variant: "outline", className: "w-full sm:w-auto" })}>
                        {t("viewAllServices")} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
