"use client";

import ClientLogos from "@/components/general/clientLogos";
import CTA from "@/components/general/cta";
import FAQ from "@/components/general/faq";
import Features from "@/components/general/features";
import Footer from "@/components/general/footer";
import Hero from "@/components/general/hero/hero";
import Pricing from "@/components/general/pricing";
import WorkflowVideo from "@/components/general/workflowVideo";

export default function Home() {
  // const currentLanguage = usePersistedLanguageStore(
  //   (state) => state.currentLanguage
  // );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <LanguageSelector /> */}
      <Hero />
      <ClientLogos />
      <Features />
      <WorkflowVideo />
      <CTA />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
