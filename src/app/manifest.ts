import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Richard Pedraza — Full-Stack & Automation Engineer",
        short_name: "Richard Pedraza",
        description:
            "AI-enabled systems and automation that scale and deliver ROI.",
        start_url: "/",
        display: "standalone",
        background_color: "#0E0E10",
        theme_color: "#1D4ED8",
        icons: [
            {
                src: "/favicon.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
        ],
    };
}
