import { siteConfig } from "../../../content/site";
import { loc } from "@/lib/content";

/** The shared 4-step delivery process (discovery → handoff) used on service pages. */
export function ProcessSteps({ locale, title }: { locale: string; title: string }) {
    return (
        <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-6 sm:mb-8">{title}</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {siteConfig.process.map((step, i) => (
                    <li
                        key={i}
                        className="relative p-5 rounded-2xl border border-foreground/10 bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl"
                    >
                        <span className="font-mono text-xs text-nebula-accent">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="text-base font-bold text-foreground font-display mt-2 mb-1.5">{loc(step.title, locale)}</h3>
                        <p className="text-sm text-muted leading-relaxed">{loc(step.desc, locale)}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
}
