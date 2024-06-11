"use client";

import { Skeleton } from "@/components/ui/skeleton";

import Image from "next/image";

import { CategoryCardOverlay } from "./overlay";
import { CategoryCardFooter } from "./footer";

interface CategoryCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

export const CategoryCard = ({ name, image, onClick }: CategoryCardProps) => {
  return (
    <div className="group aspect-[1/1] h-[240px] shadow-sm rounded-lg overflow-hidden relative cursor-pointer">
      <div className="absolute inset-0 bg-background">
        <Image src={image} alt={name} fill className="object-cover" />
        <CategoryCardOverlay />
      </div>
      <CategoryCardFooter name={name} onClick={onClick} />
    </div>
  );
};

CategoryCard.Skeleton = function CategoryCardSkeleton() {
  return (
    <div className="group aspect-[1/1] h-[240px] shadow-sm rounded-lg">
      <Skeleton className="w-full h-full" />
    </div>
  );
};
