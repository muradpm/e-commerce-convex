import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";

import { api } from "./_generated/api";

const http = httpRouter();

http.route({
  path: "/.well-known/openid-configuration",
  method: "GET",
  handler: httpAction(async () => {
    return new Response(
      JSON.stringify({
        issuer: process.env.CONVEX_SITE_URL,
        jwks_uri: process.env.CONVEX_SITE_URL + "/.well-known/jwks.json",
        authorization_endpoint: process.env.CONVEX_SITE_URL + "/oauth/authorize",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control":
            "public, max-age=15, stale-while-revalidate=15, stale-if-error=86400",
        },
      }
    );
  }),
});

http.route({
  path: "/.well-known/jwks.json",
  method: "GET",
  handler: httpAction(async () => {
    return new Response(process.env.JWKS, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control":
          "public, max-age=15, stale-while-revalidate=15, stale-if-error=86400",
      },
    });
  }),
});

// User registation and login
http.route({
  path: "/api/user/signup",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const { email, password } = await request.json();
    // TODO: Implement user registration logic here
    return new Response(JSON.stringify({ status: "User registered" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
});

http.route({
  path: "/api/user/signin",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const { email, password } = await request.json();
    // TODO: Implement user login logic here
    return new Response(JSON.stringify({ status: "User logged in" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
});

// Products retrieval
http.route({
  path: "/api/product/all",
  method: "GET",
  handler: httpAction(async (ctx) => {
    const goods = await ctx.runQuery(api.goods.getAll);
    return new Response(JSON.stringify(goods), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
});

http.route({
  path: "/api/product/by-category",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const url = new URL(request.url);
    const categoryId = url.searchParams.get("id");

    if (!categoryId) {
      return new Response(JSON.stringify({ error: "Category ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const goods = await ctx.runQuery(api.goods.getByCategory, { categoryId });

    return new Response(JSON.stringify(goods), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
});

// Categories retrieval
http.route({
  path: "/api/category/all",
  method: "GET",
  handler: httpAction(async (ctx) => {
    const categories = await ctx.runQuery(api.categories.getAll);
    return new Response(JSON.stringify(categories), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
});

// Cart management
// TODO: Fix later the issue with JWT validation by Convex
http.route({
  path: "/api/cart/order",
  method: "GET",
  handler: httpAction(async (ctx) => {
    const orders = await ctx.runQuery(api.orders.getAll);
    return new Response(JSON.stringify(orders), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
});

http.route({
  path: "/api/cart/add-product",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const { name, image, price, description, goodsId } = await request.json();
    await ctx.runMutation(api.goods.addToCart, {
      name,
      image,
      price,
      description,
      goodsId,
    });
    return new Response(JSON.stringify({ status: "Product added to cart" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
});

http.route({
  path: "/api/cart/delete",
  method: "DELETE",
  handler: httpAction(async (ctx, request) => {
    const { id } = await request.json();
    await ctx.runMutation(api.orders.removeFromCart, { id });
    return new Response(JSON.stringify({ status: "Product removed from cart" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
});

export default http;
