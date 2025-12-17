import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "../../../../content/site";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Mail, Linkedin, Send, MessageSquare } from "lucide-react";

export default async function ContactPage({
    params
}: {
    params: { locale: string };
}) {
    const { locale } = await params;
    const t = await getTranslations("Contact");

    return (
        <div className="pt-20 sm:pt-28 pb-16 sm:pb-24 min-h-screen flex items-center relative overflow-hidden">
            {/* Simplified static gradient background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-nebula-accent/10 rounded-full blur-[150px] opacity-40" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-nebula-primary/20 rounded-full blur-[120px] opacity-30" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    {/* Simplified badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nebula-accent/10 border border-nebula-accent/20 mb-6 sm:mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nebula-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-nebula-accent"></span>
                        </span>
                        <span className="text-sm font-medium text-nebula-accent">Available for opportunities</span>
                    </div>

                    {/* Cleaner heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-display leading-tight">
                        {t("title")}
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>

                {/* Improved contact cards with better mobile layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                    {/* Email Card */}
                    <a
                        href={siteConfig.profile.links.email}
                        className="group relative block"
                    >
                        <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-nebula-surface/30 border border-nebula-surface/40 backdrop-blur-sm transition-all duration-300 hover:bg-nebula-surface/40 hover:border-nebula-accent/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-nebula-accent/10">
                            <div className="flex flex-col h-full">
                                <div className="mb-4 sm:mb-6">
                                    <div className="inline-flex p-3 sm:p-4 rounded-xl bg-nebula-accent/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300">
                                        <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-2 font-medium">Email</div>
                                    <div className="text-sm sm:text-base text-white/90 font-medium break-all group-hover:text-white transition-colors">
                                        rchrd.pdrz.mrtnz@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* LinkedIn Card */}
                    <a
                        href={siteConfig.profile.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block"
                    >
                        <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-nebula-surface/30 border border-nebula-surface/40 backdrop-blur-sm transition-all duration-300 hover:bg-nebula-surface/40 hover:border-nebula-accent/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-nebula-accent/10">
                            <div className="flex flex-col h-full">
                                <div className="mb-4 sm:mb-6">
                                    <div className="inline-flex p-3 sm:p-4 rounded-xl bg-nebula-accent/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300">
                                        <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-2 font-medium">LinkedIn</div>
                                    <div className="text-sm sm:text-base text-white/90 font-medium group-hover:text-white transition-colors">
                                        in/rchrd-pdrz1993
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Telegram Card */}
                    <a
                        href={siteConfig.profile.links.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block"
                    >
                        <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-nebula-surface/30 border border-nebula-surface/40 backdrop-blur-sm transition-all duration-300 hover:bg-nebula-surface/40 hover:border-nebula-accent/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-nebula-accent/10">
                            <div className="flex flex-col h-full">
                                <div className="mb-4 sm:mb-6">
                                    <div className="inline-flex p-3 sm:p-4 rounded-xl bg-nebula-accent/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300">
                                        <Send className="w-6 h-6 sm:w-7 sm:h-7" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-2 font-medium">Telegram</div>
                                    <div className="text-sm sm:text-base text-white/90 font-medium group-hover:text-white transition-colors">
                                        Send a message
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
