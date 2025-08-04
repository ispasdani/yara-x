import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";

export const createDocumentAnalysis = mutation({
  args: {
    userId: v.id("users"),
    documentType: v.string(),
    title: v.string(),
    text: v.string(),
    fileName: v.optional(v.string()),
    fileSize: v.optional(v.number()),
    fileType: v.optional(v.string()),
    fileUrl: v.optional(v.string()),
    jurisdiction: v.optional(v.string()),
    creditsUsed: v.number(),
  },
  handler: async (ctx, args) => {
    // Verify user exists
    const user = await ctx.db.get(args.userId);
    if (!user) {
      throw new ConvexError("User not found");
    }

    // Check freemium limits (optional: implement in a separate query if needed)
    if (user.subscriptionTier === "free") {
      const oneMonthAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
      const analysisCount = await ctx.db
        .query("documentAnalyses")
        .filter((q) => q.eq(q.field("userId"), args.userId))
        .filter((q) => q.gte(q.field("createdAt"), oneMonthAgo))
        .collect()
        .then((docs) => docs.length);
      if (analysisCount >= 5) {
        throw new ConvexError("Free tier document analysis limit reached");
      }
    }

    // Deduct credits if applicable
    if (args.creditsUsed > 0) {
      if (user.credits < args.creditsUsed) {
        throw new ConvexError("Insufficient credits");
      }
      await ctx.db.patch(args.userId, {
        credits: user.credits - args.creditsUsed,
        updatedAt: Date.now(),
      });
    }

    const now = Date.now();
    const documentId = await ctx.db.insert("documentAnalyses", {
      userId: args.userId,
      organizationId: undefined, // Set when sharing
      documentType: args.documentType,
      title: args.title,
      text: args.text,
      fileName: args.fileName,
      fileSize: args.fileSize,
      fileType: args.fileType,
      fileUrl: args.fileUrl,
      risks: undefined, // Populated by Gemini API in a separate mutation
      opportunities: undefined,
      summary: undefined,
      recommendations: undefined,
      keyClauses: undefined,
      legalCompliance: undefined,
      negotiationPoints: undefined,
      documentDuration: undefined,
      terminationConditions: undefined,
      overallScore: undefined,
      compensationStructure: undefined,
      performanceMetrics: undefined,
      intellectualPropertyClauses: undefined,
      jurisdiction: args.jurisdiction || user.jurisdiction || "",
      version: 1,
      expirationDate: undefined,
      language: "en", // Default to English
      aiModel: "gemini-2.5-flash-lite", // Default model
      creditsUsed: args.creditsUsed,
      status: "pending",
      errorMessage: undefined,
      createdAt: now,
      updatedAt: now,
      analyzedAt: undefined,
    });

    return documentId;
  },
});
