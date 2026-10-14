import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const stories = [
  {
    number: "01",
    category: "Style Notes",
    title: "The new language of occasion dressing.",
    description:
      "A quieter approach to dressing for the moments that deserve something more.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "02",
    category: "Kaveri Journal",
    title: "Inside the Kaveri wardrobe.",
    description:
      "Five considered pieces that bring ease and intention to everyday dressing.",
    image:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "03",
    category: "The Edit",
    title: "How to build a wardrobe that lasts.",
    description:
      "Less impulse, more intention: creating a collection of pieces with staying power.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=90",
  },
];

const Journal = () => {
  return (
    <section className="kaveri-section bg-kaveri-paper">
      <div className="kaveri-container">
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end">
          <div>
            <span className="kaveri-eyebrow">Journal</span>

            <h2 className="kaveri-section-title">
              Thoughts on
              <br />
              <em>style.</em>
            </h2>
          </div>

          <Link href="/journal" className="kaveri-link mb-1">
            View journal
            <FiArrowUpRight className="kaveri-icon" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-5">
          {stories.map((story) => (
            <article key={story.number} className="group">
              <Link href="/journal" className="block">
                <div className="kaveri-image-wrap aspect-[4/5] bg-kaveri-cream">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />

                  <span className="absolute left-4 top-4 bg-kaveri-cream px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.15em]">
                    {story.number}
                  </span>

                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center border-kaveri-clay bg-kaveri-cream opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <FiArrowUpRight className="kaveri-icon text-lg" />
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
                    {story.category}
                  </p>

                  <h3 className="font-editorial mt-2 max-w-md text-3xl font-normal leading-[0.95] tracking-[-0.02em]">
                    {story.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-xs leading-6 text-kaveri-muted">
                    {story.description}
                  </p>

                  <span className="kaveri-link mt-5">
                    Read story
                    <FiArrowUpRight className="kaveri-icon" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
