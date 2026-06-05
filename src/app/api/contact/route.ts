import { NextRequest, NextResponse } from "next/server";

// Run on the Node.js runtime so env vars and the simple in-memory
// rate limiter behave predictably.
export const runtime = "nodejs";

const MAX_NAME = 120;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 4000;
const MIN_MESSAGE = 5;

// Basic in-memory rate limit: max requests per IP within the window.
// Note: resets on cold start / per serverless instance — enough to deter
// casual spam without adding friction for real visitors.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const hits = new Map<string, { count: number; first: number }>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = hits.get(ip);
    if (!entry || now - entry.first > RATE_WINDOW_MS) {
        hits.set(ip, { count: 1, first: now });
        return false;
    }
    entry.count += 1;
    return entry.count > RATE_LIMIT;
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Escape user input before inserting into a Telegram HTML message.
function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

export async function POST(req: NextRequest) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        console.error("Contact route misconfigured: missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
        return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
    }

    let body: Record<string, unknown>;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
    }

    // Honeypot: real users never fill this hidden field. Pretend success
    // so bots don't learn they were filtered.
    if (typeof body.company === "string" && body.company.trim() !== "") {
        return NextResponse.json({ ok: true });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 32) : "";
    const locale = body.locale === "es" ? "es" : "en";

    if (!name || !email || !message) {
        return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }
    if (!isValidEmail(email) || email.length > MAX_EMAIL) {
        return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }
    if (message.length < MIN_MESSAGE) {
        return NextResponse.json({ ok: false, error: "message_too_short" }, { status: 400 });
    }
    if (name.length > MAX_NAME || message.length > MAX_MESSAGE) {
        return NextResponse.json({ ok: false, error: "too_long" }, { status: 400 });
    }

    const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        "unknown";

    if (isRateLimited(ip)) {
        return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }

    const text =
        `📬 <b>New contact message</b>\n\n` +
        `<b>Name:</b> ${escapeHtml(name)}\n` +
        `<b>Email:</b> ${escapeHtml(email)}\n` +
        (phone ? `<b>Phone:</b> ${escapeHtml(phone)}\n` : "") +
        `<b>Lang:</b> ${locale}\n\n` +
        `<b>Message:</b>\n${escapeHtml(message)}`;

    try {
        const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: "HTML",
                disable_web_page_preview: true,
            }),
        });

        if (!tgRes.ok) {
            console.error("Telegram API error:", tgRes.status, await tgRes.text());
            return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
        }
    } catch (err) {
        console.error("Telegram request failed:", err);
        return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
