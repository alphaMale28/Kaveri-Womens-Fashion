"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiEdit2 } from "react-icons/fi";

const profileImage =
  "https://images.pexels.com/photos/9075628/pexels-photo-9075628.jpeg?auto=compress&cs=tinysrgb&w=400";

const AccountPage = () => {
  return (
    <main className="page-shell bg-kaveri-cream">
      {/* INTRO */}
      <section className="kaveri-section pb-12 lg:pb-16">
        <div className="kaveri-container">
          <div className="grid gap-10 border-b border-black/10 pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <span className="kaveri-eyebrow">Your Kaveri</span>

              <h1 className="kaveri-section-title">
                My
                <br />
                <em>account.</em>
              </h1>
            </div>

            <div className="flex max-w-lg flex-col justify-end lg:pb-1">
              <p className="text-sm leading-7 text-kaveri-muted">
                A quiet place to manage your details, preferences, and delivery
                information. Everything you need, kept simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="pb-24 lg:pb-28">
        <div className="kaveri-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* PROFILE INTRO */}
            <div>
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-kaveri-paper">
                  <Image
                    src={profileImage}
                    alt="Vivian Rhodes"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-kaveri-muted">
                    Member
                  </p>

                  <h2 className="font-editorial mt-1 text-4xl font-normal tracking-[-0.02em]">
                    Vivian Rhodes
                  </h2>
                </div>
              </div>

              <div className="mt-10 border-t border-black/10 pt-5">
                <p className="max-w-sm text-xs leading-6 text-kaveri-muted">
                  Your personal information is used to make your Kaveri
                  experience seamless, from checkout to delivery.
                </p>

                <Link href="/account/profile" className="kaveri-link mt-6">
                  Edit profile
                  <FiEdit2 className="kaveri-icon" />
                </Link>
              </div>
            </div>

            {/* PERSONAL DETAILS */}
            <div>
              <div className="flex items-end justify-between border-b border-black/10 pb-5">
                <div>
                  <span className="kaveri-eyebrow">01</span>

                  <h2 className="font-editorial mt-3 text-4xl font-normal tracking-[-0.02em] sm:text-5xl">
                    Personal details
                  </h2>
                </div>

                <span className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted sm:block">
                  Your information
                </span>
              </div>

              <div className="grid sm:grid-cols-2">
                <div className="border-b border-black/10 py-7 sm:border-r sm:pr-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
                    First name
                  </p>

                  <p className="mt-3 text-sm">Vivian</p>
                </div>

                <div className="border-b border-black/10 py-7 sm:pl-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
                    Last name
                  </p>

                  <p className="mt-3 text-sm">Rhodes</p>
                </div>

                <div className="border-b border-black/10 py-7 sm:border-r sm:pr-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
                    Email
                  </p>

                  <p className="mt-3 break-all text-sm">
                    vivian.rhodes@example.com
                  </p>
                </div>

                <div className="border-b border-black/10 py-7 sm:pl-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
                    Phone
                  </p>

                  <p className="mt-3 text-sm">+1 416 555 0184</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDRESS */}
      <section className="kaveri-section bg-kaveri-paper">
        <div className="kaveri-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* SECTION INTRO */}
            <div>
              <span className="kaveri-eyebrow">02</span>

              <h2 className="kaveri-section-title">
                Delivery
                <br />
                <em>address.</em>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-kaveri-muted">
                Keep your preferred delivery details close at hand for a
                smoother checkout experience.
              </p>
            </div>

            {/* ADDRESS */}
            <div className="flex flex-col justify-end">
              <div className="border-y border-black/10">
                <div className="flex items-start justify-between gap-6 py-7">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-kaveri-muted">
                      Default address
                    </p>

                    <h3 className="font-editorial mt-3 text-3xl font-normal">
                      Vivian Rhodes
                    </h3>

                    <address className="mt-4 not-italic text-sm leading-7 text-kaveri-muted">
                      125 King Street West
                      <br />
                      Toronto, ON M5X 1A9
                      <br />
                      Canada
                    </address>
                  </div>

                  <button
                    type="button"
                    aria-label="Edit delivery address"
                    className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/15 transition-colors duration-300 hover:bg-kaveri-ink hover:text-kaveri-cream"
                  >
                    <FiEdit2 className="text-sm" />
                  </button>
                </div>
              </div>

              <button type="button" className="kaveri-link mt-8">
                Add another address
                <FiArrowUpRight className="kaveri-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOUNT PREFERENCES */}
      <section className="kaveri-section bg-kaveri-cream">
        <div className="kaveri-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <span className="kaveri-eyebrow">03</span>

              <h2 className="kaveri-section-title">
                Account
                <br />
                <em>preferences.</em>
              </h2>
            </div>

            <div className="border-t border-black/10">
              <div className="flex items-center justify-between gap-6 border-b border-black/10 py-7">
                <div>
                  <p className="text-sm font-medium">Kaveri Private Edit</p>

                  <p className="mt-2 max-w-md text-xs leading-6 text-kaveri-muted">
                    Receive new collections, designer stories, and occasional
                    invitations from Kaveri.
                  </p>
                </div>

                <div className="h-5 w-10 shrink-0 rounded-full bg-kaveri-ink p-0.5">
                  <div className="ml-5 h-4 w-4 rounded-full bg-kaveri-cream" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 border-b border-black/10 py-7">
                <div>
                  <p className="text-sm font-medium">Shopping preferences</p>

                  <p className="mt-2 max-w-md text-xs leading-6 text-kaveri-muted">
                    Your saved preferences help us make future discoveries more
                    relevant to your style.
                  </p>
                </div>

                <FiArrowUpRight className="kaveri-icon shrink-0 text-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOUNT FOOTER */}
      <section className="bg-kaveri-ink text-kaveri-cream">
        <div className="kaveri-container">
          <div className="flex flex-col gap-7 py-12 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
                Kaveri Account
              </p>

              <p className="font-editorial mt-2 text-3xl italic">
                Your details, your way.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors duration-300 hover:text-white"
            >
              Sign out
              <FiArrowUpRight className="text-base" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccountPage;
