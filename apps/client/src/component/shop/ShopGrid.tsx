"use client";

import { featuredProducts } from "@/lib/products";
import ShopFilters from "./ShopFilters";
import ProductCard from "../product/ProductCard";
// import ProductCard from "../ProductCard";

type ShopGridProps = {
  category?: string;
  designer?: string;
  sort?: string;
};

const Footer = ({ category, designer, sort = "newest" }: ShopGridProps) => {
  let products = [...featuredProducts];

  if (category) {
    products = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase(),
    );
  }

  if (designer) {
    products = products.filter(
      (product) => product.designer?.toLowerCase() === designer.toLowerCase(),
    );
  }

  if (sort === "price-asc") {
    products.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-desc") {
    products.sort((a, b) => b.price - a.price);
  }

  return (
    <section>
      <div className="kaveri-container">
        <ShopFilters category={category} sort={sort} />

        <div className="flex items-center justify-between py-5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-kaveri-muted">
            {products.length} pieces
          </p>

          {category && (
            <p className="text-[9px] uppercase tracking-[0.15em] text-kaveri-muted">
              {category}
            </p>
          )}
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-12 pb-24 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4 lg:gap-y-16">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[40vh] items-center justify-center border-t border-black/10 pb-24">
            <div className="text-center">
              <p className="font-editorial text-4xl">Nothing here yet.</p>

              <p className="mt-3 text-sm text-kaveri-muted">
                Try exploring another category.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Footer;
