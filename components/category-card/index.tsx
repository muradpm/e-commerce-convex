"use client";

import Link from "next/link";

import { Skeleton } from "../ui/skeleton";

import { CategoryCardOverlay } from "./overlay";
import { CategoryCardFooter } from "./footer";

interface CategoryCardProps {
  id: string;
  title: string;
  onClick: () => void;
}

export const CategoryCard = ({ id, title, onClick }: CategoryCardProps) => {
  return (
    <Link href={`/form/${id}`}>
      <div className="group aspect-[308/278] border shadow-sm rounded-lg flex flex-col justify-between overflow-hidden relative">
        <div className="relative flex-1 bg-background">
          {/* TODO: Try to add images to the overlay */}
          <CategoryCardOverlay />
        </div>
        <CategoryCardFooter title={title} onClick={onClick} />
      </div>
    </Link>
  );
};

CategoryCard.Skeleton = function CategoryCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
