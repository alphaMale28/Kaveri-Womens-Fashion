"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const designers = [
  {
    name: "Kaveri Studio",
    description: "Signature silhouettes and refined everyday dressing.",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "The Atelier",
    description: "Craft-led pieces shaped around modern occasion dressing.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "House of Kaveri",
    description: "Expressive layers, fluid forms, and contemporary detail.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Contemporary",
    description: "Clean lines and understated pieces for every day.",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1400&q=90",
  },
];
const DesignerShowcase = () => {
  const [activeDesigner, setActiveDesigner] = useState(0);

  const designer = designers[activeDesigner];

  return (
    <section className="kaveri-section bg-kaveri-cream">
      <div className="kaveri-container">
        <div className="grid gap-8 border-b border-black/10 pb-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <span className="kaveri-eyebrow">The world of Kaveri</span>

            <h2 className="kaveri-section-title">
              Meet the
              <br />
              <em>designers.</em>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-kaveri-muted md:pb-1">
            Distinct creative voices brought together through a shared
            appreciation for thoughtful design and effortless style.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            {designers.map((item, index) => (
              <Link
                key={item.name}
                href={`/shop?designer=${encodeURIComponent(item.name)}`}
                onMouseEnter={() => setActiveDesigner(index)}
                onFocus={() => setActiveDesigner(index)}
                className={`group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-black/10 py-7 transition-colors duration-300 ${
                  activeDesigner === index
                    ? "text-kaveri-ink"
                    : "text-kaveri-muted"
                }`}
              >
                <span className="text-[9px] font-semibold tracking-[0.14em]">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="font-editorial text-3xl font-normal tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                    {item.name}
                  </h3>

                  <p
                    className={`mt-2 max-w-sm text-xs leading-6 transition-opacity duration-300 ${
                      activeDesigner === index ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <FiArrowUpRight
                  className={`text-xl transition-transform duration-300 ${
                    activeDesigner === index
                      ? "translate-x-0 -translate-y-0"
                      : "translate-x-[-4px] translate-y-[4px]"
                  } group-hover:translate-x-0 group-hover:translate-y-0`}
                />
              </Link>
            ))}
          </div>

          <div className="relative overflow-hidden bg-kaveri-paper">
            <div className="aspect-[4/5]">
              <Image
                key={designer.image}
                src={designer.image}
                alt={designer.name}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/50 to-transparent px-5 pb-5 pt-16 text-white sm:px-7 sm:pb-7">
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Selected designer
                </p>

                <p className="font-editorial mt-1 text-3xl italic">
                  {designer.name}
                </p>
              </div>

              <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/70">
                0{activeDesigner + 1} / 04
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/shop?category=Designers" className="kaveri-link">
            Explore all designers
            <FiArrowUpRight className="kaveri-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DesignerShowcase;
