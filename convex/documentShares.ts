import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";

export const createDocumentShare = mutation({
  args: {
    documentId: v.union(
      v.id("documentAnalyses"),
      v.id("chatHistories"),
      v.id("researchResults")
    ),
    documentType: v.union(
      v.literal("documentAnalysis"),
      v.literal("chatHistory"),
      v.literal("researchResult")
    ),
    organizationId: v.id("organizations"),
    sharedWithUserId: v.optional(v.id("users")),
    permissions: v.object({
      canView: v.boolean(),
      canEdit: v.boolean(),
      canComment: v.boolean(),
    }),
    userId: v.id("users"), // User initiating the action
  },
  handler: async (ctx, args) => {
    // Verify user exists
    const user = await ctx.db.get(args.userId);
    if (!user) {
      throw new ConvexError("User not found");
    }

    // Verify organization exists
    const org = await ctx.db.get(args.organizationId);
    if (!org) {
      throw new ConvexError("Organization not found");
    }

    // Verify user is an admin or owner of the organization
    const isAdmin = await ctx.db
      .query("organizationMembers")
      .filter((q) => q.eq(q.field("organizationId"), args.organizationId))
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .filter((q) => q.eq(q.field("role"), "admin"))
      .first();
    if (!isAdmin && org.ownerId !== args.userId) {
      throw new ConvexError("Only admins or owners can share documents");
    }

    // Verify document exists
    const document = await ctx.db.get(args.documentId);
    if (!document) {
      throw new ConvexError("Document not found");
    }

    // Verify document belongs to user or organization
    if (
      document.userId !== args.userId &&
      document.organizationId !== args.organizationId
    ) {
      throw new ConvexError(
        "User does not have permission to share this document"
      );
    }

    // Verify sharedWithUserId if provided
    if (args.sharedWithUserId) {
      const sharedUser = await ctx.db.get(args.sharedWithUserId);
      if (!sharedUser) {
        throw new ConvexError("Shared user not found");
      }
      const isMember = await ctx.db
        .query("organizationMembers")
        .filter((q) => q.eq(q.field("organizationId"), args.organizationId))
        .filter((q) => q.eq(q.field("userId"), args.sharedWithUserId))
        .first();
      if (!isMember) {
        throw new ConvexError(
          "Shared user is not a member of the organization"
        );
      }
    }

    const now = Date.now();
    const shareId = await ctx.db.insert("documentShares", {
      documentId: args.documentId,
      documentType: args.documentType,
      organizationId: args.organizationId,
      sharedWithUserId: args.sharedWithUserId,
      permissions: args.permissions,
      createdAt: now,
    });

    // Update document to link to organization
    if (!document.organizationId) {
      await ctx.db.patch(args.documentId, {
        organizationId: args.organizationId,
      });
    }

    return shareId;
  },
});
