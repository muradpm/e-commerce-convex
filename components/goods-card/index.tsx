"use client";

import Link from "next/link";

import { Skeleton } from "../ui/skeleton";

import { GoodsCardOverlay } from "./overlay";
import { GoodsCardFooter } from "./footer";

interface GoodsCardProps {
  id: string;
  title: string;
  onClick: () => void;
}

export const GoodsCard = ({ id, title, onClick }: GoodsCardProps) => {
  return (
    <Link href={`/form/${id}`}>
      <div className="group aspect-[308/278] border shadow-sm rounded-lg flex flex-col justify-between overflow-hidden relative">
        <div className="relative flex-1 bg-background">
          {/* TODO: Try to add images to the overlay */}
          <GoodsCardOverlay />
        </div>
        <GoodsCardFooter title={title} onClick={onClick} />
      </div>
    </Link>
  );
};

GoodsCard.Skeleton = function GoodsCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
