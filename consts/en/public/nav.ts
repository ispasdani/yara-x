import type { LanguageData } from "@/types/languageDataTypes";

const publicNav: LanguageData["public"]["publicNav"] = {
  aboutUs: { title: "About Us", href: "#aboutUs" },
  pricing: { title: "Pricing", href: "/prices" },
  products: { title: "Products", href: "" },
  dashboard: { title: "Dashboard", href: "/{lang}/dashboard" },
  agentMode: {
    title: "Agent Mode",
    href: "/{lang}/contract-analyzer",
    description:
      "A modal dialog that interrupts the user with important content and waits for a response.",
  },
  askALegalQuestion: {
    title: "Ask a Legal Question",
    href: "/{lang}/legal-question",
    description:
      "Allows users to preview the content available behind a link.",
  },
  documentAnalyzer: {
    title: "Document Analyzer",
    href: "/{lang}/document-analyzer",
    description:
      "Displays a progress indicator for task completion, typically as a progress bar.",
  },
  generateDocument: {
    title: "Generate Document",
    href: "/{lang}/generate-document",
    description: "Separates content visually or semantically.",
  },
};

export default publicNav;
