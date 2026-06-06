"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { siteConfig } from "../../../content/site";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectsCarousel({ locale }: { locale: string }) {
    const t = useTranslations("Sections");
    const projects = siteConfig.caseStudies;
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const AUTOPLAY_MS = 6000;

    const updateActive = useCallback(() => {
        const el = scrollerRef.current;
        if (!el) return;
        setActive(Math.round(el.scrollLeft / el.clientWidth));
    }, []);

    const scrollTo = useCallback((i: number) => {
        const el = scrollerRef.current;
        if (!el) return;
        const clamped = Math.max(0, Math.min(projects.length - 1, i));
        el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    }, [projects.length]);

    // Keyboard navigation when the carousel region is focused.
    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") { e.preventDefault(); scrollTo(active + 1); }
        if (e.key === "ArrowLeft") { e.preventDefault(); scrollTo(active - 1); }
    };

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        el.addEventListener("scroll", updateActive, { passive: true });
        return () => el.removeEventListener("scroll", updateActive);
    }, [updateActive]);

    // Auto-advance: paused on hover/focus, respects reduced-motion, loops, and the
    // timer resets whenever `active` changes (so manual nav doesn't trigger an instant jump).
    useEffect(() => {
        if (paused) return;
        if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const id = setTimeout(() => {
            scrollTo(active >= projects.length - 1 ? 0 : active + 1);
        }, AUTOPLAY_MS);
        return () => clearTimeout(id);
    }, [active, paused, scrollTo, projects.length]);

    return (
        <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
            }}
        >
            {/* Controls: counter + arrows */}
            <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-muted tabular-nums">
                    <span className="text-nebula-accent font-semibold">{String(active + 1).padStart(2, "0")}</span>
                    <span className="mx-1 text-muted/40">/</span>
                    {String(projects.length).padStart(2, "0")}
                </span>
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => scrollTo(active - 1)}
                        disabled={active === 0}
                        aria-label={locale === "en" ? "Previous project" : "Proyecto anterior"}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-all hover:border-nebula-accent/40 hover:text-nebula-accent disabled:opacity-30 disabled:pointer-events-none"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollTo(active + 1)}
                        disabled={active === projects.length - 1}
                        aria-label={locale === "en" ? "Next project" : "Siguiente proyecto"}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-all hover:border-nebula-accent/40 hover:text-nebula-accent disabled:opacity-30 disabled:pointer-events-none"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* Scroller */}
            <div
                ref={scrollerRef}
                onKeyDown={onKeyDown}
                role="region"
                aria-roledescription="carousel"
                aria-label={locale === "en" ? "Projects" : "Proyectos"}
                tabIndex={0}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-nebula-accent/30"
            >
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${index + 1} / ${projects.length}`}
                        className="snap-center shrink-0 w-full"
                    >
                        <Card className="h-full bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 p-0 overflow-hidden group">
                            <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                                {/* Left: Identity panel */}
                                <div className="lg:col-span-4 bg-linear-to-br from-nebula-primary/10 to-foreground/5 p-8 border-b lg:border-b-0 lg:border-r border-foreground/10 relative overflow-hidden flex flex-col">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-nebula-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between gap-2 mb-5">
                                            <span className="font-mono text-xs tracking-wider text-nebula-accent">
                                                PRJ_{String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-muted/70 px-2 py-1 rounded-full bg-foreground/5 border border-foreground/10">
                                                {locale === "en" ? project.category.en : project.category.es}
                                            </span>
                                        </div>

                                        <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-foreground/5 border border-foreground/10 text-nebula-accent mb-5 shadow-lg">
                                            <project.icon size={26} />
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-display">
                                            {locale === "en" ? project.title.en : project.title.es}
                                        </h3>

                                        {project.client && (
                                            <div className="text-xs font-mono text-muted tracking-wide mb-4">
                                                {locale === "en" ? project.client.en : project.client.es}
                                            </div>
                                        )}

                                        {project.metric && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                {locale === "en" ? project.metric.en : project.metric.es}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Right: Content */}
                                <div className="lg:col-span-8 p-8 md:p-10 flex flex-col gap-7">
                                    <div>
                                        <div className="text-xs uppercase tracking-widest text-muted font-mono mb-2">
                                            {t("overview")}
                                        </div>
                                        <p className="text-muted-foreground text-base leading-relaxed">
                                            {locale === "en" ? project.description.en : project.description.es}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="text-xs uppercase tracking-widest text-muted font-mono mb-3">
                                            {t("impact")}
                                        </div>
                                        <ul className="space-y-2.5">
                                            {project.impact.map((item, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                                                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                                                    <span>{locale === "en" ? item.en : item.es}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-1 mt-auto">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 text-xs font-mono text-muted-foreground bg-foreground/5 border border-foreground/10 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => scrollTo(i)}
                        aria-label={`${locale === "en" ? "Go to project" : "Ir al proyecto"} ${i + 1}`}
                        aria-current={active === i}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            active === i
                                ? "w-8 bg-nebula-accent"
                                : "w-2 bg-foreground/20 hover:bg-foreground/40"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
