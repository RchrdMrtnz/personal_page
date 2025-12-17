"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../../../content/site";
import { Card } from "@/components/ui/Card";

export default function Services({ locale }: { locale: string }) {
    const services = siteConfig.services;

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-nebula-accent rounded-full blur-[100px] opacity-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                        AI + Automation Systems
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {locale === "en"
                            ? "Building intelligent infrastructure that drives efficiency."
                            : "Construyendo infraestructura inteligente que impulsa la eficiencia."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card hoverEffect className="h-full bg-nebula-surface/5 border-nebula-surface/10">
                                <div className="mb-6 p-3 bg-nebula-accent/10 rounded-lg w-fit text-nebula-accent">
                                    <service.icon size={32} />
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
                </div>
            </div>
        </section>
    );
}
