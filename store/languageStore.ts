// stores/languageStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LANG_CODES, DEFAULT_LANG, type Language } from "@/lib/i18n/languages";

type LanguageState = {
  currentLanguage: Language;
  availableLanguages: Language[];
  setLanguage: (language: Language) => void;
  isLanguageSupported: (language: Language) => boolean;
};

// Option 1: Without persistence (resets on page reload)
// export const useLanguageStore = create<LanguageState>((set, get) => ({
//   currentLanguage: "en",
//   availableLanguages: ["en", "es", "fr", "de"],
//   setLanguage: (language) => set({ currentLanguage: language }),
//   isLanguageSupported: (language) =>
//     get().availableLanguages.includes(language),
// }));

// Option 2: With localStorage persistence (recommended)
export const usePersistedLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      currentLanguage: DEFAULT_LANG,
      availableLanguages: LANG_CODES,
      setLanguage: (language) => set({ currentLanguage: language }),
      isLanguageSupported: (language) => get().availableLanguages.includes(language),
    }),
    {
      name: "language-storage",
      partialize: (state) => ({ currentLanguage: state.currentLanguage }),
    }
  )
);
