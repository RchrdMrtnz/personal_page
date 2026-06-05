import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { siteConfig } from "../../../content/site";
import { SITE_URL, buildMetadata, pageMeta, asLocale } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-display' });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = pageMeta.home[asLocale(locale)];
  return {
    ...buildMetadata({ locale: asLocale(locale), ...meta }),
    icons: { icon: "/favicon.svg" },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F9FD" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0E10" },
  ],
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const lang = asLocale(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: siteConfig.profile.name,
        url: `${SITE_URL}/${lang}`,
        jobTitle: siteConfig.profile.role[lang].split("|")[0].trim(),
        description: siteConfig.profile.differentiator[lang],
        sameAs: [
          siteConfig.profile.links.linkedin,
          siteConfig.profile.links.github,
          siteConfig.profile.links.medium,
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: siteConfig.consulting.title[lang],
        description: siteConfig.consulting.pitch[lang],
        url: `${SITE_URL}/${lang}/contact`,
        provider: { "@id": `${SITE_URL}/#person` },
        areaServed: "Worldwide",
      },
    ],
  };

  return (
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* No-flash theme script: applies dark class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen flex flex-col font-sans antialiased selection:bg-nebula-accent/30 selection:text-nebula-accent relative" suppressHydrationWarning>
        {/* Global Background Grid */}
        <div
          className="fixed inset-0 -z-50"
          style={{
            backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-nebula-primary/10 dark:bg-nebula-primary/20 opacity-20 blur-[100px]" />
        </div>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main className="grow">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
