"use client";

import Image from "next/image";

import { Skeleton } from "../ui/skeleton";
import { GoodsCardOverlay } from "./overlay";
import { GoodsCardFooter } from "./footer";

interface GoodsCardProps {
  description: string;
  name: string;
  price: number;
  image: string;
  onClick: () => void;
}

export const GoodsCard = ({
  description,
  name,
  price,
  image,
  onClick,
}: GoodsCardProps) => {
  return (
    <div className="group aspect-[1/1] w-[240px] h-[300px] shadow-sm rounded-lg flex flex-col justify-between overflow-hidden relative cursor-pointer">
      <div className="relative flex-1 bg-background">
        <Image src={image} alt={name} fill className="object-cover" />
        <GoodsCardOverlay />
      </div>
      <GoodsCardFooter
        name={name}
        image={image}
        description={description}
        price={price}
        onClick={onClick}
      />
    </div>
  );
};

GoodsCard.Skeleton = function GoodsCardSkeleton() {
  return (
    <div className="aspect-[100/100] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
