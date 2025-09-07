import type { LanguageData } from "@/types/languageDataTypes";

const hero: LanguageData["public"]["hero"] = {
  floatingMessage: { title: "AI-powered legal automation" },
  title: { title: "Law Made Simple with AI" },
  description: {
    title:
      "Transform your legal practice with AI-powered document review, intelligent research, and automated workflows without compromising precision.",
  },
  chatPlaceholder: { title: "Ask anything about legal documents or upload a file..." },
  chatGuidelines: { title: "Press Enter to send • Shift+Enter for a new line" },
  primaryButtonText: { title: "Book a Demo" },
  secondaryButtonText: { title: "Watch Overview" },
};

export default hero;
