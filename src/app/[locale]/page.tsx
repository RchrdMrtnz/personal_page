import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import { buildMetadata, pageMeta, asLocale } from "@/lib/seo";

// Below-the-fold sections are code-split into their own chunks (still SSR'd
// for SEO) so they don't weigh down the initial client bundle.
const Outcomes = dynamic(() => import("@/components/sections/Outcomes"));
const Services = dynamic(() => import("@/components/sections/Services"));
const TechStackSection = dynamic(() => import("@/components/sections/TechStackSection"));
const FeaturedWork = dynamic(() => import("@/components/sections/FeaturedWork"));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const OfferSection = dynamic(() => import("@/components/sections/OfferSection"));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale: asLocale(locale), ...pageMeta.home[asLocale(locale)] });
}

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <Hero locale={locale} />
      <Outcomes locale={locale} />
      <Services locale={locale} />
      <TechStackSection locale={locale} />
      <FeaturedWork locale={locale} />
      <AboutSection locale={locale} />
      <OfferSection locale={locale} />
    </div>
  );
}
