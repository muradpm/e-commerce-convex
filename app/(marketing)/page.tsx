import { Footer } from "./_components/footer";
import { CategorySection } from "./_components/category";
import { GoodsSection } from "./_components/goods";

const MarketingPage = () => {
  return (
    <div id="main">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1">
        <CategorySection />
        <div id="goods">
          <GoodsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
