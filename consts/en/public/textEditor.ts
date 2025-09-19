import type { LanguageData } from "@/types/languageDataTypes";

const textEditor: LanguageData["public"]["textEditor"] = {
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
        "Seller: {{Seller Legal Name}}, a company organized under the laws of {{Seller Jurisdiction}}, with registered address at {{Seller Address}} (\"Seller\").",
    },
    helpText: { title: "← Select any text to get AI suggestions for improvements" },
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
        textAlignment: { title: "Text alignment (left, center, right, justify)" },
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
    subtitle: { title: "Experience professional document editing with AI assistance" },
  },
};

export default textEditor;