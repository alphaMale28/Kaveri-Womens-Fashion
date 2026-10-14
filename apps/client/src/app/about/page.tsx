import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const values = [
  {
    number: "01",
    title: "Thoughtful Design",
    description:
      "We look for pieces where silhouette, fabric, colour, and detail come together naturally.",
  },
  {
    number: "02",
    title: "Modern Tradition",
    description:
      "Kaveri brings the richness of timeless fashion into a contemporary wardrobe.",
  },
  {
    number: "03",
    title: "Timeless Style",
    description:
      "We favour pieces that remain relevant beyond a single season or passing trend.",
  },
];

const AboutPage = () => {
  return (
    <section className="bg-kaveri-cream text-kaveri-ink">
      <div className="kaveri-container">
        {/* HERO */}
        <section className="px-5 pb-0 pt-16 md:px-10 md:pt-24 lg:px-20 lg:pt-28">
          <div className="max-w-5xl">
            <p className="text-[11px] font-medium tracking-[0.2em] text-kaveri-clay">
              THE KAVERI STORY
            </p>

            <h1 className="mt-5 text-5xl font-normal leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              Rooted in tradition.
              <br />
              Designed for today.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-kaveri-muted md:text-lg md:leading-8">
              Kaveri is a contemporary women&apos;s fashion destination built
              around thoughtful design, effortless elegance, and the beauty of
              personal style.
            </p>
          </div>

          <div className="relative mt-14 h-[65vh] min-h-[480px] w-full overflow-hidden md:mt-20">
            <Image
              src="https://images.pexels.com/photos/25950181/pexels-photo-25950181.jpeg"
              alt="Kaveri women's fashion"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* STORY */}
        <section className="grid gap-14 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-2 lg:gap-24 lg:px-20">
          <div className="relative min-h-[500px] lg:min-h-[680px]">
            <Image
              src="https://images.pexels.com/photos/14377417/pexels-photo-14377417.jpeg"
              alt="Elegant women's fashion"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex items-center">
            <div className="max-w-xl">
              <p className="text-[11px] font-medium tracking-[0.2em] text-kaveri-clay">
                OUR STORY
              </p>

              <h2 className="mt-5 text-4xl font-normal leading-none tracking-[-0.045em] sm:text-5xl md:text-6xl">
                Fashion that feels personal.
              </h2>

              <div className="mt-9 space-y-5 text-[15px] leading-7 text-kaveri-muted md:text-base md:leading-8">
                <p>
                  Kaveri was created around a simple idea: getting dressed
                  should feel beautiful, effortless, and personal.
                </p>

                <p>
                  We curate contemporary women&apos;s fashion that balances
                  expressive design with everyday wearability — from graceful
                  silhouettes to pieces made for memorable occasions.
                </p>

                <p>
                  Rather than chasing every trend, Kaveri focuses on creating a
                  collection with character, versatility, and a sense of
                  timelessness.
                </p>
              </div>

              <Link
                href="/shop"
                className="mt-9 inline-flex items-center gap-3 border-b border-kaveri-ink pb-2 text-sm font-medium text-kaveri-ink transition-colors hover:border-kaveri-clay hover:text-kaveri-clay"
              >
                Explore the collection
                <FiArrowUpRight className="text-base" />
              </Link>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="bg-kaveri-paper px-5 py-24 md:px-10 md:py-32 lg:px-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] text-kaveri-clay">
                WHAT WE BELIEVE
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-normal leading-none tracking-[-0.045em] sm:text-5xl md:text-6xl">
                Less noise.
                <br />
                More character.
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-lg text-[15px] leading-7 text-kaveri-muted md:text-base md:leading-8">
                Our approach is simple: choose pieces with intention and create
                a wardrobe that feels considered, versatile, and distinctly
                yours.
              </p>
            </div>
          </div>

          <div className="mt-16 grid border-t border-kaveri-sand md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="border-b border-kaveri-sand py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <span className="text-xs tracking-[0.12em] text-kaveri-clay">
                  {value.number}
                </span>

                <h3 className="mt-12 text-xl font-medium tracking-[-0.02em]">
                  {value.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-kaveri-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* STATEMENT */}
        <section className="bg-kaveri-ink px-5 py-28 text-kaveri-cream md:px-10 md:py-40 lg:px-20">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-[11px] font-medium tracking-[0.2em] text-kaveri-sand">
              KAVERI
            </p>

            <blockquote className="mt-8 text-4xl font-normal leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
              Style is not about having more.
              <br className="hidden md:block" />
              It is about choosing what feels right.
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-24 text-center md:px-10 md:py-32">
          <p className="text-[11px] font-medium tracking-[0.2em] text-kaveri-clay">
            DISCOVER KAVERI
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-normal leading-none tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Find something that feels like you.
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-kaveri-muted md:text-base">
            Explore our collection of contemporary women&apos;s fashion.
          </p>

          <Link
            href="/shop"
            className="group mt-8 inline-flex items-center gap-3 bg-kaveri-clay px-6 py-4 text-sm font-medium text-kaveri-white "
          >
            Explore Collection
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </section>
      </div>
    </section>
  );
};
export default AboutPage;
