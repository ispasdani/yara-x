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

const Ambassador = () => {
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

  const benefits = [
    {
      icon: DollarSign,
      title: "30% Commission",
      description:
        "Earn 30% recurring commission on every client you refer who becomes a paying customer",
    },
    {
      icon: TrendingUp,
      title: "Growing Market",
      description:
        "Legal tech is booming - tap into a $30B+ market with high demand for AI solutions",
    },
    {
      icon: Handshake,
      title: "Partnership Support",
      description:
        "Get dedicated support, marketing materials, and co-selling opportunities",
    },
    {
      icon: Crown,
      title: "Exclusive Benefits",
      description:
        "Access to beta features, priority support, and ambassador-only events",
    },
  ];

  const stats = [
    { label: "Average Deal Size", value: "$2,400/year" },
    { label: "Commission Per Deal", value: "$720/year" },
    { label: "Active Ambassadors", value: "150+" },
    { label: "Success Rate", value: "78%" },
  ];

  return (
    <section className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              Partnership Program
            </Badge>

            <h2 className="heading-section mb-6">Become an Ambassador</h2>

            <p className="text-lead max-w-3xl mx-auto mb-8">
              Partner with us to revolutionize legal services. Earn significant
              commissions while helping law firms and legal professionals
              leverage cutting-edge AI technology.
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
                Why Partner With Us?
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
                  Ideal Ambassador Profile
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Existing network in legal services</li>
                  <li>• Experience with B2B sales or consulting</li>
                  <li>• Understanding of legal workflows</li>
                  <li>• Passionate about legal technology</li>
                </ul>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Apply to Become an Ambassador
                </h3>
                <p className="text-muted-foreground">
                  Tell us about yourself and let&apos;s explore this partnership
                  opportunity together.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your network and experience *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your connections in the legal industry, relevant experience, and why you'd be a great ambassador..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full btn-hero">
                  <Handshake className="h-4 w-4 mr-2" />
                  Submit Application
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    partnerships@company.com
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    +1 (555) 123-LEGAL
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* How It Works */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
              How Our Ambassador Program Works
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Apply & Get Approved
                </h4>
                <p className="text-sm text-muted-foreground">
                  Submit your application and get approved within 48 hours.
                  Receive your unique referral tracking links and materials.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Refer & Connect
                </h4>
                <p className="text-sm text-muted-foreground">
                  Introduce qualified legal professionals to our platform.
                  We&apos;ll handle demos, onboarding, and technical support.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Earn Commissions
                </h4>
                <p className="text-sm text-muted-foreground">
                  Receive 30% monthly recurring commission for every successful
                  referral. Payments processed automatically each month.
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
