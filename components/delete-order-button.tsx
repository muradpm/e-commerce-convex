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
      .then(() => toast.success("Item removed from cart"))
      .catch(() => toast.error("Please log in to delete the item"));
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
