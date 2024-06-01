import { v } from "convex/values";

import { query } from "./_generated/server";

export const get = query({
  handler: async (ctx) => {
    const goods = await ctx.db.query("goods").collect();

    return goods;
  },
});
