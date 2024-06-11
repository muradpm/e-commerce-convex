import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

export const get = query({
  handler: async (ctx) => {
    const orders = await ctx.db.query("orders").collect();

    return orders;
  },
});

export const remove = mutation({
  args: { id: v.id("orders") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    await ctx.db.delete(args.id);
  },
});
