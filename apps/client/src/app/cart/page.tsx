"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

import { useCartStore } from "@/store/cartStore";

const CartPage = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const subtotal = useCartStore((state) => state.subtotal());

  if (items.length === 0) {
    return (
      <div className="bg-kaveri-cream">
        {" "}
        <section className="kaveri-container flex min-h-[65vh] items-center justify-center py-20">
          {" "}
          <div className="max-w-md text-center">
            {" "}
            <p className="kaveri-eyebrow justify-center">Your bag </p>
            <h1 className="font-editorial mt-6 text-6xl font-normal leading-none tracking-[-0.035em] sm:text-7xl">
              Nothing here yet.
            </h1>
            <p className="mt-5 text-sm leading-7 text-kaveri-muted">
              Your selected pieces will appear here once you add something to
              your bag.
            </p>
            <Link href="/shop" className="kaveri-button mt-8">
              Continue shopping
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-kaveri-cream">
      {/* HEADER */}{" "}
      <section className="border-b border-black/10">
        {" "}
        <div className="kaveri-container py-14 sm:py-16 lg:py-20">
          {" "}
          <p className="kaveri-eyebrow">Shopping bag</p>
          <div className="mt-6 flex items-end justify-between gap-6">
            <h1 className="font-editorial text-[clamp(4rem,8vw,7rem)] font-normal leading-[0.8] tracking-[-0.045em]">
              Your bag.
            </h1>

            <p className="hidden pb-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-kaveri-muted sm:block">
              {items.length} {items.length === 1 ? "piece" : "pieces"}
            </p>
          </div>
        </div>
      </section>
      {/* CART */}
      <section className="kaveri-container py-10 sm:py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-20">
          {/* ITEMS */}
          <div>
            <div className="border-t border-black/10">
              {items.map((item) => (
                <article
                  key={`${item.id}-${item.size}`}
                  className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-black/10 py-6 sm:grid-cols-[8rem_1fr] sm:gap-6"
                >
                  {/* IMAGE */}
                  <Link
                    href={`/product/${item.id}`}
                    className="relative aspect-[3/4] overflow-hidden bg-kaveri-paper"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </Link>

                  {/* INFORMATION */}
                  <div className="flex min-w-0 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-kaveri-muted">
                          {item.category}
                        </p>

                        <Link
                          href={`/product/${item.id}`}
                          className="mt-1 block text-sm font-medium transition-colors hover:text-kaveri-clay"
                        >
                          {item.name}
                        </Link>
                      </div>

                      <button
                        type="button"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeItem(item.id, item.size)}
                        className="shrink-0 text-base text-kaveri-muted transition-colors hover:text-kaveri-clay"
                      >
                        <FiTrash2 />
                      </button>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.1em] text-kaveri-muted">
                      <span>Size: {item.size}</span>

                      <span>NPR {item.price.toLocaleString("en-NP")}</span>
                    </div>

                    <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                      {/* QUANTITY */}
                      <div className="flex h-10 w-28 items-center border border-black/15">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.quantity - 1,
                            )
                          }
                          className="flex h-full w-9 items-center justify-center text-sm transition-colors hover:text-kaveri-clay"
                        >
                          <FiMinus />
                        </button>

                        <span className="flex flex-1 items-center justify-center text-xs">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.quantity + 1,
                            )
                          }
                          className="flex h-full w-9 items-center justify-center text-sm transition-colors hover:text-kaveri-clay"
                        >
                          <FiPlus />
                        </button>
                      </div>

                      {/* ITEM TOTAL */}
                      <p className="text-sm">
                        NPR{" "}
                        {(item.price * item.quantity).toLocaleString("en-NP")}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <Link href="/shop" className="kaveri-link mt-8">
              <FiArrowLeft />
              Continue shopping
            </Link>
          </div>

          {/* SUMMARY */}
          <aside className="h-fit border-t border-black/10 lg:sticky lg:top-24">
            <div className="py-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
                Order summary
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between gap-6 text-sm">
                  <span className="text-kaveri-muted">Subtotal</span>

                  <span>NPR {subtotal.toLocaleString("en-NP")}</span>
                </div>

                <div className="flex items-center justify-between gap-6 text-sm">
                  <span className="text-kaveri-muted">Delivery</span>

                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="my-6 h-px w-full bg-black/10" />

              <div className="flex items-center justify-between gap-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">
                  Total
                </span>

                <span className="text-base">
                  NPR {subtotal.toLocaleString("en-NP")}
                </span>
              </div>

              {/* <button type="button" className="kaveri-button mt-7 w-full">
                Proceed to checkout
              </button> */}

              <Link href="/checkout" className="kaveri-button mt-7 w-full">
                Proceed to checkout
              </Link>

              <p className="mt-4 text-center text-[9px] leading-5 text-kaveri-muted">
                Taxes and delivery charges are calculated at checkout.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
