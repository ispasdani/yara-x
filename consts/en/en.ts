import type { LanguageData } from "@/types/languageDataTypes";
import hero from "./public/hero";
import publicNav from "./public/nav";

const en: Record<string, LanguageData> = {
  en: {
    public: {
      hero,
      publicNav,
    },
  },
};

export default en;
