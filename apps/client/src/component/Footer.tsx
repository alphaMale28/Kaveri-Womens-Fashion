import Link from "next/link";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

const shopLinks = [
  { label: "New In", href: "/shop?sort=newest" },
  { label: "Sarees", href: "/shop?category=Sarees" },
  { label: "Lehengas", href: "/shop?category=Lehengas" },
  { label: "Kurtis", href: "/shop?category=Kurtis" },
  { label: "Dresses", href: "/shop?category=Dresses" },
  { label: "Designers", href: "/shop?category=Designers" },
];

const helpLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Shipping & Delivery", href: "/shipping" },
  { label: "Returns & Exchanges", href: "/returns" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "FAQ", href: "/faq" },
];

const aboutLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Careers", href: "/careers" },
];

const Footer = () => {
  return (
    <footer className="bg-kaveri-cream">
      <div className="kaveri-container">
        <div className="grid gap-14 border-b border-black/10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
          <div>
            <Link href="/" className="text-2xl font-semibold tracking-[0.3em]">
              KAVERI
            </Link>

            <p className="mt-7 max-w-xs text-sm leading-7 text-kaveri-muted">
              Contemporary women&apos;s fashion rooted in timeless style,
              thoughtful design, and effortless confidence.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <Link
                href="#"
                aria-label="Instagram"
                className="transition-colors duration-300 hover:text-kaveri-clay"
              >
                <FiInstagram className="text-[17px]" />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="transition-colors duration-300 hover:text-kaveri-clay"
              >
                <FiFacebook className="text-[17px]" />
              </Link>

              <a
                href="mailto:hello@kaveri.com"
                aria-label="Email Kaveri"
                className="transition-colors duration-300 hover:text-kaveri-clay"
              >
                <FiMail className="text-[17px]" />
              </a>
            </div>
          </div>

          <FooterColumn title="Shop" links={shopLinks} />

          <FooterColumn title="Help" links={helpLinks} />

          <FooterColumn title="About" links={aboutLinks} />
        </div>

        <div className="grid gap-8 py-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
              Questions?
            </p>

            <a
              href="mailto:support@kaveri.com"
              className="group mt-2 inline-flex items-center gap-2 text-sm"
            >
              support@kaveri.com
              <FiArrowUpRight className="kaveri-icon transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-kaveri-muted">
            <Link
              href="/privacy"
              className="transition-colors hover:text-kaveri-ink"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-kaveri-ink"
            >
              Terms
            </Link>

            <span>© {new Date().getFullYear()} Kaveri</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[9px] font-semibold uppercase tracking-[0.17em]">
        {title}
      </h3>

      <nav className="mt-6 flex flex-col items-start gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="group flex items-center gap-2 text-xs text-kaveri-muted transition-colors duration-300 hover:text-kaveri-ink"
          >
            {link.label}

            <FiArrowUpRight className="text-[11px] text-kaveri-clay opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Footer;
