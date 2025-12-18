import { siteConfig } from "../../../content/site";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BrainCircuit, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

interface ConsultingSectionProps {
    locale: string;
}

export function ConsultingSection({ locale }: ConsultingSectionProps) {
    const content = siteConfig.consulting;
    const lang = locale as "en" | "es";

    return (
        <section className="w-full mt-16 sm:mt-24">
            <Card className="relative overflow-hidden bg-nebula-ink/30 backdrop-blur-xl border-white/10">
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-nebula-purple/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-nebula-blue/20 blur-[100px] rounded-full" />

                <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Column: Pitch & CTA */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nebula-purple/10 border border-nebula-purple/20 text-nebula-purple text-sm font-medium">
                                <Sparkles className="w-4 h-4" />
                                <span>Premium Service</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display leading-tight">
                                {content.title[lang]}
                            </h2>

                            <p className="text-lg text-gray-300 leading-relaxed">
                                {content.pitch[lang]}
                            </p>

                            <div className="pt-4">
                                <a href={siteConfig.profile.links.email} className="block w-full sm:w-auto">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="w-full group"
                                    >
                                        {content.cta[lang]}
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Services & Outcome */}
                        <div className="space-y-8">
                            <div className="grid gap-4">
                                {content.services.map((service, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                        <div className="mt-1 min-w-[20px]">
                                            <CheckCircle className="w-5 h-5 text-nebula-accent" />
                                        </div>
                                        <span className="text-gray-200">{service[lang]}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 rounded-2xl bg-gradient-to-r from-nebula-primary/10 to-transparent border border-nebula-primary/20">
                                <div className="flex items-center gap-3 mb-2 text-nebula-primary font-semibold">
                                    <BrainCircuit className="w-5 h-5" />
                                    <span>Expected Outcome</span>
                                </div>
                                <p className="text-gray-300 italic">
                                    "{content.outcome[lang]}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
}
