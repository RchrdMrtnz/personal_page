import { ImageResponse } from "next/og";
import { siteConfig } from "../../../content/site";
import { asLocale } from "@/lib/seo";

export const alt = "Richard Pedraza — Full-Stack & Automation Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const lang = asLocale(locale);
    const role = siteConfig.profile.role[lang].split("|")[0].trim();

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
                    RP.
                </div>

                <div
                    style={{
                        display: "flex",
                        color: "#FFFFFF",
                        fontSize: 84,
                        fontWeight: 800,
                        lineHeight: 1.05,
                        marginTop: "28px",
                    }}
                >
                    {siteConfig.profile.name}
                </div>

                <div
                    style={{
                        display: "flex",
                        color: "#9CA3AF",
                        fontSize: 38,
                        fontWeight: 500,
                        marginTop: "20px",
                        maxWidth: "900px",
                    }}
                >
                    {role}
                </div>

                <div style={{ display: "flex", gap: "14px", marginTop: "48px", flexWrap: "wrap" }}>
                    {siteConfig.topSkills.map((skill) => (
                        <div
                            key={skill}
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
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        ),
        { ...size }
    );
}
