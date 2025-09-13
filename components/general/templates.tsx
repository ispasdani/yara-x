"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronRight,
  ChevronUp,
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

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

const Templates = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );
  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
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

  const getFilteredResults = () => {
    if (!searchTerm.trim()) return null;

    const results: Array<{ category: string; template: string }> = [];

    Object.entries(templateCategories).forEach(
      ([categoryName, categoryData]) => {
        categoryData.templates.forEach((template) => {
          if (
            template.toLowerCase().includes(searchTerm.toLowerCase()) ||
            categoryName.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            results.push({ category: categoryName, template });
          }
        });
      }
    );

    return results;
  };

  const filteredResults = getFilteredResults();

  return (
    <section id="templates" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="heading-section mb-6">Legal Document Templates</h2>
          <p className="text-lead max-w-3xl mx-auto mb-8">
            Access our comprehensive library of legal document templates,
            organized by category for easy navigation and quick implementation.
          </p>

          {/* Search Section */}
          <div className="max-w-md mx-auto">
            {!searchOpen ? (
              <Button
                variant="outline"
                onClick={() => setSearchOpen(true)}
                className="w-full h-12 bg-surface hover:bg-surface-hover border-border text-muted-foreground"
              >
                <Search className="h-4 w-4 mr-2" />
                Search templates...
              </Button>
            ) : (
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12 pl-10 pr-10 bg-surface border-border"
                  autoFocus
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchTerm("");
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                >
                  ×
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Search Results */}
        {filteredResults && filteredResults.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Search Results ({filteredResults.length})
            </h3>
            <div className="max-w-4xl mx-auto grid gap-4">
              {filteredResults.map((result, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-card transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground mb-1">
                        {highlightText(result.template, searchTerm)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        in {highlightText(result.category, searchTerm)}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Use Template
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        {(!searchTerm.trim() || filteredResults?.length === 0) && (
          <div className="max-w-6xl mx-auto relative">
            <div className="columns-1 md:columns-2 gap-x-6">
              {Object.entries(templateCategories)
                .slice(0, showAllCategories ? undefined : 12)
                .map(([categoryName, categoryData]) => {
                  const isExpanded = expandedCategories.has(categoryName);
                  const IconComponent = categoryData.icon;

                  return (
                    <Card
                      key={categoryName}
                      className="overflow-hidden mb-4 break-inside-avoid"
                    >
                      <button
                        onClick={() => toggleCategory(categoryName)}
                        className="w-full p-3 text-left hover:bg-surface transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/5 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                              <IconComponent className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-serif text-lg font-semibold text-foreground">
                                {categoryName}
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                {categoryData.templates.length} templates
                                available
                              </p>
                            </div>
                          </div>
                          {isExpanded ? (
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="border-t border-border bg-surface/50 animate-accordion-down">
                          <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {categoryData.templates.map((template, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-card rounded-lg border border-card-border hover:shadow-sm transition-shadow group"
                              >
                                <span className="text-sm text-foreground font-medium flex-1 pr-3">
                                  {template}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="opacity-0 group-hover:opacity-100 transition-opacity text-xs px-3 py-1 h-auto"
                                >
                                  Use
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </Card>
                  );
                })}
            </div>

            {/* Show More/Less Button */}
            {Object.entries(templateCategories).length > 12 && (
              <div className="flex justify-center mt-8">
                <Button
                  variant="outline"
                  onClick={() => setShowAllCategories(!showAllCategories)}
                  className="px-8 py-3 h-auto bg-surface hover:bg-surface-hover border-border hover-scale"
                >
                  {showAllCategories ? (
                    <>
                      Show Less
                      <ChevronUp className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Show More (
                      {Object.entries(templateCategories).length - 12} more
                      categories)
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        )}

        {searchTerm.trim() && filteredResults?.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No templates found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or browse by category above.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Templates;
