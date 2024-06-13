import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

import { Id } from "./_generated/dataModel";

export const getAll = query({
  handler: async (ctx) => {
    const goods = await ctx.db.query("goods").collect();

    return goods;
  },
});

export const addToCart = mutation({
  args: {
    name: v.string(),
    image: v.string(),
    price: v.number(),
    description: v.string(),
    goodsId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const userId = identity.subject as Id<"users">;

    const orders = await ctx.db.insert("orders", {
      name: args.name,
      image: args.image,
      price: args.price,
      description: args.description,
      goodsId: args.goodsId,
      userId: userId,
    });

    return orders;
  },
});

export const getByCategory = query({
  args: { categoryId: v.string() },
  handler: async (ctx, { categoryId }) => {
    return await ctx.db
      .query("goods")
      .filter((q) => q.eq(q.field("categoryId"), categoryId))
      .collect();
  },
});
