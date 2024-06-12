import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

import { Inter } from "next/font/google";

import ConvexClientProvider from "@/app/ConvexClientProvider";

import { auth, signOut } from "@/auth";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffeecom",
  description: "Coffee shop website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider session={session}>
          <main>{children}</main>
          <Toaster />
        </ConvexClientProvider>
      </body>
    </html>
  );
}

function SignOut() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await signOut({ redirectTo: "/" });
      }}
    >
      <Button type="submit">Sign out</Button>
    </form>
  );
}
