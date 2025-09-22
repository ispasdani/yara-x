"use client";

import { useState, useEffect } from "react";
import { Brain, FileText, Users, Sparkles } from "lucide-react";
import { useLanguageData } from "@/hooks/useLanguageData";
import type { LanguageData } from "@/types/languageDataTypes";
import { Button } from "../ui/button";

// Default values for SSR/SEO
const DEFAULT_AI_TONE_DEMO: LanguageData["public"]["aiToneDemo"] = {
  title: { title: "AI-Powered Tone Adaptation for Everyone" },
  description: {
    title:
      "Switch between professional and simple language instantly. Our AI ensures legal documents are accessible to clients while maintaining accuracy and compliance.",
  },
  primaryButtonText: { title: "Try Tone Switcher" },
  secondaryButtonText: { title: "Learn More" },
  badge: { title: "AI Powered" },
  features: {
    smartAdaptation: {
      title: { title: "Smart Language Adaptation" },
      description: {
        title:
          "AI automatically adjusts complexity based on your selected tone preference",
      },
    },
    contentSimplification: {
      title: { title: "Content Simplification" },
      description: {
        title:
          "Complex legal jargon transformed into clear, understandable language",
      },
    },
    clientFriendly: {
      title: { title: "Client-Friendly Output" },
      description: {
        title:
          "Make legal documents accessible to clients without legal backgrounds",
      },
    },
    contextPreservation: {
      title: { title: "Context Preservation" },
      description: {
        title:
          "Maintains legal accuracy while improving readability and comprehension",
      },
    },
  },
  demo: {
    documentToneTitle: { title: "Document Tone" },
    professionalLabel: { title: "Professional" },
    simpleLabel: { title: "Simple" },
    contractClauseLabel: { title: "Contract Clause" },
    professionalText: {
      title:
        "The aforementioned party hereby agrees to indemnify and hold harmless the counterparty from any and all claims, damages, losses, costs, and expenses arising from or relating to the breach of any representations, warranties, or covenants contained herein.",
    },
    simpleText: {
      title:
        "You agree to protect and compensate us if any problems or costs arise because you didn't follow the terms of this agreement. This includes covering any legal fees or damages we might face.",
    },
    readabilityScore: { title: "Readability Score" },
    gradeLevel: { title: "Grade Level" },
  },
};

const AIToneDemo = () => {
  const { langData } = useLanguageData();
  const t = langData?.public.aiToneDemo ?? DEFAULT_AI_TONE_DEMO;

  const [isSimpleTone, setIsSimpleTone] = useState(false);
  const [displayText, setDisplayText] = useState(t.demo.professionalText.title);
  const [isAnimating, setIsAnimating] = useState(false);

  // Create features array from the localized data
  const toneFeatures = [
    {
      icon: Brain,
      title: t.features.smartAdaptation.title.title,
      description: t.features.smartAdaptation.description.title,
    },
    {
      icon: FileText,
      title: t.features.contentSimplification.title.title,
      description: t.features.contentSimplification.description.title,
    },
    {
      icon: Users,
      title: t.features.clientFriendly.title.title,
      description: t.features.clientFriendly.description.title,
    },
    {
      icon: Sparkles,
      title: t.features.contextPreservation.title.title,
      description: t.features.contextPreservation.description.title,
    },
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setDisplayText(
        isSimpleTone ? t.demo.simpleText.title : t.demo.professionalText.title
      );
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [isSimpleTone, t.demo.simpleText.title, t.demo.professionalText.title]);

  const toggleTone = () => {
    setIsSimpleTone(!isSimpleTone);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content Section - Left */}
          <div>
            <div className="mb-12">
              <h2 className="text-5xl font-bold leading-tight font-serif text-foreground">
                {t.title.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-3 mb-6">
                {t.description.title}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="inline-flex items-center justify-center p-5 text-base font-medium rounded-lg cursor-pointer">
                  {t.primaryButtonText.title}
                </Button>
                <Button
                  variant="outline"
                  className="hover:text-foreground cursor-pointer p-5"
                >
                  {t.secondaryButtonText.title}
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {toneFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-body text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Animation Section - Right */}
          <div className="relative">
            <div className="bg-card rounded-2xl border border-card-border overflow-hidden floating-card p-8">
              {/* Toggle Control */}
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-serif text-lg font-semibold text-foreground">
                  {t.demo.documentToneTitle.title}
                </h4>
                <div className="flex items-center space-x-3">
                  <span
                    className={`text-sm font-medium transition-colors ${!isSimpleTone ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {t.demo.professionalLabel.title}
                  </span>
                  <button
                    onClick={toggleTone}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      isSimpleTone ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isSimpleTone ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                  <span
                    className={`text-sm font-medium transition-colors ${isSimpleTone ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {t.demo.simpleLabel.title}
                  </span>
                </div>
              </div>

              {/* Text Display */}
              <div className="bg-surface rounded-lg p-6 border border-card-border min-h-[200px] relative">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {t.demo.contractClauseLabel.title}
                  </span>
                </div>

                <div
                  className={`transition-opacity duration-300 ${isAnimating ? "opacity-50" : "opacity-100"}`}
                >
                  <p className="text-body leading-relaxed">{displayText}</p>
                </div>

                {/* Loading indicator */}
                {isAnimating && (
                  <div className="absolute inset-0 flex items-center justify-center bg-surface/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <div className="text-xl font-bold text-primary">
                    {isSimpleTone ? "95%" : "45%"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.demo.readabilityScore.title}
                  </div>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <div className="text-xl font-bold text-primary">
                    {isSimpleTone ? "8th" : "16th"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.demo.gradeLevel.title}
                  </div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -top-4 -left-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                {t.badge.title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToneDemo;
