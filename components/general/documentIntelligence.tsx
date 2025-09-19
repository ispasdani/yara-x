"use client";

import { useState } from "react";
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
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content Section - Left */}
          <div>
            <div className="mb-12">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
                Document Intelligence{" "}
                <span className="font-sans text-2xl"> & </span>
                AI Q<span className="font-sans text-2xl">&</span>A
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-3 mb-6">
                Upload any legal document and instantly transform it into an
                intelligent, searchable knowledge base. Ask questions and get
                precise answers based on your content.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="inline-flex items-center justify-center p-5 text-base font-medium rounded-lg cursor-pointer">
                  Try Document Intelligence
                </Button>

                <Button
                  variant="outline"
                  className="hover:text-foreground cursor-pointer p-5"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  View Demo
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {intelligenceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Section - Right */}
          <div className="relative">
            <div className="bg-card rounded-2xl border border-card-border overflow-hidden floating-card">
              {/* Upload Area */}
              <div className="p-6 border-b border-card-border">
                <div className="bg-surface rounded-lg border-2 border-dashed border-card-border p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-foreground font-medium mb-2">
                    Drop your legal documents here
                  </p>
                  <p className="text-body text-sm">
                    PDF, DOCX, TXT files supported
                  </p>

                  {/* Sample uploaded document */}
                  <div className="mt-4 inline-flex items-center gap-2 bg-primary/5 px-3 py-2 rounded-lg">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      service-agreement.pdf
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Processed
                    </span>
                  </div>
                </div>
              </div>

              {/* Q&A Interface */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-5 w-5 text-primary" />
                  <h4 className="font-serif text-lg font-semibold text-foreground">
                    Ask Questions About Your Document
                  </h4>
                </div>

                {/* Sample Questions */}
                <div className="space-y-2 mb-6">
                  {sampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(index)}
                      className={`w-full text-left p-3 rounded-lg border transition-all text-sm cursor-pointer ${
                        activeQuestion === index
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-card-border bg-surface hover:border-primary/30 text-foreground"
                      }`}
                    >
                      {question}
                    </button>
                  ))}
                </div>

                {/* Answer Area */}
                <div className="bg-surface rounded-lg p-4 border border-card-border min-h-[120px]">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      AI Response
                    </span>
                  </div>

                  {isProcessing ? (
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <div
                          className="w-2 h-2 bg-primary rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-primary rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                      <span className="text-body text-sm">
                        Analyzing document...
                      </span>
                    </div>
                  ) : showAnswer ? (
                    <p className="text-body text-sm leading-relaxed">
                      {sampleAnswers[activeQuestion]}
                    </p>
                  ) : (
                    <p className="text-muted-foreground text-sm italic">
                      Select a question above to see how our AI analyzes your
                      document
                    </p>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="text-lg font-bold text-primary">
                      <Zap className="h-4 w-4 mx-auto mb-1" />
                      Instant
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Processing
                    </div>
                  </div>
                  <div className="text-center p-3 bg-primary/5 rounded-lg flex flex-col items-center justify-center">
                    <div className="text-lg font-bold text-primary">99%</div>
                    <div className="text-xs text-muted-foreground">
                      Accuracy
                    </div>
                  </div>
                  <div className="text-center p-3 bg-primary/5 rounded-lg flex flex-col items-center justify-center">
                    <div className="text-lg font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground">
                      File Types
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -top-4 -left-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                New Feature
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentIntelligenceDemo;
