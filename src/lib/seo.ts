import type { Metadata } from "next";

export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

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
}: {
    locale: Locale;
    path?: string;
    title: string;
    description: string;
}): Metadata {
    const url = `${SITE_URL}/${locale}${path}`;

    return {
        metadataBase: new URL(SITE_URL),
        title,
        description,
        alternates: {
            canonical: url,
            languages: {
                en: `${SITE_URL}/en${path}`,
                es: `${SITE_URL}/es${path}`,
                "x-default": `${SITE_URL}/en${path}`,
            },
        },
        openGraph: {
            type: "website",
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
    "home" | "work" | "about" | "contact",
    Record<Locale, { title: string; description: string; path: string }>
> = {
    home: {
        en: {
            title: "Richard Pedraza | Full-Stack Developer & Automation Engineer",
            description:
                "Richard Pedraza builds AI-enabled systems and automation that scale and deliver ROI — LLM integrations, workflow automation, data pipelines and backend architecture.",
            path: "",
        },
        es: {
            title: "Richard Pedraza | Full-Stack Developer & Ingeniero de Automatización",
            description:
                "Richard Pedraza construye sistemas con IA y automatización que escalan y generan ROI — integraciones LLM, automatización de flujos, pipelines de datos y arquitectura backend.",
            path: "",
        },
    },
    work: {
        en: {
            title: "Work — Case Studies | Richard Pedraza",
            description:
                "Selected case studies in high-impact automation and AI system architecture: academic content generation, real-time voice AI, recruitment decision engines and automated video production.",
            path: "/work",
        },
        es: {
            title: "Proyectos — Casos de Estudio | Richard Pedraza",
            description:
                "Casos de estudio de automatización de alto impacto y arquitectura de sistemas con IA: generación de contenido académico, IA por voz en tiempo real, motores de decisión y producción de video automatizada.",
            path: "/work",
        },
    },
    about: {
        en: {
            title: "About | Richard Pedraza",
            description:
                "Full-Stack & AI Engineer focused on automation, AI integration and operational efficiency. I design architectures that solve business-critical problems with clarity and speed.",
            path: "/about",
        },
        es: {
            title: "Sobre Mí | Richard Pedraza",
            description:
                "Ingeniero Full-Stack e IA enfocado en automatización, integración de IA y eficiencia operativa. Diseño arquitecturas que resuelven problemas críticos de negocio con claridad y velocidad.",
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
                "Hablemos de automatizar y escalar tus operaciones. Enviá un mensaje directo o contactame por email, LinkedIn o Telegram.",
            path: "/contact",
        },
    },
};

/** Normalize an arbitrary locale string to a supported Locale. */
export function asLocale(locale: string): Locale {
    return locale === "es" ? "es" : "en";
}
