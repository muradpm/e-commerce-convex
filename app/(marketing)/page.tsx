import { Footer } from "./_components/footer";
import { CategorySection } from "./_components/category";
import { GoodsSection } from "./_components/goods";

const MarketingPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1">
        <div id="category">
          <CategorySection />
        </div>
        <div id="goods">
          <GoodsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
