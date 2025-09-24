"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguageData } from "@/hooks/useLanguageData";
import type { LanguageData } from "@/types/languageDataTypes";

// Default values for SSR/SEO
const DEFAULT_FAQ: LanguageData["public"]["faq"] = {
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

const FAQ = () => {
  const { langData } = useLanguageData();
  const t = langData?.public.faq ?? DEFAULT_FAQ;
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Create FAQ data array from the localized data
  const faqData = [
    {
      question: t.questions.documentTypes.question.title,
      answer: t.questions.documentTypes.answer.title,
    },
    {
      question: t.questions.accuracy.question.title,
      answer: t.questions.accuracy.answer.title,
    },
    {
      question: t.questions.dataSecurity.question.title,
      answer: t.questions.dataSecurity.answer.title,
    },
    {
      question: t.questions.legalAdvice.question.title,
      answer: t.questions.legalAdvice.answer.title,
    },
    {
      question: t.questions.subscriptionPlans.question.title,
      answer: t.questions.subscriptionPlans.answer.title,
    },
    {
      question: t.questions.oneTimeUse.question.title,
      answer: t.questions.oneTimeUse.answer.title,
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-muted/30 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            {t.title.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.description.title}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <Collapsible
              key={index}
              open={openItems.includes(index)}
              onOpenChange={() => toggleItem(index)}
            >
              <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
                <CollapsibleTrigger className="w-full px-6 py-4 text-left hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between group cursor-pointer">
                  <h3 className="font-semibold text-lg font-serif group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-body text-muted-foreground ">
                      {faq.answer}
                    </p>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
