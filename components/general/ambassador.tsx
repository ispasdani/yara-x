"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  DollarSign,
  TrendingUp,
  Handshake,
  Mail,
  Phone,
  Crown,
  Target,
} from "lucide-react";
import { useState } from "react";
import { useLanguageData } from "@/hooks/useLanguageData";
import type { LanguageData } from "@/types/languageDataTypes";

// Default values for SSR/SEO
const DEFAULT_AMBASSADOR: LanguageData["public"]["ambassador"] = {
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

const Ambassador = () => {
  const { langData } = useLanguageData();
  const t = langData?.public.ambassador ?? DEFAULT_AMBASSADOR;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Ambassador application:", formData);
  };

  // Create benefits array from the localized data
  const benefits = [
    {
      icon: DollarSign,
      title: t.benefits.commission.title.title,
      description: t.benefits.commission.description.title,
    },
    {
      icon: TrendingUp,
      title: t.benefits.growingMarket.title.title,
      description: t.benefits.growingMarket.description.title,
    },
    {
      icon: Handshake,
      title: t.benefits.partnershipSupport.title.title,
      description: t.benefits.partnershipSupport.description.title,
    },
    {
      icon: Crown,
      title: t.benefits.exclusiveBenefits.title.title,
      description: t.benefits.exclusiveBenefits.description.title,
    },
  ];

  // Create stats array from the localized data
  const stats = [
    { label: t.stats.averageDealSize.title, value: "$2,400/year" },
    { label: t.stats.commissionPerDeal.title, value: "$720/year" },
    { label: t.stats.activeAmbassadors.title, value: "150+" },
    { label: t.stats.successRate.title, value: "78%" },
  ];

  return (
    <section className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              {t.badge.title}
            </Badge>

            <h2 className="heading-section mb-6">{t.title.title}</h2>

            <p className="text-lead max-w-3xl mx-auto mb-8">
              {t.description.title}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-card transition-shadow"
              >
                <div className="text-2xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                {t.benefits.title.title}
              </h3>

              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Ideal Partner */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  {t.idealProfile.title.title}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {t.idealProfile.items.map((item, index) => (
                    <li key={index}>{item.title}</li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {t.form.title.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.form.description.title}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.form.fields.fullName.title}
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={t.form.placeholders.name.title}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.form.fields.email.title}
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={t.form.placeholders.email.title}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.form.fields.company.title}
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder={t.form.placeholders.company.title}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.form.fields.experience.title}
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t.form.placeholders.experience.title}
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full btn-hero">
                  <Handshake className="h-4 w-4 mr-2" />
                  {t.form.submitButton.title}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    {t.form.contact.email.title}
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    {t.form.contact.phone.title}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* How It Works */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
              {t.howItWorks.title.title}
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {t.howItWorks.steps.apply.title.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t.howItWorks.steps.apply.description.title}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {t.howItWorks.steps.refer.title.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t.howItWorks.steps.refer.description.title}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {t.howItWorks.steps.earn.title.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t.howItWorks.steps.earn.description.title}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambassador;
