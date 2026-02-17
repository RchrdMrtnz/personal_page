"use client";

import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Link } from "@/i18n/routing";
import { ArrowRight, CheckCheck, ShieldCheck } from "lucide-react";
import { NebulaBackground } from "@/components/ui/NebulaBackground";

export default function OfferSection({ locale }: { locale: string }) {

    const offer = siteConfig.entryOffer;
    const trust = siteConfig.trust;

    return (
        <section className="py-20 relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Entry Offer Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <Card className="bg-nebula-ink/30 backdrop-blur-xl border-white/10 overflow-hidden relative border-nebula-accent/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-nebula-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12 relative z-10">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-display">
                                    {locale === "en" ? offer.title.en : offer.title.es}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {locale === "en" ? offer.description.en : offer.description.es}
                                </p>
                                <div className="flex items-center gap-3 text-nebula-accent bg-nebula-accent/10 border border-nebula-accent/20 p-4 rounded-lg">
                                    <CheckCheck size={20} />
                                    <span className="font-medium text-sm">
                                        {locale === "en" ? offer.deliverable.en : offer.deliverable.es}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 border-l border-white/10 pl-0 md:pl-8 md:border-l-2">
                                <h4 className="text-xl font-bold text-white font-display">
                                    {locale === "en" ? "Ready to scale your operations?" : "¿Listo para escalar sus operaciones?"}
                                </h4>
                                <p className="text-sm text-gray-400 mb-2">
                                    {locale === "en" ? "Let's discuss how AI can transform your business." : "Hablemos de cómo la IA puede transformar su negocio."}
                                </p>
                                <Link href="/contact">
                                    <Button size="lg" className="w-full group relative overflow-hidden border-none text-white shadow-lg shadow-nebula-accent/20 hover:shadow-nebula-accent/40 transition-shadow duration-300">
                                        <span className="absolute inset-0 bg-gradient-to-r from-nebula-accent to-purple-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                                        <span className="absolute inset-0 bg-nebula-accent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                                        <span className="relative z-10 flex items-center justify-center">
                                            {locale === "en" ? siteConfig.consulting.cta.en : siteConfig.consulting.cta.es}
                                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* Trust Signals */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {[
                        { key: 'documentation', text: trust.documentation },
                        { key: 'maintainability', text: trust.maintainability },
                        { key: 'handoff', text: trust.handoff }
                    ].map((item, index) => (
                        <motion.div
                            key={item.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 mb-4 group-hover:text-nebula-accent group-hover:border-nebula-accent/50 transition-colors">
                                <ShieldCheck size={20} />
                            </div>
                            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                {locale === "en" ? item.text.en : item.text.es}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
