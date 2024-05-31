"use client";

import { CategoryCard } from "@/components/category-card";

export const Category = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h3 className="text-base text-muted-foreground sm:text-sm md:text-xl">Категории</h3>
      <div className="grid w-full grid-cols-3">{/* TODO: Add category cards */}</div>
    </div>
  );
};
