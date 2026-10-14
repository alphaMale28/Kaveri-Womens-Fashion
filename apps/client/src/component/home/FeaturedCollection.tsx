"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import { featuredProducts } from "@/lib/products";
import ProductCard from "../product/ProductCard";

const FeaturedCollection = () => {
  return (
    <section className="kaveri-section bg-kaveri-paper">
      <div className="kaveri-container">
        {/* INTRO */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <span className="kaveri-eyebrow">Kaveri Edit</span>

            <h2 className="kaveri-section-title">
              Quiet
              <br />
              confidence.
            </h2>
          </div>

          <div className="flex max-w-lg flex-col justify-end lg:pb-2">
            <p className="text-sm leading-7 text-kaveri-muted">
              A considered selection of silhouettes designed to move
              effortlessly between everyday moments and occasions worth
              remembering.
            </p>

            <Link href="/shop" className="kaveri-link mt-7">
              Explore the edit
              <FiArrowUpRight className="kaveri-icon" />
            </Link>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="mt-16 grid grid-cols-2 gap-x-3 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* MOBILE / BOTTOM CTA */}
        <div className="mt-14 flex justify-center border-t border-black/10 pt-10">
          <Link href="/shop" className="kaveri-button">
            View all pieces
            <FiArrowUpRight className="text-base" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
