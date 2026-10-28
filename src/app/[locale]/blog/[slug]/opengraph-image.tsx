import { asLocale } from "@/lib/seo";
import { getPost, getPosts } from "@/lib/blog";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Blog — Richard Pedraza";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams({ params }: { params: { locale: string } }) {
    return getPosts(asLocale(params.locale)).map((p) => ({ slug: p.slug }));
}

export default async function Image({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const post = getPost(asLocale(locale), slug);

    return renderOgImage({
        eyebrow: "Blog · Richard Pedraza",
        title: post?.title ?? "Blog",
        chips: post?.tags,
    });
}
