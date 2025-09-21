import type { LanguageData } from "@/types/languageDataTypes";

const workflowVideo: LanguageData["public"]["workflowVideo"] = {
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

export default workflowVideo;
