"use client";

import { motion } from "framer-motion";

interface NebulaBackgroundProps {
    className?: string; // Allow absolute positioning overrides if needed
}

export function NebulaBackground({ className = "absolute inset-0" }: NebulaBackgroundProps) {
    return (
        <div className={`${className} -z-10 overflow-hidden pointer-events-none`}>
            {/* Grid Pattern */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                    maskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)"
                }}
            />

            {/* Floating Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-nebula-accent/10 blur-3xl rounded-full"
            />
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 80, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-purple-500/10 blur-3xl rounded-full"
            />
        </div>
    );
}
