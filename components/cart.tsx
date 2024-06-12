"use client";

import Image from "next/image";

import { ShoppingBag } from "lucide-react";

import { EmptyCartState } from "./empty-cart-state";

import { CartForm } from "./cart-form";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import { DeleteOrderButton } from "./delete-order-button";

export function Cart() {
  const data = useQuery(api.orders.getAll);

  if (!data) {
    return <CartSkeleton />;
  }

  const itemCount = data.length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="w-6 h-6" />
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[640px]">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold mb-10">Корзина</SheetTitle>
        </SheetHeader>
        {data && data.length === 0 ? (
          <EmptyCartState />
        ) : (
          data.map((item) => (
            <div className="flex items-center gap-4 p-4" key={item._id}>
              <div className="relative w-[100px] h-[100px] rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-lg font-bold mt-2">{item.price} P</p>
              </div>
              <DeleteOrderButton itemId={item._id} />
            </div>
          ))
        )}
        <CartForm />
      </SheetContent>
    </Sheet>
  );
}

export const CartSkeleton = () => {
  return (
    <div>
      <div className="w-8 h-8 animate-pulse rounded-full bg-muted"></div>
    </div>
  );
};
