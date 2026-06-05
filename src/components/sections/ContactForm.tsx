"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "success" | "error";

// Map server error codes → translation keys for specific feedback.
const ERROR_KEYS: Record<string, string> = {
    missing_fields: "errorRequired",
    invalid_email: "errorEmail",
    message_too_short: "errorShort",
    rate_limited: "errorRate",
};

export function ContactForm({
    locale,
    defaultCountry = "us",
}: {
    locale: string;
    /** ISO2 country (lowercase) detected from the visitor's request; seeds the phone selector. */
    defaultCountry?: string;
}) {
    const t = useTranslations("Contact");
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [phone, setPhone] = useState("");
    const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status === "sending") return;
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // Only send a phone if the visitor typed more than the dial code.
                body: JSON.stringify({ ...form, phone: phone.replace(/\D/g, "").length > 4 ? phone : "", locale }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                const key = ERROR_KEYS[data?.error as string] ?? "error";
                setErrorMsg(t(key));
                setStatus("error");
                return;
            }

            setStatus("success");
            setForm({ name: "", email: "", message: "", company: "" });
            setPhone("");
        } catch {
            setErrorMsg(t("error"));
            setStatus("error");
        }
    };

    const inputClass =
        "w-full rounded-xl bg-foreground/5 border border-foreground/10 px-4 py-3 text-foreground placeholder:text-muted/60 " +
        "focus:outline-none focus:border-nebula-accent/50 focus:ring-2 focus:ring-nebula-accent/20 transition-colors";

    return (
        <Card className="p-6 sm:p-8 bg-surface/60 dark:bg-nebula-ink/30 backdrop-blur-xl border-foreground/10">
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — hidden from users, catches bots */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form.company}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-foreground">
                            {t("name")}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            maxLength={120}
                            value={form.name}
                            onChange={handleChange}
                            placeholder={t("namePlaceholder")}
                            className={inputClass}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-foreground">
                            {t("email")}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            maxLength={200}
                            value={form.email}
                            onChange={handleChange}
                            placeholder={t("emailPlaceholder")}
                            className={inputClass}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                        {t("phone")} <span className="text-muted font-normal">{t("optional")}</span>
                    </label>
                    <div className="phone-input-wrapper">
                        <PhoneInput
                            defaultCountry={defaultCountry}
                            value={phone}
                            onChange={(value) => setPhone(value)}
                            inputProps={{ id: "phone", name: "phone", autoComplete: "tel" }}
                            inputClassName="!text-foreground placeholder:!text-muted/60"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                        {t("message")}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        minLength={5}
                        rows={5}
                        maxLength={4000}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t("messagePlaceholder")}
                        className={`${inputClass} resize-y min-h-[120px]`}
                    />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <Button
                        type="submit"
                        size="lg"
                        disabled={status === "sending"}
                        className="w-full sm:w-auto group"
                    >
                        {status === "sending" ? (
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        ) : (
                            <Send className="mr-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        )}
                        {status === "sending" ? t("sending") : t("submit")}
                    </Button>

                    <div aria-live="polite" className="text-sm">
                        {status === "success" && (
                            <span className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                                <CheckCircle2 className="w-4 h-4" />
                                {t("success")}
                            </span>
                        )}
                        {status === "error" && (
                            <span className="inline-flex items-center gap-2 text-red-500">
                                <AlertCircle className="w-4 h-4" />
                                {errorMsg || t("error")}
                            </span>
                        )}
                    </div>
                </div>
            </form>
        </Card>
    );
}
