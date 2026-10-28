import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";
import { NebulaBackground } from "@/components/ui/NebulaBackground";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, asLocale, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { getPost, getPostLocales, getPosts, renderMarkdown } from "@/lib/blog";
import { formatDate } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams({ params }: { params: { locale: string } }) {
    return getPosts(asLocale(params.locale)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
    const { locale, slug } = await params;
    const lang = asLocale(locale);
    const post = getPost(lang, slug);
    if (!post) return {};

    return {
        ...buildMetadata({
            locale: lang,
            path: `/blog/${slug}`,
            title: `${post.title} | Richard Pedraza`,
            description: post.description,
            ogType: "article",
            locales: getPostLocales(slug),
        }),
        // Drafts are only rendered in dev, but never let one get indexed.
        ...(post.draft && { robots: { index: false, follow: false } }),
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    setRequestLocale(locale);
    const lang = asLocale(locale);
    const post = getPost(lang, slug);
    if (!post) notFound();

    const t = await getTranslations("Blog");

    return (
        <article className="pt-28 sm:pt-32 pb-16 sm:pb-24 min-h-screen relative overflow-hidden">
            <NebulaBackground />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 text-sm text-muted">
                    <Link href="/blog" className="inline-flex items-center gap-1.5 py-2 hover:text-nebula-accent transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        {t("back")}
                    </Link>
                </nav>

                <header className="mb-10">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-muted mb-4">
                        <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
                        <span>·</span>
                        <span>{post.readingMinutes} {t("minRead")}</span>
                        {post.draft && (
                            <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400">
                                {t("draft")}
                            </span>
                        )}
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-bold text-foreground font-display leading-tight mb-5">{post.title}</h1>
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{post.description}</p>
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-6">
                            {post.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 text-xs font-mono text-muted-foreground bg-foreground/5 border border-foreground/10 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                {/* Author-written markdown (trusted content), rendered at build time */}
                <div className="prose-blog" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }} />
            </div>

            <JsonLd
                data={breadcrumbJsonLd(lang, [
                    { name: t("title"), path: "/blog" },
                    { name: post.title, path: `/blog/${slug}` },
                ])}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    headline: post.title,
                    description: post.description,
                    datePublished: post.date,
                    dateModified: post.date,
                    inLanguage: lang,
                    keywords: post.tags.join(", "),
                    url: `${SITE_URL}/${lang}/blog/${slug}`,
                    mainEntityOfPage: `${SITE_URL}/${lang}/blog/${slug}`,
                    author: { "@id": `${SITE_URL}/#person` },
                }}
            />
        </article>
    );
}
