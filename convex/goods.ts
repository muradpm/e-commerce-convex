import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

export const get = query({
  handler: async (ctx) => {
    const goods = await ctx.db.query("goods").collect();

    return goods;
  },
});

export const add = mutation({
  args: {
    name: v.string(),
    image: v.string(),
    price: v.number(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const orders = await ctx.db.insert("orders", {
      name: args.name,
      image: args.image,
      price: args.price,
      description: args.description,
    });

    return orders;
  },
});
