import type { LanguageData } from "@/types/languageDataTypes";
import hero from "./public/hero";
import publicNav from "./public/nav";
import interactiveWorkflowDemo from "./public/interactiveWorkflowDemo";
import clientLogos from "./public/clientLogos";
import mainFeatures from "./public/mainFeatures";

const en: Record<string, LanguageData> = {
  en: {
    public: {
      hero,
      publicNav,
      interactiveWorkflowDemo,
      clientLogos,
      mainFeatures
    },
  },
};

export default en;
