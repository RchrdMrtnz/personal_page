"use client";

import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
    value: string;
    className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const match = value.match(/([^0-9.]*)([0-9.]+)([^0-9.]*)/);
    const prefix = match ? match[1] : "";
    const number = match ? parseFloat(match[2]) : 0;
    const suffix = match ? match[3] : "";

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000 });
    const rounded = useTransform(springValue, (latest) =>
        latest.toFixed(value.includes(".") ? 1 : 0)
    );

    useEffect(() => {
        if (inView) {
            motionValue.set(number);
        }
    }, [inView, number, motionValue]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}
