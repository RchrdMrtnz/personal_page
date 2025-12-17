import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "../../../../content/site";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Mail, Linkedin, Send, MessageSquare } from "lucide-react";
import { NebulaBackground } from "@/components/ui/NebulaBackground";

export default async function ContactPage({
    params
}: {
    params: { locale: string };
}) {
    const { locale } = await params;
    const t = await getTranslations("Contact");

    return (
        <div className="pt-20 sm:pt-28 pb-16 sm:pb-24 min-h-screen flex items-center relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    {/* Consistent Availability Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nebula-accent/10 border border-nebula-accent/20 mb-6 sm:mb-8 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nebula-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-nebula-accent"></span>
                        </span>
                        <span className="text-sm font-medium text-nebula-accent">Available for opportunities</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-display leading-tight">
                        {t("title")}
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Email Card */}
                    <a
                        href={siteConfig.profile.links.email}
                        className="group relative block"
                    >
                        <Card className="h-full p-8 bg-nebula-ink/30 backdrop-blur-xl border-white/10 hover:border-nebula-accent/30 hover:bg-nebula-ink/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]">
                            <div className="flex flex-col h-full items-center text-center">
                                <div className="mb-6">
                                    <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300 shadow-lg">
                                        <Mail className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-xs uppercase tracking-widest text-gray-500 font-mono">Email</div>
                                    <div className="text-lg text-white font-medium group-hover:text-nebula-accent transition-colors">
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
                        <Card className="h-full p-8 bg-nebula-ink/30 backdrop-blur-xl border-white/10 hover:border-nebula-accent/30 hover:bg-nebula-ink/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]">
                            <div className="flex flex-col h-full items-center text-center">
                                <div className="mb-6">
                                    <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300 shadow-lg">
                                        <Linkedin className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-xs uppercase tracking-widest text-gray-500 font-mono">LinkedIn</div>
                                    <div className="text-lg text-white font-medium group-hover:text-nebula-accent transition-colors">
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
                        <Card className="h-full p-8 bg-nebula-ink/30 backdrop-blur-xl border-white/10 hover:border-nebula-accent/30 hover:bg-nebula-ink/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]">
                            <div className="flex flex-col h-full items-center text-center">
                                <div className="mb-6">
                                    <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 text-nebula-accent group-hover:bg-nebula-accent group-hover:text-white transition-all duration-300 shadow-lg">
                                        <Send className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-xs uppercase tracking-widest text-gray-500 font-mono">Telegram</div>
                                    <div className="text-lg text-white font-medium group-hover:text-nebula-accent transition-colors">
                                        Send a message
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </a>
                </div>
            </div>
        </div>
    );
}
