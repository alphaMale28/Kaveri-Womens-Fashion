import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const categories = [
  {
    name: "Sarees",
    href: "/shop?category=Sarees",
    image:
      // "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
      "https://images.pexels.com/photos/13192039/pexels-photo-13192039.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Lehengas",
    href: "/shop?category=Lehengas",
    image:
      // "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85",
      "https://images.pexels.com/photos/14377417/pexels-photo-14377417.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Kurtis",
    href: "/shop?category=Kurtis",
    image:
      "https://images.unsplash.com/photo-1705921267925-f08fb9747dad?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Dresses",
    href: "/shop?category=Dresses",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Tops",
    href: "/shop?category=Tops",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Bottoms",
    href: "/shop?category=Bottoms",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85",
  },
];

const CategoryShowcase = () => {
  return (
    <section className="kaveri-section bg-kaveri-cream">
      <div className="kaveri-container">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end">
          <div>
            <span className="kaveri-eyebrow">Discover</span>

            <h2 className="kaveri-section-title">
              Shop by
              <br />
              category.
            </h2>
          </div>

          <Link href="/shop" className="kaveri-link mb-1">
            View all
            <FiArrowUpRight className="kaveri-icon" />
          </Link>
        </div>

        {/* FEATURED CATEGORIES */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {/* SAREES */}
          <Link
            href={categories[0].href}
            className="group relative lg:col-span-5"
          >
            <div className="kaveri-image-wrap aspect-[4/5]">
              <Image
                src={categories[0].image}
                alt={categories[0].name}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="kaveri-image"
              />

              <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/15" />

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-white">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                    01
                  </span>

                  <h3 className="font-editorial mt-1 text-4xl italic">
                    Sarees
                  </h3>
                </div>

                <span className="flex h-10 w-10 items-center justify-center border border-white/60 transition-all duration-300 group-hover:bg-white group-hover:text-kaveri-clay">
                  <FiArrowUpRight />
                </span>
              </div>
            </div>
          </Link>

          {/* LEHENGAS */}
          <Link
            href={categories[1].href}
            className="group relative md:col-span-1 lg:col-span-4"
          >
            <div className="kaveri-image-wrap aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src={categories[1].image}
                alt={categories[1].name}
                fill
                sizes="(max-width: 1024px) 50vw, 34vw"
                className="kaveri-image"
              />

              <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/15" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                  02
                </span>

                <h3 className="font-editorial mt-1 text-4xl italic">
                  Lehengas
                </h3>
              </div>
            </div>
          </Link>

          {/* KURTIS */}
          <Link
            href={categories[2].href}
            className="group relative md:col-span-1 lg:col-span-3"
          >
            <div className="kaveri-image-wrap aspect-[3/4] lg:aspect-[3/5]">
              <Image
                src={categories[2].image}
                alt={categories[2].name}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="kaveri-image"
              />

              <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/15" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                  03
                </span>

                <h3 className="font-editorial mt-1 text-4xl italic">Kurtis</h3>
              </div>
            </div>
          </Link>
        </div>

        {/* SECONDARY CATEGORIES */}
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 border-t border-black/10 pt-8 sm:grid-cols-4">
          {categories.slice(3).map((category, index) => (
            <Link key={category.name} href={category.href} className="group">
              <div className="kaveri-image-wrap aspect-[4/5]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="kaveri-image"
                />
              </div>

              <div className="mt-4 flex items-center justify-between border-b border-black/10 pb-3">
                <div>
                  <span className="text-[9px] font-semibold tracking-[0.15em] text-kaveri-muted">
                    0{index + 4}
                  </span>

                  <h3 className="mt-1 text-sm font-medium uppercase tracking-[0.08em]">
                    {category.name}
                  </h3>
                </div>

                <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-kaveri-clay" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
