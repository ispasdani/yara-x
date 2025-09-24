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
    aiToneDemo: {
      title: { title: string };
      description: { title: string };
      primaryButtonText: { title: string };
      secondaryButtonText: { title: string };
      badge: { title: string };
      features: {
        smartAdaptation: {
          title: { title: string };
          description: { title: string };
        };
        contentSimplification: {
          title: { title: string };
          description: { title: string };
        };
        clientFriendly: {
          title: { title: string };
          description: { title: string };
        };
        contextPreservation: {
          title: { title: string };
          description: { title: string };
        };
      };
      demo: {
        documentToneTitle: { title: string };
        professionalLabel: { title: string };
        simpleLabel: { title: string };
        contractClauseLabel: { title: string };
        professionalText: { title: string };
        simpleText: { title: string };
        readabilityScore: { title: string };
        gradeLevel: { title: string };
      };
    };
    cta: {
      title: { title: string };
      description: { title: string };
      primaryButtonText: { title: string };
      secondaryButtonText: { title: string };
      subtitle: { title: string };
    };
    pricing: {
      title: { title: string };
      description: { title: string };
      mostPopularBadge: { title: string };
      getStartedButton: { title: string };
      contactSalesButton: { title: string };
      trialText: { title: string };
      plans: {
        oneTime: {
          name: { title: string };
          price: { title: string };
          period: { title: string };
          description: { title: string };
          features: { title: string }[];
        };
        starter: {
          name: { title: string };
          price: { title: string };
          period: { title: string };
          description: { title: string };
          features: { title: string }[];
        };
        professional: {
          name: { title: string };
          price: { title: string };
          period: { title: string };
          description: { title: string };
          features: { title: string }[];
        };
        enterprise: {
          name: { title: string };
          price: { title: string };
          period: { title: string };
          description: { title: string };
          features: { title: string }[];
        };
      };
    };
    faq: {
      title: { title: string };
      description: { title: string };
      questions: {
        documentTypes: {
          question: { title: string };
          answer: { title: string };
        };
        accuracy: {
          question: { title: string };
          answer: { title: string };
        };
        dataSecurity: {
          question: { title: string };
          answer: { title: string };
        };
        legalAdvice: {
          question: { title: string };
          answer: { title: string };
        };
        subscriptionPlans: {
          question: { title: string };
          answer: { title: string };
        };
        oneTimeUse: {
          question: { title: string };
          answer: { title: string };
        };
      };
    };
    schedulingDemo: {
      badge: { title: string };
      title: { title: string };
      description: { title: string };
      sections: {
        scheduledTasks: { title: string };
        recentUpdates: { title: string };
      };
      buttons: {
        newSchedule: { title: string };
        viewAll: { title: string };
        editSchedule: { title: string };
        viewHistory: { title: string };
        runNow: { title: string };
        viewDetails: { title: string };
        createSchedule: { title: string };
        browseTemplates: { title: string };
      };
      status: {
        active: { title: string };
        paused: { title: string };
      };
      schedules: {
        gdpr: {
          title: { title: string };
          description: { title: string };
          frequency: { title: string };
          lastRun: { title: string };
          nextRun: { title: string };
          category: { title: string };
        };
        employment: {
          title: { title: string };
          description: { title: string };
          frequency: { title: string };
          lastRun: { title: string };
          nextRun: { title: string };
          category: { title: string };
        };
        tax: {
          title: { title: string };
          description: { title: string };
          frequency: { title: string };
          lastRun: { title: string };
          nextRun: { title: string };
          category: { title: string };
        };
      };
      updates: {
        gdprUpdate: {
          schedule: { title: string };
          update: { title: string };
          timestamp: { title: string };
        };
        employmentUpdate: {
          schedule: { title: string };
          update: { title: string };
          timestamp: { title: string };
        };
        taxUpdate: {
          schedule: { title: string };
          update: { title: string };
          timestamp: { title: string };
        };
      };
      stats: {
        title: { title: string };
        updatesFound: { title: string };
        highPriority: { title: string };
        successRate: { title: string };
      };
      cta: {
        title: { title: string };
        description: { title: string };
      };
      labels: {
        next: { title: string };
        category: { title: string };
        lastRun: { title: string };
        highPriority: { title: string };
        mediumPriority: { title: string };
      };
    };
    ambassador: {
      badge: { title: string };
      title: { title: string };
      description: { title: string };
      stats: {
        averageDealSize: { title: string };
        commissionPerDeal: { title: string };
        activeAmbassadors: { title: string };
        successRate: { title: string };
      };
      benefits: {
        title: { title: string };
        commission: {
          title: { title: string };
          description: { title: string };
        };
        growingMarket: {
          title: { title: string };
          description: { title: string };
        };
        partnershipSupport: {
          title: { title: string };
          description: { title: string };
        };
        exclusiveBenefits: {
          title: { title: string };
          description: { title: string };
        };
      };
      idealProfile: {
        title: { title: string };
        items: { title: string }[];
      };
      form: {
        title: { title: string };
        description: { title: string };
        fields: {
          fullName: { title: string };
          email: { title: string };
          company: { title: string };
          experience: { title: string };
        };
        placeholders: {
          name: { title: string };
          email: { title: string };
          company: { title: string };
          experience: { title: string };
        };
        submitButton: { title: string };
        contact: {
          email: { title: string };
          phone: { title: string };
        };
      };
      howItWorks: {
        title: { title: string };
        steps: {
          apply: {
            title: { title: string };
            description: { title: string };
          };
          refer: {
            title: { title: string };
            description: { title: string };
          };
          earn: {
            title: { title: string };
            description: { title: string };
          };
        };
      };
    };
    footer: {
      brand: {
        name: { title: string };
        description: { title: string };
      };
      sections: {
        product: {
          title: { title: string };
          links: {
            features: { title: string };
            pricing: { title: string };
            security: { title: string };
            api: { title: string };
          };
        };
        company: {
          title: { title: string };
          links: {
            about: { title: string };
            careers: { title: string };
            blog: { title: string };
            press: { title: string };
          };
        };
        support: {
          title: { title: string };
          links: {
            helpCenter: { title: string };
            contact: { title: string };
            privacy: { title: string };
            terms: { title: string };
          };
        };
      };
      copyright: { title: string };
      socialLinks: {
        twitter: { title: string };
        linkedin: { title: string };
      };
    };
  };
}
