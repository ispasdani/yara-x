// stores/languageStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = "en" | "es" | "fr" | "de" | "ro"; // Add your supported languages

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
      currentLanguage: "en",
      availableLanguages: ["en", "es", "fr", "de", "ro"],
      setLanguage: (language) => set({ currentLanguage: language }),
      isLanguageSupported: (language) =>
        get().availableLanguages.includes(language),
    }),
    {
      name: "language-storage", // localStorage key
      // Optional: Only persist specific fields
      partialize: (state) => ({ currentLanguage: state.currentLanguage }),
    }
  )
);
