import publicNav from "./public/nav";

const ro = {
  ro: {
    public: {
      title: "Platformă AI Juridică",
      subtitle: "Asistență juridică bazată pe AI pentru contracte și documente",
      loginButton: "Conectare",
      signupButton: "Înregistrare",
      features: {
        feature1: "Analiză Contracte",
        feature2: "Asistent AI Juridic",
        feature3: "Management Documente",
      },
      publicNav
    },
    protected: {
      common: {
        dashboard: "Tablou de bord",
        settings: "Setări",
        logout: "Deconectare",
      },
      contractChecker: {
        title: "Verificator Contracte",
        description: "Analizează-ți contractele pentru posibile probleme.",
        uploadButton: "Încarcă Contract",
      },
      legalAI: {
        title: "Asistent AI Juridic",
        description:
          "Obține sfaturi juridice bazate pe AI și analiză de documente.",
        askQuestion: "Pune o întrebare juridică",
      },
      sidebarApplicationLabel: { title: "Aplicatii" },
      sidebarDashboard: { title: "Acasa", url: "/{lang}/dashboard" },
      sidebarContract: { title: "Analizeaza Contract", url: "/{lang}/contract-analyzer" },
      sidebarAskAQuestion: { title: "Pune o intrebare", url: "/{lang}/legal-question" },
      sidebarDocumentAnalyzer: { title: "Analizeaza Documente", url: "/{lang}/document-analyzer" },
      sidebarGenerateDocument: { title: "Redacteaza Documente", url: "/{lang}/generate-document" },
    },
  },
};

export default ro;
