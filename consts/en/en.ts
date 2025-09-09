import type { LanguageData } from "@/types/languageDataTypes";
import hero from "./public/hero";
import publicNav from "./public/nav";
import interactiveWorkflowDemo from "./public/interactiveWorkflowDemo";

const en: Record<string, LanguageData> = {
  en: {
    public: {
      hero,
      publicNav,
      interactiveWorkflowDemo
    },
  },
};

export default en;
