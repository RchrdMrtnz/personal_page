import { getTranslations } from "next-intl/server";
import { siteConfig } from "../../../../content/site";
import { Card } from "@/components/ui/Card";
import { Mail, Send } from "lucide-react";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
import { ConsultingSection } from "@/components/sections/ConsultingSection";

export default async function ContactPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations("Contact");

    return (
        <div className="pt-20 sm:pt-28 pb-16 sm:pb-24 min-h-screen flex items-center relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nebula-accent/10 border border-nebula-accent/20 mb-6 sm:mb-8 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nebula-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-nebula-accent"></span>
                        </span>
                        <span className="text-sm font-medium text-nebula-accent">Available for opportunities</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 font-display leading-tight">
                        {t("title")}
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Email Card */}
                    <a
                        href={siteConfig.profile.links.email}
                        className="group relative block"
                    >
                        <Card className="h-full p-8 bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 hover:border-nebula-accent/30 hover:bg-foreground/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.18)]">
                            <div className="flex flex-col h-full items-center text-center">
                                <div className="mb-6">
                                    <div className="inline-flex p-4 rounded-2xl bg-foreground/5 border border-foreground/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300 shadow-lg">
                                        <Mail className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-xs uppercase tracking-widest text-muted font-mono">Email</div>
                                    <div className="text-lg text-foreground font-medium group-hover:text-nebula-accent transition-colors">
                                        rchrd.pdrz.mrtnz@gmail.com
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </a>

                    {/* LinkedIn Card */}
                    <a
                        href={siteConfig.profile.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block"
                    >
                        <Card className="h-full p-8 bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 hover:border-nebula-accent/30 hover:bg-foreground/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.18)]">
                            <div className="flex flex-col h-full items-center text-center">
                                <div className="mb-6">
                                    <div className="inline-flex p-4 rounded-2xl bg-foreground/5 border border-foreground/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300 shadow-lg">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                            <rect width="4" height="12" x="2" y="9"/>
                                            <circle cx="4" cy="4" r="2"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-xs uppercase tracking-widest text-muted font-mono">LinkedIn</div>
                                    <div className="text-lg text-foreground font-medium group-hover:text-nebula-accent transition-colors">
                                        in/rchrd-pdrz1993
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </a>

                    {/* Telegram Card */}
                    <a
                        href={siteConfig.profile.links.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block"
                    >
                        <Card className="h-full p-8 bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 hover:border-nebula-accent/30 hover:bg-foreground/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.18)]">
                            <div className="flex flex-col h-full items-center text-center">
                                <div className="mb-6">
                                    <div className="inline-flex p-4 rounded-2xl bg-foreground/5 border border-foreground/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300 shadow-lg">
                                        <Send className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-xs uppercase tracking-widest text-muted font-mono">Telegram</div>
                                    <div className="text-lg text-foreground font-medium group-hover:text-nebula-accent transition-colors">
                                        {locale === "en" ? "Send a message" : "Enviar mensaje"}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </a>
                </div>

                <ConsultingSection locale={locale} />
            </div>
        </div>
    );
}
