import type { LanguageData } from "@/types/languageDataTypes";
import hero from "./public/hero";
import publicNav from "./public/nav";

const ro: Record<string, LanguageData> = {
  ro: {
    public: {
      hero,
      publicNav,
    },
  },
};

export default ro;
