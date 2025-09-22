import type { LanguageData } from "@/types/languageDataTypes";

const aiToneDemo: LanguageData["public"]["aiToneDemo"] = {
  title: { title: "AI-Powered Tone Adaptation for Everyone" },
  description: {
    title:
      "Switch between professional and simple language instantly. Our AI ensures legal documents are accessible to clients while maintaining accuracy and compliance.",
  },
  primaryButtonText: { title: "Try Tone Switcher" },
  secondaryButtonText: { title: "Learn More" },
  badge: { title: "AI Powered" },
  features: {
    smartAdaptation: {
      title: { title: "Smart Language Adaptation" },
      description: {
        title:
          "AI automatically adjusts complexity based on your selected tone preference",
      },
    },
    contentSimplification: {
      title: { title: "Content Simplification" },
      description: {
        title:
          "Complex legal jargon transformed into clear, understandable language",
      },
    },
    clientFriendly: {
      title: { title: "Client-Friendly Output" },
      description: {
        title:
          "Make legal documents accessible to clients without legal backgrounds",
      },
    },
    contextPreservation: {
      title: { title: "Context Preservation" },
      description: {
        title:
          "Maintains legal accuracy while improving readability and comprehension",
      },
    },
  },
  demo: {
    documentToneTitle: { title: "Document Tone" },
    professionalLabel: { title: "Professional" },
    simpleLabel: { title: "Simple" },
    contractClauseLabel: { title: "Contract Clause" },
    professionalText: {
      title:
        "The aforementioned party hereby agrees to indemnify and hold harmless the counterparty from any and all claims, damages, losses, costs, and expenses arising from or relating to the breach of any representations, warranties, or covenants contained herein.",
    },
    simpleText: {
      title:
        "You agree to protect and compensate us if any problems or costs arise because you didn't follow the terms of this agreement. This includes covering any legal fees or damages we might face.",
    },
    readabilityScore: { title: "Readability Score" },
    gradeLevel: { title: "Grade Level" },
  },
};

export default aiToneDemo;
