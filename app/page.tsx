"use client";

import ClientLogos from "@/components/general/clientLogos";
import CTA from "@/components/general/cta";
import Features from "@/components/general/features";
import Footer from "@/components/general/footer";
import Hero from "@/components/general/hero";
import { LanguageSelector } from "@/components/LanguageSelector";
import { usePersistedLanguageStore } from "@/stores/languageStore";

export default function Home() {
  const currentLanguage = usePersistedLanguageStore(
    (state) => state.currentLanguage
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LanguageSelector />
      <Hero />
      <ClientLogos />
      <Features />
      <CTA />
      <Footer/>

      <p>Test: {currentLanguage}</p>
    </main>
  );
}
