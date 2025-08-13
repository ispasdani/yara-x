"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from "lucide-react";
import { LanguageData } from "@/types/languageDataTypes";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  langData: LanguageData;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, langData }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
        fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-background border-l border-border z-50 
        transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto overflow-x-hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full min-h-screen">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-border shrink-0">
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
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="shrink-0"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col p-6 space-y-6 flex-1">
            <Link
              href={langData.public.publicNav.aboutUs.href}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 block"
              onClick={handleLinkClick}
            >
              {langData.public.publicNav.aboutUs.title}
            </Link>

            <Link
              href={langData.public.publicNav.pricing.href}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 block"
              onClick={handleLinkClick}
            >
              {langData.public.publicNav.pricing.title}
            </Link>

            <Link
              href={langData.public.publicNav.products.href}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 block"
              onClick={handleLinkClick}
            >
              {langData.public.publicNav.products.title}
            </Link>

            <Link
              href={langData.public.publicNav.dashboard.href}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 block"
              onClick={handleLinkClick}
            >
              {langData.public.publicNav.dashboard.title}
            </Link>
          </nav>

          {/* Mobile Action Buttons */}
          <div className="p-6 border-t border-border space-y-4 shrink-0">
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:text-foreground"
              onClick={handleLinkClick}
            >
              Sign In
            </Button>
            <Button className="w-full btn-hero" onClick={handleLinkClick}>
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
