import { FiArrowUpRight } from "react-icons/fi";

const PrivateEdit = () => {
  return (
    <section className="bg-kaveri-ink text-kaveri-cream">
      <div className="kaveri-container">
        <div className="grid min-h-[70vh] items-center gap-16 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <span className="kaveri-eyebrow text-white/50">
              The Kaveri Edit
            </span>

            <h2 className="font-editorial mt-7 max-w-xl text-[clamp(4rem,7vw,7rem)] font-normal leading-[0.82] tracking-[-0.04em]">
              A little
              <br />
              <em>something</em>
              <br />
              extra.
            </h2>
          </div>

          <div className="lg:pl-12">
            <p className="max-w-lg text-sm leading-7 text-white/60">
              Be the first to discover new collections, private edits, designer
              stories, and considered pieces selected by Kaveri.
            </p>

            <form className="mt-12 max-w-xl">
              <label
                htmlFor="private-edit-email"
                className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50"
              >
                Your email address
              </label>

              <div className="mt-4 flex border-b border-white/30 transition-colors duration-300 focus-within:border-white">
                <input
                  id="private-edit-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="min-w-0 flex-1 bg-transparent py-4 text-sm text-white placeholder:text-white/30"
                />

                <button
                  type="submit"
                  aria-label="Join the Kaveri Private Edit"
                  className="flex shrink-0 items-center gap-3 py-4 pl-5 text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:text-kaveri-clay"
                >
                  Join
                  <FiArrowUpRight className="text-base" />
                </button>
              </div>

              <p className="mt-4 text-[10px] leading-5 text-white/35">
                By subscribing, you agree to receive occasional updates from
                Kaveri. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateEdit;
