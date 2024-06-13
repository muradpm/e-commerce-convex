"use client";

import { useState } from "react";

import Image from "next/image";

import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";

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

const ITEMS_PER_PAGE = 3;

export function Cart() {
  const data = useQuery(api.orders.getAll);
  const [currentPage, setCurrentPage] = useState(1);

  if (!data) {
    return <CartSkeleton />;
  }

  const itemCount = data.length;
  const totalPages = Math.ceil(itemCount / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
          <div className="flex flex-col gap-4 p-4 max-h-[400px] sm:max-h-[640px] overflow-y-auto">
            {paginatedData.map((item) => (
              <div className="flex items-center gap-4" key={item._id}>
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
            ))}
          </div>
        )}
        <div className="flex justify-between items-center mt-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentPage} из {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
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
