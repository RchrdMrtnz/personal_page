import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Target } from "lucide-react";
import { siteConfig } from "../../../../../content/site";
import { Link } from "@/i18n/routing";
import { Card } from "@/components/ui/Card";
import { buttonStyles } from "@/components/ui/Button";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, asLocale, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { getCaseStudy, getService, loc } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
    return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
    const { locale, slug } = await params;
    const service = getService(slug);
    if (!service) return {};
    const lang = asLocale(locale);

    return buildMetadata({
        locale: lang,
        path: `/services/${slug}`,
        title: `${loc(service.seoTitle, lang)} | Richard Pedraza`,
        description: loc(service.desc, lang),
    });
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    setRequestLocale(locale);
    const lang = asLocale(locale);
    const service = getService(slug);
    if (!service) notFound();

    const t = await getTranslations("Services");
    const tNav = await getTranslations("Navigation");
    const caseStudies = service.caseStudies.map(getCaseStudy).filter((c) => c !== undefined);
    const others = siteConfig.services.filter((s) => s.slug !== slug);
    const title = loc(service.seoTitle, lang);

    return (
        <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 min-h-screen relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
                <div>
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 text-sm text-muted">
                        <Link href="/services" className="inline-flex items-center gap-1.5 py-2 hover:text-nebula-accent transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            {t("allServices")}
                        </Link>
                    </nav>

                    {/* Header */}
                    <header className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-foreground/5 border border-foreground/10 text-nebula-accent">
                                <service.icon size={20} />
                            </span>
                            <span className="font-mono text-xs uppercase tracking-widest text-nebula-accent">{t("eyebrow")}</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-bold text-foreground font-display leading-tight mb-5">{title}</h1>
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">{loc(service.intro, lang)}</p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {service.stack.map((tech) => (
                                <span key={tech} className="px-3 py-1 text-xs font-mono text-muted-foreground bg-foreground/5 border border-foreground/10 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <Link href="/contact" className={buttonStyles({ size: "lg", className: "w-full sm:w-auto group" })}>
                            {t("ctaButton")}
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </header>
                </div>

                {/* Includes + use cases */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <Card className="bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-5">{t("includes")}</h2>
                        <ul className="space-y-3">
                            {service.includes.map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                                    <span>{loc(item, lang)}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                    <Card className="bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-5">{t("useCases")}</h2>
                        <ul className="space-y-3">
                            {service.useCases.map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    <Target size={18} className="text-nebula-accent mt-0.5 shrink-0" />
                                    <span>{loc(item, lang)}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </section>

                {/* Related case studies */}
                {caseStudies.length > 0 && (
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-6 sm:mb-8">{t("caseStudies")}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {caseStudies.map((project) => (
                                <Link
                                    key={project.id}
                                    href={`/work/${project.id}`}
                                    className="group flex flex-col p-5 rounded-2xl border border-foreground/10 bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl hover:border-nebula-accent/30 transition-colors"
                                >
                                    <span className="p-2 w-fit rounded-lg bg-foreground/5 text-nebula-accent mb-4">
                                        <project.icon size={18} />
                                    </span>
                                    <h3 className="font-display font-bold text-foreground group-hover:text-nebula-accent transition-colors mb-2">
                                        {loc(project.title, lang)}
                                    </h3>
                                    <p className="text-sm text-muted leading-relaxed mb-4">{loc(project.description, lang)}</p>
                                    {project.metric && (
                                        <span className="mt-auto inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            {loc(project.metric, lang)}
                                        </span>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                <ProcessSteps locale={lang} title={t("process")} />

                {/* FAQ — native <details>: works without JS and the answers are in the HTML */}
                <section>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-6 sm:mb-8">{t("faq")}</h2>
                    <div className="space-y-3">
                        {service.faqs.map((faq, i) => (
                            <details
                                key={i}
                                className="group rounded-2xl border border-foreground/10 bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl open:border-nebula-accent/30"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                                    {loc(faq.q, lang)}
                                    <ChevronDown className="w-5 h-5 shrink-0 text-muted transition-transform group-open:rotate-180" />
                                </summary>
                                <p className="px-5 pb-5 -mt-1 text-muted-foreground leading-relaxed">{loc(faq.a, lang)}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <Card className="p-6 sm:p-10 bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-nebula-accent/30 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-3">{t("ctaTitle")}</h2>
                    <p className="text-muted max-w-xl mx-auto mb-6">{t("ctaText")}</p>
                    <Link href="/contact" className={buttonStyles({ size: "lg", className: "w-full sm:w-auto group" })}>
                        {t("ctaButton")}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Card>

                {/* Other services (internal linking) */}
                <nav aria-label={t("allServices")} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {others.map((other) => (
                        <Link
                            key={other.slug}
                            href={`/services/${other.slug}`}
                            className="group flex items-center gap-3 p-4 rounded-2xl border border-foreground/10 hover:border-nebula-accent/30 transition-colors"
                        >
                            <span className="p-2 rounded-lg bg-foreground/5 text-nebula-accent shrink-0">
                                <other.icon size={16} />
                            </span>
                            <span className="text-sm font-medium text-foreground group-hover:text-nebula-accent transition-colors">
                                {loc(other.seoTitle, lang)}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>

            <JsonLd
                data={breadcrumbJsonLd(lang, [
                    { name: tNav("services"), path: "/services" },
                    { name: title, path: `/services/${slug}` },
                ])}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: title,
                    description: loc(service.intro, lang),
                    url: `${SITE_URL}/${lang}/services/${slug}`,
                    serviceType: loc(service.title, lang),
                    areaServed: "Worldwide",
                    provider: { "@id": `${SITE_URL}/#person` },
                }}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: service.faqs.map((faq) => ({
                        "@type": "Question",
                        name: loc(faq.q, lang),
                        acceptedAnswer: { "@type": "Answer", text: loc(faq.a, lang) },
                    })),
                }}
            />
        </div>
    );
}
