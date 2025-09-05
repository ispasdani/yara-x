"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import InteractiveWorkflowDemo from "../interactiveWorkflowDemo/interactiveWorkflowDemo";
import ChatInput from "./chatInput";
import { useLanguageData } from "@/hooks/useLanguageData";

const Hero = () => {
  const { langData } = useLanguageData();

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
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
              ></span>
              {langData?.public.hero.floatingMessage.title}
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight font-serif text-foreground">
              Law Made Simple with AI
            </h1>

            <p className="text-lg leading-relaxed max-w-lg text-muted-foreground">
              Transform your legal practice with AI-powered document review,
              intelligent research, and automated workflows without compromising
              precision.
            </p>

            <div className="my-8">
              <ChatInput />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="ghost"
                className="hover:text-foreground"
                style={{ color: "var(--muted-foreground)" }}
              >
                Watch Overview
              </Button>
            </div>
          </div>

          {/* Right Content - Product Mockup */}
          <InteractiveWorkflowDemo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
