import { Navbar } from "./_components/navbar";
import { Loading } from "./_components/loading";
import { Suspense } from "react";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Suspense fallback={<Loading />}>
        <Navbar />
      </Suspense>
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
