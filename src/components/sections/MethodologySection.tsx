"use client";

import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function MethodologySection({ locale }: { locale: string }) {
    const method = siteConfig.methodology;

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-nebula-primary/10 rounded-full blur-[128px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                        {locale === "en" ? method.title.en : method.title.es}
                    </h2>
                    <div className="w-20 h-1 bg-nebula-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {method.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Connector Line (Desktop) */}
                            {index < method.steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-nebula-accent/50 to-transparent z-0" />
                            )}

                            <Card className="h-full bg-nebula-surface/5 border-nebula-surface/10 relative z-10 flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-2xl bg-nebula-accent/10 flex items-center justify-center text-nebula-accent mb-4 font-display text-2xl font-bold">
                                    0{index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {locale === "en" ? step.title.en : step.title.es}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {locale === "en" ? step.desc.en : step.desc.es}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
