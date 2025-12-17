"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { ChangeEvent, useTransition } from "react";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <label className="relative inline-flex items-center">
            <select
                defaultValue={locale}
                className="bg-transparent py-1 pl-2 pr-6 text-sm font-medium text-gray-300 hover:text-white focus:outline-none cursor-pointer appearance-none"
                onChange={onSelectChange}
                disabled={isPending}
            >
                <option value="en" className="text-black">EN</option>
                <option value="es" className="text-black">ES</option>
            </select>
            <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                ▼
            </span>
        </label>
    );
}
