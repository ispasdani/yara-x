"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";
import { usePersistedLanguageStore } from "@/stores/languageStore";
import { LanguageData } from "@/types/languageDataTypes";
import MobileNav from "./mobileNav";

const Navbar = () => {
  const { currentLanguage } = usePersistedLanguageStore();
  const [langData, setLangData] = useState<LanguageData | null>(null);

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

  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 z-99">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                Y
              </span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Yara-X
            </span>
          </div>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="space-x-8">
              {/* About Us Link */}
              <NavigationMenuItem className="text-muted-foreground hover:text-foreground transition-colors">
                <Link href={langData.public.publicNav.aboutUs.href}>
                  {langData.public.publicNav.aboutUs.title}
                </Link>
              </NavigationMenuItem>

              {/* Pricing Link */}
              <NavigationMenuItem className="text-muted-foreground hover:text-foreground transition-colors">
                <Link href={langData.public.publicNav.pricing.href}>
                  {langData.public.publicNav.pricing.title}
                </Link>
              </NavigationMenuItem>

              {/* Products Dropdown */}
              <NavigationMenuItem className="text-muted-foreground hover:text-foreground transition-colors">
                <Link href={langData.public.publicNav.products.href}>
                  {langData.public.publicNav.products.title}
                </Link>
              </NavigationMenuItem>

              {/* Dashboard */}
              <NavigationMenuItem className="text-muted-foreground hover:text-foreground transition-colors">
                <Link href={langData.public.publicNav.dashboard.href}>
                  {langData.public.publicNav.dashboard.title}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <MobileNav />

          <div className="items-center space-x-4 hidden md:flex">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              Sign In
            </Button>
            <Button className="btn-hero">Book a Demo</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
