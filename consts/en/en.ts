import type { LanguageData } from "@/types/languageDataTypes";
import hero from "./public/hero";
import publicNav from "./public/nav";
import interactiveWorkflowDemo from "./public/interactiveWorkflowDemo";
import clientLogos from "./public/clientLogos";
import mainFeatures from "./public/mainFeatures";
import templates from "./public/templates";
import documentIntelligence from "./public/documentIntelligence";
import textEditor from "./public/textEditor";
import workflowVideo from "./public/workflowVideo";

const en: Record<string, LanguageData> = {
  en: {
    public: {
      hero,
      publicNav,
      interactiveWorkflowDemo,
      clientLogos,
      mainFeatures,
      templates,
      documentIntelligence,
      textEditor,
      workflowVideo,
    },
  },
};

export default en;
