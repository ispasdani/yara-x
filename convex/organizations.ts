import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";

export const createOrganization = mutation({
  args: {
    ownerId: v.id("users"),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    // Verify user exists
    const user = await ctx.db.get(args.ownerId);
    if (!user) {
      throw new ConvexError("User not found");
    }

    // Check subscription tier (business tier required for organizations)
    if (user.subscriptionTier !== "business") {
      throw new ConvexError(
        "Business subscription required to create organizations"
      );
    }

    const now = Date.now();
    const orgId = await ctx.db.insert("organizations", {
      name: args.name,
      ownerId: args.ownerId,
      createdAt: now,
      updatedAt: now,
    });

    // Add owner as admin
    await ctx.db.insert("organizationMembers", {
      organizationId: orgId,
      userId: args.ownerId,
      role: "admin",
      createdAt: now,
    });

    return orgId;
  },
});
