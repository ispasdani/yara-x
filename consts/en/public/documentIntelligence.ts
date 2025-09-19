import type { LanguageData } from "@/types/languageDataTypes";

const documentIntelligence: LanguageData["public"]["documentIntelligence"] = {
  title: { title: "Document Intelligence & AI Q&A" },
  description: {
    title:
      "Upload any legal document and instantly transform it into an intelligent, searchable knowledge base. Ask questions and get precise answers based on your content.",
  },
  primaryButtonText: { title: "Try Document Intelligence" },
  secondaryButtonText: { title: "View Demo" },
  features: {
    smartUpload: {
      title: { title: "Smart Document Upload" },
      description: {
        title:
          "Drag & drop any document format - PDFs, Word docs, contracts, and more",
      },
    },
    dataExtraction: {
      title: { title: "Intelligent Data Extraction" },
      description: {
        title:
          "AI automatically identifies and extracts key information, dates, parties, and clauses",
      },
    },
    contextualQA: {
      title: { title: "Contextual Q&A" },
      description: {
        title:
          "Ask questions about your documents and get instant, accurate answers",
      },
    },
    deepSearch: {
      title: { title: "Deep Document Search" },
      description: {
        title:
          "Search across all your documents with semantic understanding, not just keywords",
      },
    },
  },
  uploadArea: {
    title: { title: "Drop your legal documents here" },
    subtitle: { title: "PDF, DOCX, TXT files supported" },
    sampleFileName: { title: "service-agreement.pdf" },
    processedStatus: { title: "Processed" },
  },
  qaSection: {
    title: { title: "Ask Questions About Your Document" },
    responseLabel: { title: "AI Response" },
    processingText: { title: "Analyzing document..." },
    placeholderText: {
      title:
        "Select a question above to see how our AI analyzes your document",
    },
  },
  sampleQuestions: {
    keyTerms: { title: "What are the key terms in this contract?" },
    expiration: { title: "When does this agreement expire?" },
    parties: { title: "Who are the parties involved?" },
    termination: { title: "What are the termination clauses?" },
  },
  sampleAnswers: {
    keyTerms: {
      title:
        "Based on the uploaded contract, the key terms include: 24-month service period, $50,000 total value, quarterly payment schedule, and 30-day termination notice requirement.",
    },
    expiration: {
      title:
        "The agreement expires on December 31, 2025, with an automatic renewal clause for additional 12-month periods unless terminated.",
    },
    parties: {
      title:
        "The parties are: ABC Legal Services (Provider) and XYZ Corporation (Client), with signatures from authorized representatives.",
    },
    termination: {
      title:
        "Termination clauses allow either party to terminate with 30 days written notice. Early termination fees apply if terminated before 12 months.",
    },
  },
  stats: {
    instant: {
      label: { title: "Instant" },
      sublabel: { title: "Processing" },
    },
    accuracy: {
      label: { title: "99%" },
      sublabel: { title: "Accuracy" },
    },
    fileTypes: {
      label: { title: "50+" },
      sublabel: { title: "File Types" },
    },
  },
  badge: {
    text: { title: "New Feature" },
  },
};

export default documentIntelligence;