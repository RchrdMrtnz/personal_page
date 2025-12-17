import Hero from "@/components/sections/Hero";

import Outcomes from "@/components/sections/Outcomes";
import Services from "@/components/sections/Services";
import MethodologySection from "@/components/sections/MethodologySection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import TechStackSection from "@/components/sections/TechStackSection";
import AboutSection from "@/components/sections/AboutSection";
import OfferSection from "@/components/sections/OfferSection";

export default async function Home({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <Hero locale={locale} />

      <Outcomes locale={locale} />
      <Services locale={locale} />
      <MethodologySection locale={locale} />
      <FeaturedWork locale={locale} />
      <TechStackSection locale={locale} />
      <AboutSection locale={locale} />
      <OfferSection locale={locale} />
    </div>
  );
}
