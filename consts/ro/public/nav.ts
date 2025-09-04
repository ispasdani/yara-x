const publicNav = {
  aboutUs: { title: "Despre Noi", href: "#aboutUs" },
  pricing: { title: "Preturi", href: "/prices" },
  products: { title: "Aplicatii", href: "" },
  dashboard: { title: "Dashboard", href: "/{lang}/dashboard" },
  agentMode: {
    title: "Modul Agent",
    href: "/{lang}/contract-analyzer",
    description:
      "Un dialog modal care întrerupe utilizatorul cu un conținut important și așteaptă un răspuns.",
  },
  askALegalQuestion: {
    title: "Pune o Întrebare Legală",
    href: "/{lang}/legal-question",
    description:
      "Permite utilizatorilor care văd să previzualizeze conținutul disponibil în spatele unui link.",
  },
  documentAnalyzer: {
    title: "Analizor de Documente",
    href: "/{lang}/document-analyzer",
    description:
      "Afișează un indicator care arată progresul finalizării unei sarcini, de obicei sub forma unei bare de progres.",
  },
  generateDocument: {
    title: "Generează Document",
    href: "/{lang}/generate-document",
    description: "Separă conținutul vizual sau semantic.",
  },
};

export default publicNav;
