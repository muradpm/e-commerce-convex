"use client";

import { ShoppingCart } from "lucide-react";

export const EmptyCartState = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <ShoppingCart className="w-10 h-10" />
      </div>
      <h2 className="text-2xl font-semibold mt-6">Cart is empty</h2>
      <p className="text-muted-foreground text-sm mt-2">
        You haven't added any items to the cart yet.
      </p>
    </div>
  );
};
