import type { LanguageData } from "@/types/languageDataTypes";

const schedulingDemo: LanguageData["public"]["schedulingDemo"] = {
  badge: { title: "Monitorizare automată" },
  title: { title: "Nu rata niciodată actualizările juridice importante" },
  description: {
    title:
      "Configurează programe automate pentru a monitoriza legi, reglementări și subiecte de business specifice. Primești actualizări la timp, exact când ai nevoie.",
  },
  sections: {
    scheduledTasks: { title: "Sarcinile tale programate" },
    recentUpdates: { title: "Actualizări recente" },
  },
  buttons: {
    newSchedule: { title: "Program nou" },
    viewAll: { title: "Vezi tot" },
    editSchedule: { title: "Editează programul" },
    viewHistory: { title: "Vezi istoricul" },
    runNow: { title: "Rulează acum" },
    viewDetails: { title: "Vezi detalii" },
    createSchedule: { title: "Creează program" },
    browseTemplates: { title: "Răsfoiește șabloanele" },
  },
  status: {
    active: { title: "activ" },
    paused: { title: "în pauză" },
  },
  schedules: {
    gdpr: {
      title: { title: "Actualizări de conformitate GDPR" },
      description: {
        title:
          "Monitorizează modificările din reglementările europene privind protecția datelor",
      },
      frequency: { title: "Săptămânal – lunea, 9:00" },
      lastRun: { title: "Acum 2 zile" },
      nextRun: { title: "Peste 5 zile" },
      category: { title: "Dreptul protecției datelor" },
    },
    employment: {
      title: { title: "Modificări în dreptul muncii" },
      description: {
        title:
          "Urmărește noile reglementări ale muncii și politicile de la locul de muncă",
      },
      frequency: { title: "Bilunar – vinerea, 14:00" },
      lastRun: { title: "Acum 1 săptămână" },
      nextRun: { title: "Mâine" },
      category: { title: "Muncă" },
    },
    tax: {
      title: { title: "Actualizări ale Codului fiscal" },
      description: {
        title:
          "Rămâi informat despre modificările reglementărilor fiscale pentru afaceri",
      },
      frequency: { title: "Lunar – prima zi a lunii" },
      lastRun: { title: "Acum 3 săptămâni" },
      nextRun: { title: "Peste 1 săptămână" },
      category: { title: "Drept fiscal" },
    },
  },
  updates: {
    gdprUpdate: {
      schedule: { title: "Actualizări de conformitate GDPR" },
      update: {
        title:
          "Noi cerințe de consimțământ pentru urmărirea cookie-urilor implementate",
      },
      timestamp: { title: "Acum 2 ore" },
    },
    employmentUpdate: {
      schedule: { title: "Modificări în dreptul muncii" },
      update: {
        title:
          "Ghidurile privind munca de la distanță actualizate în 3 jurisdicții",
      },
      timestamp: { title: "Acum 1 zi" },
    },
    taxUpdate: {
      schedule: { title: "Actualizări ale Codului fiscal" },
      update: {
        title: "Modificări ale deducerilor fiscale corporative pentru T2 2024",
      },
      timestamp: { title: "Acum 3 zile" },
    },
  },
  stats: {
    title: { title: "Activitatea acestei luni" },
    updatesFound: { title: "Actualizări găsite" },
    highPriority: { title: "Prioritate ridicată" },
    successRate: { title: "Rată de succes" },
  },
  cta: {
    title: { title: "Fii cu un pas înaintea schimbărilor legislative" },
    description: {
      title:
        "Configurează primul tău program automat în mai puțin de 2 minute. Alege din peste 50 de șabloane predefinite sau creează reguli personalizate de monitorizare pentru nevoile afacerii tale.",
    },
  },
  labels: {
    next: { title: "Următorul:" },
    category: { title: "Categorie:" },
    lastRun: { title: "Ultima rulare:" },
    highPriority: { title: "prioritate ridicată" },
    mediumPriority: { title: "prioritate medie" },
  },
};

export default schedulingDemo;
