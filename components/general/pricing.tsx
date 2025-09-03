import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "One-Time Use",
    price: "$3.99",
    period: "one-time",
    description: "Perfect for a quick legal question or document review",
    features: [
      "Single-use AI consultation",
      "One document analysis",
      "Basic legal guidance",
      "Email support",
      "No expiry - use anytime",
      "Instant access",
    ],
    popular: false,
  },
  {
    name: "Starter Pack",
    price: "$29",
    period: "1,000 tokens",
    description: "Perfect for trying out our AI legal assistant",
    features: [
      "1,000 AI tokens ($0.029 per token)",
      "Unlimited document analysis",
      "Advanced legal research",
      "Custom workflow automation",
      "90-day token expiry",
      "API access",
      "Priority support",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Professional Pack",
    price: "$99",
    period: "5,000 tokens",
    description: "Maximum value for busy law practices",
    features: [
      "5,000 AI tokens ($0.0198 per token)",
      "Unlimited document analysis",
      "Advanced legal research",
      "Custom workflow automation",
      "90-day token expiry",
      "API access",
      "Priority support",
      "Custom integrations",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "50,000+ tokens",
    description: "Unlimited power for large organizations",
    features: [
      "50,000+ tokens (volume pricing)",
      "Custom AI model training",
      "Dedicated infrastructure",
      "No token expiry",
      "White-label solutions",
      "Advanced compliance tools",
      "24/7 phone support",
      "On-premise deployment",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            Choose the plan that fits your legal practice. All plans include our
            core AI features with no hidden fees.
          </p>
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
                    Most Popular
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
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
