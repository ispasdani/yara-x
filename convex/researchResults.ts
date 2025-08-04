import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";

export const createResearchResult = mutation({
  args: {
    userId: v.id("users"),
    query: v.string(),
    summary: v.string(),
    sources: v.array(
      v.object({
        url: v.string(),
        title: v.string(),
      })
    ),
    jurisdiction: v.optional(v.string()),
    creditsUsed: v.number(),
  },
  handler: async (ctx, args) => {
    // Verify user exists
    const user = await ctx.db.get(args.userId);
    if (!user) {
      throw new ConvexError("User not found");
    }

    // Check freemium limits
    if (user.subscriptionTier === "free") {
      const oneMonthAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
      const researchCount = await ctx.db
        .query("researchResults")
        .filter((q) => q.eq(q.field("userId"), args.userId))
        .filter((q) => q.gte(q.field("createdAt"), oneMonthAgo))
        .collect()
        .then((results) => results.length);
      if (researchCount >= 3) {
        throw new ConvexError("Free tier research query limit reached");
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
    const researchId = await ctx.db.insert("researchResults", {
      userId: args.userId,
      organizationId: undefined, // Set when sharing
      query: args.query,
      summary: args.summary,
      sources: args.sources,
      jurisdiction: args.jurisdiction || user.jurisdiction || "",
      createdAt: now,
      updatedAt: now,
    });

    return researchId;
  },
});
