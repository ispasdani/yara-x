import type { LanguageData } from "@/types/languageDataTypes";

const pricing: LanguageData["public"]["pricing"] = {
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

export default pricing;
