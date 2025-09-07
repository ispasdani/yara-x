// hooks/useLanguageData.ts
import { useEffect, useState } from "react";
import { usePersistedLanguageStore } from "@/store/languageStore";
import { DEFAULT_LANG } from "@/lib/i18n/languages";
import type { LanguageData } from "@/types/languageDataTypes";

export const useLanguageData = () => {
  const { currentLanguage, isLanguageSupported, setLanguage } = usePersistedLanguageStore();
  const [langData, setLangData] = useState<LanguageData | null>(null);

  useEffect(() => {
    const load = async () => {
      const safe = isLanguageSupported(currentLanguage) ? currentLanguage : DEFAULT_LANG;
      try {
        const mod = await import(`@/consts/${safe}/${safe}`);
        setLangData(mod.default[safe] || mod.default[DEFAULT_LANG]);
      } catch {
        const mod = await import(`@/consts/${DEFAULT_LANG}/${DEFAULT_LANG}`);
        setLangData(mod.default[DEFAULT_LANG]);
        setLanguage(DEFAULT_LANG); // optional: normalize state
      }
    };
    load();
  }, [currentLanguage, isLanguageSupported, setLanguage]);

  return { langData, currentLanguage };
};
