"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCheck, FiUpload } from "react-icons/fi";

const profileImage =
  "https://images.pexels.com/photos/9075628/pexels-photo-9075628.jpeg?auto=compress&cs=tinysrgb&w=400";
const EditProfilePage = () => {
  return (
    <main className="page-shell bg-kaveri-cream">
      {/* INTRO */}
      <section className="kaveri-section pb-12 lg:pb-16">
        <div className="kaveri-container">
          <div className="border-b border-black/10 pb-10">
            <Link href="/account" className="kaveri-link">
              <FiArrowLeft className="kaveri-icon" />
              Back to account
            </Link>

            <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <span className="kaveri-eyebrow">Your Kaveri</span>

                <h1 className="kaveri-section-title">
                  Edit
                  <br />
                  <em>profile.</em>
                </h1>
              </div>

              <div className="flex max-w-lg flex-col justify-end lg:pb-1">
                <p className="text-sm leading-7 text-kaveri-muted">
                  Keep your personal details current so every Kaveri experience
                  feels effortless, from discovery to delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE FORM */}
      <section className="pb-24 lg:pb-28">
        <div className="kaveri-container">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            {/* PROFILE IMAGE */}
            <div>
              <span className="kaveri-eyebrow">Profile image</span>

              <div className="mt-7">
                <div className="relative aspect-square max-w-xs overflow-hidden bg-kaveri-paper">
                  <Image
                    src={profileImage}
                    alt="Vivian Rhodes"
                    fill
                    sizes="(max-width: 1024px) 320px, 25vw"
                    className="object-cover"
                  />
                </div>

                <button type="button" className="kaveri-link mt-6">
                  Change image
                  <FiUpload className="kaveri-icon" />
                </button>
              </div>
            </div>

            {/* DETAILS */}
            <div>
              <div className="border-b border-black/10 pb-5">
                <span className="kaveri-eyebrow">01</span>

                <h2 className="font-editorial mt-3 text-4xl font-normal tracking-[-0.02em] sm:text-5xl">
                  Personal details
                </h2>
              </div>

              <form className="mt-2">
                {/* FIRST + LAST NAME */}
                <div className="grid sm:grid-cols-2 sm:gap-8">
                  <div className="border-b border-black/10 py-7">
                    <label
                      htmlFor="firstName"
                      className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted"
                    >
                      First name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      defaultValue="Vivian"
                      className="mt-3 w-full bg-transparent py-1 text-sm text-kaveri-ink"
                    />
                  </div>

                  <div className="border-b border-black/10 py-7">
                    <label
                      htmlFor="lastName"
                      className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted"
                    >
                      Last name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      defaultValue="Rhodes"
                      className="mt-3 w-full bg-transparent py-1 text-sm text-kaveri-ink"
                    />
                  </div>
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid sm:grid-cols-2 sm:gap-8">
                  <div className="border-b border-black/10 py-7">
                    <label
                      htmlFor="email"
                      className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      defaultValue="vivian.rhodes@example.com"
                      className="mt-3 w-full bg-transparent py-1 text-sm text-kaveri-ink"
                    />
                  </div>

                  <div className="border-b border-black/10 py-7">
                    <label
                      htmlFor="phone"
                      className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted"
                    >
                      Phone number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      defaultValue="+1 416 555 0184"
                      className="mt-3 w-full bg-transparent py-1 text-sm text-kaveri-ink"
                    />
                  </div>
                </div>

                {/* DATE OF BIRTH */}
                <div className="border-b border-black/10 py-7">
                  <label
                    htmlFor="dateOfBirth"
                    className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted"
                  >
                    Date of birth
                  </label>

                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    defaultValue="1990-06-14"
                    className="mt-3 w-full bg-transparent py-1 text-sm text-kaveri-ink sm:max-w-xs"
                  />
                </div>

                {/* SAVE */}
                <div className="mt-10 flex flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-6 text-kaveri-muted">
                    Your information is kept private and used only to provide
                    your Kaveri account and shopping experience.
                  </p>

                  <Link href="/account" className="kaveri-button">
                    Save changes
                    <FiCheck className="text-base" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* PASSWORD */}
      <section className="kaveri-section bg-kaveri-paper">
        <div className="kaveri-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <span className="kaveri-eyebrow">02</span>

              <h2 className="kaveri-section-title">
                Account
                <br />
                <em>security.</em>
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <div className="border-y border-black/10 py-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
                  Password
                </p>

                <div className="mt-3 flex items-center justify-between gap-6">
                  <p className="text-sm tracking-[0.2em]">••••••••••••</p>

                  <button type="button" className="kaveri-link shrink-0">
                    Change password
                    <FiCheck className="kaveri-icon" />
                  </button>
                </div>
              </div>

              <p className="mt-6 max-w-lg text-xs leading-6 text-kaveri-muted">
                We recommend using a unique password that you do not use for
                other accounts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditProfilePage;
