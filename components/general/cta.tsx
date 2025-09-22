"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { useLanguageData } from "@/hooks/useLanguageData";
import type { LanguageData } from "@/types/languageDataTypes";

// Default values for SSR/SEO
const DEFAULT_CTA: LanguageData["public"]["cta"] = {
  title: { title: "Ready to transform your legal practice?" },
  description: {
    title:
      "Join leading law firms and legal professionals who are already leveraging AI to deliver better outcomes for their clients.",
  },
  primaryButtonText: { title: "Schedule a Demo" },
  secondaryButtonText: { title: "Contact Sales" },
  subtitle: {
    title: "Free 30-day trial • No credit card required • Setup in minutes",
  },
};

const CTA = () => {
  const { langData } = useLanguageData();
  const t = langData?.public.cta ?? DEFAULT_CTA;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold leading-tight font-serif text-foreground">
            {t.title.title}
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-10 mt-5 max-w-2xl mx-auto">
            {t.description.title}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-gray-900 text-white rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 group">
              <Calendar className="mr-2 h-4 w-4" />
              {t.primaryButtonText.title}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-gray-300 bg-white text-gray-900 rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
              {t.secondaryButtonText.title}
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-8">{t.subtitle.title}</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
