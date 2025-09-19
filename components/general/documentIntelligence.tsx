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

const intelligenceFeatures = [
  {
    icon: Upload,
    title: "Smart Document Upload",
    description:
      "Drag & drop any document format - PDFs, Word docs, contracts, and more",
  },
  {
    icon: Database,
    title: "Intelligent Data Extraction",
    description:
      "AI automatically identifies and extracts key information, dates, parties, and clauses",
  },
  {
    icon: MessageSquare,
    title: "Contextual Q&A",
    description:
      "Ask questions about your documents and get instant, accurate answers",
  },
  {
    icon: Search,
    title: "Deep Document Search",
    description:
      "Search across all your documents with semantic understanding, not just keywords",
  },
];

const sampleQuestions = [
  "What are the key terms in this contract?",
  "When does this agreement expire?",
  "Who are the parties involved?",
  "What are the termination clauses?",
];

const sampleAnswers = [
  "Based on the uploaded contract, the key terms include: 24-month service period, $50,000 total value, quarterly payment schedule, and 30-day termination notice requirement.",
  "The agreement expires on December 31, 2025, with an automatic renewal clause for additional 12-month periods unless terminated.",
  "The parties are: ABC Legal Services (Provider) and XYZ Corporation (Client), with signatures from authorized representatives.",
  "Termination clauses allow either party to terminate with 30 days written notice. Early termination fees apply if terminated before 12 months.",
];

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
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

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
                Document Intelligence{" "}
                <span className="font-sans text-2xl"> & </span>
                AI Q<span className="font-sans text-2xl">&</span>A
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-3 mb-6"
                variants={itemVariants}
              >
                Upload any legal document and instantly transform it into an
                intelligent, searchable knowledge base. Ask questions and get
                precise answers based on your content.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button className="inline-flex items-center justify-center p-5 text-base font-medium rounded-lg cursor-pointer">
                    Try Document Intelligence
                  </Button>
                </motion.div>

                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="hover:text-foreground cursor-pointer p-5"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    View Demo
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
                    Drop your legal documents here
                  </p>
                  <p className="text-body text-sm">
                    PDF, DOCX, TXT files supported
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
                      service-agreement.pdf
                    </span>
                    <motion.span
                      className="text-xs text-muted-foreground"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Processed
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
                    Ask Questions About Your Document
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
                      AI Response
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
                        Analyzing document...
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
                      Select a question above to see how our AI analyzes your
                      document
                    </p>
                  )}
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-3 mt-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {[
                    { icon: Zap, label: "Instant", sublabel: "Processing" },
                    { label: "99%", sublabel: "Accuracy" },
                    { label: "50+", sublabel: "File Types" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-3 bg-primary/5 rounded-lg"
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
                            Instant
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
                className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium"
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
                New Feature
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentIntelligenceDemo;
