"use client";

import { OrderButton } from "@/components/order-button";

interface GoodsCardFooterProps {
  name: string;
  image: string;
  description: string;
  price: number;
  onClick: () => void;
}

export const GoodsCardFooter = ({
  name,
  image,
  description,
  price,
  onClick,
}: GoodsCardFooterProps) => {
  return (
    <div className="relative p-3">
      <p className="text-xl">{name}</p>
      <p className="text-sm text-muted-foreground h-16 overflow-y-auto">{description}</p>
      <div className="flex items-center justify-between mt-2">
        <p className="text-lg font-bold">{price} P</p>
        <OrderButton params={{ name, price, image, description }} />
      </div>
    </div>
  );
};
