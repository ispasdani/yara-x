// hooks/useLanguageData.ts
import { useEffect, useState } from "react";
import { usePersistedLanguageStore } from "@/store/languageStore";
import { LanguageData } from "@/types/languageDataTypes";

export const useLanguageData = () => {
  const { currentLanguage } = usePersistedLanguageStore();
  const [langData, setLangData] = useState<LanguageData | null>(null);

  useEffect(() => {
    const loadLanguageData = async () => {
      try {
        const dataModule = await import(`@/consts/${currentLanguage}`);
        setLangData(
          dataModule.default[currentLanguage] || dataModule.default.en
        );
      } catch (error) {
        // Fallback to Romanian (or English) if the language file fails to load
        const err = error as Error;
        console.error(err.message);
        const ro = await import(`@/consts/ro`);
        setLangData(ro.default.ro);
      }
    };
    loadLanguageData();
  }, [currentLanguage]);

  return { langData, currentLanguage };
};
