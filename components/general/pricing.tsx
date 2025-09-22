"use client";

import { Check } from "lucide-react";
import { useLanguageData } from "@/hooks/useLanguageData";
import type { LanguageData } from "@/types/languageDataTypes";

// Default values for SSR/SEO
const DEFAULT_PRICING: LanguageData["public"]["pricing"] = {
  title: { title: "Simple, Transparent Pricing" },
  description: {
    title:
      "Choose the plan that fits your legal practice. All plans include our core AI features with no hidden fees.",
  },
  mostPopularBadge: { title: "Most Popular" },
  getStartedButton: { title: "Get Started" },
  contactSalesButton: { title: "Contact Sales" },
  trialText: {
    title: "All plans include a 14-day free trial. No credit card required.",
  },
  plans: {
    oneTime: {
      name: { title: "One-Time Use" },
      price: { title: "$3.99" },
      period: { title: "one-time" },
      description: {
        title: "Perfect for a quick legal question or document review",
      },
      features: [
        { title: "Single-use AI consultation" },
        { title: "One document analysis" },
        { title: "Basic legal guidance" },
        { title: "Email support" },
        { title: "No expiry - use anytime" },
        { title: "Instant access" },
      ],
    },
    starter: {
      name: { title: "Starter Pack" },
      price: { title: "$29" },
      period: { title: "1,000 tokens" },
      description: { title: "Perfect for trying out our AI legal assistant" },
      features: [
        { title: "1,000 AI tokens ($0.029 per token)" },
        { title: "Unlimited document analysis" },
        { title: "Advanced legal research" },
        { title: "Custom workflow automation" },
        { title: "90-day token expiry" },
        { title: "API access" },
        { title: "Priority support" },
        { title: "Custom integrations" },
      ],
    },
    professional: {
      name: { title: "Professional Pack" },
      price: { title: "$99" },
      period: { title: "5,000 tokens" },
      description: { title: "Maximum value for busy law practices" },
      features: [
        { title: "5,000 AI tokens ($0.0198 per token)" },
        { title: "Unlimited document analysis" },
        { title: "Advanced legal research" },
        { title: "Custom workflow automation" },
        { title: "90-day token expiry" },
        { title: "API access" },
        { title: "Priority support" },
        { title: "Custom integrations" },
      ],
    },
    enterprise: {
      name: { title: "Enterprise" },
      price: { title: "Custom" },
      period: { title: "50,000+ tokens" },
      description: { title: "Unlimited power for large organizations" },
      features: [
        { title: "50,000+ tokens (volume pricing)" },
        { title: "Custom AI model training" },
        { title: "Dedicated infrastructure" },
        { title: "No token expiry" },
        { title: "White-label solutions" },
        { title: "Advanced compliance tools" },
        { title: "24/7 phone support" },
        { title: "On-premise deployment" },
      ],
    },
  },
};

const Pricing = () => {
  const { langData } = useLanguageData();
  const t = langData?.public.pricing ?? DEFAULT_PRICING;

  // Create pricing plans array from the localized data
  const pricingPlans = [
    {
      name: t.plans.oneTime.name.title,
      price: t.plans.oneTime.price.title,
      period: t.plans.oneTime.period.title,
      description: t.plans.oneTime.description.title,
      features: t.plans.oneTime.features.map((feature) => feature.title),
      popular: false,
    },
    {
      name: t.plans.starter.name.title,
      price: t.plans.starter.price.title,
      period: t.plans.starter.period.title,
      description: t.plans.starter.description.title,
      features: t.plans.starter.features.map((feature) => feature.title),
      popular: true,
    },
    {
      name: t.plans.professional.name.title,
      price: t.plans.professional.price.title,
      period: t.plans.professional.period.title,
      description: t.plans.professional.description.title,
      features: t.plans.professional.features.map((feature) => feature.title),
      popular: false,
    },
    {
      name: t.plans.enterprise.name.title,
      price: t.plans.enterprise.price.title,
      period: t.plans.enterprise.period.title,
      description: t.plans.enterprise.description.title,
      features: t.plans.enterprise.features.map((feature) => feature.title),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            {t.title.title}
          </h2>
          <p className="text-lead max-w-2xl mx-auto">{t.description.title}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "border-primary bg-card shadow-lg scale-105"
                  : "border-card-border bg-card hover:border-primary/20 hover:shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    {t.mostPopularBadge.title}
                  </span>
                </div>
              )}

              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-body text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-colors ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                      : "bg-surface text-foreground border border-card-border hover:bg-surface-hover"
                  }`}
                >
                  {plan.price === t.plans.enterprise.price.title
                    ? t.contactSalesButton.title
                    : t.getStartedButton.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground">{t.trialText.title}</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
