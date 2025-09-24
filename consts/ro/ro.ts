import type { LanguageData } from "@/types/languageDataTypes";
import hero from "./public/hero";
import publicNav from "./public/nav";
import interactiveWorkflowDemo from "./public/interactiveWorkflowDemo";
import clientLogos from "./public/clientlogos";
import mainFeatures from "./public/mainFeatures";
import templates from "./public/templates";
import documentIntelligence from "./public/documentIntelligence";
import textEditor from "./public/textEditor";
import workflowVideo from "./public/workflowVideo";
import aiToneDemo from "./public/aiToneDemo";
import cta from "./public/cta";
import pricing from "./public/pricing";
import faq from "./public/faq";
import schedulingDemo from "./public/schedulingDemo";
import ambassador from "./public/ambassador";
import footer from "./public/footer";

const ro: Record<string, LanguageData> = {
  ro: {
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
      aiToneDemo,
      cta,
      pricing,
      faq,
      schedulingDemo,
      ambassador,
      footer,
    },
  },
};

export default ro;
