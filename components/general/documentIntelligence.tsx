"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  MessageSquare,
  Brain,
  Search,
  Database,
  Zap,
} from "lucide-react";
import { Button } from "../ui/button";
import { useLanguageData } from "@/hooks/useLanguageData";
import type { LanguageData } from "@/types/languageDataTypes";

// Default values for SSR/SEO
const DEFAULT_DOCUMENT_INTELLIGENCE: LanguageData["public"]["documentIntelligence"] =
  {
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

// Animation variants with proper typing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

const featureVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
} as const;

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
} as const;

const badgeVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      delay: 0.8,
      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  },
} as const;

const DocumentIntelligenceDemo = () => {
  const { langData } = useLanguageData();
  const t =
    langData?.public.documentIntelligence ?? DEFAULT_DOCUMENT_INTELLIGENCE;

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  // Create arrays from the localized data
  const intelligenceFeatures = [
    {
      icon: Upload,
      title: t.features.smartUpload.title.title,
      description: t.features.smartUpload.description.title,
    },
    {
      icon: Database,
      title: t.features.dataExtraction.title.title,
      description: t.features.dataExtraction.description.title,
    },
    {
      icon: MessageSquare,
      title: t.features.contextualQA.title.title,
      description: t.features.contextualQA.description.title,
    },
    {
      icon: Search,
      title: t.features.deepSearch.title.title,
      description: t.features.deepSearch.description.title,
    },
  ];

  const sampleQuestions = [
    t.sampleQuestions.keyTerms.title,
    t.sampleQuestions.expiration.title,
    t.sampleQuestions.parties.title,
    t.sampleQuestions.termination.title,
  ];

  const sampleAnswers = [
    t.sampleAnswers.keyTerms.title,
    t.sampleAnswers.expiration.title,
    t.sampleAnswers.parties.title,
    t.sampleAnswers.termination.title,
  ];

  const handleQuestionClick = (index: number) => {
    if (activeQuestion === index && showAnswer) return;

    setActiveQuestion(index);
    setShowAnswer(false);
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setShowAnswer(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Content Section - Left */}
          <motion.div variants={itemVariants}>
            <motion.div className="mb-12" variants={itemVariants}>
              <motion.h2
                className="text-5xl font-bold text-gray-900 mb-6 font-serif"
                variants={itemVariants}
              >
                {t.title.title}
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-3 mb-6"
                variants={itemVariants}
              >
                {t.description.title}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button className="inline-flex items-center justify-center p-5 text-base font-medium rounded-lg cursor-pointer">
                    {t.primaryButtonText.title}
                  </Button>
                </motion.div>

                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="hover:text-foreground cursor-pointer p-5"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {t.secondaryButtonText.title}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {intelligenceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  variants={featureVariants}
                >
                  <motion.div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Demo Section - Right */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.div
              className="bg-card rounded-2xl border border-card-border overflow-hidden floating-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Upload Area */}
              <motion.div
                className="p-6 border-b border-card-border"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="bg-surface rounded-lg border-2 border-dashed border-card-border p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  whileHover={{
                    borderColor: "var(--primary)",
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  </motion.div>
                  <p className="text-foreground font-medium mb-2">
                    {t.uploadArea.title.title}
                  </p>
                  <p className="text-body text-sm">
                    {t.uploadArea.subtitle.title}
                  </p>

                  {/* Sample uploaded document */}
                  <motion.div
                    className="mt-4 inline-flex items-center gap-2 bg-primary/5 px-3 py-2 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {t.uploadArea.sampleFileName.title}
                    </span>
                    <motion.span
                      className="text-xs text-muted-foreground"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {t.uploadArea.processedStatus.title}
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Q&A Interface */}
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="flex items-center gap-2 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Brain className="h-5 w-5 text-primary" />
                  </motion.div>
                  <h4 className="font-serif text-lg font-semibold text-foreground">
                    {t.qaSection.title.title}
                  </h4>
                </motion.div>

                {/* Sample Questions */}
                <motion.div
                  className="space-y-2 mb-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {sampleQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuestionClick(index)}
                      className={`w-full text-left p-3 rounded-lg border transition-all text-sm cursor-pointer ${
                        activeQuestion === index
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-card-border bg-surface hover:border-primary/30 text-foreground"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.1 + 0.5,
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                        },
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.1 },
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {question}
                    </motion.button>
                  ))}
                </motion.div>

                {/* Answer Area */}
                <motion.div
                  className="bg-surface rounded-lg p-4 border border-card-border min-h-[120px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.div
                    className="flex items-center gap-2 mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {t.qaSection.responseLabel.title}
                    </span>
                  </motion.div>

                  {isProcessing ? (
                    <motion.div
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="flex space-x-1">
                        {[0, 1, 2].map((index) => (
                          <motion.div
                            key={index}
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-body text-sm">
                        {t.qaSection.processingText.title}
                      </span>
                    </motion.div>
                  ) : showAnswer ? (
                    <motion.p
                      className="text-body text-sm leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {sampleAnswers[activeQuestion]}
                    </motion.p>
                  ) : (
                    <p className="text-muted-foreground text-sm italic">
                      {t.qaSection.placeholderText.title}
                    </p>
                  )}
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-3 mt-6 "
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {[
                    {
                      icon: Zap,
                      label: t.stats.instant.label.title,
                      sublabel: t.stats.instant.sublabel.title,
                    },
                    {
                      label: t.stats.accuracy.label.title,
                      sublabel: t.stats.accuracy.sublabel.title,
                    },
                    {
                      label: t.stats.fileTypes.label.title,
                      sublabel: t.stats.fileTypes.sublabel.title,
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-3 bg-primary/5 rounded-lg flex flex-col items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.1 + 0.8,
                          type: "spring",
                          stiffness: 120,
                          damping: 15,
                        },
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <div className="text-lg font-bold text-primary flex flex-col items-center justify-center">
                        {stat.icon ? (
                          <>
                            <stat.icon className="h-4 w-4 mx-auto mb-1" />
                            {stat.label}
                          </>
                        ) : (
                          stat.label
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.sublabel}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Badge */}
            <motion.div
              className="absolute -top-4 -left-4"
              variants={badgeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.span
                className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium "
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(var(--primary-rgb), 0.4)",
                    "0 0 0 10px rgba(var(--primary-rgb), 0)",
                  ],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              >
                {t.badge.text.title}
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentIntelligenceDemo;
