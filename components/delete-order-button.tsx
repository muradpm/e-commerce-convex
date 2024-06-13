import { Button } from "@/components/ui/button";
import { LoaderCircle, Trash } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";

interface DeleteOrderButtonProps {
  itemId: string;
}

export const DeleteOrderButton = ({ itemId }: DeleteOrderButtonProps) => {
  const { mutate, pending } = useApiMutation(api.orders.removeFromCart);

  const onRemove = (id: string) => {
    mutate({ id })
      .then(() => toast.success("Товар удален из корзины"))
      .catch(() => toast.error("Авторизуйтесь для удаления товара"));
  };

  return (
    <Button variant="destructive" size="icon" onClick={() => onRemove(itemId)}>
      {pending ? (
        <LoaderCircle className="animate-spin w-4 h-4" />
      ) : (
        <Trash className="w-4 h-4" />
      )}
    </Button>
  );
};
