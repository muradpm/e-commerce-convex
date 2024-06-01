"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { signOut } from "next-auth/react";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

interface UserProps {
  user: {
    email?: string | null;
    name?: string | null;
    image?: string | null;
  };
}

export const UserNav = ({ user }: UserProps) => {
  const data = useQuery(api.auth.getUser, {
    email: user.email ?? "",
    name: user.name ?? "",
    image: user.image ?? "",
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={data?.[0]?.image ?? ""} alt={data?.[0]?.name ?? ""} />
            <AvatarFallback>{data?.[0]?.name ? data?.[0]?.name[0] : ""}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{data?.[0]?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {data?.[0]?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
