"use client";

import { siteConfig } from "../../../content/site";
import { Card } from "@/components/ui/Card";
import { NebulaBackground } from "@/components/ui/NebulaBackground";

export default function TechStackSection({ locale }: { locale: string }) {
    return (
        <section className="py-20 relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                        Tech Stack
                    </h2>
                    <p className="text-gray-400">
                        {locale === "en" ? "My production toolkit" : "Mi toolkit de producción"}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {siteConfig.topSkills.map((skill, index) => (
                        <Card
                            key={index}
                            className="px-6 py-3 bg-nebula-ink/30 backdrop-blur-xl border-white/10 hover:border-nebula-accent/30 hover:bg-white/5 transition-all duration-300"
                        >
                            <span className="text-lg font-mono text-gray-200">{skill}</span>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
