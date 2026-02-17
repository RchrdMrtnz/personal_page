"use client";

import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { User, Target } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { NebulaBackground } from "@/components/ui/NebulaBackground";

export default function AboutSection({ locale }: { locale: string }) {


    return (
        <section className="py-20 relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Card className="bg-nebula-ink/30 backdrop-blur-xl border-white/10 p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative glow inside card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-nebula-accent/5 rounded-full blur-3xl -z-10" />

                        <div className="flex flex-col items-center text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-nebula-accent mb-6 shadow-lg shadow-nebula-accent/10"
                            >
                                <User size={32} />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl md:text-4xl font-bold text-white mb-6 font-display"
                            >
                                {locale === "en" ? "About Me" : "Sobre Mí"}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl"
                            >
                                {locale === "en" ? siteConfig.profile.differentiator.en : siteConfig.profile.differentiator.es}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="w-full border-t border-white/10 pt-8"
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-nebula-accent font-mono text-sm uppercase tracking-wider mb-3 flex items-center gap-2 px-3 py-1 rounded-full bg-nebula-accent/10 border border-nebula-accent/20">
                                        <Target size={14} />
                                        {locale === "en" ? "My Focus" : "Mi Enfoque"}
                                    </span>
                                    <p className="text-xl md:text-2xl font-medium text-white max-w-2xl italic font-display">
                                        "{locale === "en" ? siteConfig.consulting.pitch.en : siteConfig.consulting.pitch.es}"
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
