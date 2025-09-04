"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";
import { usePersistedLanguageStore } from "@/store/languageStore";
import { LanguageData } from "@/types/languageDataTypes";
import { Menu } from "lucide-react";
import MobileNav from "./mobileNav";

const Navbar = () => {
  const { currentLanguage } = usePersistedLanguageStore();
  const [langData, setLangData] = useState<LanguageData | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        console.error(error);
      }
    };
    loadLanguageData();
  }, [currentLanguage]);

  // Prevent body scroll when mobile menu is open and fix overflow issues
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflowX = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflowX = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  // Render loading state if data is not yet loaded
  if (!langData) {
    return (
      <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-x-hidden">
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

  return (
    <>
      <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative overflow-x-hidden">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 z-50">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  Y
                </span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">
                Yara-X
              </span>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:block text-sm">
              <NavigationMenuList className="space-x-8">
                <NavigationMenuItem className="text-muted-foreground hover:text-foreground transition-colors">
                  <Link href={langData.public.publicNav.aboutUs.href}>
                    {langData.public.publicNav.aboutUs.title}
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="text-muted-foreground hover:text-foreground transition-colors">
                  <Link href={langData.public.publicNav.pricing.href}>
                    {langData.public.publicNav.pricing.title}
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="text-muted-foreground hover:text-foreground transition-colors">
                  <Link href={langData.public.publicNav.products.href}>
                    {langData.public.publicNav.products.title}
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="text-muted-foreground hover:text-foreground transition-colors">
                  <Link href={langData.public.publicNav.dashboard.href}>
                    {langData.public.publicNav.dashboard.title}
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Buttons */}
            <div className="items-center space-x-4 hidden md:flex">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Sign In
              </Button>
              <Button className="btn-hero">Book a Demo</Button>
            </div>

            {/* Mobile Hamburger Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden z-50"
              onClick={handleMobileMenuToggle}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Component */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        langData={langData}
      />
    </>
  );
};

export default Navbar;
