"use client";

import ClientLogos from "@/components/general/clientLogos";
import CTA from "@/components/general/cta";
import Features from "@/components/general/features";
import Footer from "@/components/general/footer";
import Hero from "@/components/general/hero";
import Pricing from "@/components/general/pricing";
import WorkflowVideo from "@/components/general/workflowVideo";
import { LanguageSelector } from "@/components/LanguageSelector";
import { usePersistedLanguageStore } from "@/stores/languageStore";

export default function Home() {
  const currentLanguage = usePersistedLanguageStore(
    (state) => state.currentLanguage
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LanguageSelector />
      <Hero />
      <ClientLogos />
      <Features />
      <WorkflowVideo />
      <CTA />
      <Pricing />
      <Footer/>

      <p>Test: {currentLanguage}</p>
    </main>
  );
}
