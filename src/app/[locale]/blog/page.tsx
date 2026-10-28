import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Card } from "@/components/ui/Card";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
import { JsonLd } from "@/components/JsonLd";
import { asLocale, breadcrumbJsonLd, buildMetadata, pageMeta } from "@/lib/seo";
import { getPosts } from "@/lib/blog";
import { formatDate } from "@/lib/content";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata({ locale: asLocale(locale), ...pageMeta.blog[asLocale(locale)] });
}

export default async function BlogPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const lang = asLocale(locale);
    const posts = getPosts(lang);
    // An empty blog is a thin page: 404 until the first post is published.
    if (posts.length === 0) notFound();

    const t = await getTranslations("Blog");

    return (
        <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 min-h-screen relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <header className="mb-10 sm:mb-14">
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground font-display mb-4">{t("title")}</h1>
                    <p className="text-lg text-muted leading-relaxed">{t("subtitle")}</p>
                    <div className="w-20 h-1 bg-linear-to-r from-nebula-accent to-purple-500 rounded-full mt-8" />
                </header>

                <div className="space-y-5">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-nebula-accent/40">
                            <Card hoverEffect className="bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10 p-6 sm:p-8">
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-muted mb-3">
                                    <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
                                    <span>·</span>
                                    <span>{post.readingMinutes} {t("minRead")}</span>
                                    {post.draft && (
                                        <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400">
                                            {t("draft")}
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-2 group-hover:text-nebula-accent transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-muted leading-relaxed mb-4">{post.description}</p>
                                <span className="inline-flex items-center text-sm font-medium text-nebula-accent">
                                    {t("readMore")}
                                    <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            <JsonLd data={breadcrumbJsonLd(lang, [{ name: t("title"), path: "/blog" }])} />
        </div>
    );
}
