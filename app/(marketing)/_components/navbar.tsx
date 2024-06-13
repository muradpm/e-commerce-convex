"use client";

import { signIn, useSession } from "next-auth/react";

import Image from "next/image";

import { useScrollTop } from "@/hooks/use-scroll-top";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { UserNav } from "@/components/user-nav";
import { Cart } from "@/components/cart";

import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";

import { Key, Menu } from "lucide-react";

const navigation = [
  { name: "Главная", href: "main" },
  { name: "Товары", href: "goods" },
];

export const Navbar = () => {
  const { data: session } = useSession();
  const scrolled = useScrollTop();

  return (
    <header
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center justify-between w-full px-4 py-6 sm:px-12 sm:py-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Image src="/logo.svg" width={40} height={40} alt="Logo" />
      <div className="hidden lg:block">
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              smooth={true}
              duration={500}
              className="text-xl font-normal leading-6 cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-x-2">
        {session?.user ? (
          <UserNav user={session.user} />
        ) : (
          <Button variant="ghost" size="icon" onClick={() => signIn()}>
            <Key className="w-6 h-6" />
          </Button>
        )}
        <Cart />
      </div>
      <div className="flex lg:hidden items-center gap-x-2">
        {session?.user ? (
          <UserNav user={session.user} />
        ) : (
          <Button variant="ghost" size="icon" onClick={() => signIn()}>
            <Key className="w-6 h-6" />
          </Button>
        )}
        <Cart />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[640px]">
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold mb-10">Меню</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-start">
              {navigation.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="text-xl font-normal leading-6 cursor-pointer my-2 hover:text-muted-foreground"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
