import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/**
 * Shared Open Graph card (what LinkedIn/WhatsApp/X show when a link is shared).
 * Each route's `opengraph-image.tsx` only supplies the text.
 */
export function renderOgImage({
    eyebrow,
    title,
    subtitle,
    chips = [],
}: {
    eyebrow: string;
    title: string;
    subtitle?: string;
    chips?: string[];
}) {
    // Long titles (case studies, articles) get a smaller size so they fit in 2–3 lines.
    const titleSize = title.length > 40 ? 64 : 84;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: "#0E0E10",
                    backgroundImage:
                        "radial-gradient(circle at 75% 20%, rgba(61,77,255,0.35), transparent 55%), radial-gradient(circle at 20% 85%, rgba(34,26,114,0.45), transparent 50%)",
                    padding: "80px",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        color: "#3D4DFF",
                        fontSize: 26,
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                    }}
                >
                    {eyebrow}
                </div>

                <div
                    style={{
                        display: "flex",
                        color: "#FFFFFF",
                        fontSize: titleSize,
                        fontWeight: 800,
                        lineHeight: 1.08,
                        marginTop: "28px",
                        maxWidth: "1040px",
                    }}
                >
                    {title}
                </div>

                {subtitle && (
                    <div
                        style={{
                            display: "flex",
                            color: "#9CA3AF",
                            fontSize: 36,
                            fontWeight: 500,
                            marginTop: "20px",
                            maxWidth: "1000px",
                        }}
                    >
                        {subtitle}
                    </div>
                )}

                {chips.length > 0 && (
                    <div style={{ display: "flex", gap: "14px", marginTop: "44px", flexWrap: "wrap" }}>
                        {chips.slice(0, 6).map((chip) => (
                            <div
                                key={chip}
                                style={{
                                    display: "flex",
                                    color: "#E5E7EB",
                                    fontSize: 24,
                                    padding: "10px 22px",
                                    borderRadius: "9999px",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    background: "rgba(255,255,255,0.05)",
                                }}
                            >
                                {chip}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ),
        { ...ogSize }
    );
}
