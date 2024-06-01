"use client";

import { signIn, useSession } from "next-auth/react";

import Image from "next/image";

import { useScrollTop } from "@/hooks/use-scroll-top";

import { Button } from "@/components/ui/button";

import { UserNav } from "@/components/user-nav";

import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";

import { Key, ShoppingBag } from "lucide-react";

const navigation = [
  { name: "Главная", href: "main" },
  { name: "Товары", href: "products" },
];

export const Navbar = () => {
  const { data: session } = useSession();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center justify-between w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Image src="/logo.svg" width={40} height={40} alt="Footer logo" />
      <div className="flex-grow text-center">
        {navigation.map((item) => (
          <ScrollLink
            key={item.name}
            to={item.href}
            smooth={true}
            duration={500}
            className="text-xl leading-6 cursor-pointer mx-6"
          >
            {item.name}
          </ScrollLink>
        ))}
      </div>
      <div className="flex items-center gap-x-2">
        {session?.user ? (
          <UserNav user={session.user} />
        ) : (
          <Button variant="ghost" size="icon" onClick={() => signIn()}>
            <Key className="w-6 h-6" />
          </Button>
        )}
        <Button variant="ghost" size="icon">
          <ShoppingBag className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};
