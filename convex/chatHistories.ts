import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";

export const createChatHistory = mutation({
  args: {
    userId: v.id("users"),
    messages: v.array(
      v.object({
        role: v.union(v.literal("user"), v.literal("assistant")),
        content: v.string(),
        timestamp: v.number(),
      })
    ),
    jurisdiction: v.optional(v.string()),
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
      const chatCount = await ctx.db
        .query("chatHistories")
        .filter((q) => q.eq(q.field("userId"), args.userId))
        .filter((q) => q.gte(q.field("createdAt"), oneMonthAgo))
        .collect()
        .then((chats) => chats.length);
      if (chatCount >= 5) {
        throw new ConvexError("Free tier chat query limit reached");
      }
    }

    const now = Date.now();
    const chatId = await ctx.db.insert("chatHistories", {
      userId: args.userId,
      organizationId: undefined, // Set when sharing
      messages: args.messages,
      jurisdiction: args.jurisdiction || user.jurisdiction || "",
      createdAt: now,
      updatedAt: now,
    });

    return chatId;
  },
});
