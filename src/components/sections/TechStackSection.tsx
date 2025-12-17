"use client";

import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Code2, Layers, Cpu, Database } from "lucide-react";
import { NebulaBackground } from "@/components/ui/NebulaBackground";

export default function TechStackSection({ locale }: { locale: string }) {
    const stack = siteConfig.techStack;

    const sections = [
        { key: 'languages', icon: Code2, data: stack.languages },
        { key: 'frameworks', icon: Layers, data: stack.frameworks },
        { key: 'tools', icon: Cpu, data: stack.tools },
        { key: 'ai', icon: Database, data: stack.ai },
    ];

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
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.key}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <Card
                                hoverEffect
                                className="h-full bg-nebula-ink/30 backdrop-blur-xl border-white/10 hover:border-nebula-accent/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] p-6"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/5 rounded-lg text-nebula-accent ring-1 ring-white/10">
                                            <section.icon size={20} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white font-display">
                                            {locale === "en" ? section.data.title.en : section.data.title.es}
                                        </h3>
                                    </div>
                                    <span className="text-xs font-mono text-gray-500 tracking-wider">
                                        SYS_0{index + 1}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {section.data.items.map((item, i) => (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.1 * i }}
                                            viewport={{ once: true }}
                                            className="px-3 py-1.5 text-xs md:text-sm font-mono text-gray-300 bg-white/5 border border-white/10 rounded-full hover:border-nebula-accent/50 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                        >
                                            {item}
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
