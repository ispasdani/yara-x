"use client";

import { Play, Workflow, Zap, Users, Clock } from "lucide-react";
import { useLanguageData } from "@/hooks/useLanguageData";
import type { LanguageData } from "@/types/languageDataTypes";
import { Button } from "../ui/button";

// Default values for SSR/SEO
const DEFAULT_WORKFLOW_VIDEO: LanguageData["public"]["workflowVideo"] = {
  title: { title: "Create Custom Legal Workflows with AI" },
  description: {
    title:
      "Our intelligent workflow agent understands your legal processes and automatically creates custom workflows tailored to your practice areas and client needs.",
  },
  primaryButtonText: { title: "Watch Demo" },
  secondaryButtonText: { title: "Try Workflow Builder" },
  videoOverlay: {
    title: { title: "Legal Workflow Automation in Action" },
    subtitle: {
      title:
        "Watch how our AI agent creates custom workflows for your practice",
    },
  },
  badge: { title: "New Feature" },
  features: {
    visualBuilder: {
      title: { title: "Visual Workflow Builder" },
      description: {
        title:
          "Drag-and-drop interface to create complex legal workflows without coding",
      },
    },
    automatedTasks: {
      title: { title: "Automated Tasks" },
      description: {
        title:
          "Automate document review, client communications, and case management",
      },
    },
    teamCollaboration: {
      title: { title: "Team Collaboration" },
      description: {
        title:
          "Assign tasks, track progress, and collaborate seamlessly across your firm",
      },
    },
    timeTracking: {
      title: { title: "Time Tracking" },
      description: {
        title:
          "Built-in time tracking and billing integration for accurate client invoicing",
      },
    },
  },
};

const WorkflowVideo = () => {
  const { langData } = useLanguageData();
  const t = langData?.public.workflowVideo ?? DEFAULT_WORKFLOW_VIDEO;

  // Create features array from the localized data
  const workflowFeatures = [
    {
      icon: Workflow,
      title: t.features.visualBuilder.title.title,
      description: t.features.visualBuilder.description.title,
    },
    {
      icon: Zap,
      title: t.features.automatedTasks.title.title,
      description: t.features.automatedTasks.description.title,
    },
    {
      icon: Users,
      title: t.features.teamCollaboration.title.title,
      description: t.features.teamCollaboration.description.title,
    },
    {
      icon: Clock,
      title: t.features.timeTracking.title.title,
      description: t.features.timeTracking.description.title,
    },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Video Section */}
          <div className="relative">
            <div className="aspect-video bg-card rounded-2xl border border-card-border overflow-hidden floating-card">
              {/* Video Placeholder - Replace with actual video */}
              <div className="relative w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="relative z-10 bg-primary/10 backdrop-blur-sm rounded-full p-6 group-hover:bg-primary/20 transition-colors">
                  <Play className="h-12 w-12 text-primary fill-current" />
                </div>

                {/* Video Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-card-border">
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-1">
                      {t.videoOverlay.title.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t.videoOverlay.subtitle.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -top-4 -right-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                {t.badge.title}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <div className="mb-12">
              <h2 className="text-5xl font-bold leading-tight font-serif text-foreground">
                {t.title.title}
              </h2>
              <p className="text-lead mb-8">{t.description.title}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="inline-flex items-center justify-center p-5 text-base font-medium rounded-lg cursor-pointer">
                  {t.primaryButtonText.title}
                </Button>
                <Button
                  variant="outline"
                  className="hover:text-foreground cursor-pointer p-5"
                >
                  {t.secondaryButtonText.title}
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {workflowFeatures.map((feature, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default WorkflowVideo;
