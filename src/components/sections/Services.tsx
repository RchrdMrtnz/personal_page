"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../../../content/site";
import { Card } from "@/components/ui/Card";
import { NebulaBackground } from "@/components/ui/NebulaBackground";

export default function Services({ locale }: { locale: string }) {
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
        <section className="py-20 relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                            AI + Automation Systems
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            {locale === "en"
                                ? "Building intelligent infrastructure that drives efficiency."
                                : "Construyendo infraestructura inteligente que impulsa la eficiencia."}
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <Card
                                hoverEffect
                                className="h-full bg-nebula-ink/30 backdrop-blur-xl border-white/10 hover:border-nebula-accent/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] transition-all duration-300 p-6"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/5 rounded-lg text-nebula-accent ring-1 ring-white/10">
                                        <service.icon size={24} />
                                    </div>
                                    <span className="text-xs font-mono text-gray-500 tracking-wider">
                                        SRV_0{index + 1}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 font-display">
                                    {locale === "en" ? service.title.en : service.title.es}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {locale === "en" ? service.desc.en : service.desc.es}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
