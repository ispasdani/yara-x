import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";

export const createOrganizationMember = mutation({
  args: {
    organizationId: v.id("organizations"),
    userId: v.id("users"),
    role: v.union(v.literal("admin"), v.literal("member")),
    adminId: v.id("users"), // User initiating the action
  },
  handler: async (ctx, args) => {
    // Verify organization exists
    const org = await ctx.db.get(args.organizationId);
    if (!org) {
      throw new ConvexError("Organization not found");
    }

    // Verify user exists
    const user = await ctx.db.get(args.userId);
    if (!user) {
      throw new ConvexError("User not found");
    }

    // Verify admin has permission
    const admin = await ctx.db
      .query("organizationMembers")
      .filter((q) => q.eq(q.field("organizationId"), args.organizationId))
      .filter((q) => q.eq(q.field("userId"), args.adminId))
      .filter((q) => q.eq(q.field("role"), "admin"))
      .first();
    if (!admin) {
      throw new ConvexError("Only admins can add members");
    }

    // Check if user is already a member
    const existingMember = await ctx.db
      .query("organizationMembers")
      .filter((q) => q.eq(q.field("organizationId"), args.organizationId))
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .first();
    if (existingMember) {
      throw new ConvexError("User is already a member of this organization");
    }

    const now = Date.now();
    const memberId = await ctx.db.insert("organizationMembers", {
      organizationId: args.organizationId,
      userId: args.userId,
      role: args.role,
      createdAt: now,
    });

    return memberId;
  },
});
