"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface GoodsCardFooterProps {
  title: string;
  description: string;
  price: number;
  onClick: () => void;
}

export const GoodsCardFooter = ({
  title,
  description,
  price,
  onClick,
}: GoodsCardFooterProps) => {
  return (
    <div className="relative p-3">
      <p className="text-xl">{title}</p>
      <p className="text-sm text-muted-foreground h-16 overflow-y-auto">{description}</p>
      <div className="flex items-center justify-between mt-2">
        <p className="text-lg font-bold">{price} P</p>
        <Button onClick={onClick} size="icon">
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
