"use client";

import { CategoryCard } from "@/components/category-card";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

export const CategorySection = () => {
  const data = useQuery(api.categories.get);

  return (
    <div>
      <h3 className="text-base text-muted-foreground sm:text-sm md:text-xl">Категории</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-8 pb-10">
        {data?.map((category) => (
          <CategoryCard
            key={category._id}
            name={category.name}
            image={category.image}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};
