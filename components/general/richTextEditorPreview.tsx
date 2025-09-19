"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Link,
  Palette,
  Undo,
  Redo,
  MessageSquare,
  Send,
  Sparkles,
  Copy,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguageData } from "@/hooks/useLanguageData";
import type { LanguageData } from "@/types/languageDataTypes";

// Default values for SSR/SEO
const DEFAULT_TEXT_EDITOR: LanguageData["public"]["textEditor"] = {
  badge: { title: "AI-Powered Text Editor" },
  title: { title: "Professional Document Editing" },
  description: {
    title:
      "Edit your legal templates with our intelligent text editor. Select text, get AI suggestions, and format documents with professional-grade tools.",
  },
  demoTabs: {
    editing: { title: "Text Editing" },
    ai: { title: "AI Assistant" },
    formatting: { title: "Formatting" },
  },
  editing: {
    documentTitle: { title: "Sales Contract (Goods)" },
    copyButton: { title: "Copy" },
    aiChatButton: { title: "AI Chat" },
    sectionTitle: { title: "1. Parties & Effective Date" },
    contractText: {
      title:
        'This Sales Contract (the "Agreement") is made as of [DD MMM YYYY] (the "Effective Date") by and between:',
    },
    sellerText: {
      title:
        'Seller: {{Seller Legal Name}}, a company organized under the laws of {{Seller Jurisdiction}}, with registered address at {{Seller Address}} ("Seller").',
    },
    helpText: {
      title: "← Select any text to get AI suggestions for improvements",
    },
  },
  ai: {
    editorTitle: { title: "Document Editor" },
    assistantTitle: { title: "AI Assistant" },
    selectedText: { title: 'Selected: "This Sales Contract establishes..."' },
    makeFormalBadge: { title: "Make Formal" },
    expandBadge: { title: "Expand" },
    fixGrammarBadge: { title: "Fix Grammar" },
    userMessage: { title: "Make this more professional" },
    aiResponse: {
      title:
        'Here\'s a more professional version: "This Sales Agreement hereby establishes the comprehensive terms and conditions..."',
    },
    chatPlaceholder: { title: "Ask AI to help with your text..." },
  },
  formatting: {
    title: { title: "Rich Text Formatting" },
    contractTitle: { title: "SALES CONTRACT (GOODS)" },
    contractSubtitle: { title: "Professional Document Template" },
    effectiveDate: { title: "Effective Date:" },
    documentType: { title: "Document Type:" },
    draftStatus: { title: "Draft" },
    finalStatus: { title: "Final" },
    partiesTitle: { title: "Parties involved in this agreement:" },
    seller: { title: "Seller: ABC Corporation Ltd." },
    buyer: { title: "Buyer: XYZ Limited Partnership" },
    contractTermsTitle: { title: "Contract Terms (Numbered List):" },
    paymentTerms: { title: "Payment terms and conditions" },
    deliveryTerms: { title: "Delivery and shipping arrangements" },
    productSpecs: { title: "Product specifications and warranties" },
    moreInfo: { title: "For more information, visit:" },
    websiteLink: { title: "www.contracthelp.com" },
    features: {
      textFormatting: {
        title: { title: "Text Formatting" },
        boldItalic: { title: "Bold, italic, underline, strikethrough" },
        customColors: { title: "Custom text colors" },
        textAlignment: {
          title: "Text alignment (left, center, right, justify)",
        },
        fontSizes: { title: "Multiple font sizes" },
      },
      advancedFeatures: {
        title: { title: "Advanced Features" },
        lists: { title: "Bullet and numbered lists" },
        hyperlinks: { title: "Hyperlink insertion and editing" },
        undoRedo: { title: "Undo/redo functionality" },
        realtimePreview: { title: "Real-time formatting preview" },
      },
    },
  },
  cta: {
    buttonText: { title: "Try the Text Editor" },
    subtitle: {
      title: "Experience professional document editing with AI assistance",
    },
  },
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const slideInFromLeft = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const slideInFromRight = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const TextEditorPreview = () => {
  const { langData } = useLanguageData();
  const t = langData?.public.textEditor ?? DEFAULT_TEXT_EDITOR;
  const router = useRouter();
  const [selectedDemo, setSelectedDemo] = useState("editing");
  const [isTyping, setIsTyping] = useState(false);

  const handleTryEditor = () => {
    router.push(
      "/text-editor?template=Sales Contract (Goods)&category=Sales Documents and Forms&mode=edit"
    );
  };

  const handleTabChange = (tab: string) => {
    setSelectedDemo(tab);
    if (tab === "ai") {
      setTimeout(() => setIsTyping(true), 1000);
      setTimeout(() => setIsTyping(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="secondary" className="mb-4">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="h-4 w-4 mr-2" />
              </motion.div>
              {t.badge.title}
            </Badge>
          </motion.div>

          <motion.h2 className="text-4xl font-bold mb-6" variants={fadeInUp}>
            {t.title.title}
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {t.description.title}
          </motion.p>
        </motion.div>

        {/* Demo Tabs */}
        <motion.div
          className="flex justify-center mb-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="flex bg-muted/50 rounded-lg p-1">
            {["editing", "ai", "formatting"].map((tab) => (
              <motion.div
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={selectedDemo === tab ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleTabChange(tab)}
                  className="mx-1 relative"
                >
                  {selectedDemo === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-md"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">
                    {t.demoTabs[tab as keyof typeof t.demoTabs].title}
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Demo Content */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }}
          variants={scaleIn}
        >
          <Card className="p-8 bg-background/80 backdrop-blur-sm overflow-hidden">
            <AnimatePresence mode="wait">
              {selectedDemo === "editing" && (
                <motion.div
                  key="editing"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  <motion.div
                    className="flex items-center justify-between"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <motion.div
                      className="flex items-center gap-4"
                      variants={slideInFromLeft}
                    >
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 5,
                          }}
                        >
                          <FileText className="h-5 w-5 text-muted-foreground" />
                        </motion.div>
                        <h3 className="text-lg font-semibold">
                          {t.editing.documentTitle.title}
                        </h3>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex gap-2"
                      variants={slideInFromRight}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline" size="sm">
                          <Copy className="h-4 w-4 mr-2" />
                          {t.editing.copyButton.title}
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          {t.editing.aiChatButton.title}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="border rounded-lg p-6 bg-muted/20 min-h-[300px]"
                    variants={fadeInUp}
                  >
                    <div className="space-y-4 text-sm">
                      <motion.h4
                        className="font-semibold text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {t.editing.sectionTitle.title}
                      </motion.h4>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {t.editing.contractText.title.split("[DD MMM YYYY]")[0]}
                        <motion.span
                          className="bg-primary/10 border-2 border-primary/30 rounded px-2 py-1"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(59, 130, 246, 0.2)",
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          [DD MMM YYYY]
                        </motion.span>
                        {t.editing.contractText.title.split("[DD MMM YYYY]")[1]}
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <strong>Seller:</strong>{" "}
                        <motion.span
                          className="bg-yellow-100 dark:bg-yellow-900/30"
                          whileHover={{ scale: 1.02 }}
                        >
                          {"{{Seller Legal Name}}"}
                        </motion.span>
                        , a company organized under the laws of{" "}
                        {"{{Seller Jurisdiction}}"}, with registered address at{" "}
                        {"{{Seller Address}}"} (&quot;Seller&quot;).
                      </motion.p>

                      <motion.p
                        className="text-muted-foreground italic"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        {t.editing.helpText.title}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {selectedDemo === "ai" && (
                <motion.div
                  key="ai"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  {/* Editor Side */}
                  <motion.div
                    className="space-y-4"
                    variants={slideInFromLeft}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      {t.ai.editorTitle.title}
                    </h3>
                    <div className="border rounded-lg p-4 bg-muted/20 min-h-[200px]">
                      <motion.p
                        className="text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.span
                          className="bg-primary/20 border border-primary/40 rounded px-1"
                          animate={{
                            backgroundColor: [
                              "rgba(59, 130, 246, 0.2)",
                              "rgba(59, 130, 246, 0.3)",
                              "rgba(59, 130, 246, 0.2)",
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          This Sales Contract establishes the terms
                        </motion.span>{" "}
                        for the sale of goods between the parties...
                      </motion.p>

                      <motion.div
                        className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <Sparkles className="h-4 w-4 text-primary" />
                          </motion.div>
                          <span className="text-sm font-medium">
                            {t.ai.selectedText.title}
                          </span>
                        </div>
                        <motion.div
                          className="flex flex-wrap gap-2"
                          variants={staggerContainer}
                          initial="initial"
                          animate="animate"
                        >
                          {[
                            t.ai.makeFormalBadge.title,
                            t.ai.expandBadge.title,
                            t.ai.fixGrammarBadge.title,
                          ].map((badge) => (
                            <motion.div
                              key={badge}
                              variants={{
                                initial: { opacity: 0, y: 10 },
                                animate: { opacity: 1, y: 0 },
                              }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge
                                variant="outline"
                                className="text-xs cursor-pointer hover:bg-primary/10"
                              >
                                {badge}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* AI Chat Side */}
                  <motion.div
                    className="space-y-4"
                    variants={slideInFromRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      {t.ai.assistantTitle.title}
                    </h3>
                    <div className="border rounded-lg p-4 bg-muted/20 h-[200px] flex flex-col">
                      <div className="flex-1 space-y-3 text-sm">
                        <motion.div
                          className="flex justify-end"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="bg-primary text-primary-foreground p-2 rounded-lg max-w-[80%]">
                            {t.ai.userMessage.title}
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex justify-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className="bg-muted p-2 rounded-lg max-w-[80%] relative">
                            {isTyping && (
                              <motion.div
                                className="absolute right-2 top-2"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <div className="flex space-x-1">
                                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                                </div>
                              </motion.div>
                            )}
                            {t.ai.aiResponse.title}
                          </div>
                        </motion.div>
                      </div>

                      <motion.div
                        className="flex gap-2 mt-3 pt-3 border-t"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex-1 bg-muted/50 rounded px-3 py-2 text-sm text-muted-foreground">
                          {t.ai.chatPlaceholder.title}
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button size="sm">
                            <Send className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {selectedDemo === "formatting" && (
                <motion.div
                  key="formatting"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  <motion.h3
                    className="text-lg font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {t.formatting.title.title}
                  </motion.h3>

                  {/* Enhanced Toolbar Demo */}
                  <motion.div
                    className="flex flex-wrap items-center gap-2 p-3 bg-muted/30 rounded-lg border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {/* Toolbar buttons with stagger animation */}
                    {[
                      [Bold, Italic, Underline, Strikethrough],
                      [AlignLeft, AlignCenter, AlignRight, AlignJustify],
                      [List, ListOrdered, Link],
                      [Undo, Redo, Copy],
                    ].map((group, groupIndex) => (
                      <motion.div
                        key={groupIndex}
                        className="flex items-center gap-1 border-r border-border pr-2 mr-2 last:border-r-0 last:pr-0 last:mr-0"
                        variants={{
                          initial: { opacity: 0, x: -10 },
                          animate: { opacity: 1, x: 0 },
                        }}
                        transition={{ delay: groupIndex * 0.1 }}
                      >
                        {group.map((Icon, iconIndex) => (
                          <motion.div
                            key={iconIndex}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <Icon className="h-4 w-4" />
                            </Button>
                          </motion.div>
                        ))}
                      </motion.div>
                    ))}

                    <motion.select
                      className="text-sm border border-input bg-background rounded px-2 py-1"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option>Small</option>
                      <option>Normal</option>
                      <option>Large</option>
                      <option>X-Large</option>
                    </motion.select>

                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Palette className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Formatted Text Example */}
                  <motion.div
                    className="border rounded-lg p-6 bg-muted/20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <motion.div
                      className="space-y-4"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <motion.h4
                        className="text-2xl font-bold text-center"
                        variants={fadeInUp}
                      >
                        {t.formatting.contractTitle.title}
                      </motion.h4>

                      <motion.p
                        className="text-center italic text-lg"
                        variants={fadeInUp}
                      >
                        {t.formatting.contractSubtitle.title}
                      </motion.p>

                      <motion.div
                        className="space-y-3"
                        variants={staggerContainer}
                      >
                        {/* Animated content sections */}
                        <motion.p variants={fadeInUp}>
                          <strong>{t.formatting.effectiveDate.title}</strong>{" "}
                          <u>March 15, 2024</u>
                        </motion.p>

                        <motion.p
                          style={{ color: "#0066cc" }}
                          variants={fadeInUp}
                        >
                          <strong>{t.formatting.documentType.title}</strong>{" "}
                          <motion.s
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {t.formatting.draftStatus.title}
                          </motion.s>{" "}
                          <motion.span
                            className="text-green-600 font-semibold"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            {t.formatting.finalStatus.title}
                          </motion.span>
                        </motion.p>

                        <motion.div variants={fadeInUp}>
                          <p className="font-semibold">
                            {t.formatting.partiesTitle.title}
                          </p>
                          <ul className="list-disc ml-6 space-y-1 mt-2">
                            <motion.li
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 }}
                            >
                              <strong>{t.formatting.seller.title}</strong>
                            </motion.li>
                            <motion.li
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              <strong>{t.formatting.buyer.title}</strong>
                            </motion.li>
                          </ul>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                          <p className="font-semibold">
                            {t.formatting.contractTermsTitle.title}
                          </p>
                          <ol className="list-decimal ml-6 space-y-1 mt-2">
                            {[
                              t.formatting.paymentTerms.title,
                              t.formatting.deliveryTerms.title,
                              t.formatting.productSpecs.title,
                            ].map((term, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                              >
                                {term}
                              </motion.li>
                            ))}
                          </ol>
                        </motion.div>

                        <motion.p
                          className="text-right italic"
                          variants={fadeInUp}
                        >
                          {t.formatting.moreInfo.title}{" "}
                          <motion.span
                            className="text-blue-600 underline cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                          >
                            {t.formatting.websiteLink.title}
                          </motion.span>
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Feature Grid */}
                  <motion.div
                    className="grid grid-cols-2 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h4 className="font-semibold mb-3">
                        {t.formatting.features.textFormatting.title.title}
                      </h4>
                      <motion.ul
                        className="text-sm text-muted-foreground space-y-2"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        {[
                          {
                            icon: Bold,
                            text: t.formatting.features.textFormatting
                              .boldItalic.title,
                          },
                          {
                            icon: Palette,
                            text: t.formatting.features.textFormatting
                              .customColors.title,
                          },
                          {
                            icon: AlignCenter,
                            text: t.formatting.features.textFormatting
                              .textAlignment.title,
                          },
                          {
                            icon: "📏",
                            text: t.formatting.features.textFormatting.fontSizes
                              .title,
                          },
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center gap-2"
                            variants={{
                              initial: { opacity: 0, x: -20 },
                              animate: { opacity: 1, x: 0 },
                            }}
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                          >
                            {typeof item.icon === "string" ? (
                              <span>{item.icon}</span>
                            ) : (
                              <item.icon className="h-3 w-3" />
                            )}
                            {item.text}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <h4 className="font-semibold mb-3">
                        {t.formatting.features.advancedFeatures.title.title}
                      </h4>
                      <motion.ul
                        className="text-sm text-muted-foreground space-y-2"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        {[
                          {
                            icon: List,
                            text: t.formatting.features.advancedFeatures.lists
                              .title,
                          },
                          {
                            icon: Link,
                            text: t.formatting.features.advancedFeatures
                              .hyperlinks.title,
                          },
                          {
                            icon: Undo,
                            text: t.formatting.features.advancedFeatures
                              .undoRedo.title,
                          },
                          {
                            icon: "⚡",
                            text: t.formatting.features.advancedFeatures
                              .realtimePreview.title,
                          },
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center gap-2"
                            variants={{
                              initial: { opacity: 0, x: -20 },
                              animate: { opacity: 1, x: 0 },
                            }}
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                          >
                            {typeof item.icon === "string" ? (
                              <span>{item.icon}</span>
                            ) : (
                              <item.icon className="h-3 w-3" />
                            )}
                            {item.text}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center mt-12" initial="initial">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleTryEditor}
              size="lg"
              className="px-8 relative overflow-hidden group cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">{t.cta.buttonText.title}</span>
              <motion.div
                className="relative z-10 ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-muted-foreground mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t.cta.subtitle.title}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default TextEditorPreview;
