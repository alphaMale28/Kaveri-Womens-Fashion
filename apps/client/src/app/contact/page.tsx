import { FiArrowUpRight, FiClock, FiMail } from "react-icons/fi";

const faqs = [
  {
    number: "01",
    question: "How can I track my order?",
    answer:
      "Once your order has been dispatched, you will receive an email with your tracking information.",
  },
  {
    number: "02",
    question: "Can I change or cancel my order?",
    answer:
      "Contact our support team as soon as possible after placing your order. We will do our best to help before your order is processed.",
  },
  {
    number: "03",
    question: "How can I ask about sizing?",
    answer:
      "Send us the product you are interested in and our team can help you choose the most suitable size.",
  },
];

const ContactPage = () => {
  return (
    <main className="bg-kaveri-cream text-kaveri-ink">
      <div className="kaveri-container">
        {/* HERO */}
        <section className="grid gap-10 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20 lg:px-20 lg:py-28">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-kaveri-clay">
              GET IN TOUCH
            </p>

            <h1 className="mt-5 text-5xl font-normal leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              We&apos;d love to
              <br />
              hear from you.
            </h1>
          </div>

          <p className="max-w-md text-base leading-7 text-kaveri-muted md:text-lg md:leading-8">
            Have a question about an order, a product, or simply want to say
            hello? Our team is here to help.
          </p>
        </section>

        {/* CONTACT + FORM */}
        <section className="grid gap-16 bg-kaveri-paper px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-20">
          {/* INFO */}
          <div>
            <div className="space-y-10">
              <div className="flex gap-5">
                <FiMail className="mt-1 shrink-0 text-xl text-kaveri-clay" />

                <div>
                  <p className="text-[11px] font-medium tracking-[0.15em] text-kaveri-muted">
                    EMAIL
                  </p>

                  <a
                    href="mailto:hello@kaveri.com"
                    className="mt-2 block text-sm transition-colors hover:text-kaveri-clay"
                  >
                    hello@kaveri.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <FiMail className="mt-1 shrink-0 text-xl text-kaveri-clay" />

                <div>
                  <p className="text-[11px] font-medium tracking-[0.15em] text-kaveri-muted">
                    CUSTOMER SUPPORT
                  </p>

                  <a
                    href="mailto:support@kaveri.com"
                    className="mt-2 block text-sm transition-colors hover:text-kaveri-clay"
                  >
                    support@kaveri.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <FiClock className="mt-1 shrink-0 text-xl text-kaveri-clay" />

                <div>
                  <p className="text-[11px] font-medium tracking-[0.15em] text-kaveri-muted">
                    SUPPORT HOURS
                  </p>

                  <p className="mt-2 text-sm leading-7">
                    Sunday – Friday
                    <br />
                    10:00 AM – 6:00 PM NPT
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <label className="block">
                <span className="text-[11px] font-medium tracking-[0.15em] text-kaveri-muted">
                  NAME
                </span>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-3 w-full border-0 border-b border-kaveri-sand bg-transparent px-0 py-3 text-sm text-kaveri-ink outline-none placeholder:text-kaveri-muted focus:border-kaveri-clay"
                />
              </label>

              <label className="block">
                <span className="text-[11px] font-medium tracking-[0.15em] text-kaveri-muted">
                  EMAIL
                </span>

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="mt-3 w-full border-0 border-b border-kaveri-sand bg-transparent px-0 py-3 text-sm text-kaveri-ink outline-none placeholder:text-kaveri-muted focus:border-kaveri-clay"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-[11px] font-medium tracking-[0.15em] text-kaveri-muted">
                SUBJECT
              </span>

              <input
                type="text"
                name="subject"
                placeholder="What can we help you with?"
                className="mt-3 w-full border-0 border-b border-kaveri-sand bg-transparent px-0 py-3 text-sm text-kaveri-ink outline-none placeholder:text-kaveri-muted focus:border-kaveri-clay"
              />
            </label>

            <label className="block">
              <span className="text-[11px] font-medium tracking-[0.15em] text-kaveri-muted">
                MESSAGE
              </span>

              <textarea
                name="message"
                rows={7}
                placeholder="Write your message..."
                className="mt-3 w-full resize-none border-0 border-b border-kaveri-sand bg-transparent px-0 py-3 text-sm text-kaveri-ink outline-none placeholder:text-kaveri-muted focus:border-kaveri-clay"
              />
            </label>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-kaveri-clay px-6 py-4 text-sm font-medium text-kaveri-white "
            >
              Send Message
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </section>

        {/* FAQ */}
        <section className="grid gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:px-20">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-kaveri-clay">
              NEED HELP?
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-normal leading-none tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Frequently asked questions.
            </h2>
          </div>

          <div className="border-t border-kaveri-sand">
            {faqs.map((faq) => (
              <details
                key={faq.number}
                className="group border-b border-kaveri-sand"
              >
                <summary className="grid cursor-pointer list-none grid-cols-[40px_1fr_auto] items-center gap-4 py-6 text-sm md:text-base [&::-webkit-details-marker]:hidden">
                  <span className="text-[11px] tracking-[0.1em] text-kaveri-clay">
                    {faq.number}
                  </span>

                  <span>{faq.question}</span>

                  <FiArrowUpRight className="transition-transform duration-300 group-open:rotate-90" />
                </summary>

                <p className="max-w-2xl pb-7 pl-10 text-sm leading-7 text-kaveri-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="bg-kaveri-ink px-5 py-24 text-center text-kaveri-cream md:px-10 md:py-32">
          <p className="text-[11px] font-medium tracking-[0.2em] text-kaveri-sand">
            STAY IN THE LOOP
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-normal leading-none tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Something beautiful is coming.
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-kaveri-sand md:text-base">
            Subscribe for new collections, thoughtful edits, and stories from
            Kaveri.
          </p>

          <form className="mx-auto mt-10 flex max-w-xl flex-col border-b border-kaveri-sand sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 border-0 bg-transparent px-0 py-4 text-sm text-kaveri-cream outline-none placeholder:text-kaveri-muted"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 py-4 text-sm font-medium transition-color duration-300 hover:text-kaveri-clay"
            >
              Subscribe
              <FiArrowUpRight />
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
