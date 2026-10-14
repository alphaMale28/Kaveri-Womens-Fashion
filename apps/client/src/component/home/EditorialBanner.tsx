import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const EditorialBanner = () => {
  return (
    <section className="bg-kaveri-ink text-kaveri-white">
      <div className="relative min-h-[85vh] overflow-hidden">
        {/* IMAGE */}
        <Image
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2200&q=90"
          alt="Kaveri Autumn Winter collection"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-75"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[85vh] flex-col justify-between p-6 sm:p-10 lg:p-14">
          {/* TOP */}
          <div className="flex items-start justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
              Kaveri Studio
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
              Autumn / Winter '26
            </span>
          </div>

          {/* CENTER */}
          <div className="mx-auto w-full max-w-5xl text-center">
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/70">
              The Evening Edit
            </span>

            <h2 className="font-editorial mt-5 text-[clamp(5rem,13vw,13rem)] font-normal leading-[0.72] tracking-[-0.05em]">
              After
              <br />
              <em>Dark.</em>
            </h2>

            <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-white/75">
              Pieces created for evenings that linger, conversations that
              matter, and moments worth remembering.
            </p>

            <Link
              href="/shop?collection=after-dark"
              className="mt-9 inline-flex items-center gap-3 border border-white/50 px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:border-kaveri-clay hover:text-kaveri-clay"
            >
              Explore the collection
              <FiArrowUpRight className="kaveri-icon" />
            </Link>
          </div>

          {/* BOTTOM */}
          <div className="flex items-end justify-between">
            <span className="text-[9px] uppercase tracking-[0.18em] text-white/60">
              01 — 03
            </span>

            <span className="hidden text-right text-[9px] uppercase tracking-[0.18em] text-white/60 sm:block">
              Contemporary silhouettes
              <br />
              timeless attitude
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EditorialBanner;
