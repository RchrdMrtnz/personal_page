import { siteConfig } from "../../content/site";
import type { Locale } from "./seo";

type Localized<T> = { en: T; es: T };

/** Pick the locale's value from a `{ en, es }` object; plain values pass through. */
export function loc<T>(value: T | Localized<T>, locale: string): T {
    if (value && typeof value === "object" && "en" in value && "es" in value) {
        return locale === "es" ? value.es : value.en;
    }
    return value as T;
}

// Fixed month names (same abbreviations as the CV) instead of Intl, whose
// Spanish output varies between ICU versions ("sep" vs "sept").
const MONTHS: Record<Locale, string[]> = {
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
};

/** "2025-08" + null → "Aug 2025 – Present" / "Ago 2025 – Actualidad". */
export function formatPeriod(start: string, end: string | null, locale: string): string {
    const lang: Locale = locale === "es" ? "es" : "en";
    const fmt = (ym: string) => {
        const [year, month] = ym.split("-");
        return `${MONTHS[lang][Number(month) - 1]} ${year}`;
    };
    return `${fmt(start)} – ${end ? fmt(end) : lang === "es" ? "Actualidad" : "Present"}`;
}

/** "2026-10-28" → "Oct 28, 2026" / "28 Oct 2026". */
export function formatDate(ymd: string, locale: string): string {
    const [year, month, day] = ymd.split("-");
    if (!day) return ymd;
    const name = MONTHS[locale === "es" ? "es" : "en"][Number(month) - 1];
    return locale === "es" ? `${Number(day)} ${name} ${year}` : `${name} ${Number(day)}, ${year}`;
}

export function getService(slug: string) {
    return siteConfig.services.find((s) => s.slug === slug);
}

export function getCaseStudy(slug: string) {
    return siteConfig.caseStudies.find((c) => c.id === slug);
}
