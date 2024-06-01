"use client";

import { Skeleton } from "../ui/skeleton";

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
    <div className="group aspect-[1/1] h-[240px] shadow-sm rounded-lg flex flex-col justify-between overflow-hidden relative cursor-pointer">
      <div className="relative flex-1 bg-background">
        <Image src={image} alt={name} fill className="object-cover" />
        <CategoryCardOverlay />
      </div>
      <CategoryCardFooter title={name} onClick={onClick} />
    </div>
  );
};

CategoryCard.Skeleton = function CategoryCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};