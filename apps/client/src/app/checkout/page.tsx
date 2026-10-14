"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiLock } from "react-icons/fi";

import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";

const CheckoutPage = () => {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.subtotal());

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const delivery = subtotal >= 10000 ? 0 : 250;
  const total = subtotal + delivery;

  if (items.length === 0) {
    return (
      <div className="bg-kaveri-cream">
        {" "}
        <section className="kaveri-container flex min-h-[65vh] items-center justify-center py-20">
          {" "}
          <div className="max-w-md text-center">
            {" "}
            <p className="kaveri-eyebrow justify-center">Checkout </p>
            <h1 className="font-editorial mt-6 text-6xl font-normal leading-none tracking-[-0.035em] sm:text-7xl">
              Your bag is empty.
            </h1>
            <p className="mt-5 text-sm leading-7 text-kaveri-muted">
              Add something to your bag before continuing to checkout.
            </p>
            <Link href="/shop" className="kaveri-button mt-8">
              Continue shopping
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (items.length === 0) {
      toast.error("Your bag is empty.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const orderData = {
      customer: {
        email: formData.get("email"),
        name: formData.get("name"),
        phone: formData.get("phone"),
      },

      shippingAddress: {
        address: formData.get("address"),
        city: formData.get("city"),
        province: formData.get("province"),
        postalCode: formData.get("postalCode"),
      },

      paymentMethod,

      items: items.map((item) => ({
        productId: item.id,
        name: item.name,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
      })),

      subtotal,
      delivery,
      total,
    };

    console.log("Order payload:", orderData);

    await new Promise((resolve) => setTimeout(resolve, 800));

    toast.success("Checkout details received.");

    setIsSubmitting(false);
  };

  return (
    <div className="bg-kaveri-cream">
      {/* HEADER */}{" "}
      <section className="border-b border-black/10">
        {" "}
        <div className="kaveri-container py-12 sm:py-14 lg:py-16">
          {" "}
          <Link href="/cart" className="kaveri-link">
            {" "}
            <FiArrowLeft />
            Back to bag{" "}
          </Link>
          <h1 className="font-editorial mt-7 text-[clamp(4rem,8vw,7rem)] font-normal leading-[0.8] tracking-[-0.045em]">
            Checkout.
          </h1>
        </div>
      </section>
      {/* CHECKOUT */}
      <section className="kaveri-container py-10 sm:py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_24rem] lg:gap-20">
          {/* FORM */}
          <form className="space-y-12">
            {/* CONTACT */}
            <section>
              <div className="flex items-baseline justify-between border-b border-black/10 pb-4">
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-semibold text-kaveri-muted">
                    01
                  </span>

                  <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Contact
                  </h2>
                </div>
              </div>

              <div className="mt-6">
                <label className="block">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                    Email address
                  </span>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="mt-3 h-12 w-full border border-black/15 bg-transparent px-4 text-sm transition-colors focus:border-kaveri-ink"
                  />
                </label>
              </div>
            </section>

            {/* SHIPPING */}
            <section>
              <div className="flex items-baseline justify-between border-b border-black/10 pb-4">
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-semibold text-kaveri-muted">
                    02
                  </span>

                  <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Shipping address
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                    Full name
                  </span>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="mt-3 h-12 w-full border border-black/15 bg-transparent px-4 text-sm focus:border-kaveri-ink"
                  />
                </label>

                <label>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                    Phone
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+977"
                    className="mt-3 h-12 w-full border border-black/15 bg-transparent px-4 text-sm focus:border-kaveri-ink"
                  />
                </label>

                <label>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                    City
                  </span>

                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="Kathmandu"
                    className="mt-3 h-12 w-full border border-black/15 bg-transparent px-4 text-sm focus:border-kaveri-ink"
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                    Address
                  </span>

                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="Street address"
                    className="mt-3 h-12 w-full border border-black/15 bg-transparent px-4 text-sm focus:border-kaveri-ink"
                  />
                </label>

                <label>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                    Province
                  </span>

                  <select
                    name="province"
                    required
                    defaultValue=""
                    className="mt-3 h-12 w-full border border-black/15 bg-transparent px-4 text-sm focus:border-kaveri-ink"
                  >
                    <option value="" disabled>
                      Select province
                    </option>
                    <option value="koshi">Koshi</option>
                    <option value="madhesh">Madhesh</option>
                    <option value="bagmati">Bagmati</option>
                    <option value="gandaki">Gandaki</option>
                    <option value="lumbini">Lumbini</option>
                    <option value="karnali">Karnali</option>
                    <option value="sudurpashchim">Sudurpashchim</option>
                  </select>
                </label>

                <label>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                    Postal code
                  </span>

                  <input
                    type="text"
                    name="postalCode"
                    placeholder="44600"
                    className="mt-3 h-12 w-full border border-black/15 bg-transparent px-4 text-sm focus:border-kaveri-ink"
                  />
                </label>
              </div>
            </section>

            {/* PAYMENT */}
            <section>
              <div className="border-b border-black/10 pb-4">
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-semibold text-kaveri-muted">
                    03
                  </span>

                  <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Payment method
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <PaymentOption
                  value="cod"
                  selected={paymentMethod}
                  onChange={setPaymentMethod}
                  title="Cash on delivery"
                  description="Pay when your order arrives."
                />

                <PaymentOption
                  value="online"
                  selected={paymentMethod}
                  onChange={setPaymentMethod}
                  title="Online payment"
                  description="Secure online payment."
                />
              </div>
            </section>

            <button type="submit" className="kaveri-button w-full sm:w-auto">
              <FiLock />
              Place order
            </button>
          </form>

          {/* ORDER SUMMARY */}
          <aside className="h-fit border-t border-black/10 lg:sticky lg:top-24">
            <div className="py-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
                Order summary
              </p>

              <div className="mt-6 space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <div className="relative h-24 w-[4.5rem] shrink-0 overflow-hidden bg-kaveri-paper">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />

                      <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center bg-kaveri-ink px-1 text-[8px] font-semibold text-white">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] uppercase tracking-[0.12em] text-kaveri-muted">
                        {item.category}
                      </p>

                      <p className="mt-1 text-sm font-medium">{item.name}</p>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-kaveri-muted">
                        Size {item.size}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm">
                      NPR {(item.price * item.quantity).toLocaleString("en-NP")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="my-7 h-px w-full bg-black/10" />

              <div className="space-y-4 text-sm">
                <div className="flex justify-between gap-6">
                  <span className="text-kaveri-muted">Subtotal</span>

                  <span>NPR {subtotal.toLocaleString("en-NP")}</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-kaveri-muted">Delivery</span>

                  <span>
                    {delivery === 0
                      ? "Free"
                      : `NPR ${delivery.toLocaleString("en-NP")}`}
                  </span>
                </div>
              </div>

              <div className="my-7 h-px w-full bg-black/10" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">
                  Total
                </span>

                <span className="text-base">
                  NPR {total.toLocaleString("en-NP")}
                </span>
              </div>

              <p className="mt-5 text-[9px] leading-5 text-kaveri-muted">
                Free delivery on orders over NPR 10,000.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

type PaymentOptionProps = {
  value: string;
  selected: string;
  onChange: (value: string) => void;
  title: string;
  description: string;
};

function PaymentOption({
  value,
  selected,
  onChange,
  title,
  description,
}: PaymentOptionProps) {
  const isSelected = selected === value;

  return (
    <button
      type="button"
      onClick={() => onChange(value)}
      className={`flex w-full items-start gap-4 border p-5 text-left transition-colors ${
        isSelected
          ? "border-kaveri-ink"
          : "border-black/10 hover:border-black/30"
      }`}
    >
      <span
        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
          isSelected ? "border-kaveri-ink" : "border-black/25"
        }`}
      >
        {isSelected && (
          <span className="h-2 w-2 rounded-full bg-kaveri-ink" />
        )}{" "}
      </span>

      <span>
        <span className="block text-xs font-medium">{title}</span>

        <span className="mt-1 block text-xs leading-5 text-kaveri-muted">
          {description}
        </span>
      </span>
    </button>
  );
}

export default CheckoutPage;
