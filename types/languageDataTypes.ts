export interface LanguageData {
  public: {
    title: string;
    subtitle: string;
    loginButton: string;
    signupButton: string;
    features: {
      feature1: string;
      feature2: string;
      feature3: string;
    };
    publicNav: {
      aboutUs: { title: string; href: string };
      pricing: { title: string; href: string };
      products: { title: string; href: string };
      dashboard: { title: string; href: string };
      contractAnalyzer: { title: string; href: string; description: string };
      askALegalQuestion: { title: string; href: string; description: string };
      documentAnalyzer: { title: string; href: string; description: string };
      generateDocument: { title: string; href: string; description: string };
    };
  };
  protected: {
    common: {
      dashboard: string;
      settings: string;
      logout: string;
    };
    contractChecker: {
      title: string;
      description: string;
      uploadButton: string;
    };
    legalAI: {
      title: string;
      description: string;
      askQuestion: string;
    };
    sidebarApplicationLabel: { title: string };
    sidebarDashboard: { title: string; url: string };
    sidebarContract: { title: string; url: string };
    sidebarAskAQuestion: { title: string; url: string };
    sidebarDocumentAnalyzer: { title: string; url: string };
    sidebarGenerateDocument: { title: string; url: string };
  };
}
