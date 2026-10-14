"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight, FiTrash2 } from "react-icons/fi";
import { toast } from "sonner";

import { useWishlistStore } from "@/store/wishlistStore";

const WishlistPage = () => {
  const items = useWishlistStore((state) => state.items);
  const removeItem = useWishlistStore((state) => state.removeItem);
  const clearWishlist = useWishlistStore((state) => state.clearWishlist);

  const handleRemove = (id: string, name: string) => {
    removeItem(id);
    toast.success(`${name} removed from wishlist.`);
  };

  const handleClear = () => {
    clearWishlist();
    toast.success("Wishlist cleared.");
  };

  if (items.length === 0) {
    return (
      <div className="bg-kaveri-cream">
        <section className="kaveri-container flex min-h-[65vh] items-center justify-center py-20">
          <div className="max-w-md text-center">
            <p className="kaveri-eyebrow justify-center">Your wishlist</p>

            <h1 className="font-editorial mt-6 text-6xl font-normal leading-none tracking-[-0.035em] sm:text-7xl">
              Nothing saved yet.
            </h1>

            <p className="mt-5 text-sm leading-7 text-kaveri-muted">
              Save the pieces you love and come back to them whenever you are
              ready.
            </p>

            <Link href="/shop" className="kaveri-button mt-8">
              Explore the collection
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-kaveri-cream">
      <section className="border-b border-black/10">
        <div className="kaveri-container py-14 sm:py-16 lg:py-20">
          <p className="kaveri-eyebrow">Saved pieces</p>

          <div className="mt-6 flex items-end justify-between gap-6">
            <h1 className="font-editorial text-[clamp(4rem,8vw,7rem)] font-normal leading-[0.8] tracking-[-0.045em]">
              Wishlist.
            </h1>

            <div className="flex items-center gap-5 pb-1">
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-kaveri-muted">
                {items.length} {items.length === 1 ? "piece" : "pieces"}
              </p>

              <button
                type="button"
                onClick={handleClear}
                className="hidden text-[9px] font-semibold uppercase tracking-[0.15em] text-kaveri-muted transition-colors hover:text-kaveri-clay sm:block"
              >
                Clear all
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="kaveri-container py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-2 gap-x-3 gap-y-12 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4 lg:gap-y-16">
          {items.map((item) => (
            <article key={item.id} className="group">
              <div className="kaveri-product-image">
                <Link href={`/product/${item.id}`} className="block h-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </Link>

                <button
                  type="button"
                  aria-label={`Remove ${item.name} from wishlist`}
                  onClick={() => handleRemove(item.id, item.name)}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-kaveri-cream/90 text-[17px] transition-colors hover:text-kaveri-clay"
                >
                  <FiTrash2 />
                </button>

                <Link
                  href={`/product/${item.id}`}
                  className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-between bg-kaveri-ink px-4 py-3 text-white transition-transform duration-300 group-hover:translate-y-0"
                >
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                    View product
                  </span>

                  <FiArrowUpRight className="text-base" />
                </Link>
              </div>

              <div className="mt-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-kaveri-muted">
                  {item.category}
                </p>

                <div className="mt-1 flex items-start justify-between gap-4">
                  <Link
                    href={`/product/${item.id}`}
                    className="text-sm font-medium transition-colors hover:text-kaveri-clay"
                  >
                    {item.name}
                  </Link>

                  <span className="shrink-0 text-sm">
                    NPR {item.price.toLocaleString("en-NP")}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-black/10 pt-7 sm:hidden">
          <button
            type="button"
            onClick={handleClear}
            className="text-[9px] font-semibold uppercase tracking-[0.15em] text-kaveri-muted transition-colors hover:text-kaveri-clay"
          >
            Clear wishlist
          </button>
        </div>

        <Link href="/shop" className="kaveri-link mt-12">
          <FiArrowLeft />
          Continue shopping
        </Link>
      </section>
    </div>
  );
};

export default WishlistPage;
