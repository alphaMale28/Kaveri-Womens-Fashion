"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiHeart } from "react-icons/fi";
import { toast } from "sonner";

import type { Product } from "@/lib/products";
import { useWishlistStore } from "@/store/wishlistStore";
import { useEffect, useState } from "react";

type ProductCardProps = Product;
const ProductCard = ({
  id,
  name,
  category,
  price,
  image,
  secondImage,
  badge,
}: ProductCardProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const wishlistItems = useWishlistStore((state) => state.items);
  const toggleItem = useWishlistStore((state) => state.toggleItem);

  const isWishlisted = mounted && wishlistItems.some((item) => item.id === id);

  // const isWishlisted = useWishlistStore((state) => state.isWishlisted(id));
  // const toggleItem = useWishlistStore((state) => state.toggleItem);

  const handleWishlist = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    // console.log();

    toggleItem({
      id,
      name,
      category,
      price,
      image,
      secondImage,
      badge,
    });

    toast.success(
      isWishlisted
        ? `${name} removed from wishlist.`
        : `${name} added to wishlist.`,
    );
  };

  return (
    <article className="group">
      <Link href={`/product/${id}`} className="block">
        {/* IMAGE */}
        <div className="kaveri-product-image">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition-all duration-700 ${
              secondImage
                ? "group-hover:opacity-0"
                : "group-hover:scale-[1.035]"
            }`}
          />

          {secondImage && (
            <Image
              src={secondImage}
              alt={`${name} alternate view`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover opacity-0 transition-all duration-700 group-hover:scale-[1.035] group-hover:opacity-100"
            />
          )}

          {badge && (
            <span className="absolute left-3 top-3 bg-kaveri-cream px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em]">
              {badge}
            </span>
          )}

          <button
            type="button"
            aria-label={
              isWishlisted
                ? `Remove ${name} from wishlist`
                : `Add ${name} to wishlist`
            }
            aria-pressed={isWishlisted}
            onClick={handleWishlist}
            className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-kaveri-cream/90 text-[17px] transition-all duration-300 ${
              isWishlisted
                ? "opacity-100 text-kaveri-clay"
                : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <FiHeart className={isWishlisted ? "fill-current" : ""} />
          </button>

          <div className="absolute bottom-0 left-0 right-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <div className="flex items-center justify-between bg-kaveri-clay px-4 py-3 text-white">
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                View product
              </span>

              <FiArrowUpRight className="text-base" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-kaveri-muted">
            {category}
          </p>

          <div className="mt-1 flex items-start justify-between gap-4">
            <h3 className="text-sm font-medium">{name}</h3>

            <span className="shrink-0 text-sm">
              NPR {price.toLocaleString("en-NP")}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
