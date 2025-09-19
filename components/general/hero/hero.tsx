"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ChatInput from "./chatInput";
import { useLanguageData } from "@/hooks/useLanguageData";
import type { LanguageData } from "@/types/languageDataTypes";

const DemoSkeleton = () => (
  <div className="h-[360px] w-full rounded-xl border border-border/50 bg-muted/30 animate-pulse" />
);

// Lazy-load the heavy demo
const InteractiveWorkflowDemo = dynamic(
  () => import("../interactiveWorkflowDemo/interactiveWorkflowDemo"),
  { ssr: false, loading: () => <DemoSkeleton /> }
);

const DEFAULT_HERO: LanguageData["public"]["hero"] = {
  floatingMessage: { title: "AI-powered legal automation" },
  title: { title: "Law Made Simple with AI" },
  description: {
    title:
      "Transform your legal practice with AI-powered document review, intelligent research, and automated workflows without compromising precision.",
  },
  chatPlaceholder: {
    title: "Ask anything about legal documents or upload a file...",
  },
  chatGuidelines: { title: "Press Enter to send • Shift+Enter for a new line" },
  primaryButtonText: { title: "Book a Demo" },
  secondaryButtonText: { title: "Watch Overview" },
};

export default function Hero() {
  const { langData } = useLanguageData();
  const t = langData?.public.hero ?? DEFAULT_HERO;

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: fully SSR-visible text ✅ */}
          <div className="space-y-6">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full border text-sm"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--muted-foreground)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "var(--primary)" }}
              />
              {t.floatingMessage.title}
            </div>

            <h1 className="text-5xl font-bold leading-tight font-serif text-foreground">
              {t.title.title}
            </h1>

            <p className="text-lg leading-relaxed max-w-lg text-muted-foreground">
              {t.description.title}
            </p>

            <div className="my-8">
              <ChatInput />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="inline-flex items-center justify-center p-5 text-base font-medium rounded-lg cursor-pointer">
                {t.primaryButtonText.title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="hover:text-foreground cursor-pointer p-5"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.secondaryButtonText.title}
              </Button>
            </div>
          </div>

          {/* Right: lazy-loaded demo with skeleton (perf/UX) */}
          <InteractiveWorkflowDemo />
        </div>
      </div>
    </section>
  );
}
