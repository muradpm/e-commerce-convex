import { v } from "convex/values";

import { query } from "./_generated/server";

export const get = query({
  handler: async (ctx) => {
    const categories = await ctx.db.query("category").collect();

    return categories;
  },
});
