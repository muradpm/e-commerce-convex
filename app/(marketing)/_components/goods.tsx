"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { GoodsCard } from "@/components/goods-card";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

export const GoodsSection = () => {
  const data = useQuery(api.goods.getAll);

  return (
    <div>
      <h3 className="text-base text-muted-foreground sm:text-sm md:text-xl pb-6">
        Goods
      </h3>
      <Tabs defaultValue="latte">
        <TabsList>
          <TabsTrigger value="latte">Latte</TabsTrigger>
          <TabsTrigger value="robusta" disabled>
            Robusta
          </TabsTrigger>
          <TabsTrigger value="arabica" disabled>
            Arabica
          </TabsTrigger>
        </TabsList>
        {data === undefined ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-8 pb-10">
            <GoodsCard.Skeleton />
            <GoodsCard.Skeleton />
            <GoodsCard.Skeleton />
            <GoodsCard.Skeleton />
          </div>
        ) : (
          <TabsContent value="latte">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-8 pb-10">
              {data?.map((goods) => (
                <GoodsCard
                  key={goods._id}
                  name={goods.name}
                  image={goods.image}
                  description={goods.description}
                  price={goods.price}
                  goodsId={goods._id}
                  onClick={() => {}}
                />
              ))}
            </div>
          </TabsContent>
        )}
        <TabsContent value="robusta"></TabsContent>
        <TabsContent value="arabica"></TabsContent>
      </Tabs>
    </div>
  );
};
