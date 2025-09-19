"use client";

import { useState } from "react";
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

const TextEditorPreview = () => {
  const { langData } = useLanguageData();
  const t = langData?.public.textEditor ?? DEFAULT_TEXT_EDITOR;
  const router = useRouter();
  const [selectedDemo, setSelectedDemo] = useState("editing");

  const handleTryEditor = () => {
    router.push(
      "/text-editor?template=Sales Contract (Goods)&category=Sales Documents and Forms&mode=edit"
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            {t.badge.title}
          </Badge>
          <h2 className="text-4xl font-bold mb-6">{t.title.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.description.title}
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted/50 rounded-lg p-1">
            <Button
              variant={selectedDemo === "editing" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedDemo("editing")}
              className="mx-1"
            >
              {t.demoTabs.editing.title}
            </Button>
            <Button
              variant={selectedDemo === "ai" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedDemo("ai")}
              className="mx-1"
            >
              {t.demoTabs.ai.title}
            </Button>
            <Button
              variant={selectedDemo === "formatting" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedDemo("formatting")}
              className="mx-1"
            >
              {t.demoTabs.formatting.title}
            </Button>
          </div>
        </div>

        {/* Demo Content */}
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 bg-background/80 backdrop-blur-sm">
            {selectedDemo === "editing" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <h3 className="text-lg font-semibold">
                        {t.editing.documentTitle.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      {t.editing.copyButton.title}
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      {t.editing.aiChatButton.title}
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-muted/20 min-h-[300px]">
                  <div className="space-y-4 text-sm">
                    <h4 className="font-semibold text-lg">
                      {t.editing.sectionTitle.title}
                    </h4>
                    <p>
                      {t.editing.contractText.title.split("[DD MMM YYYY]")[0]}
                      <span className="bg-primary/10 border-2 border-primary/30 rounded px-2 py-1">
                        [DD MMM YYYY]
                      </span>
                      {t.editing.contractText.title.split("[DD MMM YYYY]")[1]}
                    </p>
                    <p>
                      <strong>Seller:</strong>{" "}
                      <span className="bg-yellow-100 dark:bg-yellow-900/30">
                        {"{{Seller Legal Name}}"}
                      </span>
                      , a company organized under the laws of{" "}
                      {"{{Seller Jurisdiction}}"}, with registered address at{" "}
                      {"{{Seller Address}}"} (&quot;Seller&quot;).
                    </p>
                    <p className="text-muted-foreground italic">
                      {t.editing.helpText.title}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {selectedDemo === "ai" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Editor Side */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    {t.ai.editorTitle.title}
                  </h3>
                  <div className="border rounded-lg p-4 bg-muted/20 min-h-[200px]">
                    <p className="text-sm">
                      <span className="bg-primary/20 border border-primary/40 rounded px-1">
                        This Sales Contract establishes the terms
                      </span>{" "}
                      for the sale of goods between the parties...
                    </p>
                    <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">
                          {t.ai.selectedText.title}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="text-xs cursor-pointer hover:bg-primary/10"
                        >
                          {t.ai.makeFormalBadge.title}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-xs cursor-pointer hover:bg-primary/10"
                        >
                          {t.ai.expandBadge.title}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-xs cursor-pointer hover:bg-primary/10"
                        >
                          {t.ai.fixGrammarBadge.title}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Chat Side */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    {t.ai.assistantTitle.title}
                  </h3>
                  <div className="border rounded-lg p-4 bg-muted/20 h-[200px] flex flex-col">
                    <div className="flex-1 space-y-3 text-sm">
                      <div className="flex justify-end">
                        <div className="bg-primary text-primary-foreground p-2 rounded-lg max-w-[80%]">
                          {t.ai.userMessage.title}
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-muted p-2 rounded-lg max-w-[80%]">
                          {t.ai.aiResponse.title}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3 pt-3 border-t">
                      <div className="flex-1 bg-muted/50 rounded px-3 py-2 text-sm text-muted-foreground">
                        {t.ai.chatPlaceholder.title}
                      </div>
                      <Button size="sm">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedDemo === "formatting" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">
                  {t.formatting.title.title}
                </h3>

                {/* Enhanced Toolbar Demo */}
                <div className="flex flex-wrap items-center gap-2 p-3 bg-muted/30 rounded-lg border">
                  {/* Text Formatting */}
                  <div className="flex items-center gap-1 border-r border-border pr-2 mr-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Bold"
                    >
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Italic"
                    >
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Underline"
                    >
                      <Underline className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Strikethrough"
                    >
                      <Strikethrough className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Font Size & Color */}
                  <div className="flex items-center gap-1 border-r border-border pr-2 mr-2">
                    <select className="text-sm border border-input bg-background rounded px-2 py-1">
                      <option>Small</option>
                      <option>Normal</option>
                      <option>Large</option>
                      <option>X-Large</option>
                    </select>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Text Color"
                    >
                      <Palette className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Text Alignment */}
                  <div className="flex items-center gap-1 border-r border-border pr-2 mr-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Align Left"
                    >
                      <AlignLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Align Center"
                    >
                      <AlignCenter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Align Right"
                    >
                      <AlignRight className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Justify"
                    >
                      <AlignJustify className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Lists & Links */}
                  <div className="flex items-center gap-1 border-r border-border pr-2 mr-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Bullet List"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Numbered List"
                    >
                      <ListOrdered className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Insert Link"
                    >
                      <Link className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Undo/Redo & Copy */}
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Undo"
                    >
                      <Undo className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Redo"
                    >
                      <Redo className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 ml-2"
                      title="Copy"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Enhanced Formatted Text Example */}
                <div className="border rounded-lg p-6 bg-muted/20">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-center">
                      {t.formatting.contractTitle.title}
                    </h4>
                    <p className="text-center italic text-lg">
                      {t.formatting.contractSubtitle.title}
                    </p>

                    <div className="space-y-3">
                      <p>
                        <strong>{t.formatting.effectiveDate.title}</strong>{" "}
                        <u>March 15, 2024</u>
                      </p>
                      <p style={{ color: "#0066cc" }}>
                        <strong>{t.formatting.documentType.title}</strong>{" "}
                        <s>{t.formatting.draftStatus.title}</s>{" "}
                        <span className="text-green-600 font-semibold">
                          {t.formatting.finalStatus.title}
                        </span>
                      </p>

                      <div>
                        <p className="font-semibold">
                          {t.formatting.partiesTitle.title}
                        </p>
                        <ul className="list-disc ml-6 space-y-1 mt-2">
                          <li>
                            <strong>{t.formatting.seller.title}</strong>
                          </li>
                          <li>
                            <strong>{t.formatting.buyer.title}</strong>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold">
                          {t.formatting.contractTermsTitle.title}
                        </p>
                        <ol className="list-decimal ml-6 space-y-1 mt-2">
                          <li>{t.formatting.paymentTerms.title}</li>
                          <li>{t.formatting.deliveryTerms.title}</li>
                          <li>{t.formatting.productSpecs.title}</li>
                        </ol>
                      </div>

                      <p className="text-right italic">
                        {t.formatting.moreInfo.title}{" "}
                        <span className="text-blue-600 underline cursor-pointer">
                          {t.formatting.websiteLink.title}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">
                      {t.formatting.features.textFormatting.title.title}
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <Bold className="h-3 w-3" />{" "}
                        {t.formatting.features.textFormatting.boldItalic.title}
                      </li>
                      <li className="flex items-center gap-2">
                        <Palette className="h-3 w-3" />{" "}
                        {
                          t.formatting.features.textFormatting.customColors
                            .title
                        }
                      </li>
                      <li className="flex items-center gap-2">
                        <AlignCenter className="h-3 w-3" />{" "}
                        {
                          t.formatting.features.textFormatting.textAlignment
                            .title
                        }
                      </li>
                      <li className="flex items-center gap-2">
                        📏{" "}
                        {t.formatting.features.textFormatting.fontSizes.title}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">
                      {t.formatting.features.advancedFeatures.title.title}
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <List className="h-3 w-3" />{" "}
                        {t.formatting.features.advancedFeatures.lists.title}
                      </li>
                      <li className="flex items-center gap-2">
                        <Link className="h-3 w-3" />{" "}
                        {
                          t.formatting.features.advancedFeatures.hyperlinks
                            .title
                        }
                      </li>
                      <li className="flex items-center gap-2">
                        <Undo className="h-3 w-3" />{" "}
                        {t.formatting.features.advancedFeatures.undoRedo.title}
                      </li>
                      <li className="flex items-center gap-2">
                        ⚡{" "}
                        {
                          t.formatting.features.advancedFeatures.realtimePreview
                            .title
                        }
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button onClick={handleTryEditor} size="lg" className="px-8">
            {t.cta.buttonText.title}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {t.cta.subtitle.title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextEditorPreview;
