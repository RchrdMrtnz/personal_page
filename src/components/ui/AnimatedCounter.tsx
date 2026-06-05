"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
    value: string;
    className?: string;
    /** Optional start delay (seconds) to stagger multiple counters and avoid a load spike. */
    delay?: number;
}

export function AnimatedCounter({ value, className, delay = 0 }: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

    const match = value.match(/([^0-9.]*)([0-9.]+)([^0-9.]*)/);
    const prefix = match ? match[1] : "";
    const number = match ? parseFloat(match[2]) : 0;
    const suffix = match ? match[3] : "";
    const decimals = value.includes(".") ? 1 : 0;

    const count = useMotionValue(0);
    const display = useTransform(count, (latest) => latest.toFixed(decimals));

    useEffect(() => {
        if (!inView) return;
        // Finite tween with an easeOutExpo curve: fast start, crisp finish (no spring "creep"),
        // and it stops when done instead of running perpetually like useSpring.
        const controls = animate(count, number, {
            duration: 1.4,
            delay,
            ease: [0.16, 1, 0.3, 1],
        });
        return () => controls.stop();
    }, [inView, number, delay, count]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    );
}
