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
    documentIntelligence: {
      title: { title: string };
      description: { title: string };
      primaryButtonText: { title: string };
      secondaryButtonText: { title: string };
      features: {
        smartUpload: {
          title: { title: string };
          description: { title: string };
        };
        dataExtraction: {
          title: { title: string };
          description: { title: string };
        };
        contextualQA: {
          title: { title: string };
          description: { title: string };
        };
        deepSearch: {
          title: { title: string };
          description: { title: string };
        };
      };
      uploadArea: {
        title: { title: string };
        subtitle: { title: string };
        sampleFileName: { title: string };
        processedStatus: { title: string };
      };
      qaSection: {
        title: { title: string };
        responseLabel: { title: string };
        processingText: { title: string };
        placeholderText: { title: string };
      };
      sampleQuestions: {
        keyTerms: { title: string };
        expiration: { title: string };
        parties: { title: string };
        termination: { title: string };
      };
      sampleAnswers: {
        keyTerms: { title: string };
        expiration: { title: string };
        parties: { title: string };
        termination: { title: string };
      };
      stats: {
        instant: {
          label: { title: string };
          sublabel: { title: string };
        };
        accuracy: {
          label: { title: string };
          sublabel: { title: string };
        };
        fileTypes: {
          label: { title: string };
          sublabel: { title: string };
        };
      };
      badge: {
        text: { title: string };
      };
    };
    textEditor: {
      badge: { title: string };
      title: { title: string };
      description: { title: string };
      demoTabs: {
        editing: { title: string };
        ai: { title: string };
        formatting: { title: string };
      };
      editing: {
        documentTitle: { title: string };
        copyButton: { title: string };
        aiChatButton: { title: string };
        sectionTitle: { title: string };
        contractText: { title: string };
        sellerText: { title: string };
        helpText: { title: string };
      };
      ai: {
        editorTitle: { title: string };
        assistantTitle: { title: string };
        selectedText: { title: string };
        makeFormalBadge: { title: string };
        expandBadge: { title: string };
        fixGrammarBadge: { title: string };
        userMessage: { title: string };
        aiResponse: { title: string };
        chatPlaceholder: { title: string };
      };
      formatting: {
        title: { title: string };
        contractTitle: { title: string };
        contractSubtitle: { title: string };
        effectiveDate: { title: string };
        documentType: { title: string };
        draftStatus: { title: string };
        finalStatus: { title: string };
        partiesTitle: { title: string };
        seller: { title: string };
        buyer: { title: string };
        contractTermsTitle: { title: string };
        paymentTerms: { title: string };
        deliveryTerms: { title: string };
        productSpecs: { title: string };
        moreInfo: { title: string };
        websiteLink: { title: string };
        features: {
          textFormatting: {
            title: { title: string };
            boldItalic: { title: string };
            customColors: { title: string };
            textAlignment: { title: string };
            fontSizes: { title: string };
          };
          advancedFeatures: {
            title: { title: string };
            lists: { title: string };
            hyperlinks: { title: string };
            undoRedo: { title: string };
            realtimePreview: { title: string };
          };
        };
      };
      cta: {
        buttonText: { title: string };
        subtitle: { title: string };
      };
    };
    workflowVideo: {
      title: { title: string };
      description: { title: string };
      primaryButtonText: { title: string };
      secondaryButtonText: { title: string };
      videoOverlay: {
        title: { title: string };
        subtitle: { title: string };
      };
      badge: { title: string };
      features: {
        visualBuilder: {
          title: { title: string };
          description: { title: string };
        };
        automatedTasks: {
          title: { title: string };
          description: { title: string };
        };
        teamCollaboration: {
          title: { title: string };
          description: { title: string };
        };
        timeTracking: {
          title: { title: string };
          description: { title: string };
        };
      };
    };
  };
}
