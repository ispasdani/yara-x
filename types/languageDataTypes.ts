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
    };
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
    interactiveWorkflowDemo: {
      nodeTitle: { title: string };
      nodeOneTitle: { title: string };
      runBtn: { title: string };
      saveBtn: { title: string };
      shareBtn: { title: string };
      nodeOneOptionOneTitle: { title: string };
      nodeOneOptionOneDescription: { title: string };
      nodeOneOptionTwoTitle: { title: string };
      nodeOneOptionTwoDescription: { title: string };
      nodeTwoTitle: { title: string };
      nodeTwoOptionOneTitle: { title: string };
      nodeTwoOptionOneDescription: { title: string };
      nodeTwoOptionTwoTitle: { title: string };
      nodeTwoOptionTwoDescription: { title: string };
      nodeThreeTitle: { title: string };
      nodeThreeOptionOneTitle: { title: string };
      nodeThreeOptionOneDescription: { title: string };
      nodeCardOneTitle: { title: string };
      nodeCardOneDescription: { title: string };
      nodeCardTwoTitle: { title: string };
      nodeCardTwoDescription: { title: string };
      nodeCardThreeTitle: { title: string };
      nodeCardThreeDescription: { title: string };
      nodeCardFourTitle: { title: string };
      nodeCardFourDescription: { title: string };
      nodeCardFiveTitle: { title: string };
      nodeCardFiveDescription: { title: string };
    };
    clientLogos: {
      clientLogosTitle: { title: string };
    };
    mainFeatures: {
      mainFeaturesTitle: { title: string };
      mainFeaturesDescription: { title: string };
      featureOneTitle: { title: string };
      featureOneDescription: { title: string };
      featureTwoTitle: { title: string };
      featureTwoDescription: { title: string };
      featureThreeTitle: { title: string };
      featureThreeDescription: { title: string };
      featureFourTitle: { title: string };
      featureFourDescription: { title: string };
    };
    templates: {
      templatesTitle: { title: string };
      templatesDescription: { title: string };
      searchResultTitle: { title: string };
      searchResultDescriptionFirstWord: { title: string };
      searchResultDescriptionRestOfText: { title: string };
      actionBtnUseTemplate: { title: string };
      templatesAvailableMsg: { title: string };
      showLessBtn: { title: string };
      showMoreFirstBtn: { title: string };
      showMoreLastBtn: { title: string };
      moreCategoriesFirstBtn: { title: string };
      moreCategoriesLastBtn: { title: string };
      noSearchResultsTitle: { title: string };
      useTemplateBtn: { title: string };
      categories: {
        [key: string]: {
          title: string;
          iconKey?: string;
          templates: { title: string }[];
        };
      };
    };
  };
}
