import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const heroImage =
  "https://images.unsplash.com/photo-1756483500430-0c1234c1a782?auto=format&fit=crop&w=1600&q=85";
// "https://images.pexels.com/photos/25950181/pexels-photo-25950181.jpeg?auto=compress&cs=tinysrgb&w=1600";
const Hero = () => {
  return (
    <section className="bg-kaveri-cream">
      <div className="kaveri-container">
        <div className="grid min-h-[calc(100vh-7rem)] grid-cols-1 lg:grid-cols-[0.82fr_1.18fr]">
          {/* CONTENT */}
          <div className="flex flex-col justify-center py-16 pr-0 lg:py-20 lg:pr-16">
            <div>
              <span className="kaveri-eyebrow">New Season — 2026</span>

              <h1 className="font-editorial mt-7 max-w-2xl text-[clamp(4rem,7vw,7.5rem)] font-normal leading-[0.82] tracking-[-0.04em]">
                The art of
                <br />
                <em>dressing well.</em>
              </h1>

              <p className="mt-8 max-w-md text-sm leading-7 text-kaveri-muted">
                Contemporary silhouettes, considered details, and timeless
                pieces designed for the woman who knows her style.
              </p>

              <Link href="/shop" className="kaveri-button mt-9">
                Shop collection
                <FiArrowUpRight className="text-base" />
              </Link>
            </div>

            {/* BOTTOM DETAIL */}
            <div className="mt-16 hidden border-t border-black/10 pt-5 lg:block">
              <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.15em] text-kaveri-muted">
                <span>01 / 03</span>
                <span>Explore the collection</span>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative min-h-[70vh] lg:min-h-0">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={heroImage}
                alt="Kaveri women's fashion collection"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </div>

            {/* IMAGE LABEL */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                  Kaveri Studio
                </p>

                <p className="font-editorial mt-1 text-2xl italic">
                  Chapter One
                </p>
              </div>

              <span className="text-[9px] uppercase tracking-[0.15em]">
                SS / 26
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
