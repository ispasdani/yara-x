import type { LanguageData } from "@/types/languageDataTypes";

const pricing: LanguageData["public"]["pricing"] = {
  title: { title: "Prețuri simple și transparente" },
  description: {
    title:
      "Alege planul care se potrivește practicii tale juridice. Toate planurile includ funcțiile noastre AI de bază, fără taxe ascunse.",
  },
  mostPopularBadge: { title: "Cel mai popular" },
  getStartedButton: { title: "Începe acum" },
  contactSalesButton: { title: "Contactează vânzări" },
  trialText: {
    title:
      "Toate planurile includ o probă gratuită de 14 zile. Fără card de credit.",
  },
  plans: {
    oneTime: {
      name: { title: "Utilizare unică" },
      price: { title: "$3.99" },
      period: { title: "o singură dată" },
      description: {
        title:
          "Perfect pentru o întrebare juridică rapidă sau o revizuire de document",
      },
      features: [
        { title: "Consultație AI pentru o singură utilizare" },
        { title: "Analiza unui document" },
        { title: "Ghidare juridică de bază" },
        { title: "Asistență prin e-mail" },
        { title: "Fără expirare – folosește oricând" },
        { title: "Acces instant" },
      ],
    },
    starter: {
      name: { title: "Pachet Starter" },
      price: { title: "$29" },
      period: { title: "1.000 jetoane" },
      description: {
        title: "Perfect pentru a încerca asistentul nostru juridic AI",
      },
      features: [
        { title: "1.000 de jetoane AI (0,029 $/jeton)" },
        { title: "Analiză nelimitată de documente" },
        { title: "Cercetare juridică avansată" },
        { title: "Automatizare personalizată a fluxurilor" },
        { title: "Jetoane valabile 90 de zile" },
        { title: "Acces API" },
        { title: "Asistență prioritară" },
        { title: "Integrări personalizate" },
      ],
    },
    professional: {
      name: { title: "Pachet Profesional" },
      price: { title: "$99" },
      period: { title: "5.000 jetoane" },
      description: {
        title: "Valoare maximă pentru practici juridice aglomerate",
      },
      features: [
        { title: "5.000 de jetoane AI (0,0198 $/jeton)" },
        { title: "Analiză nelimitată de documente" },
        { title: "Cercetare juridică avansată" },
        { title: "Automatizare personalizată a fluxurilor" },
        { title: "Jetoane valabile 90 de zile" },
        { title: "Acces API" },
        { title: "Asistență prioritară" },
        { title: "Integrări personalizate" },
      ],
    },
    enterprise: {
      name: { title: "Enterprise" },
      price: { title: "Personalizat" },
      period: { title: "50.000+ jetoane" },
      description: { title: "Putere nelimitată pentru organizații mari" },
      features: [
        { title: "50.000+ jetoane (preț pe volum)" },
        { title: "Antrenare personalizată a modelului AI" },
        { title: "Infrastructură dedicată" },
        { title: "Fără expirarea jetoanelor" },
        { title: "Soluții white-label" },
        { title: "Instrumente avansate de conformitate" },
        { title: "Asistență telefonică 24/7" },
        { title: "Implementare on-premise" },
      ],
    },
  },
};

export default pricing;
