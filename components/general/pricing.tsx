import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$99",
    period: "per user/month",
    description: "Perfect for small legal teams getting started with AI",
    features: [
      "Document review for up to 100 documents/month",
      "Basic AI chat support",
      "Standard contract templates",
      "Email support",
      "Single workspace"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$299", 
    period: "per user/month",
    description: "Advanced features for growing legal practices",
    features: [
      "Unlimited document review",
      "Advanced AI chat with legal research",
      "Premium contract template library",
      "Web research agent",
      "Custom workflows",
      "Priority support",
      "Team collaboration tools",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for large legal organizations",
    features: [
      "Everything in Professional",
      "Custom AI model training",
      "Advanced security & compliance", 
      "Dedicated account manager",
      "On-premise deployment options",
      "Custom integrations",
      "SLA guarantees",
      "24/7 phone support"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="heading-section mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            Choose the plan that fits your legal practice. 
            All plans include our core AI features with no hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary bg-card shadow-lg scale-105' 
                  : 'border-card-border bg-card hover:border-primary/20 hover:shadow-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary-hover'
                    : 'bg-surface text-foreground border border-card-border hover:bg-surface-hover'
                }`}>
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