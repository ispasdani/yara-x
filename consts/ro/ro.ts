import type { LanguageData } from "@/types/languageDataTypes";
import hero from "./public/hero";
import publicNav from "./public/nav";
import interactiveWorkflowDemo from "./public/interactiveWorkflowDemo";
import clientLogos from "./public/clientlogos";
import mainFeatures from "./public/mainFeatures";

const ro: Record<string, LanguageData> = {
  ro: {
    public: {
      hero,
      publicNav,
      interactiveWorkflowDemo,
      clientLogos,
      mainFeatures,
    },
  },
};

export default ro;
