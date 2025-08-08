"use client";

import { Language, usePersistedLanguageStore } from "@/stores/languageStore";

export function LanguageSelector() {
  const { currentLanguage, availableLanguages, setLanguage } =
    usePersistedLanguageStore();

  return (
    <select
      value={currentLanguage}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className="border rounded px-2 py-1"
    >
      {availableLanguages.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
