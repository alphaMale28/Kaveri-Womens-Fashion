"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiSearch, FiX } from "react-icons/fi";

import { featuredProducts } from "@/lib/products";

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");

  const results = query.trim()
    ? featuredProducts
        .filter((product) => {
          const searchText = [product.name, product.category, product.designer]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

          return searchText.includes(query.trim().toLowerCase());
        })
        .slice(0, 4)
    : featuredProducts.slice(0, 4);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 bg-kaveri-cream">
      <div className="kaveri-container">
        <div className="flex h-20 items-center justify-between border-b border-black/10">
          <Link
            href="/"
            onClick={onClose}
            className="text-[22px] font-semibold tracking-[0.3em]"
          >
            KAVERI
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="flex h-10 w-10 items-center justify-center text-xl transition-colors hover:text-kaveri-clay"
          >
            <FiX />
          </button>
        </div>

        <div className="py-12 sm:py-16 lg:py-20">
          <div className="flex items-center gap-4 border-b border-black/20 pb-5">
            <FiSearch className="shrink-0 text-xl text-kaveri-muted" />

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoFocus
              placeholder="Search sarees, dresses, kurtis..."
              aria-label="Search products"
              className="w-full bg-transparent font-editorial text-3xl font-normal tracking-[-0.02em] placeholder:text-kaveri-muted/70 sm:text-5xl lg:text-6xl"
            />

            {/* {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="shrink-0 text-kaveri-muted transition-colors hover:text-kaveri-ink"
              >
                <FiX />
              </button>
            )} */}
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
                {query ? "Search results" : "Explore Kaveri"}
              </p>

              {query && (
                <p className="text-[9px] uppercase tracking-[0.14em] text-kaveri-muted">
                  {results.length} {results.length === 1 ? "result" : "results"}
                </p>
              )}
            </div>

            {results.length > 0 ? (
              <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-5">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={onClose}
                    className="group"
                  >
                    <div className="kaveri-product-image">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                      />

                      <div className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-between bg-kaveri-ink px-4 py-3 text-white transition-transform duration-300 group-hover:translate-y-0">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                          View product
                        </span>
                        <FiArrowUpRight className="text-base" />
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-kaveri-muted">
                        {product.category}
                      </p>

                      <div className="mt-1 flex items-start justify-between gap-3">
                        <h3 className="text-xs font-medium">{product.name}</h3>

                        <span className="shrink-0 text-xs">
                          NPR {product.price.toLocaleString("en-NP")}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="border-y border-black/10 py-20 text-center">
                <p className="font-editorial text-4xl">No pieces found.</p>

                <p className="mt-3 text-sm text-kaveri-muted">
                  Try another search term.
                </p>
              </div>
            )}
          </div>

          {!query && (
            <div className="mt-12 border-t border-black/10 pt-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
                Popular categories
              </p>

              <div className="mt-5 flex flex-wrap gap-x-7 gap-y-4">
                {[
                  "Sarees",
                  "Lehengas",
                  "Kurtis",
                  "Dresses",
                  "Tops",
                  "Bottoms",
                ].map((category) => (
                  <Link
                    key={category}
                    href={`/shop?category=${category}`}
                    onClick={onClose}
                    className="group kaveri-link"
                  >
                    {category}
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:text-kaveri-clay" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
