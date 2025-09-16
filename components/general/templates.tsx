"use client";

import { useMemo, useState } from "react";
import {
  Search,
  FileText,
  Shield,
  Mail,
  Globe,
  Presentation,
  DollarSign,
  Heart,
  Briefcase,
  Home,
  Building2,
  FileCheck,
  Gavel,
  Crown,
  Key,
  AlertTriangle,
  Lock,
  Users,
  TrendingUp,
  PiggyBank,
  CreditCard,
  Umbrella,
  Eye,
  Lightbulb,
  Palette,
  Camera,
  Wrench,
  Factory,
  Truck,
  Store,
  Plane,
  TreePine,
  Wheat,
  MapPin,
  Laptop,
  Shield as ShieldIcon,
  X,
  ChevronDown,
  ChevronUp,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguageData } from "@/hooks/useLanguageData";
import type { LanguageData } from "@/types/languageDataTypes";

const ICONS: Record<string, LucideIcon> = {
  FileText,
  Shield,
  Mail,
  Globe,
  Presentation,
  DollarSign,
  Heart,
  Briefcase,
  Home,
  Building2,
  FileCheck,
  Gavel,
  Crown,
  Key,
  AlertTriangle,
  Lock,
  Users,
  TrendingUp,
  PiggyBank,
  CreditCard,
  Umbrella,
  Eye,
  Lightbulb,
  Palette,
  Camera,
  Wrench,
  Factory,
  Truck,
  Store,
  Plane,
  TreePine,
  Wheat,
  MapPin,
  Laptop,
  ShieldIcon,
};

const DEFAULT_TEMPLATES_HEADER: Pick<
  NonNullable<LanguageData["public"]["templates"]>,
  "templatesTitle" | "templatesDescription"
> = {
  templatesTitle: { title: "Legal Document Templates" },
  templatesDescription: {
    title: "Browse and generate professional templates across categories.",
  },
};

const TemplatesGrid = () => {
  const { langData } = useLanguageData();
  const t = langData?.public?.templates;

  // ---- Show more/less config (no hard max anymore) ----
  const INITIAL_CATEGORIES_COUNT = 12;
  const INITIAL_SEARCH_COUNT = 40;

  // ---- Normalize ALL categories (no slicing) ----
  const getIcon = (iconKey?: string) => {
    const k = (
      iconKey && iconKey in ICONS ? iconKey : "FileText"
    ) as keyof typeof ICONS;
    return ICONS[k];
  };

  const allCategories = useMemo(() => {
    const catObj = (t?.categories ?? {}) as Record<
      string,
      { title: string; iconKey?: string; templates?: { title: string }[] }
    >;

    return Object.entries(catObj).map(([key, value]) => {
      const Icon = getIcon(value.iconKey);
      return {
        key,
        title: value.title,
        icon: Icon,
        templates: (value.templates ?? []).map((tpl) => tpl.title),
      };
    });
  }, [t?.categories]);

  // ---- UI state ----
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showAllSearchResults, setShowAllSearchResults] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);

  // ---- Search over ALL categories ----
  const searchResults = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return [];
    const results: Array<{
      categoryKey: string;
      categoryTitle: string;
      template: string;
      icon: LucideIcon;
    }> = [];
    for (const c of allCategories) {
      const catMatch = c.title.toLowerCase().includes(q);
      for (const tpl of c.templates) {
        if (catMatch || tpl.toLowerCase().includes(q)) {
          results.push({
            categoryKey: c.key,
            categoryTitle: c.title,
            template: tpl,
            icon: c.icon,
          });
        }
      }
    }
    return results;
  }, [allCategories, searchTerm]);

  const displayedSearchResults = searchTerm.trim()
    ? showAllSearchResults
      ? searchResults
      : searchResults.slice(0, INITIAL_SEARCH_COUNT)
    : [];

  const displayedCategories = !searchTerm.trim()
    ? showAllCategories
      ? allCategories
      : allCategories.slice(0, INITIAL_CATEGORIES_COUNT)
    : [];

  const handleCategoryClick = (categoryKey: string) => {
    setSelectedCategoryKey(categoryKey);
    setIsDialogOpen(true);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setShowSearchResults(!!value.trim());
    setShowAllSearchResults(false);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setShowSearchResults(false);
    setShowAllSearchResults(false);
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark
          key={i}
          className="bg-primary/20 text-primary font-medium px-1 rounded"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const selectedCategory = useMemo(() => {
    if (!selectedCategoryKey) return null;
    return allCategories.find((c) => c.key === selectedCategoryKey) ?? null;
  }, [allCategories, selectedCategoryKey]);

  return (
    <section id="templates" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight font-serif text-foreground">
            {t?.templatesTitle.title ??
              DEFAULT_TEMPLATES_HEADER.templatesTitle.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-3 mb-14">
            {t?.templatesDescription.title ??
              DEFAULT_TEMPLATES_HEADER.templatesDescription.title}
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-12 pr-12 py-3 text-base border-2 focus:border-primary"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Search Results */}
        {showSearchResults && searchTerm && (
          <div className="mb-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Search Results for "{searchTerm}"
              </h3>
              <p className="text-muted-foreground">
                Found {searchResults.length} templates matching your search
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {displayedSearchResults.map((r, i) => {
                const Icon = r.icon;
                return (
                  <Card
                    key={`${r.categoryKey}-${r.template}-${i}`}
                    className="p-4 hover:bg-muted/50 transition-colors duration-200 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground text-sm leading-tight mb-1">
                          {highlightText(r.template, searchTerm)}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-3">
                          {highlightText(r.categoryTitle, searchTerm)}
                        </p>
                        <Button size="sm" className="w-full text-xs">
                          Use Template
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {searchResults.length > INITIAL_SEARCH_COUNT && (
              <div className="flex justify-center mt-8">
                <Button
                  variant="outline"
                  onClick={() => setShowAllSearchResults((v) => !v)}
                  className="flex items-center gap-2"
                >
                  {showAllSearchResults ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Show {searchResults.length - INITIAL_SEARCH_COUNT} More
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Categories Grid (with Show More/Less) */}
        {!showSearchResults && (
          <>
            <div className="flex flex-wrap justify-center gap-4">
              {displayedCategories.map((c) => {
                const Icon = c.icon;
                return (
                  <Card
                    key={c.key}
                    className="p-4 cursor-pointer feature-card group"
                    onClick={() => handleCategoryClick(c.key)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-lg leading-tight mb-2 group-hover:text-primary transition-colors duration-200">
                          {c.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {c.templates.length} templates available
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {allCategories.length > INITIAL_CATEGORIES_COUNT && (
              <div className="flex justify-center mt-12">
                <Button
                  variant="outline"
                  onClick={() => setShowAllCategories((v) => !v)}
                  className="flex items-center gap-2"
                >
                  {showAllCategories ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Show {allCategories.length -
                        INITIAL_CATEGORIES_COUNT}{" "}
                      More Categories
                    </>
                  )}
                </Button>
              </div>
            )}
          </>
        )}

        {/* No Results */}
        {showSearchResults && searchResults.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No templates found matching "{searchTerm}"
            </p>
          </div>
        )}

        {/* Template Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="w-full max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-foreground flex items-center space-x-3">
                {selectedCategory && (
                  <>
                    <selectedCategory.icon className="h-6 w-6 text-primary" />
                    <span>{selectedCategory.title}</span>
                  </>
                )}
              </DialogTitle>
            </DialogHeader>

            {selectedCategory && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCategory.templates.map((tpl, idx) => (
                    <div
                      key={`${selectedCategory.key}-${idx}`}
                      className="p-4 border border-border rounded-lg bg-card hover:bg-muted/50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center justify-between space-x-3">
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-foreground group-hover:text-primary transition-colors duration-200 text-sm">
                            {tpl}
                          </span>
                        </div>
                        <Button
                          size="sm"
                          className="cursor-pointer text-xs px-3 py-1 flex-shrink-0"
                        >
                          Use
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TemplatesGrid;
