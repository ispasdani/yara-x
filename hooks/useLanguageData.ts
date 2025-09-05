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
        const dataModule = await import(`@/consts/${currentLanguage}/${currentLanguage}`);
        setLangData(
          dataModule.default[currentLanguage] || dataModule.default.en
        );
      } catch (error) {
        const err = error as Error;
        console.error(err.message);
        const ro = await import(`@/consts/ro/ro`);
        setLangData(ro.default.ro);
      }
    };
    loadLanguageData();
  }, [currentLanguage]);

  return { langData, currentLanguage };
};
