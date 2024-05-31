"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { GoodsCard } from "@/components/goods-card";

export const Goods = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h3 className="text-base text-muted-foreground sm:text-sm md:text-xl">Товары</h3>
      <Tabs defaultValue="latte">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="latte">Латте</TabsTrigger>
          <TabsTrigger value="robusta">Робаста</TabsTrigger>
          <TabsTrigger value="arabica">Арабика</TabsTrigger>
        </TabsList>
        <TabsContent value="latte">{/* TODO: Add goods cards */}</TabsContent>
        <TabsContent value="robusta"></TabsContent>
        <TabsContent value="arabica"></TabsContent>
      </Tabs>
    </div>
  );
};
