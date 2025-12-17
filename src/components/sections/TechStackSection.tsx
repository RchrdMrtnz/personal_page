"use client";

import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Code2, Layers, Cpu, Database } from "lucide-react";

export default function TechStackSection({ locale }: { locale: string }) {
    const stack = siteConfig.techStack;

    const sections = [
        { key: 'languages', icon: Code2, data: stack.languages },
        { key: 'frameworks', icon: Layers, data: stack.frameworks },
        { key: 'tools', icon: Cpu, data: stack.tools },
        { key: 'ai', icon: Database, data: stack.ai },
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.key}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-transparent border-nebula-surface/20">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-nebula-surface/50 rounded-lg text-nebula-accent">
                                        <section.icon size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        {locale === "en" ? section.data.title.en : section.data.title.es}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2 block">
                                    {section.data.items.map((item) => (
                                        <Badge
                                            key={item}
                                            variant="secondary"
                                            className="bg-nebula-surface/30 hover:bg-nebula-surface/50 text-gray-300 border-white/5"
                                        >
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
