import type { Metadata } from "next";

// Canonical host (the apex redirects here). Hardcoded on purpose: it only feeds
// canonical/hreflang/sitemap/robots, which must always name the production
// domain. Reading it from an env var let a localhost value leak into prod.
export const SITE_URL = "https://www.rchrdpdrz.com";

export type Locale = "en" | "es";

const SITE_NAME = "Richard Pedraza";

/**
 * Build localized, SEO-complete metadata for a page.
 * The OG/Twitter image is supplied automatically by the
 * `opengraph-image.tsx` file convention under `[locale]`.
 */
export function buildMetadata({
    locale,
    path = "",
    title,
    description,
    ogType = "website",
    locales = ["en", "es"],
}: {
    locale: Locale;
    path?: string;
    title: string;
    description: string;
    ogType?: "website" | "article";
    /** Locales this page exists in (a blog post may only be written in one). */
    locales?: Locale[];
}): Metadata {
    const url = `${SITE_URL}/${locale}${path}`;

    return {
        metadataBase: new URL(SITE_URL),
        title,
        description,
        alternates: {
            canonical: url,
            languages: Object.fromEntries([
                ...locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
                ["x-default", `${SITE_URL}/${locales.includes("en") ? "en" : locales[0]}${path}`],
            ]),
        },
        openGraph: {
            type: ogType,
            url,
            siteName: SITE_NAME,
            title,
            description,
            locale: locale === "es" ? "es_ES" : "en_US",
            alternateLocale: locale === "es" ? "en_US" : "es_ES",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

/** Per-page localized title + description + route path. */
export const pageMeta: Record<
    "home" | "work" | "about" | "contact" | "services" | "blog",
    Record<Locale, { title: string; description: string; path: string }>
> = {
    home: {
        en: {
            title: "Richard Pedraza | Senior Backend Engineer · Python & AI",
            description:
                "Senior Backend Engineer with 8+ years in Python, Django, FastAPI and AWS. I build production AI: real-time voice agents, LLM integrations and automation.",
            path: "",
        },
        es: {
            title: "Richard Pedraza | Senior Backend Engineer · Python e IA",
            description:
                "Senior Backend Engineer con 8+ años en Python, Django, FastAPI y AWS. Construyo IA en producción: agentes de voz en tiempo real, integraciones LLM y automatización.",
            path: "",
        },
    },
    work: {
        en: {
            title: "Backend, AI & Automation Case Studies | Richard Pedraza",
            description:
                "Case studies in backend architecture and production AI: an insurtech aggregation platform, a real-time AI voice assistant, automated property valuation and more.",
            path: "/work",
        },
        es: {
            title: "Proyectos de Backend, IA y Automatización | Richard Pedraza",
            description:
                "Casos de estudio de arquitectura backend e IA en producción: plataforma insurtech, asistente de voz con IA en tiempo real, valoración automatizada de propiedades y más.",
            path: "/work",
        },
    },
    about: {
        en: {
            title: "About Richard Pedraza | Senior Backend Engineer",
            description:
                "Senior Backend Engineer with 8+ years building with Python, Django, FastAPI and Node.js on AWS. Led AI voice, insurtech and automation projects in production.",
            path: "/about",
        },
        es: {
            title: "Sobre Richard Pedraza | Senior Backend Engineer",
            description:
                "Senior Backend Engineer con 8+ años construyendo con Python, Django, FastAPI y Node.js sobre AWS. Lideré proyectos de voz con IA, insurtech y automatización.",
            path: "/about",
        },
    },
    contact: {
        en: {
            title: "Contact | Richard Pedraza",
            description:
                "Get in touch to automate and scale your operations. Send a message directly or reach out via email, LinkedIn or Telegram.",
            path: "/contact",
        },
        es: {
            title: "Contacto | Richard Pedraza",
            description:
                "Hablemos de automatizar y escalar tus operaciones. Envía un mensaje directo o contáctame por email, LinkedIn o Telegram.",
            path: "/contact",
        },
    },
    services: {
        en: {
            title: "Backend, AI & Automation Services | Richard Pedraza",
            description:
                "AI voice agents, workflow automation with n8n, data pipelines and backend development with Python, Django and AWS. Practical, production-ready systems.",
            path: "/services",
        },
        es: {
            title: "Servicios de Backend, IA y Automatización | Richard Pedraza",
            description:
                "Agentes de voz con IA, automatización con n8n, pipelines de datos y desarrollo backend con Python, Django y AWS. Sistemas prácticos listos para producción.",
            path: "/services",
        },
    },
    blog: {
        en: {
            title: "Blog: Backend, AI & Automation | Richard Pedraza",
            description:
                "Articles on backend architecture, production AI and automation, drawn from real projects.",
            path: "/blog",
        },
        es: {
            title: "Blog: Backend, IA y Automatización | Richard Pedraza",
            description:
                "Artículos sobre arquitectura backend, IA en producción y automatización, basados en proyectos reales.",
            path: "/blog",
        },
    },
};

/** BreadcrumbList structured data; `path` is relative to the locale root. */
export function breadcrumbJsonLd(locale: Locale, items: { name: string; path: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ name: locale === "es" ? "Inicio" : "Home", path: "" }, ...items].map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: `${SITE_URL}/${locale}${item.path}`,
        })),
    };
}

/** Normalize an arbitrary locale string to a supported Locale. */
export function asLocale(locale: string): Locale {
    return locale === "es" ? "es" : "en";
}
