import type { LanguageData } from "@/types/languageDataTypes";

const footer: LanguageData["public"]["footer"] = {
  brand: {
    name: { title: "LegalAI" },
    description: {
      title:
        "Transforming legal practice with AI-powered tools for document review, research, and workflow automation.",
    },
  },
  sections: {
    product: {
      title: { title: "Product" },
      links: {
        features: { title: "Features" },
        pricing: { title: "Pricing" },
        security: { title: "Security" },
        api: { title: "API" },
      },
    },
    company: {
      title: { title: "Company" },
      links: {
        about: { title: "About" },
        careers: { title: "Careers" },
        blog: { title: "Blog" },
        press: { title: "Press" },
      },
    },
    support: {
      title: { title: "Support" },
      links: {
        helpCenter: { title: "Help Center" },
        contact: { title: "Contact" },
        privacy: { title: "Privacy" },
        terms: { title: "Terms" },
      },
    },
  },
  copyright: { title: "© 2024 LegalAI. All rights reserved." },
  socialLinks: {
    twitter: { title: "Twitter" },
    linkedin: { title: "LinkedIn" },
  },
};

export default footer;
