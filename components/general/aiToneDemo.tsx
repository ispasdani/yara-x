"use client";

import { useState, useEffect } from "react";
import { Brain, FileText, Users, Sparkles } from "lucide-react";

const toneFeatures = [
  {
    icon: Brain,
    title: "Smart Language Adaptation",
    description:
      "AI automatically adjusts complexity based on your selected tone preference",
  },
  {
    icon: FileText,
    title: "Content Simplification",
    description:
      "Complex legal jargon transformed into clear, understandable language",
  },
  {
    icon: Users,
    title: "Client-Friendly Output",
    description:
      "Make legal documents accessible to clients without legal backgrounds",
  },
  {
    icon: Sparkles,
    title: "Context Preservation",
    description:
      "Maintains legal accuracy while improving readability and comprehension",
  },
];

const professionalText = `The aforementioned party hereby agrees to indemnify and hold harmless the counterparty from any and all claims, damages, losses, costs, and expenses arising from or relating to the breach of any representations, warranties, or covenants contained herein.`;

const simpleText = `You agree to protect and compensate us if any problems or costs arise because you didn't follow the terms of this agreement. This includes covering any legal fees or damages we might face.`;

const AIToneDemo = () => {
  const [isSimpleTone, setIsSimpleTone] = useState(false);
  const [displayText, setDisplayText] = useState(professionalText);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setDisplayText(isSimpleTone ? simpleText : professionalText);
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [isSimpleTone]);

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
              <h2 className="heading-section mb-6">
                AI-Powered Tone Adaptation for Everyone
              </h2>
              <p className="text-lead mb-8">
                Switch between professional and simple language instantly. Our
                AI ensures legal documents are accessible to clients while
                maintaining accuracy and compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-hero">Try Tone Switcher</button>
                <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-surface text-foreground rounded-lg border border-card-border hover:bg-surface-hover transition-colors">
                  Learn More
                </button>
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
                  Document Tone
                </h4>
                <div className="flex items-center space-x-3">
                  <span
                    className={`text-sm font-medium transition-colors ${!isSimpleTone ? "text-primary" : "text-muted-foreground"}`}
                  >
                    Professional
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
                    Simple
                  </span>
                </div>
              </div>

              {/* Text Display */}
              <div className="bg-surface rounded-lg p-6 border border-card-border min-h-[200px] relative">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    Contract Clause
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
                    Readability Score
                  </div>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <div className="text-xl font-bold text-primary">
                    {isSimpleTone ? "8th" : "16th"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Grade Level
                  </div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -top-4 -left-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                AI Powered
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToneDemo;
