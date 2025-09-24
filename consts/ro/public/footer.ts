import type { LanguageData } from "@/types/languageDataTypes";

const footer: LanguageData["public"]["footer"] = {
  brand: {
    name: { title: "LegalAI" },
    description: {
      title:
        "Transformăm practica juridică cu instrumente bazate pe AI pentru revizuirea documentelor, cercetare și automatizarea fluxurilor de lucru.",
    },
  },
  sections: {
    product: {
      title: { title: "Produs" },
      links: {
        features: { title: "Funcționalități" },
        pricing: { title: "Prețuri" },
        security: { title: "Securitate" },
        api: { title: "API" },
      },
    },
    company: {
      title: { title: "Companie" },
      links: {
        about: { title: "Despre" },
        careers: { title: "Cariere" },
        blog: { title: "Blog" },
        press: { title: "Presă" },
      },
    },
    support: {
      title: { title: "Asistență" },
      links: {
        helpCenter: { title: "Centru de ajutor" },
        contact: { title: "Contact" },
        privacy: { title: "Confidențialitate" },
        terms: { title: "Termeni" },
      },
    },
  },
  copyright: { title: "© 2024 LegalAI. Toate drepturile rezervate." },
  socialLinks: {
    twitter: { title: "Twitter" },
    linkedin: { title: "LinkedIn" },
  },
};

export default footer;
