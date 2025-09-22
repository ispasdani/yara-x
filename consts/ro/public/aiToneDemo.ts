import type { LanguageData } from "@/types/languageDataTypes";

const aiToneDemo: LanguageData["public"]["aiToneDemo"] = {
  title: { title: "Adaptare a tonului bazată pe AI pentru toată lumea" },
  description: {
    title:
      "Comută instant între limbaj profesional și simplu. AI-ul nostru asigură că documentele juridice sunt accesibile clienților, menținând în același timp acuratețea și conformitatea.",
  },
  primaryButtonText: { title: "Încearcă Comutatorul de Ton" },
  secondaryButtonText: { title: "Află mai multe" },
  badge: { title: "Cu AI" },
  features: {
    smartAdaptation: {
      title: { title: "Adaptare inteligentă a limbajului" },
      description: {
        title:
          "AI ajustează automat complexitatea în funcție de preferința de ton selectată",
      },
    },
    contentSimplification: {
      title: { title: "Simplificarea conținutului" },
      description: {
        title:
          "Jargonul juridic complex este transformat într-un limbaj clar și ușor de înțeles",
      },
    },
    clientFriendly: {
      title: { title: "Rezultat prietenos pentru clienți" },
      description: {
        title:
          "Face documentele juridice accesibile clienților fără pregătire juridică",
      },
    },
    contextPreservation: {
      title: { title: "Păstrarea contextului" },
      description: {
        title:
          "Menține acuratețea juridică, îmbunătățind în același timp lizibilitatea și înțelegerea",
      },
    },
  },
  demo: {
    documentToneTitle: { title: "Tonul documentului" },
    professionalLabel: { title: "Profesional" },
    simpleLabel: { title: "Simplu" },
    contractClauseLabel: { title: "Clauză contractuală" },
    professionalText: {
      title:
        "Partea menționată mai sus este de acord să despăgubească și să exonereze de răspundere contrapartea pentru orice pretenții, daune, pierderi, costuri și cheltuieli apărute din sau în legătură cu încălcarea oricăror declarații, garanții sau angajamente conținute în prezentul document.",
    },
    simpleText: {
      title:
        "Ești de acord să ne protejezi și să ne despăgubești dacă apar probleme sau costuri pentru că nu ai respectat termenii acestui acord. Asta include acoperirea oricăror onorarii legale sau daune pe care le-am putea suporta.",
    },
    readabilityScore: { title: "Scor de lizibilitate" },
    gradeLevel: { title: "Nivel de clasă" },
  },
};

export default aiToneDemo;
