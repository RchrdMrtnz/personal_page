"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

export default function Navbar() {
    const t = useTranslations("Navigation");
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: t("home") },
        { href: "/work", label: t("work") },
        { href: "/about", label: t("about") },
        { href: "/contact", label: t("contact") },
    ];

    return (
        <nav
            className={clsx(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-foreground/10" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="shrink-0">
                        <Link href="/" className="text-xl font-bold text-foreground tracking-tight font-display">
                            RP<span className="text-nebula-accent">.</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-muted hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-foreground/5"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <LanguageSwitcher />
                            <ThemeToggle />
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            className="inline-flex items-center justify-center p-2 rounded-md text-muted hover:text-foreground hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula-accent"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div id="mobile-menu" className="md:hidden bg-background border-b border-foreground/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-muted hover:text-foreground block px-3 py-2 rounded-md text-base font-medium hover:bg-foreground/5"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="px-3 py-2 flex items-center gap-3">
                            <LanguageSwitcher />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
