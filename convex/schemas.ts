import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Define the schema for the Document Analyzer app
export default defineSchema({
  // Users table (managed by Clerk, mirrored in Convex for app-specific data)
  users: defineTable({
    clerkId: v.string(), // Clerk user ID
    email: v.string(), // User email from Clerk
    subscriptionTier: v.union(
      v.literal("free"),
      v.literal("premium"),
      v.literal("business")
    ), // Freemium model
    jurisdiction: v.optional(v.string()), // User-selected jurisdiction (e.g., "CA", "UK")
    credits: v.number(), // Credits for one-time purchases (e.g., templates)
    createdAt: v.number(), // Timestamp
    updatedAt: v.number(), // Timestamp
  })
    .index("by_clerkId", ["clerkId"])
    .index("by_email", ["email"]),

  // Document Analyses table (generalized for all legal documents)
  documentAnalyses: defineTable({
    userId: v.id("users"), // Reference to user
    organizationId: v.optional(v.id("organizations")), // Reference to organization (if shared)
    documentType: v.string(), // Type of document (e.g., "contract", "nda", "lease", "will")
    title: v.string(), // Document title (e.g., "Freelance Agreement")
    text: v.string(), // Extracted document text for AI analysis

    // File information
    fileName: v.optional(v.string()), // Original file name
    fileSize: v.optional(v.number()), // File size in bytes
    fileType: v.optional(v.string()), // MIME type (e.g., "application/pdf")
    fileUrl: v.optional(v.string()), // URL to stored file (e.g., Convex storage or S3)

    // Analysis results (all optional to support varying document types)
    risks: v.optional(
      v.array(
        v.object({
          risk: v.string(), // Identified issue (e.g., "Vague payment terms")
          explanation: v.string(), // Why it’s a risk
          severity: v.union(
            v.literal("low"),
            v.literal("medium"),
            v.literal("high")
          ), // Risk level
        })
      )
    ), // Potential risks in the document
    opportunities: v.optional(
      v.array(
        v.object({
          opportunity: v.string(), // Potential benefit (e.g., "Flexible termination")
          explanation: v.string(), // Why it’s an opportunity
          impact: v.union(
            v.literal("low"),
            v.literal("medium"),
            v.literal("high")
          ), // Impact level
        })
      )
    ), // Potential benefits
    summary: v.optional(v.string()), // AI-generated summary of the document
    recommendations: v.optional(v.array(v.string())), // Suggested revisions or actions
    keyClauses: v.optional(v.array(v.string())), // Important clauses or sections
    legalCompliance: v.optional(v.string()), // Compliance status (e.g., "Compliant with GDPR")
    negotiationPoints: v.optional(v.array(v.string())), // Points to negotiate
    documentDuration: v.optional(v.string()), // Duration or validity (e.g., "1 year")
    terminationConditions: v.optional(v.string()), // Termination terms
    overallScore: v.optional(v.number()), // Numerical score (e.g., 0-100) for document quality
    compensationStructure: v.optional(
      v.object({
        baseSalary: v.optional(v.string()), // Base compensation (if applicable)
        bonuses: v.optional(v.string()), // Bonus terms
        equity: v.optional(v.string()), // Equity or stock options
        otherBenefits: v.optional(v.string()), // Other benefits
      })
    ), // Compensation details (e.g., for employment contracts)
    performanceMetrics: v.optional(v.array(v.string())), // Metrics or KPIs (if applicable)
    intellectualPropertyClauses: v.optional(v.string()), // IP terms (e.g., for NDAs)
    jurisdiction: v.optional(v.string()), // Jurisdiction for analysis (e.g., "CA")

    // Metadata
    version: v.number(), // Document version
    expirationDate: v.optional(v.string()), // Document expiration (if applicable)
    language: v.string(), // Document language (e.g., "en")
    aiModel: v.string(), // AI model used (e.g., "gemini-2.5-flash-lite")
    creditsUsed: v.number(), // Credits consumed for analysis

    // Analysis status
    status: v.union(
      v.literal("pending"),
      v.literal("processing"),
      v.literal("completed"),
      v.literal("failed")
    ), // Analysis status
    errorMessage: v.optional(v.string()), // Error details if failed

    // Timestamps (using numbers for consistency with previous schema)
    createdAt: v.number(), // Creation timestamp
    updatedAt: v.number(), // Last update timestamp
    analyzedAt: v.optional(v.number()), // Analysis completion timestamp
  })
    .index("by_userId", ["userId"])
    .index("by_organizationId", ["organizationId"])
    .index("by_documentType", ["documentType"])
    .index("by_status", ["status"])
    .searchIndex("search_title", {
      searchField: "title",
    }),

  // Chat Histories table for legal AI chat
  chatHistories: defineTable({
    userId: v.id("users"), // Reference to user
    organizationId: v.optional(v.id("organizations")), // Reference to organization (if shared)
    messages: v.array(
      v.object({
        role: v.union(v.literal("user"), v.literal("assistant")), // Message sender
        content: v.string(), // Message text
        timestamp: v.number(), // Timestamp
      })
    ), // Array of chat messages
    jurisdiction: v.optional(v.string()), // Jurisdiction for chat context
    createdAt: v.number(), // Timestamp
    updatedAt: v.number(), // Timestamp
  })
    .index("by_userId", ["userId"])
    .index("by_organizationId", ["organizationId"]),

  // Research Results table for web research agent
  researchResults: defineTable({
    userId: v.id("users"), // Reference to user
    organizationId: v.optional(v.id("organizations")), // Reference to organization (if shared)
    query: v.string(), // Research query (e.g., "Freelance payment laws in CA")
    summary: v.string(), // AI-generated summary
    sources: v.array(
      v.object({
        url: v.string(), // Source URL
        title: v.string(), // Source title
      })
    ), // Credible sources
    jurisdiction: v.optional(v.string()), // Jurisdiction for research
    createdAt: v.number(), // Timestamp
    updatedAt: v.number(), // Timestamp
  })
    .index("by_userId", ["userId"])
    .index("by_organizationId", ["organizationId"])
    .searchIndex("search_query", {
      searchField: "query",
    }),

  // Templates table for contract template library
  templates: defineTable({
    title: v.string(), // Template name (e.g., "NDA")
    description: v.string(), // Template description
    content: v.string(), // Template text with placeholders
    documentType: v.string(), // Type of template (e.g., "nda", "contract")
    isPremium: v.boolean(), // True for premium templates
    jurisdiction: v.optional(v.string()), // Jurisdiction-specific template
    createdAt: v.number(), // Timestamp
  })
    .index("by_documentType", ["documentType"])
    .index("by_jurisdiction", ["jurisdiction"])
    .searchIndex("search_title", {
      searchField: "title",
    }),

  // Organizations table for team collaboration
  organizations: defineTable({
    name: v.string(), // Organization name (e.g., "Freelance Collective")
    ownerId: v.id("users"), // Reference to user who created the organization
    createdAt: v.number(), // Timestamp
    updatedAt: v.number(), // Timestamp
  }).index("by_ownerId", ["ownerId"]),

  // Organization Members table for role-based access
  organizationMembers: defineTable({
    organizationId: v.id("organizations"), // Reference to organization
    userId: v.id("users"), // Reference to user
    role: v.union(v.literal("admin"), v.literal("member")), // Role in organization
    createdAt: v.number(), // Timestamp
  })
    .index("by_organizationId", ["organizationId"])
    .index("by_userId", ["userId"]),

  // Document Sharing Permissions table
  documentShares: defineTable({
    documentId: v.union(
      v.id("documentAnalyses"),
      v.id("chatHistories"),
      v.id("researchResults")
    ), // Reference to shared document
    documentType: v.union(
      v.literal("documentAnalysis"),
      v.literal("chatHistory"),
      v.literal("researchResult")
    ), // Type of document
    organizationId: v.id("organizations"), // Reference to organization
    sharedWithUserId: v.optional(v.id("users")), // Optional: specific user in organization
    permissions: v.object({
      canView: v.boolean(),
      canEdit: v.boolean(),
      canComment: v.boolean(),
    }), // Permissions for shared document
    createdAt: v.number(), // Timestamp
  })
    .index("by_documentId", ["documentId"])
    .index("by_organizationId", ["organizationId"]),
});
