"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import { usePersistedLanguageStore } from "@/stores/languageStore";
import { LanguageData } from "@/types/languageDataTypes";

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

  const components: { title: string; href: string; description: string }[] = [
    {
      title: ,
      href: ,
      description: ,
    },
    {
      title: ,
      href: ,
      description: ,
    },
    {
      title: ,
      href: ,
      description: ,
    },
    {
      title: ,
      href: ,
      description: t("public.publicNav.generateDocument.description"),
    },
  ];

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
              Yara-X
            </span>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              {/* About Us Link */}
              <NavigationMenuItem className="text-muted-foreground hover:text-foreground">
                <Link href={langData.public.publicNav.aboutUs.href}>
                  {langData.public.publicNav.aboutUs.title}
                </Link>
              </NavigationMenuItem>

              {/* Pricing Link */}
              <NavigationMenuItem className="text-muted-foreground hover:text-foreground">
                <Link href={langData.public.publicNav.pricing.href}>
                  {langData.public.publicNav.pricing.title}
                </Link>
              </NavigationMenuItem>

              {/* Products Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {t("public.publicNav.products.title")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={buildUrl(component.href)}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
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
