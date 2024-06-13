import { query } from "./_generated/server";

export const getAll = query({
  handler: async (ctx) => {
    const categories = await ctx.db.query("category").collect();

    return categories;
  },
});
