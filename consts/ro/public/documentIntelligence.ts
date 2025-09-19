import type { LanguageData } from "@/types/languageDataTypes";

const documentIntelligence: LanguageData["public"]["documentIntelligence"] = {
  title: { title: "Inteligență pentru Documente & Întrebări-Răspunsuri AI" },
  description: {
    title:
      "Încarcă orice document juridic și transformă-l instant într-o bază de cunoștințe inteligentă și căutabilă. Pune întrebări și primește răspunsuri precise bazate pe conținutul tău.",
  },
  primaryButtonText: { title: "Încearcă Document Intelligence" },
  secondaryButtonText: { title: "Vezi demonstrația" },
  features: {
    smartUpload: {
      title: { title: "Încărcare inteligentă de documente" },
      description: {
        title:
          "Trage și plasează orice format de document – PDF-uri, documente Word, contracte și altele",
      },
    },
    dataExtraction: {
      title: { title: "Extracție inteligentă de date" },
      description: {
        title:
          "AI identifică și extrage automat informațiile esențiale, datele, părțile și clauzele",
      },
    },
    contextualQA: {
      title: { title: "Întrebări & Răspunsuri contextuale" },
      description: {
        title:
          "Pune întrebări despre documentele tale și primește răspunsuri instante și exacte",
      },
    },
    deepSearch: {
      title: { title: "Căutare profundă în documente" },
      description: {
        title:
          "Caută în toate documentele tale cu înțelegere semantică, nu doar după cuvinte-cheie",
      },
    },
  },
  uploadArea: {
    title: { title: "Plasează aici documentele tale juridice" },
    subtitle: { title: "Fișiere PDF, DOCX, TXT acceptate" },
    sampleFileName: { title: "contract-de-servicii.pdf" },
    processedStatus: { title: "Procesat" },
  },
  qaSection: {
    title: { title: "Pune întrebări despre documentul tău" },
    responseLabel: { title: "Răspuns AI" },
    processingText: { title: "Se analizează documentul..." },
    placeholderText: {
      title:
        "Selectează o întrebare de mai sus pentru a vedea cum AI-ul nostru îți analizează documentul",
    },
  },
  sampleQuestions: {
    keyTerms: { title: "Care sunt termenii-cheie ai acestui contract?" },
    expiration: { title: "Când expiră acest acord?" },
    parties: { title: "Care sunt părțile implicate?" },
    termination: { title: "Care sunt clauzele de reziliere?" },
  },
  sampleAnswers: {
    keyTerms: {
      title:
        "Pe baza contractului încărcat, termenii-cheie includ: perioadă de servicii de 24 de luni, valoare totală de 50.000 $, grafic de plăți trimestrial și cerință de preaviz de reziliere de 30 de zile.",
    },
    expiration: {
      title:
        "Acordul expiră la 31 decembrie 2025, cu o clauză de reînnoire automată pentru perioade suplimentare de 12 luni, dacă nu este reziliat.",
    },
    parties: {
      title:
        "Părțile sunt: ABC Legal Services (Furnizor) și XYZ Corporation (Client), cu semnături din partea reprezentanților autorizați.",
    },
    termination: {
      title:
        "Clauzele de reziliere permit oricărei părți să rezilieze cu un preaviz scris de 30 de zile. Se aplică taxe de reziliere anticipată dacă rezilierea are loc înainte de 12 luni.",
    },
  },
  stats: {
    instant: {
      label: { title: "Instant" },
      sublabel: { title: "Procesare" },
    },
    accuracy: {
      label: { title: "99%" },
      sublabel: { title: "Acuratețe" },
    },
    fileTypes: {
      label: { title: "50+" },
      sublabel: { title: "Tipuri de fișiere" },
    },
  },
  badge: {
    text: { title: "Funcție nouă" },
  },
};

export default documentIntelligence;
