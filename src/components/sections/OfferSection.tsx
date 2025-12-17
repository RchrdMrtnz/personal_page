"use client";

import { siteConfig } from "../../../content/site";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Link } from "@/i18n/routing";
import { ArrowRight, CheckCheck, ShieldCheck } from "lucide-react";

export default function OfferSection({ locale }: { locale: string }) {
    const cta = siteConfig.cta;
    const offer = siteConfig.entryOffer;
    const trust = siteConfig.trust;

    return (
        <section className="py-20 bg-nebula-surface/20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Entry Offer Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <Card className="bg-nebula-ink border-nebula-accent/30 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-nebula-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12 relative z-10">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-display">
                                    {locale === "en" ? offer.title.en : offer.title.es}
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    {locale === "en" ? offer.description.en : offer.description.es}
                                </p>
                                <div className="flex items-center gap-3 text-nebula-accent bg-nebula-accent/5 p-3 rounded-lg">
                                    <CheckCheck size={20} />
                                    <span className="font-medium text-sm">
                                        {locale === "en" ? offer.deliverable.en : offer.deliverable.es}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 border-l border-white/5 pl-0 md:pl-8">
                                <h4 className="text-lg font-semibold text-white">
                                    {locale === "en" ? cta.ready.en : cta.ready.es}
                                </h4>
                                <p className="text-sm text-gray-500 mb-2">
                                    {locale === "en" ? cta.discussion.en : cta.discussion.es}
                                </p>
                                <Link href="/contact">
                                    <Button size="lg" className="w-full group">
                                        {locale === "en" ? cta.action.en : cta.action.es}
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
                            className="flex flex-col items-center"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 mb-3">
                                <ShieldCheck size={18} />
                            </div>
                            <p className="text-sm text-gray-500">
                                {locale === "en" ? item.text.en : item.text.es}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
