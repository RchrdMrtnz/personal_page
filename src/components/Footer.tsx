"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "../../content/site";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-nebula-ink border-t border-nebula-surface/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold text-white tracking-tight font-display">
                            Richard Pedraza<span className="text-nebula-accent">.</span>
                        </span>
                        <p className="text-gray-400 text-sm mt-2">
                            {t("rights")} © {new Date().getFullYear()}
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href={siteConfig.profile.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-nebula-accent transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={siteConfig.profile.links.medium}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-nebula-accent transition-colors"
                        >
                            <span className="sr-only">Medium</span>
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="20"
                                width="20"
                                className="w-5 h-5"
                            >
                                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                            </svg>
                        </a>
                        <a
                            href={siteConfig.profile.links.email}
                            className="text-gray-400 hover:text-nebula-accent transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
