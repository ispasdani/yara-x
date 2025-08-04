import { ConvexError, v } from "convex/values";
import { internalMutation } from "./_generated/server";

export const createTemplate = internalMutation({
  args: {
    title: v.string(),
    description: v.string(),
    content: v.string(),
    documentType: v.string(),
    isPremium: v.boolean(),
    jurisdiction: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const templateId = await ctx.db.insert("templates", {
      title: args.title,
      description: args.description,
      content: args.content,
      documentType: args.documentType,
      isPremium: args.isPremium,
      jurisdiction: args.jurisdiction || "",
      createdAt: now,
    });

    return templateId;
  },
});
