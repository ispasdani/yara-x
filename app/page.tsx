// app/page.tsx
import AIToneDemo from "@/components/general/aiToneDemo";
import Ambassador from "@/components/general/ambassador";
import ClientLogos from "@/components/general/clientLogos";
import CTA from "@/components/general/cta";
import FAQ from "@/components/general/faq";
import Features from "@/components/general/features";
import Footer from "@/components/general/footer";
import Hero from "@/components/general/hero/hero";
import Pricing from "@/components/general/pricing";
import TextEditorPreview from "@/components/general/richTextEditorPreview";
import Templates from "@/components/general/templates";
import WorkflowVideo from "@/components/general/workflowVideo";

export default function Home() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Your Brand",
    url: "https://yourdomain.com", // <-- change
    logo: "https://yourdomain.com/logo.png", // <-- optional if you have one
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ld).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <ClientLogos />
      <Features />
      <Templates />
      <TextEditorPreview />
      <WorkflowVideo />
      <AIToneDemo />
      <CTA />
      <Pricing />
      <FAQ />
      <Ambassador />
      <Footer />
    </main>
  );
}
