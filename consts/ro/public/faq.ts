import type { LanguageData } from "@/types/languageDataTypes";

const faq: LanguageData["public"]["faq"] = {
  title: { title: "Întrebări frecvente" },
  description: {
    title:
      "Găsește răspunsuri la întrebări comune despre asistentul nostru juridic AI și servicii.",
  },
  questions: {
    documentTypes: {
      question: { title: "Ce tipuri de documente juridice pot analiza?" },
      answer: {
        title:
          "AI-ul nostru poate analiza contracte, acorduri, termeni de utilizare, politici de confidențialitate, contracte de închiriere, contracte de muncă și multe alte tipuri de documente juridice. Sistemul este instruit pe o gamă largă de tipuri de documente juridice.",
      },
    },
    accuracy: {
      question: {
        title: "Cât de precisă este analiza juridică realizată de AI?",
      },
      answer: {
        title:
          "AI-ul nostru oferă o analiză de înaltă acuratețe, bazată pe instruire extensivă pe documente juridice și jurisprudență. Totuși, trebuie folosit ca instrument de asistare a profesioniștilor juridici, nu pentru a-i înlocui. Pentru chestiuni juridice critice, consultați întotdeauna un avocat calificat.",
      },
    },
    dataSecurity: {
      question: { title: "Datele mele sunt sigure și confidențiale?" },
      answer: {
        title:
          "Da, tratăm securitatea datelor cu maximă seriozitate. Toate documentele și conversațiile sunt criptate, iar informațiile sensibile nu sunt stocate mai mult decât este necesar. Datele tale sunt prelucrate în siguranță și în conformitate cu reglementările privind confidențialitatea.",
      },
    },
    legalAdvice: {
      question: {
        title: "Pot primi consultanță juridică pentru situația mea specifică?",
      },
      answer: {
        title:
          "AI-ul nostru oferă informații juridice generale și analiză de documente, însă nu poate furniza consultanță juridică specifică pentru situația ta unică. Pentru consiliere personalizată, te rugăm să consulți un avocat autorizat în jurisdicția ta.",
      },
    },
    subscriptionPlans: {
      question: { title: "Ce este inclus în planurile de abonament?" },
      answer: {
        title:
          "Fiecare plan include niveluri diferite de jetoane AI, capabilități de analiză a documentelor și asistență. Planul Profesional include funcții avansate, precum suport prioritar, stocare nelimitată a documentelor și acces la șabloane juridice specializate.",
      },
    },
    oneTimeUse: {
      question: { title: "Cum funcționează opțiunea de utilizare unică?" },
      answer: {
        title:
          "Opțiunea de 3,99 $ pentru utilizare unică îți oferă o singură sesiune de consultare AI, în care poți adresa o întrebare juridică sau poți analiza un document. Este perfectă pentru îndrumare juridică rapidă, fără angajament lunar.",
      },
    },
  },
};

export default faq;
