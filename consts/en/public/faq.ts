import type { LanguageData } from "@/types/languageDataTypes";

const faq: LanguageData["public"]["faq"] = {
  title: { title: "Frequently Asked Questions" },
  description: {
    title:
      "Get answers to common questions about our AI legal assistant and services.",
  },
  questions: {
    documentTypes: {
      question: { title: "What types of legal documents can I analyze?" },
      answer: {
        title:
          "Our AI can analyze contracts, agreements, terms of service, privacy policies, lease agreements, employment contracts, and many other legal documents. The system is trained on a wide range of legal document types.",
      },
    },
    accuracy: {
      question: { title: "How accurate is the AI legal analysis?" },
      answer: {
        title:
          "Our AI provides highly accurate analysis based on extensive training on legal documents and case law. However, it should be used as a tool to assist legal professionals, not replace them. For critical legal matters, always consult with a qualified attorney.",
      },
    },
    dataSecurity: {
      question: { title: "Is my data secure and confidential?" },
      answer: {
        title:
          "Yes, we take data security seriously. All documents and conversations are encrypted, and we never store your sensitive information longer than necessary. Your data is processed securely and in compliance with privacy regulations.",
      },
    },
    legalAdvice: {
      question: { title: "Can I get legal advice for my specific situation?" },
      answer: {
        title:
          "Our AI provides general legal information and document analysis, but it cannot provide specific legal advice for your unique situation. For personalized legal counsel, please consult with a licensed attorney in your jurisdiction.",
      },
    },
    subscriptionPlans: {
      question: { title: "What's included in the subscription plans?" },
      answer: {
        title:
          "Each plan includes different levels of AI tokens, document analysis capabilities, and support. The Professional plan includes advanced features like priority support, unlimited document storage, and access to specialized legal templates.",
      },
    },
    oneTimeUse: {
      question: { title: "How does the one-time use option work?" },
      answer: {
        title:
          "The $3.99 one-time use gives you a single AI consultation session where you can ask one legal question or analyze one document. It's perfect for quick legal guidance without a monthly commitment.",
      },
    },
  },
};

export default faq;
