import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { siteConfig } from "../../../../content/site";
import { Link } from "@/i18n/routing";
import { Card } from "@/components/ui/Card";
import { buttonStyles } from "@/components/ui/Button";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, asLocale, breadcrumbJsonLd, buildMetadata, pageMeta } from "@/lib/seo";
import { loc } from "@/lib/content";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata({ locale: asLocale(locale), ...pageMeta.services[asLocale(locale)] });
}

export default async function ServicesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const lang = asLocale(locale);
    const t = await getTranslations("Services");
    const tSections = await getTranslations("Sections");
    const tNav = await getTranslations("Navigation");

    return (
        <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 min-h-screen relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14 sm:space-y-20">
                {/* Header */}
                <header className="max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display leading-tight mb-5">
                        {tSections("servicesTitle")}
                    </h1>
                    <p className="text-lg sm:text-xl text-muted leading-relaxed">{loc(siteConfig.consulting.pitch, lang)}</p>
                    <div className="w-20 h-1 bg-linear-to-r from-nebula-accent to-purple-500 rounded-full mt-8" />
                </header>

                {/* Service cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {siteConfig.services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-nebula-accent/40"
                        >
                            <Card hoverEffect className="h-full flex flex-col bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 p-6 sm:p-8">
                                <div className="p-3 w-fit bg-foreground/5 rounded-lg text-nebula-accent ring-1 ring-foreground/10 mb-5">
                                    <service.icon size={24} />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-3 group-hover:text-nebula-accent transition-colors">
                                    {loc(service.seoTitle, lang)}
                                </h2>
                                <p className="text-muted leading-relaxed mb-5">{loc(service.desc, lang)}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.stack.slice(0, 5).map((tech) => (
                                        <span key={tech} className="px-2.5 py-1 text-xs font-mono text-muted-foreground bg-foreground/5 border border-foreground/10 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <span className="mt-auto inline-flex items-center text-sm font-medium text-nebula-accent">
                                    {t("learnMore")}
                                    <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Card>
                        </Link>
                    ))}
                </section>

                {/* Problems + AI consulting */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
                    <Card className="bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-5">{t("problems")}</h2>
                        <ul className="space-y-3">
                            {siteConfig.problems.items.map((item, i) => (
                                <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-nebula-accent/60 shrink-0" />
                                    <span>{loc(item, lang)}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-nebula-accent/30 p-6 sm:p-8">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nebula-accent/10 border border-nebula-accent/20 text-nebula-accent text-xs font-mono uppercase tracking-wider mb-4">
                            <Sparkles size={14} />
                            {t("consulting")}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-5">{loc(siteConfig.consulting.title, lang)}</h2>
                        <ul className="space-y-3 mb-6">
                            {siteConfig.consulting.services.map((item, i) => (
                                <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                                    <CheckCircle2 size={18} className="text-nebula-accent mt-0.5 shrink-0" />
                                    <span>{loc(item, lang)}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-foreground font-medium italic border-l-2 border-nebula-accent/50 pl-4">
                            {loc(siteConfig.consulting.outcome, lang)}
                        </p>
                    </Card>
                </section>

                <ProcessSteps locale={lang} title={t("process")} />

                {/* CTA */}
                <Card className="p-6 sm:p-10 bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-nebula-accent/30 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-3">{t("ctaTitle")}</h2>
                    <p className="text-muted max-w-xl mx-auto mb-6">{t("ctaText")}</p>
                    <Link href="/contact" className={buttonStyles({ size: "lg", className: "w-full sm:w-auto group" })}>
                        {t("ctaButton")}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Card>
            </div>

            <JsonLd data={breadcrumbJsonLd(lang, [{ name: tNav("services"), path: "/services" }])} />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    itemListElement: siteConfig.services.map((service, i) => ({
                        "@type": "ListItem",
                        position: i + 1,
                        name: loc(service.seoTitle, lang),
                        url: `${SITE_URL}/${lang}/services/${service.slug}`,
                    })),
                }}
            />
        </div>
    );
}
