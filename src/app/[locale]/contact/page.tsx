import { getTranslations } from "next-intl/server";
import { siteConfig } from "../../../../content/site";
import { Card } from "@/components/ui/Card";
import { Mail, Send, Clock } from "lucide-react";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
import { ContactForm } from "@/components/sections/ContactForm";
import type { Metadata } from "next";
import { buildMetadata, pageMeta, asLocale } from "@/lib/seo";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata({ locale: asLocale(locale), ...pageMeta.contact[asLocale(locale)] });
}

export default async function ContactPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations("Contact");

    return (
        <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 min-h-screen flex items-center relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="text-center mb-10 sm:mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nebula-accent/10 border border-nebula-accent/20 mb-6 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-medium text-foreground/80">{t("available")}</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-display leading-tight">
                        {t("title")}
                    </h1>
                    <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
                    {/* Contact form — primary action */}
                    <div className="lg:col-span-3">
                        <ContactForm locale={locale} />
                    </div>

                    {/* Direct contact methods — secondary */}
                    <div className="lg:col-span-2 space-y-3">
                        <div className="text-xs uppercase tracking-widest text-muted font-mono px-1 mb-1">
                            {t("directTitle")}
                        </div>

                        {/* Email */}
                        <a href={siteConfig.profile.links.email} className="group block">
                            <Card className="p-4 bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 hover:border-nebula-accent/30 hover:bg-foreground/5 transition-all duration-300">
                                <div className="flex items-center gap-3.5">
                                    <div className="inline-flex p-2.5 rounded-xl bg-foreground/5 border border-foreground/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[11px] uppercase tracking-widest text-muted font-mono">Email</div>
                                        <div className="text-sm text-foreground font-medium truncate group-hover:text-nebula-accent transition-colors">
                                            rchrd.pdrz.mrtnz@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </a>

                        {/* LinkedIn */}
                        <a href={siteConfig.profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="group block">
                            <Card className="p-4 bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 hover:border-nebula-accent/30 hover:bg-foreground/5 transition-all duration-300">
                                <div className="flex items-center gap-3.5">
                                    <div className="inline-flex p-2.5 rounded-xl bg-foreground/5 border border-foreground/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                            <rect width="4" height="12" x="2" y="9"/>
                                            <circle cx="4" cy="4" r="2"/>
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[11px] uppercase tracking-widest text-muted font-mono">LinkedIn</div>
                                        <div className="text-sm text-foreground font-medium truncate group-hover:text-nebula-accent transition-colors">
                                            in/rchrd-pdrz1993
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </a>

                        {/* Telegram */}
                        <a href={siteConfig.profile.links.telegram} target="_blank" rel="noopener noreferrer" className="group block">
                            <Card className="p-4 bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 hover:border-nebula-accent/30 hover:bg-foreground/5 transition-all duration-300">
                                <div className="flex items-center gap-3.5">
                                    <div className="inline-flex p-2.5 rounded-xl bg-foreground/5 border border-foreground/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300">
                                        <Send className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[11px] uppercase tracking-widest text-muted font-mono">Telegram</div>
                                        <div className="text-sm text-foreground font-medium truncate group-hover:text-nebula-accent transition-colors">
                                            {locale === "en" ? "Send a message" : "Enviar mensaje"}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </a>

                        {/* Response-time reassurance */}
                        <div className="flex items-center gap-2.5 px-1 pt-3 text-sm text-muted">
                            <Clock className="w-4 h-4 text-nebula-accent shrink-0" />
                            <span>{t("responseNote")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
