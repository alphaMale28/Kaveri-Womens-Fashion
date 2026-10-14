import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

import { featuredProducts } from "@/lib/products";
import ProductGallery from "@/component/product/ProductGallery";
import ProductInfo from "@/component/product/ProductInfo";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;

  const product = featuredProducts.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-kaveri-cream">
      {/* BREADCRUMB */}{" "}
      <div className="kaveri-container">
        {" "}
        <div className="flex items-center gap-3 border-b border-black/10 py-5 text-[9px] font-semibold uppercase tracking-[0.15em] text-kaveri-muted">
          {" "}
          <Link
            href="/shop"
            className="flex items-center gap-2 transition-colors hover:text-kaveri-ink"
          >
            {" "}
            <FiArrowLeft />
            Back to shop{" "}
          </Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="truncate text-kaveri-ink">{product.name}</span>
        </div>
      </div>
      {/* PRODUCT */}
      <section className="kaveri-container py-8 sm:py-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)] lg:gap-16 xl:gap-24">
          <ProductGallery
            name={product.name}
            image={product.image}
            secondImage={product.secondImage}
          />

          <ProductInfo {...product} />
        </div>
      </section>
      {/* PRODUCT STORY */}
      <section className="border-t border-black/10">
        <div className="kaveri-container">
          <div className="grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:py-20 lg:py-24">
            <div>
              <p className="kaveri-eyebrow">The details</p>
            </div>

            <div className="max-w-3xl">
              <h2 className="font-editorial text-4xl font-normal leading-none tracking-[-0.025em] sm:text-5xl lg:text-6xl">
                Designed with intention.
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-kaveri-muted">
                Every Kaveri piece is selected for its balance of contemporary
                expression and enduring style. From proportion to texture, the
                focus is on creating pieces that feel considered today and
                remain relevant beyond the season.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
