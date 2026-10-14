"use client";

import { useState } from "react";
import { FiHeart, FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";
import { toast } from "sonner";

import type { Product } from "@/lib/products";
import { useCartStore } from "@/store/cartStore";

type ProductInfoProps = Product;

const sizes = ["XS", "S", "M", "L", "XL"];

const ProductInfo = ({
  name,
  category,
  designer,
  price,
  image,
  secondImage,
  id,
  badge,
}: ProductInfoProps) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const addItem = useCartStore((state) => state.addItem);

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const handleAddToBag = () => {
    if (!selectedSize) {
      toast.error("Please select a size.");
      return;
    }

    addItem(
      {
        id,
        name,
        category,
        designer,
        price,
        image,
        secondImage,
        badge,
      },
      selectedSize,
      quantity,
    );

    toast.success(`${name} added to your bag.`);
  };

  return (
    <div className="lg:sticky lg:top-24 lg:self-start">
      {/* CATEGORY */}{" "}
      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
        {category}{" "}
      </p>
      {/* NAME */}
      <h1 className="font-editorial mt-4 max-w-xl text-[clamp(3rem,5vw,5.5rem)] font-normal leading-[0.86] tracking-[-0.04em]">
        {name}
      </h1>
      {/* DESIGNER */}
      {designer && (
        <p className="mt-5 text-xs uppercase tracking-[0.14em] text-kaveri-muted">
          {designer}
        </p>
      )}
      {/* PRICE */}
      <p className="mt-6 text-base">NPR {price.toLocaleString("en-NP")}</p>
      <div className="my-8 h-px w-full bg-black/10" />
      {/* DESCRIPTION */}
      <div>
        <p className="text-sm leading-7 text-kaveri-muted">
          A considered silhouette designed with an emphasis on refined
          proportions, thoughtful detailing, and effortless wearability.
          Designed to become a lasting part of your wardrobe.
        </p>
      </div>
      {/* SIZE */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.15em]">
            Select size
          </span>

          <button
            type="button"
            className="text-[9px] font-semibold uppercase tracking-[0.13em] text-kaveri-muted underline underline-offset-4"
          >
            Size guide
          </button>
        </div>

        <div className="mt-4 grid grid-cols-5 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`h-12 border text-xs transition-colors ${
                selectedSize === size
                  ? "border-kaveri-ink bg-kaveri-ink text-white"
                  : "border-black/15 hover:border-kaveri-ink"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      {/* QUANTITY */}
      <div className="mt-8">
        <span className="text-[9px] font-semibold uppercase tracking-[0.15em]">
          Quantity
        </span>

        <div className="mt-4 flex h-12 w-32 items-center border border-black/15">
          <button
            type="button"
            onClick={decreaseQuantity}
            aria-label="Decrease quantity"
            className="flex h-full w-10 items-center justify-center text-sm transition-colors hover:text-kaveri-clay"
          >
            <FiMinus />
          </button>

          <span className="flex flex-1 items-center justify-center text-sm">
            {quantity}
          </span>

          <button
            type="button"
            onClick={increaseQuantity}
            aria-label="Increase quantity"
            className="flex h-full w-10 items-center justify-center text-sm transition-colors hover:text-kaveri-clay"
          >
            <FiPlus />
          </button>
        </div>
      </div>
      {/* ACTIONS */}
      <div className="mt-8 flex gap-2">
        <button
          type="button"
          onClick={handleAddToBag}
          className="kaveri-button flex-1"
        >
          <FiShoppingBag className="text-base" />
          Add to bag
        </button>

        <button
          type="button"
          aria-label="Add to wishlist"
          className="flex h-12 w-12 shrink-0 items-center justify-center border border-black/15 text-lg transition-colors hover:border-kaveri-ink hover:text-kaveri-clay"
        >
          <FiHeart />
        </button>
      </div>
      {/* DETAILS */}
      <div className="mt-10 border-t border-black/10">
        <div className="flex items-center justify-between border-b border-black/10 py-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">
            Delivery
          </span>

          <span className="text-xs text-kaveri-muted">
            Available across Nepal
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-black/10 py-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">
            Returns
          </span>

          <span className="text-xs text-kaveri-muted">Easy returns</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
