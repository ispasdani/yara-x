import type { LanguageData } from "@/types/languageDataTypes";

const ambassador: LanguageData["public"]["ambassador"] = {
  badge: { title: "Partnership Program" },
  title: { title: "Become an Ambassador" },
  description: {
    title:
      "Partner with us to revolutionize legal services. Earn significant commissions while helping law firms and legal professionals leverage cutting-edge AI technology.",
  },
  stats: {
    averageDealSize: { title: "Average Deal Size" },
    commissionPerDeal: { title: "Commission Per Deal" },
    activeAmbassadors: { title: "Active Ambassadors" },
    successRate: { title: "Success Rate" },
  },
  benefits: {
    title: { title: "Why Partner With Us?" },
    commission: {
      title: { title: "30% Commission" },
      description: {
        title:
          "Earn 30% recurring commission on every client you refer who becomes a paying customer",
      },
    },
    growingMarket: {
      title: { title: "Growing Market" },
      description: {
        title:
          "Legal tech is booming - tap into a $30B+ market with high demand for AI solutions",
      },
    },
    partnershipSupport: {
      title: { title: "Partnership Support" },
      description: {
        title:
          "Get dedicated support, marketing materials, and co-selling opportunities",
      },
    },
    exclusiveBenefits: {
      title: { title: "Exclusive Benefits" },
      description: {
        title:
          "Access to beta features, priority support, and ambassador-only events",
      },
    },
  },
  idealProfile: {
    title: { title: "Ideal Ambassador Profile" },
    items: [
      { title: "• Existing network in legal services" },
      { title: "• Experience with B2B sales or consulting" },
      { title: "• Understanding of legal workflows" },
      { title: "• Passionate about legal technology" },
    ],
  },
  form: {
    title: { title: "Apply to Become an Ambassador" },
    description: {
      title:
        "Tell us about yourself and let's explore this partnership opportunity together.",
    },
    fields: {
      fullName: { title: "Full Name *" },
      email: { title: "Email Address *" },
      company: { title: "Company/Organization" },
      experience: { title: "Tell us about your network and experience *" },
    },
    placeholders: {
      name: { title: "John Smith" },
      email: { title: "john@company.com" },
      company: { title: "Your company name" },
      experience: {
        title:
          "Describe your connections in the legal industry, relevant experience, and why you'd be a great ambassador...",
      },
    },
    submitButton: { title: "Submit Application" },
    contact: {
      email: { title: "partnerships@company.com" },
      phone: { title: "+1 (555) 123-LEGAL" },
    },
  },
  howItWorks: {
    title: { title: "How Our Ambassador Program Works" },
    steps: {
      apply: {
        title: { title: "Apply & Get Approved" },
        description: {
          title:
            "Submit your application and get approved within 48 hours. Receive your unique referral tracking links and materials.",
        },
      },
      refer: {
        title: { title: "Refer & Connect" },
        description: {
          title:
            "Introduce qualified legal professionals to our platform. We'll handle demos, onboarding, and technical support.",
        },
      },
      earn: {
        title: { title: "Earn Commissions" },
        description: {
          title:
            "Receive 30% monthly recurring commission for every successful referral. Payments processed automatically each month.",
        },
      },
    },
  },
};

export default ambassador;
