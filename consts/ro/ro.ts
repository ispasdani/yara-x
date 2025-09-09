import type { LanguageData } from "@/types/languageDataTypes";
import hero from "./public/hero";
import publicNav from "./public/nav";
import interactiveWorkflowDemo from "./public/interactiveWorkflowDemo";

const ro: Record<string, LanguageData> = {
  ro: {
    public: {
      hero,
      publicNav,
      interactiveWorkflowDemo
    },
  },
};

export default ro;
