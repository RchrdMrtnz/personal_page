"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle "data packets" that travel along the background grid lines and turn at
 * intersections (circuit-trace feel). Canvas-based for performance; only the
 * pulses are redrawn each frame — the grid itself stays as static CSS.
 *
 * Accessibility/perf: disabled under prefers-reduced-motion, paused when the tab
 * is hidden, and re-themed when light/dark toggles.
 */
export function GridPulse() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const CELL = 24; // matches the global CSS grid size
        const COUNT = 14;
        const TRAIL = 18;
        const TURN_CHANCE = 0.18;

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

        const hexToRgb = (hex: string) => {
            const h = hex.replace("#", "").trim();
            const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
            const n = parseInt(full || "3d4dff", 16);
            return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
        };
        // Use the neutral "muted" token (adapts to light/dark) for a soft gray, low-key look.
        const readColor = () => {
            const v = getComputedStyle(document.documentElement).getPropertyValue("--muted").trim();
            return v || "#9CA3AF";
        };
        let rgb = hexToRgb(readColor());

        let w = 0, h = 0;
        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();

        type Pulse = {
            axis: "h" | "v";
            fixed: number;
            pos: number;
            dir: 1 | -1;
            speed: number;
            trail: { x: number; y: number }[];
        };

        const spawn = (): Pulse => {
            const axis: "h" | "v" = Math.random() < 0.5 ? "h" : "v";
            const lines = Math.max(2, Math.floor((axis === "h" ? h : w) / CELL));
            const fixed = (1 + Math.floor(Math.random() * (lines - 1))) * CELL;
            const span = axis === "h" ? w : h;
            return {
                axis,
                fixed,
                pos: Math.random() * span,
                dir: Math.random() < 0.5 ? 1 : -1,
                speed: 35 + Math.random() * 55,
                trail: [],
            };
        };

        let pulses = Array.from({ length: COUNT }, spawn);

        let raf = 0;
        let last = 0;

        const frame = (now: number) => {
            raf = requestAnimationFrame(frame);
            const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
            last = now;
            ctx.clearRect(0, 0, w, h);

            for (const p of pulses) {
                const prev = p.pos;
                p.pos += p.dir * p.speed * dt;
                const span = p.axis === "h" ? w : h;

                // Turn at a grid node with some probability → 90° circuit corner.
                const prevNode = Math.floor(prev / CELL);
                const curNode = Math.floor(p.pos / CELL);
                if (curNode !== prevNode && Math.random() < TURN_CHANCE) {
                    const nodePos = (p.dir > 0 ? Math.max(prevNode, curNode) : Math.min(prevNode, curNode)) * CELL;
                    const oldFixed = p.fixed;
                    p.axis = p.axis === "h" ? "v" : "h";
                    p.pos = oldFixed;
                    p.fixed = nodePos;
                    p.dir = Math.random() < 0.5 ? 1 : -1;
                }

                if (p.pos < -CELL || p.pos > span + CELL) {
                    Object.assign(p, spawn());
                    continue;
                }

                const x = p.axis === "h" ? p.pos : p.fixed;
                const y = p.axis === "h" ? p.fixed : p.pos;
                p.trail.push({ x, y });
                if (p.trail.length > TRAIL) p.trail.shift();

                // Fading trail (thin, low-opacity)
                ctx.lineWidth = 0.8;
                for (let i = 1; i < p.trail.length; i++) {
                    const a = (i / p.trail.length) * 0.18;
                    ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`;
                    ctx.beginPath();
                    ctx.moveTo(p.trail[i - 1].x, p.trail[i - 1].y);
                    ctx.lineTo(p.trail[i].x, p.trail[i].y);
                    ctx.stroke();
                }

                // Soft head (half size, diffused)
                const grad = ctx.createRadialGradient(x, y, 0, x, y, 3);
                grad.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},0.35)`);
                grad.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const start = () => {
            if (raf || reduce.matches || document.hidden) return;
            last = 0;
            raf = requestAnimationFrame(frame);
        };
        const stop = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = 0;
        };

        const onVisibility = () => (document.hidden ? stop() : start());
        const onResize = () => resize();
        const onReduceChange = () => {
            stop();
            if (!reduce.matches) start();
            else ctx.clearRect(0, 0, w, h);
        };
        const themeObserver = new MutationObserver(() => {
            rgb = hexToRgb(readColor());
        });

        document.addEventListener("visibilitychange", onVisibility);
        window.addEventListener("resize", onResize);
        reduce.addEventListener?.("change", onReduceChange);
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        start();

        return () => {
            stop();
            document.removeEventListener("visibilitychange", onVisibility);
            window.removeEventListener("resize", onResize);
            reduce.removeEventListener?.("change", onReduceChange);
            themeObserver.disconnect();
        };
    }, []);

    return <canvas ref={canvasRef} aria-hidden="true" className="fixed inset-0 -z-40 pointer-events-none" />;
}
