// components/LanguageSelector.tsx
"use client";

import { useState, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePersistedLanguageStore } from "@/store/languageStore";
import { LANG_META, DEFAULT_LANG, type Language } from "@/lib/i18n/languages";

export const LanguageSelector = () => {
  const { currentLanguage, availableLanguages, setLanguage } =
    usePersistedLanguageStore();
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasPersisted = localStorage.getItem("language-storage");
    if (!hasPersisted) {
      setIsOpen(true);
      setShowFloatingButton(false);
      setIsFirstVisit(true);
    } else {
      setShowFloatingButton(true);
    }
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
    setShowFloatingButton(true);
    setIsFirstVisit(false);
  };

  const handleDrawerClose = (open: boolean) => {
    setIsOpen(open);
    if (!open && isFirstVisit) {
      setLanguage(DEFAULT_LANG);
      setShowFloatingButton(true);
      setIsFirstVisit(false);
    }
  };

  const items = availableLanguages.map((code) => ({
    code,
    ...LANG_META[code],
  }));

  return (
    <>
      {showFloatingButton && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setIsOpen(true)}
              className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
              size="icon"
              aria-label="Select language"
            >
              <Globe className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Select language</TooltipContent>
        </Tooltip>
      )}

      <Drawer open={isOpen} onOpenChange={handleDrawerClose}>
        <DrawerContent className="w-full max-w-none mx-0">
          <DrawerHeader className="text-center">
            <DrawerTitle className="heading-section text-2xl mb-2">
              Choose Your Language
            </DrawerTitle>
            <DrawerDescription className="text-body">
              Select your preferred language to continue
            </DrawerDescription>
          </DrawerHeader>

          <div className="px-6 pb-6">
            <div className="grid gap-3">
              {items.map(({ code, name, flag }) => (
                <Button
                  key={code}
                  variant="outline"
                  className={`h-14 justify-start space-x-3 ${
                    currentLanguage === code
                      ? "border-primary bg-primary/5 text-primary"
                      : "hover:border-primary/50 hover:bg-muted/50"
                  }`}
                  onClick={() => handleLanguageSelect(code)}
                >
                  <span className="text-2xl">{flag}</span>
                  <span className="font-medium text-base">{name}</span>
                  {currentLanguage === code && (
                    <Check className="h-5 w-5 ml-auto text-primary" />
                  )}
                </Button>
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LanguageSelector;
