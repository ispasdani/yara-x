import type { LanguageData } from "@/types/languageDataTypes";

const ambassador: LanguageData["public"]["ambassador"] = {
  badge: { title: "Program de parteneriat" },
  title: { title: "Devino ambasador" },
  description: {
    title:
      "Fii partenerul nostru pentru a revoluționa serviciile juridice. Câștigă comisioane semnificative în timp ce ajuți firmele de avocatură și profesioniștii juridici să valorifice tehnologia AI de ultimă generație.",
  },
  stats: {
    averageDealSize: { title: "Dimensiunea medie a tranzacției" },
    commissionPerDeal: { title: "Comision per tranzacție" },
    activeAmbassadors: { title: "Ambasadori activi" },
    successRate: { title: "Rată de succes" },
  },
  benefits: {
    title: { title: "De ce să colaborezi cu noi?" },
    commission: {
      title: { title: "Comision 30%" },
      description: {
        title:
          "Câștigă un comision recurent de 30% pentru fiecare client recomandat care devine plătitor",
      },
    },
    growingMarket: {
      title: { title: "Piață în creștere" },
      description: {
        title:
          "Tehnologia juridică este în plină expansiune – accesează o piață de peste 30 mld. $ cu cerere ridicată pentru soluții AI",
      },
    },
    partnershipSupport: {
      title: { title: "Suport pentru parteneriat" },
      description: {
        title:
          "Primești suport dedicat, materiale de marketing și oportunități de co-vânzare",
      },
    },
    exclusiveBenefits: {
      title: { title: "Beneficii exclusive" },
      description: {
        title:
          "Acces la funcționalități beta, suport prioritar și evenimente dedicate ambasadorilor",
      },
    },
  },
  idealProfile: {
    title: { title: "Profilul ideal al ambasadorului" },
    items: [
      { title: "• Rețea existentă în servicii juridice" },
      { title: "• Experiență în vânzări B2B sau consultanță" },
      { title: "• Înțelegerea fluxurilor de lucru juridice" },
      { title: "• Pasiune pentru tehnologia juridică" },
    ],
  },
  form: {
    title: { title: "Aplică pentru a deveni ambasador" },
    description: {
      title:
        "Spune-ne câteva lucruri despre tine și hai să explorăm împreună această oportunitate de parteneriat.",
    },
    fields: {
      fullName: { title: "Nume complet *" },
      email: { title: "Adresă de email *" },
      company: { title: "Companie/Organizație" },
      experience: { title: "Povestește-ne despre rețeaua și experiența ta *" },
    },
    placeholders: {
      name: { title: "John Smith" },
      email: { title: "john@company.com" },
      company: { title: "Numele companiei tale" },
      experience: {
        title:
          "Descrie-ți conexiunile în industria juridică, experiența relevantă și de ce ai fi un ambasador excelent...",
      },
    },
    submitButton: { title: "Trimite aplicația" },
    contact: {
      email: { title: "partnerships@company.com" },
      phone: { title: "+1 (555) 123-LEGAL" },
    },
  },
  howItWorks: {
    title: { title: "Cum funcționează programul nostru de ambasadori" },
    steps: {
      apply: {
        title: { title: "Aplică și primește aprobarea" },
        description: {
          title:
            "Trimite aplicația ta și primește aprobarea în 48 de ore. Primești linkuri unice de tracking pentru recomandări și materiale.",
        },
      },
      refer: {
        title: { title: "Recomandă și conectează" },
        description: {
          title:
            "Prezintă profesioniști juridici calificați platformei noastre. Ne ocupăm noi de demo-uri, onboarding și suport tehnic.",
        },
      },
      earn: {
        title: { title: "Câștigă comisioane" },
        description: {
          title:
            "Primești comision recurent lunar de 30% pentru fiecare recomandare reușită. Plățile sunt procesate automat în fiecare lună.",
        },
      },
    },
  },
};

export default ambassador;
