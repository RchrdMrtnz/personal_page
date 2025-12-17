"use client";

import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { User, Target } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function AboutSection({ locale }: { locale: string }) {
    const about = siteConfig.about;

    return (
        <section className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Card className="bg-nebula-surface/5 border-nebula-surface/10 p-8 md:p-12">
                        <div className="flex flex-col items-center text-center">
                            <div className="inline-flex p-3 rounded-full bg-nebula-accent/10 text-nebula-accent mb-6">
                                <User size={32} />
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-6 font-display">
                                {locale === "en" ? about.title.en : about.title.es}
                            </h2>

                            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl">
                                {locale === "en" ? about.bio.en : about.bio.es}
                            </p>

                            <div className="w-full border-t border-white/5 pt-8">
                                <div className="flex flex-col items-center">
                                    <span className="text-nebula-accent font-mono text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <Target size={16} />
                                        {locale === "en" ? "My Mission" : "Mi Misión"}
                                    </span>
                                    <p className="text-xl font-medium text-white max-w-2xl italic">
                                        "{locale === "en" ? about.mission.en : about.mission.es}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
