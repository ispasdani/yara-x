"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { LanguageData } from "@/types/languageDataTypes";
import { usePersistedLanguageStore } from "@/stores/languageStore";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage } = usePersistedLanguageStore();
  const [langData, setLangData] = useState<LanguageData | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Load language data dynamically
  useEffect(() => {
    const loadLanguageData = async () => {
      try {
        const dataModule = await import(`@/consts/${currentLanguage}.ts`);
        setLangData(
          dataModule.default[currentLanguage] || dataModule.default.en
        );
      } catch (error) {
        // Fallback to English if the language file fails to load
        const ro = await import(`@/consts/ro`);
        setLangData(ro.default.ro);
      }
    };
    loadLanguageData();
  }, [currentLanguage]);

  // Render loading state if data is not yet loaded
  if (!langData) {
    return (
      <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  Y
                </span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">
                Loading...
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Navigation items for mobile menu
  const mobileNavItems = [
    {
      title: langData.public.publicNav.aboutUs.title,
      href: langData.public.publicNav.aboutUs.href,
    },
    {
      title: langData.public.publicNav.pricing.title,
      href: langData.public.publicNav.pricing.href,
    },
    {
      title: langData.public.publicNav.products.title,
      href: langData.public.publicNav.products.href,
    },
    {
      title: langData.public.publicNav.dashboard.title,
      href: langData.public.publicNav.dashboard.href,
    },
  ];

  return (
    <div className="md:hidden flex justify-center items-center">
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <motion.svg
            initial={{ rotate: 0 }}
            animate={{ rotate: 180 }}
            transition={{ duration: 0.2 }}
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </motion.svg>
        ) : (
          <motion.svg
            initial={{ rotate: 0 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.2 }}
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </motion.svg>
        )}
      </motion.button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            type: "spring",
            stiffness: 1000,
            damping: 30,
          }}
          className="fixed inset-0 pt-10 flex flex-col justify-start items-center w-full h-full bg-[#FAFAFA] z-50"
        >
          {/* Close button in mobile overlay */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={toggleMenu}
            className="fixed top-4 right-4"
          >
            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          </motion.button>

          {/* Mobile Navigation Items */}
          <ul className="py-2 flex flex-col items-center w-full gap-4 mt-10">
            {mobileNavItems.map((item) => (
              <Link
                onClick={() => setIsOpen(false)}
                href={item.href}
                key={item.title}
              >
                <li className="px-4 py-2 text-base font-bold hover:text-accent-foreground">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              Sign In
            </Button>
            <Button className="btn-hero">Book a Demo</Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNav;
