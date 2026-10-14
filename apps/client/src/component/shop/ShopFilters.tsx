"use client";

import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiFilter, FiX } from "react-icons/fi";

const categories = [
  "Sarees",
  "Lehengas",
  "Kurtis",
  "Dresses",
  "Tops",
  "Bottoms",
  "Jumpsuits",
  "Outerwear",
  "Designers",
];

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to high", value: "price-asc" },
  { label: "Price: High to low", value: "price-desc" },
];

type ShopFiltersProps = {
  category?: string;
  sort?: string;
};

const ShopFilters = ({ category, sort = "newest" }: ShopFiltersProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="hidden border-b border-black/10 py-5 lg:block">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-7">
            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
              Filter by
            </span>

            <Link
              href="/shop"
              className={`text-[10px] font-semibold uppercase tracking-[0.13em] ${
                !category ? "text-kaveri-ink" : "text-kaveri-muted"
              }`}
            >
              All
            </Link>

            {categories.map((item) => (
              <Link
                key={item}
                href={`/shop?category=${encodeURIComponent(item)}`}
                className={`text-[10px] font-semibold uppercase tracking-[0.13em] transition-colors hover:text-kaveri-ink ${
                  category === item
                    ? "text-kaveri-clay scale-105"
                    : "text-kaveri-muted"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          <SortSelect sort={sort} />
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-black/10 py-4 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em]"
        >
          <FiFilter />
          Filter
        </button>

        <SortSelect sort={sort} />
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/30"
          />

          <aside className="absolute right-0 top-0 h-full w-[min(88%,380px)] overflow-y-auto bg-kaveri-cream">
            <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                Filters
              </span>

              <button
                type="button"
                aria-label="Close filters"
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center text-lg"
              >
                <FiX />
              </button>
            </div>

            <nav className="px-6 py-5">
              <Link
                href="/shop"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between border-b border-black/10 py-4 text-sm ${
                  !category ? "font-medium" : "text-kaveri-muted"
                }`}
              >
                All pieces
              </Link>

              {categories.map((item) => (
                <Link
                  key={item}
                  href={`/shop?category=${encodeURIComponent(item)}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between border-b border-black/10 py-4 text-sm ${
                    category === item ? "font-medium" : "text-kaveri-muted"
                  }`}
                >
                  {item}

                  <FiChevronDown className="-rotate-90 text-sm" />
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};

function SortSelect({ sort }: { sort: string }) {
  return (
    <label className="flex items-center gap-2">
      <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-kaveri-muted">
        Sort
      </span>

      <select
        defaultValue={sort}
        onChange={(event) => {
          const value = event.target.value;
          const url = new URL(window.location.href);

          if (value === "newest") {
            url.searchParams.delete("sort");
          } else {
            url.searchParams.set("sort", value);
          }

          window.location.href = url.toString();
        }}
        // className="cursor-pointer bg-transparent py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"
        className="cursor-pointer border-none bg-transparent py-1 text-[10px] font-semibold uppercase tracking-[0.12em] outline-none ring-0 focus:border-none focus:outline-none focus:ring-0"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default ShopFilters;
