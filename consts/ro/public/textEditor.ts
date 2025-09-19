import type { LanguageData } from "@/types/languageDataTypes";

const textEditor: LanguageData["public"]["textEditor"] = {
  badge: { title: "Editor de text bazat pe AI" },
  title: { title: "Editare profesională de documente" },
  description: {
    title:
      "Editează-ți șabloanele juridice cu editorul nostru inteligent de text. Selectează textul, primește sugestii de la AI și formatează documentele cu instrumente de nivel profesional.",
  },
  demoTabs: {
    editing: { title: "Editare text" },
    ai: { title: "Asistent AI" },
    formatting: { title: "Formatare" },
  },
  editing: {
    documentTitle: { title: "Contract de vânzare (Bunuri)" },
    copyButton: { title: "Copiază" },
    aiChatButton: { title: "Chat AI" },
    sectionTitle: { title: "1. Părți & Data intrării în vigoare" },
    contractText: {
      title:
        'Acest Contract de vânzare („Acordul”) este încheiat la data [DD MMM YYYY] („Data intrării în vigoare”) între:',
    },
    sellerText: {
      title:
        "Vânzător: {{Seller Legal Name}}, societate organizată în conformitate cu legile {{Seller Jurisdiction}}, cu sediul înregistrat la {{Seller Address}} („Vânzătorul”).",
    },
    helpText: { title: "← Selectează orice text pentru a primi sugestii AI de îmbunătățire" },
  },
  ai: {
    editorTitle: { title: "Editor de documente" },
    assistantTitle: { title: "Asistent AI" },
    selectedText: { title: 'Selectat: "Acest Contract de vânzare stabilește..."' },
    makeFormalBadge: { title: "Formalizează" },
    expandBadge: { title: "Extinde" },
    fixGrammarBadge: { title: "Corectează gramatica" },
    userMessage: { title: "Fă acest text mai profesional" },
    aiResponse: {
      title:
        'Iată o versiune mai profesională: "Acest Acord de vânzare stabilește în mod cuprinzător termenii și condițiile..."',
    },
    chatPlaceholder: { title: "Cere-i AI-ului să te ajute cu textul..." },
  },
  formatting: {
    title: { title: "Formatare Rich Text" },
    contractTitle: { title: "CONTRACT DE VÂNZARE (BUNURI)" },
    contractSubtitle: { title: "Șablon profesional de document" },
    effectiveDate: { title: "Data intrării în vigoare:" },
    documentType: { title: "Tipul documentului:" },
    draftStatus: { title: "Ciornă" },
    finalStatus: { title: "Final" },
    partiesTitle: { title: "Părțile implicate în acest acord:" },
    seller: { title: "Vânzător: ABC Corporation Ltd." },
    buyer: { title: "Cumpărător: XYZ Limited Partnership" },
    contractTermsTitle: { title: "Termenii contractului (listă numerotată):" },
    paymentTerms: { title: "Termeni și condiții de plată" },
    deliveryTerms: { title: "Aranjamente de livrare și expediere" },
    productSpecs: { title: "Specificații ale produsului și garanții" },
    moreInfo: { title: "Pentru mai multe informații, vizitează:" },
    websiteLink: { title: "www.contracthelp.com" },
    features: {
      textFormatting: {
        title: { title: "Formatare text" },
        boldItalic: { title: "Aldin, italic, subliniere, tăiere" },
        customColors: { title: "Culori personalizate ale textului" },
        textAlignment: { title: "Alinierea textului (stânga, centru, dreapta, justificat)" },
        fontSizes: { title: "Multiple mărimi de font" },
      },
      advancedFeatures: {
        title: { title: "Funcții avansate" },
        lists: { title: "Liste cu puncte și numerotate" },
        hyperlinks: { title: "Inserare și editare hyperlink-uri" },
        undoRedo: { title: "Funcționalitate undo/redo" },
        realtimePreview: { title: "Previzualizare în timp real a formatării" },
      },
    },
  },
  cta: {
    buttonText: { title: "Încearcă Editorul de Text" },
    subtitle: { title: "Experimentează editarea profesională a documentelor cu asistență AI" },
  },
};

export default textEditor;
