import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Richard Pedraza — Senior Backend Engineer",
        short_name: "Richard Pedraza",
        description:
            "Senior Backend Engineer: Python, Django, AWS and production AI.",
        start_url: "/",
        display: "standalone",
        background_color: "#F8F9FD",
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
