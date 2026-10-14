"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiChevronRight } from "react-icons/fi";

const orders = [
  {
    id: "KV-10248",
    date: "September 28, 2026",
    status: "Delivered",
    total: "$248.00",
    items: [
      {
        name: "Silk Draped Saree",
        category: "Sarees",
        image:
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=85",
      },
    ],
  },
  {
    id: "KV-10193",
    date: "September 12, 2026",
    status: "Delivered",
    total: "$186.00",
    items: [
      {
        name: "Embroidered Evening Dress",
        category: "Dresses",
        image:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=85",
      },
      {
        name: "Fine Cotton Top",
        category: "Tops",
        image:
          "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=85",
      },
    ],
  },
];

const OrdersPage = () => {
  return (
    <main className="page-shell bg-kaveri-cream">
      {/* INTRO */}
      <section className="kaveri-section pb-12 lg:pb-16">
        <div className="kaveri-container">
          <div className="grid gap-10 border-b border-black/10 pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <span className="kaveri-eyebrow">Your Kaveri</span>

              <h1 className="kaveri-section-title">
                My
                <br />
                <em>orders.</em>
              </h1>
            </div>

            <div className="flex max-w-lg flex-col justify-end lg:pb-1">
              <p className="text-sm leading-7 text-kaveri-muted">
                A record of your Kaveri pieces, from the moment they leave our
                studio to the moment they become part of your wardrobe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORDERS */}
      <section className="pb-24 lg:pb-28">
        <div className="kaveri-container">
          <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-5">
            <div>
              <span className="kaveri-eyebrow">Order history</span>

              <h2 className="font-editorial mt-3 text-4xl font-normal tracking-[-0.02em] sm:text-5xl">
                Your pieces.
              </h2>
            </div>

            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted sm:block">
              {orders.length} orders
            </span>
          </div>

          <div>
            {orders.map((order, index) => (
              <article
                key={order.id}
                className="border-b border-black/10 py-10 first:pt-0 last:pb-0"
              >
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                  {/* ORDER INFORMATION */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-5 lg:block">
                        <div>
                          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-kaveri-muted">
                            0{index + 1} / Order
                          </span>

                          <h3 className="font-editorial mt-3 text-3xl font-normal tracking-[-0.02em] sm:text-4xl">
                            {order.id}
                          </h3>
                        </div>

                        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted lg:hidden">
                          {order.status}
                        </span>
                      </div>

                      <div className="mt-7 space-y-3 text-xs">
                        <div className="flex justify-between gap-5 border-b border-black/10 pb-3">
                          <span className="text-kaveri-muted">Date</span>
                          <span>{order.date}</span>
                        </div>

                        <div className="flex justify-between gap-5 border-b border-black/10 pb-3">
                          <span className="text-kaveri-muted">Status</span>
                          <span>{order.status}</span>
                        </div>

                        <div className="flex justify-between gap-5">
                          <span className="text-kaveri-muted">Total</span>
                          <span>{order.total}</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/account/orders/${order.id}`}
                      className="kaveri-link mt-8"
                    >
                      View order
                      <FiArrowUpRight className="kaveri-icon" />
                    </Link>
                  </div>

                  {/* ORDER ITEMS */}
                  <div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {order.items.map((item) => (
                        <div key={item.name} className="group">
                          <div className="kaveri-product-image">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="(max-width: 640px) 50vw, 25vw"
                              className="object-cover"
                            />
                          </div>

                          <div className="mt-4">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-kaveri-muted">
                              {item.category}
                            </p>

                            <h4 className="font-editorial mt-1 text-2xl font-normal leading-none">
                              {item.name}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTINUE SHOPPING */}
      <section className="bg-kaveri-paper">
        <div className="kaveri-container">
          <div className="flex flex-col gap-7 py-14 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="kaveri-eyebrow">Continue exploring</span>

              <p className="font-editorial mt-3 text-3xl italic sm:text-4xl">
                Find something new.
              </p>
            </div>

            <Link href="/shop" className="kaveri-button">
              Explore collection
              <FiArrowUpRight className="text-base" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrdersPage;
