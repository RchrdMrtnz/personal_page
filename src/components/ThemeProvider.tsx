"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
    theme: "light",
    toggleTheme: () => {},
});

export function useTheme() {
    return useContext(ThemeContext);
}

// The `.dark` class on <html> (set before paint by the no-flash script in the
// layout) is the single source of truth; React just subscribes to it.
function subscribe(onChange: () => void) {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
}

const getSnapshot = (): Theme =>
    document.documentElement.classList.contains("dark") ? "dark" : "light";

const getServerSnapshot = (): Theme => "light";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const toggleTheme = () => {
        const next = theme === "light" ? "dark" : "light";
        try {
            localStorage.setItem("theme", next);
        } catch {}
        document.documentElement.classList.toggle("dark", next === "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
