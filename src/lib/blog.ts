import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import type { Locale } from "./seo";

/**
 * Blog posts live in `content/blog/<locale>/<slug>.md` with a small frontmatter:
 *
 *   ---
 *   title: ...
 *   description: ...          (≤ 160 chars, used for SEO)
 *   date: 2026-10-28
 *   tags: Pipecat, LLM, Voz
 *   draft: true               (optional — drafts only show in `next dev`)
 *   ---
 *
 * The same slug in both locale folders marks the two files as translations (hreflang).
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const SHOW_DRAFTS = process.env.NODE_ENV === "development";

export interface Post {
    slug: string;
    locale: Locale;
    title: string;
    description: string;
    date: string;
    tags: string[];
    draft: boolean;
    readingMinutes: number;
    body: string;
}

function parseFrontmatter(raw: string) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    const data: Record<string, string> = {};
    if (!match) return { data, body: raw };
    for (const line of match[1].split(/\r?\n/)) {
        const i = line.indexOf(":");
        if (i === -1) continue;
        data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    }
    return { data, body: raw.slice(match[0].length) };
}

function readPost(locale: Locale, file: string): Post {
    const { data, body } = parseFrontmatter(fs.readFileSync(path.join(BLOG_DIR, locale, file), "utf8"));
    return {
        slug: file.replace(/\.md$/, ""),
        locale,
        title: data.title ?? file,
        description: data.description ?? "",
        date: data.date ?? "",
        tags: data.tags ? data.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
        draft: data.draft === "true",
        readingMinutes: Math.max(1, Math.round(body.split(/\s+/).length / 220)),
        body,
    };
}

/** Published posts for a locale, newest first (drafts included only in dev). */
export function getPosts(locale: Locale): Post[] {
    const dir = path.join(BLOG_DIR, locale);
    if (!fs.existsSync(dir)) return [];
    return fs
        .readdirSync(dir)
        .filter((f) => f.endsWith(".md"))
        .map((f) => readPost(locale, f))
        .filter((p) => SHOW_DRAFTS || !p.draft)
        .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(locale: Locale, slug: string): Post | undefined {
    return getPosts(locale).find((p) => p.slug === slug);
}

/** Locales in which a post is available (for hreflang). */
export function getPostLocales(slug: string): Locale[] {
    return (["en", "es"] as const).filter((l) => getPost(l, slug));
}

export function renderMarkdown(body: string): string {
    return marked.parse(body, { async: false });
}
