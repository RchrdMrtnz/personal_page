interface NebulaBackgroundProps {
    className?: string; // Allow absolute positioning overrides if needed
}

/**
 * Ambient glow orbs behind a section.
 *
 * No grid here on purpose: the only grid is the global fixed one in the layout.
 * A second, per-section grid (different cell size, restarting at every section
 * edge) is what produced the stray rectangles. The vertical mask fades the orbs
 * out before the section edges so the overflow clip never shows a hard line.
 */
export function NebulaBackground({ className = "absolute inset-0" }: NebulaBackgroundProps) {
    return (
        <div
            aria-hidden="true"
            className={`${className} -z-10 overflow-hidden pointer-events-none mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]`}
        >
            {/* Floating Orbs */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-nebula-accent/5 dark:bg-nebula-accent/10 blur-3xl rounded-full animate-drift-a" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-purple-500/5 dark:bg-purple-500/10 blur-3xl rounded-full animate-drift-b" />
        </div>
    );
}
