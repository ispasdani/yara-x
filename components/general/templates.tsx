"use client";

import { useState } from "react";
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
  LucideIcon,
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

const templateCategories = {
  "Sales Documents and Forms": {
    icon: FileText,
    templates: [
      "Sales Contract (Goods)",
      "Sales Contract (Services)",
      "Sales Order Form",
      "Sales Quote / Quotation",
      "Purchase Order",
      "Order Confirmation",
      "Sales Commission Agreement",
      "Reseller Agreement",
      "Distributor Agreement",
      "Credit Application Form",
      "Return Merchandise Authorization (RMA)",
      "Warranty Statement",
      "Terms and Conditions of Sale",
      "Invoice",
      "Sales Receipt",
    ],
  },
  "Policy and Compliance Documents": {
    icon: Shield,
    templates: [
      "Code of Conduct",
      "Anti-Bribery and Corruption Policy",
      "Whistleblower Policy",
      "Conflict of Interest Policy",
      "Information Security Policy",
      "Acceptable Use Policy",
      "Data Retention Policy",
      "BYOD Policy",
      "Sanctions & Export Controls Policy",
      "Health and Safety Policy",
      "ESG / Sustainability Policy",
      "AML / KYC Policy",
    ],
  },
  "Letters and Notices Templates": {
    icon: Mail,
    templates: [
      "Demand Letter",
      "Cease and Desist Letter",
      "Notice of Breach",
      "Past Due Payment Letter",
      "Notice of Intent to Sue",
      "Termination Notice (Agreement)",
      "Notice of Assignment",
      "Force Majeure Notice",
      "Non-Renewal Notice",
      "Change of Terms Notice",
      "Confidentiality Breach Notice",
      "Letter of Good Standing",
    ],
  },
  "Web & Technology Agreements": {
    icon: Globe,
    templates: [
      "SaaS Subscription Agreement",
      "Software License Agreement",
      "Maintenance & Support Agreement",
      "API License Agreement",
      "Beta Test Agreement",
      "EULA",
      "Cloud Services Agreement",
      "Professional Services Agreement (Tech)",
      "Uptime / Service Level Agreement (SLA)",
      "Source Code Escrow Agreement",
      "Technology Evaluation Agreement",
      "Website Terms of Use",
    ],
  },
  "Proposal Templates": {
    icon: Presentation,
    templates: [
      "Business Proposal",
      "Sales Proposal",
      "Project Proposal",
      "RFP Response",
      "Bid Proposal",
      "Grant Proposal",
      "Sponsorship Proposal",
      "Marketing Proposal",
      "Consulting Proposal",
      "Statement of Work (Proposal)",
      "Budget Proposal",
      "Partnership Proposal",
    ],
  },
  "Financial Agreements": {
    icon: DollarSign,
    templates: [
      "Loan Agreement (Secured)",
      "Loan Agreement (Unsecured)",
      "Promissory Note",
      "Line of Credit Agreement",
      "Guaranty Agreement",
      "Security Agreement",
      "Intercreditor Agreement",
      "Escrow Agreement",
      "Revenue Share Agreement",
      "Royalty Agreement",
      "Payment Plan Agreement",
      "Forbearance Agreement",
    ],
  },
  "Family Law": {
    icon: Heart,
    templates: [
      "Prenuptial Agreement",
      "Postnuptial Agreement",
      "Separation Agreement",
      "Divorce Settlement Agreement",
      "Parenting Plan",
      "Child Custody Agreement",
      "Child Support Agreement",
      "Spousal Support Agreement",
      "Cohabitation Agreement",
      "Adoption Agreement",
      "Surrogacy Agreement",
      "Name Change Petition",
    ],
  },
  "Employment Legal Templates": {
    icon: Briefcase,
    templates: [
      "Employment Offer Letter",
      "Employment Agreement (Full-Time)",
      "Employment Agreement (Part-Time)",
      "Commission-Only Employment Agreement",
      "Independent Contractor Agreement",
      "Internship Agreement",
      "Non-Compete Agreement",
      "Non-Solicitation Agreement",
      "Employee NDA",
      "Employee Handbook Acknowledgment",
      "Remote Work Agreement",
      "Separation and Release Agreement",
      "Performance Improvement Plan (PIP)",
      "Written Warning Notice",
    ],
  },
  "Real Estate": {
    icon: Home,
    templates: [
      "Real Estate Purchase Agreement (Residential)",
      "Real Estate Purchase Agreement (Commercial)",
      "Offer to Purchase Real Estate",
      "Deed of Sale (Real Property)",
      "Quitclaim Deed",
      "Warranty Deed",
      "Land Contract (Contract for Deed)",
      "Easement Agreement",
      "Right of First Refusal Agreement",
      "Option to Purchase Real Estate",
      "Estoppel Certificate",
      "Real Estate Addendum",
    ],
  },
  "B2B Legal Documents": {
    icon: Building2,
    templates: [
      "Master Services Agreement (MSA)",
      "Statement of Work (SOW)",
      "Master Purchase Agreement",
      "Supplier Agreement",
      "Channel Partner Agreement",
      "Distribution Agreement",
      "OEM Agreement",
      "Joint Venture Agreement",
      "Teaming Agreement",
      "Referral Agreement",
      "Collaboration Agreement",
      "Service Level Agreement (SLA)",
    ],
  },
  "Business Document": {
    icon: FileCheck,
    templates: [
      "Company Bylaws",
      "LLC Operating Agreement",
      "Shareholders' Agreement",
      "Founders' Agreement",
      "Board Consent",
      "Meeting Minutes",
      "Corporate Resolution",
      "Corporate Authorization Letter",
      "Secretary's Certificate",
      "Registered Agent Authorization",
    ],
  },
  "Last Will and Testament": {
    icon: Crown,
    templates: [
      "Simple Will",
      "Pour-Over Will",
      "Joint Will (Spouses)",
      "Living Will Addendum",
      "Codicil to Will",
      "Holographic Will Outline",
    ],
  },
  "Bill of Sale": {
    icon: FileText,
    templates: [
      "General Bill of Sale",
      "Vehicle Bill of Sale",
      "Boat Bill of Sale",
      "Motorcycle Bill of Sale",
      "Trailer Bill of Sale",
      "Equipment Bill of Sale",
      "Aircraft Bill of Sale",
      "Business Asset Bill of Sale",
      "Mobile Home Bill of Sale",
      "Livestock Bill of Sale",
    ],
  },
  "Power of Attorney (POA)": {
    icon: Key,
    templates: [
      "General Power of Attorney",
      "Durable Power of Attorney",
      "Limited Power of Attorney",
      "Medical Power of Attorney",
      "Financial Power of Attorney",
      "Minor Child Power of Attorney",
      "Real Estate Power of Attorney",
      "Vehicle Power of Attorney",
      "Springing Power of Attorney",
      "Revocation of Power of Attorney",
    ],
  },
  "Eviction Notice": {
    icon: AlertTriangle,
    templates: [
      "Pay Rent or Quit Notice",
      "Cure or Quit Notice",
      "Unconditional Quit Notice",
      "Notice to Quit (Nonpayment)",
      "30-Day Notice to Vacate",
      "60-Day Notice to Vacate",
      "Lease Violation Notice",
      "Termination for Cause Notice",
      "Termination Without Cause Notice",
      "Holdover Tenant Notice",
    ],
  },
  "NDA (Non-Disclosure Agreements)": {
    icon: Lock,
    templates: [
      "Unilateral NDA",
      "Mutual NDA",
      "Multilateral NDA",
      "Employee NDA",
      "Contractor NDA",
      "Investor NDA",
      "M&A NDA",
      "Product Evaluation NDA",
      "Attorney–Client NDA",
      "One-Way NDA with No-Solicit",
    ],
  },
  "Lease Agreement": {
    icon: Home,
    templates: [
      "Residential Lease Agreement",
      "Commercial Lease Agreement",
      "Month-to-Month Rental Agreement",
      "Roommate Agreement",
      "Sublease Agreement",
      "Lease Renewal Agreement",
      "Lease Extension Agreement",
      "Lease Assignment Agreement",
      "Short-Term Rental Agreement",
      "Office Space Lease Agreement",
      "Equipment Lease Agreement",
      "Vehicle Lease Agreement",
    ],
  },
  "Corporate Formation & Governance": {
    icon: Building2,
    templates: [
      "Articles of Incorporation",
      "Articles of Organization (LLC)",
      "Initial Board Consent",
      "Bylaws",
      "LLC Operating Agreement",
      "Shareholders' Agreement",
      "Founders' Agreement",
      "Officer Appointment Resolution",
      "EIN Authorization Letter",
      "Written Consent in Lieu of Meeting",
    ],
  },
  "Startups & Fundraising": {
    icon: TrendingUp,
    templates: [
      "Founder Collaboration Agreement",
      "Advisor Agreement",
      "Equity Incentive Plan",
      "Restricted Stock Purchase Agreement",
      "Stock Option Grant Notice",
      "83(b) Election Letter",
      "Pro Rata Side Letter",
      "Board Observer Agreement",
      "SAFE (Pre-Money)",
      "SAFE (Post-Money)",
    ],
  },
  "Investment & Securities": {
    icon: PiggyBank,
    templates: [
      "Convertible Note",
      "Stock Purchase Agreement",
      "Subscription Agreement",
      "Investor Rights Agreement",
      "Voting Agreement",
      "ROFR & Co-Sale Agreement",
      "Term Sheet",
      "Warrant Agreement",
      "Secondary Sale Agreement",
      "Capitalization Table Template",
    ],
  },
  "M&A / Corporate Transactions": {
    icon: Users,
    templates: [
      "Asset Purchase Agreement",
      "Stock Purchase Agreement (M&A)",
      "Merger Agreement",
      "Letter of Intent (M&A)",
      "Confidentiality Agreement (Deal NDA)",
      "Transition Services Agreement",
      "Bill of Sale (Business Assets)",
      "Assignment and Assumption Agreement",
      "Disclosure Schedules Template",
      "Closing Checklist",
    ],
  },
  "Banking & Lending": {
    icon: CreditCard,
    templates: [
      "Merchant Services Agreement",
      "ACH Authorization Form",
      "Credit Card Processing Agreement",
      "Factoring Agreement",
      "Invoice Financing Agreement",
      "Pledge Agreement",
      "Subordination Agreement",
      "Credit Facility Agreement",
      "Letter of Credit Application",
      "UCC-1 Financing Statement",
    ],
  },
  Insurance: {
    icon: Umbrella,
    templates: [
      "Insurance Requirements Exhibit",
      "Hold Harmless and Indemnity Agreement",
      "Waiver of Subrogation Agreement",
      "Certificate of Insurance Request",
      "Loss Payee Endorsement Letter",
      "Broker of Record Letter",
      "Business Interruption Claim Notice",
      "Insurance Policy Endorsement",
      "Claims Notice Letter",
      "Risk Transfer Agreement",
    ],
  },
  "Privacy & Data Protection": {
    icon: Eye,
    templates: [
      "Privacy Policy",
      "Cookie Policy",
      "Data Processing Agreement (DPA)",
      "Standard Contractual Clauses Addendum",
      "Data Protection Impact Assessment (DPIA)",
      "Records of Processing Activities (ROPA)",
      "Subject Access Request Response",
      "Data Breach Notification Letter",
      "Data Sharing Agreement",
      "Controller–Processor Agreement",
      "Transfer Impact Assessment",
    ],
  },
  "Intellectual Property": {
    icon: Lightbulb,
    templates: [
      "IP Assignment Agreement",
      "Invention Assignment Agreement",
      "Copyright License Agreement",
      "Trademark License Agreement",
      "Patent License Agreement",
      "Joint Development Agreement",
      "Technology Transfer Agreement",
      "Work Made for Hire Agreement",
      "Moral Rights Waiver",
      "DMCA Takedown Notice",
    ],
  },
  "AI & Data Science Agreements": {
    icon: Laptop,
    templates: [
      "AI Services Agreement",
      "Model Development Agreement",
      "Data Use Agreement",
      "ML Dataset License Agreement",
      "Model Hosting Agreement",
      "Prompt Engineering Services Agreement",
      "Model Evaluation Agreement",
      "Synthetic Data Generation Agreement",
      "Responsible AI Use Policy",
      "AI Acceptable Use Addendum",
    ],
  },
  "Marketing & Advertising": {
    icon: Palette,
    templates: [
      "Marketing Services Agreement",
      "Influencer Agreement",
      "Affiliate Program Agreement",
      "Sponsorship Agreement",
      "Advertising Insertion Order",
      "Talent Release Form",
      "Testimonial & Likeness Release",
      "Co-Marketing Agreement",
      "Sweepstakes Official Rules",
      "Brand Ambassador Agreement",
    ],
  },
  "Freelancer & Creator Agreements": {
    icon: Camera,
    templates: [
      "Freelance Services Agreement",
      "Creative Services Agreement",
      "Photography Services Agreement",
      "Work-for-Hire Agreement",
      "Graphic Design Agreement",
      "Voiceover Agreement",
      "Content Licensing Agreement",
      "Podcast Guest Release",
      "Music License Agreement",
      "Stock Footage License",
    ],
  },
  "Property Management": {
    icon: Home,
    templates: [
      "Property Management Agreement",
      "Tenant Intake Form",
      "Move-In / Move-Out Checklist",
      "Pet Addendum",
      "Late Rent Payment Plan",
      "Notice of Entry",
      "Rent Increase Notice",
      "Notice of Non-Renewal",
      "Security Deposit Receipt",
      "Security Deposit Return Letter",
    ],
  },
  "Construction & Contractor": {
    icon: Wrench,
    templates: [
      "Construction Contract (Fixed Price)",
      "Construction Contract (Time & Materials)",
      "Independent Contractor Agreement (Trades)",
      "Subcontractor Agreement",
      "Change Order",
      "Lien Waiver and Release",
      "Performance Bond Template",
      "Payment Bond Template",
      "Punch List Template",
      "Warranty of Workmanship",
    ],
  },
  "Manufacturing & Supply Chain": {
    icon: Factory,
    templates: [
      "Manufacturing Services Agreement",
      "Supply Agreement",
      "Quality Agreement",
      "Purchase Order Terms & Conditions",
      "Consignment Agreement",
      "Tooling Ownership Agreement",
      "Finished Goods Warranty",
      "Packaging & Labeling Agreement",
      "Vendor Managed Inventory Agreement",
      "Nonconformance Report Template",
    ],
  },
  "Transportation & Logistics": {
    icon: Truck,
    templates: [
      "Transportation Services Agreement",
      "Freight Broker Agreement",
      "Bill of Lading",
      "Shipping Terms and Conditions",
      "Warehouse Services Agreement",
      "3PL Agreement",
      "Carrier Agreement",
      "Delivery Service Agreement",
      "Fleet Vehicle Use Policy",
      "Supply Chain Confidentiality Agreement",
    ],
  },
  "Retail & eCommerce": {
    icon: Store,
    templates: [
      "eCommerce Terms and Conditions",
      "Return & Refund Policy",
      "Marketplace Seller Agreement",
      "Drop Shipping Agreement",
      "Gift Card Terms",
      "Subscription Box Terms",
      "User-Generated Content License",
      "SMS Marketing Consent Terms",
      "Price Match Policy",
      "BOPIS Terms",
    ],
  },
  "Hospitality & Events": {
    icon: Plane,
    templates: [
      "Venue Rental Agreement",
      "Catering Services Agreement",
      "Event Services Agreement",
      "Event Vendor Agreement",
      "Speaker Agreement",
      "DJ Services Agreement",
      "Wedding Photography Contract",
      "Conference Sponsorship Agreement",
      "Ticketing Terms & Conditions",
      "Event Liability Waiver",
    ],
  },
  "Environmental & Energy": {
    icon: TreePine,
    templates: [
      "Environmental Compliance Policy",
      "Environmental Indemnity Agreement",
      "Waste Disposal Agreement",
      "Recycling Services Agreement",
      "Renewable Energy PPA",
      "Energy Services Agreement",
      "Carbon Credit Purchase Agreement",
      "Environmental Due Diligence Checklist",
      "Spill Prevention & Response Plan",
      "Hazardous Materials Handling Agreement",
    ],
  },
  "Agriculture & Food": {
    icon: Wheat,
    templates: [
      "Farm Lease Agreement",
      "Crop Share Agreement",
      "Livestock Purchase Agreement",
      "Food Supply Agreement",
      "Co-Packing Agreement",
      "Food Safety Plan Template",
      "Organic Certification Affidavit",
      "CSA Membership Agreement",
      "Agricultural Services Agreement",
      "Commodities Hedge Agreement",
    ],
  },
  "Government & Public Sector": {
    icon: MapPin,
    templates: [
      "Government Contracting Agreement",
      "Non-Collusion Affidavit",
      "Lobbying Compliance Policy",
      "FOIA Request Letter",
      "Data Rights Assertion",
      "SAM Registration Checklist",
      "Debarment Certification",
      "Public-Private Partnership Agreement",
      "Grant Compliance Report Template",
      "RFP Compliance Matrix",
    ],
  },
  "Court Forms & Litigation": {
    icon: Gavel,
    templates: [
      "Complaint",
      "Answer to Complaint",
      "Motion to Dismiss",
      "Motion for Summary Judgment",
      "Affidavit",
      "Subpoena",
      "Notice of Appearance",
      "Litigation Hold Notice",
      "Settlement Agreement",
      "Mutual Release of Claims",
      "Consent Order",
      "Mediation Agreement",
    ],
  },
  "Estate Planning (Broad)": {
    icon: Crown,
    templates: [
      "Last Will and Testament",
      "Living Will (Advance Directive)",
      "Revocable Living Trust",
      "Irrevocable Trust",
      "Durable Power of Attorney",
      "Medical Power of Attorney",
      "HIPAA Authorization",
      "Do Not Resuscitate (DNR) Order",
      "Transfer on Death Deed",
      "Beneficiary Designation Form",
    ],
  },
  "Cybersecurity & Incident Response": {
    icon: ShieldIcon,
    templates: [
      "Incident Response Plan",
      "Security Incident Report Form",
      "Data Breach Notification Policy",
      "Vulnerability Disclosure Policy",
      "Access Control Policy",
      "Third-Party Security Questionnaire",
      "Penetration Testing Rules of Engagement",
      "Information Security Addendum",
      "Business Continuity & Disaster Recovery Plan",
      "Key Management Policy",
    ],
  },
};

const TemplatesGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllSearchResults, setShowAllSearchResults] = useState(false);

  const INITIAL_CATEGORIES_COUNT = 12;
  const INITIAL_SEARCH_COUNT = 40;

  const getSearchResults = () => {
    if (!searchTerm.trim()) return [];

    const results: Array<{
      category: string;
      template: string;
      icon: LucideIcon;
    }> = [];

    Object.entries(templateCategories).forEach(
      ([categoryName, categoryData]) => {
        categoryData.templates.forEach((template) => {
          if (
            template.toLowerCase().includes(searchTerm.toLowerCase()) ||
            categoryName.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            results.push({
              category: categoryName,
              template,
              icon: categoryData.icon,
            });
          }
        });
      }
    );

    return results;
  };

  const getFilteredCategories = () => {
    if (searchTerm.trim()) return [];
    return Object.entries(templateCategories);
  };

  const searchResults = getSearchResults();
  const categories = getFilteredCategories();

  // Show more/less calculations
  const displayedSearchResults = searchTerm.trim()
    ? showAllSearchResults
      ? searchResults
      : searchResults.slice(0, INITIAL_SEARCH_COUNT)
    : [];
  const displayedCategories = !searchTerm.trim()
    ? showAllCategories
      ? categories
      : categories.slice(0, INITIAL_CATEGORIES_COUNT)
    : [];

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
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
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark
          key={index}
          className="bg-primary/20 text-primary font-medium px-1 rounded"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <section id="templates" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="heading-section mb-6">Legal Document Templates</h2>
          <p className="text-lead max-w-2xl mx-auto mb-8">
            Professional legal templates covering every business need. Click any
            category to explore available templates.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
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
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
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
              {displayedSearchResults.map((result, index) => {
                const IconComponent = result.icon;
                return (
                  <Card
                    key={`${result.category}-${result.template}-${index}`}
                    className="p-4 hover:bg-muted/50 transition-colors duration-200 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground text-sm leading-tight mb-1">
                          {highlightText(result.template, searchTerm)}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-3">
                          {highlightText(result.category, searchTerm)}
                        </p>
                        <Button
                          size="sm"
                          className="w-full bg-primary text-primary-foreground hover:bg-primary-hover text-xs"
                        >
                          Use Template
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Show More/Less for Search Results */}
            {searchResults.length > INITIAL_SEARCH_COUNT && (
              <div className="flex justify-center mt-8">
                <Button
                  variant="outline"
                  onClick={() => setShowAllSearchResults(!showAllSearchResults)}
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

        {/* Categories Grid */}
        {!showSearchResults && (
          <>
            <div className="flex flex-wrap justify-center gap-4">
              {displayedCategories.map(([categoryName, categoryData]) => {
                const IconComponent = categoryData.icon;
                return (
                  <Card
                    key={categoryName}
                    className="p-4 cursor-pointer feature-card group"
                    onClick={() => handleCategoryClick(categoryName)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-lg leading-tight mb-2 group-hover:text-primary transition-colors duration-200">
                          {categoryName}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {categoryData.templates.length} templates available
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Show More/Less for Categories */}
            {categories.length > INITIAL_CATEGORIES_COUNT && (
              <div className="flex justify-center mt-12">
                <Button
                  variant="outline"
                  onClick={() => setShowAllCategories(!showAllCategories)}
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
                      Show {categories.length - INITIAL_CATEGORIES_COUNT} More
                      Categories
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
                    {(() => {
                      const IconComponent =
                        templateCategories[
                          selectedCategory as keyof typeof templateCategories
                        ]?.icon;
                      return IconComponent ? (
                        <IconComponent className="h-6 w-6 text-primary" />
                      ) : null;
                    })()}
                    <span>{selectedCategory}</span>
                  </>
                )}
              </DialogTitle>
            </DialogHeader>

            {selectedCategory && (
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {templateCategories[
                    selectedCategory as keyof typeof templateCategories
                  ]?.templates.map((template, index) => (
                    <div
                      key={index}
                      className="p-4 border border-border rounded-lg bg-card hover:bg-muted/50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center justify-between space-x-3">
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-foreground group-hover:text-primary transition-colors duration-200 text-sm">
                            {template}
                          </span>
                        </div>
                        <Button
                          size="sm"
                          className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary-hover text-xs px-3 py-1 flex-shrink-0"
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
