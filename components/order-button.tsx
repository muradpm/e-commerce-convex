"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

import { Plus, LoaderCircle } from "lucide-react";

import { useApiMutation } from "@/hooks/use-api-mutation";

import { api } from "@/convex/_generated/api";

interface OrderButtonProps {
  params: {
    name: string;
    price: number;
    image: string;
    description: string;
    goodsId: string;
  };
}

export const OrderButton = ({ params }: OrderButtonProps) => {
  const { mutate, pending } = useApiMutation(api.goods.addToCart);

  const onClick = () => {
    mutate(params)
      .then(() => {
        toast.success("Товар добавлен в корзину");
      })
      .catch(() => toast.error("Авторизуйтесь для добавления товара"));
  };

  return (
    <div>
      <Button size="icon" onClick={onClick} disabled={pending}>
        {pending ? (
          <LoaderCircle className="animate-spin w-4 h-4" />
        ) : (
          <Plus className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
};
