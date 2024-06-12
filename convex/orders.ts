import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

import { Id } from "./_generated/dataModel";

export const getAll = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      return [];
    }

    const userId = identity.subject as Id<"users">;

    const orders = await ctx.db
      .query("orders")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();

    return orders;
  },
});

export const removeFromCart = mutation({
  args: { id: v.id("orders") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    await ctx.db.delete(args.id);
  },
});
