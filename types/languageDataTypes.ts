export interface LanguageData {
  public: {
    hero: {
      floatingMessage: { title: string };
      title: { title: string };
      description: { title: string };
      chatPlaceholder: { title: string };
      chatGuidelines: { title: string };
      primaryButtonText: { title: string };
      secondaryButtonText: { title: string };
    }
    publicNav: {
      aboutUs: { title: string; href: string };
      pricing: { title: string; href: string };
      products: { title: string; href: string };
      dashboard: { title: string; href: string };
      agentMode: { title: string; href: string; description: string };
      askALegalQuestion: { title: string; href: string; description: string };
      documentAnalyzer: { title: string; href: string; description: string };
      generateDocument: { title: string; href: string; description: string };
    };
  };
}
