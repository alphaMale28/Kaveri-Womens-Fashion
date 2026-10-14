import ShopGrid from "@/component/shop/ShopGrid";
import ShopHeader from "@/component/shop/ShopHeader";

type ShopPageProps = {
  searchParams: Promise<{
    category?: string;
    designer?: string;
    sort?: string;
  }>;
};
const ShopPage = async ({ searchParams }: ShopPageProps) => {
  const params = await searchParams;

  return (
    <div className="bg-kaveri-cream">
      <ShopHeader category={params.category} designer={params.designer} />

      <ShopGrid
        category={params.category}
        designer={params.designer}
        sort={params.sort}
      />
    </div>
  );
};

export default ShopPage;
