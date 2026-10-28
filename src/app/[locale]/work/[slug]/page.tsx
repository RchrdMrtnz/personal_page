import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../../../../../content/site";
import { Link } from "@/i18n/routing";
import { Card } from "@/components/ui/Card";
import { buttonStyles } from "@/components/ui/Button";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, asLocale, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { getCaseStudy, getService, loc } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
    return siteConfig.caseStudies.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
    const { locale, slug } = await params;
    const project = getCaseStudy(slug);
    if (!project) return {};
    const lang = asLocale(locale);
    const t = await getTranslations({ locale: lang, namespace: "CaseStudy" });

    return buildMetadata({
        locale: lang,
        path: `/work/${slug}`,
        title: `${loc(project.title, lang)} — ${t("label")} | Richard Pedraza`,
        description: loc(project.description, lang),
        ogType: "article",
    });
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    setRequestLocale(locale);
    const lang = asLocale(locale);
    const project = getCaseStudy(slug);
    if (!project) notFound();

    const t = await getTranslations("CaseStudy");
    const tNav = await getTranslations("Navigation");

    const index = siteConfig.caseStudies.findIndex((c) => c.id === slug);
    const next = siteConfig.caseStudies[(index + 1) % siteConfig.caseStudies.length];
    const services = project.services.map(getService).filter((s) => s !== undefined);
    const title = loc(project.title, lang);

    return (
        <article className="pt-28 sm:pt-32 pb-16 sm:pb-24 min-h-screen relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 text-sm text-muted">
                    <Link href="/work" className="inline-flex items-center gap-1.5 py-2 hover:text-nebula-accent transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        {t("allCases")}
                    </Link>
                </nav>

                {/* Header */}
                <header className="mb-10 sm:mb-14">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5">
                        <span className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-foreground/5 border border-foreground/10 text-nebula-accent">
                            <project.icon size={20} />
                        </span>
                        <span className="font-mono text-xs uppercase tracking-widest text-nebula-accent">
                            {t("label")} · {loc(project.category, lang)}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-bold text-foreground font-display leading-tight mb-4">
                        {title}
                    </h1>

                    {project.client && (
                        <p className="text-sm font-mono text-muted mb-4">{loc(project.client, lang)}</p>
                    )}

                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                        {loc(project.description, lang)}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mt-6">
                        {project.metric && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                {loc(project.metric, lang)}
                            </span>
                        )}
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 text-xs font-mono text-muted-foreground bg-foreground/5 border border-foreground/10 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="space-y-6 sm:space-y-8">
                    {/* Challenge */}
                    <Card className="bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-4">{t("challenge")}</h2>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{loc(project.challenge, lang)}</p>
                    </Card>

                    {/* Solution */}
                    <Card className="bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-5">{t("solution")}</h2>
                        <ol className="space-y-4">
                            {project.solution.map((step, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="font-mono text-xs text-nebula-accent pt-1 shrink-0">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">{loc(step, lang)}</span>
                                </li>
                            ))}
                        </ol>
                    </Card>

                    {/* Results */}
                    <Card className="bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-5">{t("results")}</h2>
                        <ul className="space-y-3">
                            {project.impact.map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                                    <span>{loc(item, lang)}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    {/* Related services */}
                    {services.length > 0 && (
                        <section>
                            <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-3">{t("relatedServices")}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {services.map((service) => (
                                    <Link
                                        key={service.slug}
                                        href={`/services/${service.slug}`}
                                        className="group flex items-center gap-3 p-4 rounded-2xl border border-foreground/10 bg-surface/60 dark:bg-nebula-ink/30 hover:border-nebula-accent/30 transition-colors"
                                    >
                                        <span className="p-2 rounded-lg bg-foreground/5 text-nebula-accent shrink-0">
                                            <service.icon size={18} />
                                        </span>
                                        <span className="text-sm font-medium text-foreground group-hover:text-nebula-accent transition-colors">
                                            {loc(service.seoTitle, lang)}
                                        </span>
                                        <ArrowRight className="ml-auto w-4 h-4 text-muted shrink-0 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* CTA */}
                    <Card className="p-6 sm:p-10 bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-nebula-accent/30 text-center">
                        <h2 className="text-2xl font-bold text-foreground font-display mb-2">{t("ctaTitle")}</h2>
                        <p className="text-muted mb-6">{t("ctaText")}</p>
                        <Link href="/contact" className={buttonStyles({ size: "lg", className: "w-full sm:w-auto group" })}>
                            {t("ctaButton")}
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Card>

                    {/* Next case */}
                    {next && next.id !== project.id && (
                        <Link
                            href={`/work/${next.id}`}
                            className="group flex items-center justify-between gap-4 p-5 rounded-2xl border border-foreground/10 hover:border-nebula-accent/30 transition-colors"
                        >
                            <span>
                                <span className="block text-xs font-mono uppercase tracking-widest text-muted mb-1">{t("next")}</span>
                                <span className="font-display font-bold text-foreground group-hover:text-nebula-accent transition-colors">
                                    {loc(next.title, lang)}
                                </span>
                            </span>
                            <ArrowRight className="w-5 h-5 text-nebula-accent shrink-0 transition-transform group-hover:translate-x-1" />
                        </Link>
                    )}
                </div>
            </div>

            <JsonLd
                data={breadcrumbJsonLd(lang, [
                    { name: tNav("work"), path: "/work" },
                    { name: title, path: `/work/${slug}` },
                ])}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "CreativeWork",
                    name: title,
                    headline: title,
                    description: loc(project.description, lang),
                    url: `${SITE_URL}/${lang}/work/${slug}`,
                    inLanguage: lang,
                    keywords: project.tags.join(", "),
                    author: { "@id": `${SITE_URL}/#person` },
                }}
            />
        </article>
    );
}
