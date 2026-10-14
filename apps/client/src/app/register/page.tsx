"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiArrowUpRight, FiUserPlus } from "react-icons/fi";
import { toast } from "sonner";

const registerImage =
  "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1400&q=85";
const RegisterPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const password = String(formData.get("password"));
    const confirmPassword = String(formData.get("confirmPassword"));

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    const registerData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password,
    };

    console.log("Register payload:", registerData);

    await new Promise((resolve) => setTimeout(resolve, 700));

    toast.success("Registration form submitted.");

    setIsSubmitting(false);
  };

  return (
    <div className="bg-kaveri-cream">
      <section className="kaveri-container grid min-h-[calc(100vh-8rem)] items-stretch gap-0 py-6 sm:py-8 lg:grid-cols-[0.9fr_1fr] lg:py-10">
        {/* FORM */}
        <div className="flex items-center justify-center px-2 py-10 sm:px-6 lg:order-first lg:px-12 xl:px-20">
          <div className="w-full max-w-md">
            <div>
              <p className="kaveri-eyebrow">Create your account</p>

              <h1 className="font-editorial mt-6 text-6xl font-normal leading-[0.82] tracking-[-0.045em] sm:text-7xl">
                Join Kaveri.
              </h1>

              <p className="mt-5 max-w-sm text-sm leading-7 text-kaveri-muted">
                Save pieces, track orders, and make every visit more personal.
              </p>
            </div>

            <div className="mt-10 border-t border-black/10 pt-8">
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label
                    htmlFor="name"
                    className="text-[9px] font-semibold uppercase tracking-[0.15em]"
                  >
                    Full name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your full name"
                    className="mt-3 h-12 w-full border-b border-black/20 bg-transparent px-0 text-sm transition-colors placeholder:text-kaveri-muted/70 focus:border-kaveri-ink"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-[9px] font-semibold uppercase tracking-[0.15em]"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="mt-3 h-12 w-full border-b border-black/20 bg-transparent px-0 text-sm transition-colors placeholder:text-kaveri-muted/70 focus:border-kaveri-ink"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-[9px] font-semibold uppercase tracking-[0.15em]"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                    placeholder="At least 8 characters"
                    className="mt-3 h-12 w-full border-b border-black/20 bg-transparent px-0 text-sm transition-colors placeholder:text-kaveri-muted/70 focus:border-kaveri-ink"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="text-[9px] font-semibold uppercase tracking-[0.15em]"
                  >
                    Confirm password
                  </label>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                    placeholder="Repeat your password"
                    className="mt-3 h-12 w-full border-b border-black/20 bg-transparent px-0 text-sm transition-colors placeholder:text-kaveri-muted/70 focus:border-kaveri-ink"
                  />
                </div>

                <label className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    name="terms"
                    required
                    className="mt-0.5 h-4 w-4 accent-kaveri-ink"
                  />

                  <span className="text-xs leading-5 text-kaveri-muted">
                    I agree to the Kaveri terms and privacy policy.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="kaveri-button w-full disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <FiUserPlus />

                  {isSubmitting ? "Creating account..." : "Create account"}
                </button>
              </form>

              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-black/10" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
                  Already a member?
                </span>

                <div className="h-px flex-1 bg-black/10" />
              </div>

              <Link
                href="/login"
                className="flex h-12 w-full items-center justify-center border border-black/15 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-kaveri-ink hover:bg-kaveri-paper"
              >
                Sign in
              </Link>

              <div className="mt-8 flex justify-between gap-6">
                <Link href="/" className="kaveri-link">
                  <FiArrowLeft />
                  Back to Kaveri
                </Link>

                <Link href="/shop" className="kaveri-link">
                  Shop
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative hidden min-h-[760px] overflow-hidden lg:block">
          <Image
            src={registerImage}
            alt="Kaveri women's fashion editorial"
            fill
            priority
            sizes="(max-width: 1024px) 0vw, 52vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-8 left-8 max-w-xs text-white">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
              Kaveri / New Perspective
            </p>

            <p className="font-editorial mt-3 text-4xl leading-none tracking-[-0.025em]">
              Find your
              <br />
              expression.
            </p>
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className="relative order-first h-[280px] overflow-hidden lg:hidden">
          <Image
            src={registerImage}
            alt="Kaveri women's fashion editorial"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-5 left-5 text-white">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em]">
              Kaveri / New Perspective
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
