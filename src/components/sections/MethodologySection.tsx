"use client";

import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { NebulaBackground } from "@/components/ui/NebulaBackground";

export default function MethodologySection({ locale }: { locale: string }) {
    const method = siteConfig.methodology;

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
                            {locale === "en" ? method.title.en : method.title.es}
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
                    {method.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="relative group"
                        >
                            {/* Connector Line (Desktop) */}
                            {index < method.steps.length - 1 && (
                                <div className="hidden lg:block absolute top-[2.5rem] left-1/2 w-full h-[1px] bg-gradient-to-r from-nebula-accent/30 to-transparent z-0 transform translate-x-4" />
                            )}

                            <Card className="h-full bg-nebula-ink/30 backdrop-blur-xl border-white/10 hover:border-nebula-accent/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] relative z-10 flex flex-col items-center text-center p-6 transition-all duration-300 group-hover:-translate-y-2">
                                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-nebula-accent mb-6 font-display text-2xl font-bold shadow-lg shadow-nebula-accent/10 group-hover:shadow-nebula-accent/30 transition-all duration-300">
                                    0{index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {locale === "en" ? step.title.en : step.title.es}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {locale === "en" ? step.desc.en : step.desc.es}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
