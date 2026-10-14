import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

const notFoundImage =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85";
const NotFound = () => {
  return (
    <div className="bg-kaveri-cream">
      <section className="kaveri-container grid min-h-[calc(100vh-8rem)] items-center gap-8 py-10 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
        <div className="relative order-first h-[55vh] min-h-[420px] overflow-hidden lg:order-last lg:h-[680px]">
          <Image
            src={notFoundImage}
            alt="Kaveri fashion editorial"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
              Kaveri / 404
            </p>
          </div>
        </div>

        <div className="max-w-xl">
          <p className="kaveri-eyebrow">404 / Page not found</p>

          <h1 className="font-editorial mt-7 text-[clamp(5rem,10vw,9rem)] font-normal leading-[0.75] tracking-[-0.055em]">
            Lost
            <br />
            somewhere.
          </h1>

          <p className="mt-8 max-w-md text-sm leading-7 text-kaveri-muted">
            The page you're looking for may have moved, been removed, or never
            existed. Let's get you back to the Kaveri collection.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link href="/" className="kaveri-button">
              <FiArrowLeft />
              Back home
            </Link>

            <Link href="/shop" className="kaveri-link">
              Explore collection
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
