"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiArrowUpRight, FiLock } from "react-icons/fi";
import { toast } from "sonner";

const loginImage =
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85";

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log("Login payload:", loginData);

    await new Promise((resolve) => setTimeout(resolve, 700));

    toast.success("Login form submitted.");

    setIsSubmitting(false);
  };

  return (
    <div className="bg-kaveri-cream">
      <section className="kaveri-container grid min-h-[calc(100vh-8rem)] items-stretch gap-0 py-6 sm:py-8 lg:grid-cols-[1fr_0.9fr] lg:py-10">
        {/* IMAGE */}
        <div className="relative hidden min-h-[680px] overflow-hidden lg:block">
          <Image
            src={loginImage}
            alt="Kaveri women's fashion editorial"
            fill
            priority
            sizes="(max-width: 1024px) 0vw, 52vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-8 left-8 max-w-xs text-white">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
              Kaveri / Collection
            </p>

            <p className="font-editorial mt-3 text-4xl leading-none tracking-[-0.025em]">
              Considered
              <br />
              pieces.
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="flex items-center justify-center px-2 py-10 sm:px-6 lg:px-12 xl:px-20">
          <div className="w-full max-w-md">
            <div>
              <p className="kaveri-eyebrow">Welcome back</p>

              <h1 className="font-editorial mt-6 text-6xl font-normal leading-[0.82] tracking-[-0.045em] sm:text-7xl">
                Sign in.
              </h1>

              <p className="mt-5 max-w-sm text-sm leading-7 text-kaveri-muted">
                Access your saved pieces, orders, and account.
              </p>
            </div>

            <div className="mt-10 border-t border-black/10 pt-8">
              <form onSubmit={handleSubmit} className="space-y-7">
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
                  <div className="flex items-center justify-between gap-4">
                    <label
                      htmlFor="password"
                      className="text-[9px] font-semibold uppercase tracking-[0.15em]"
                    >
                      Password
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-[9px] font-semibold uppercase tracking-[0.12em] text-kaveri-muted transition-colors hover:text-kaveri-ink"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Enter your password"
                    className="mt-3 h-12 w-full border-b border-black/20 bg-transparent px-0 text-sm transition-colors placeholder:text-kaveri-muted/70 focus:border-kaveri-ink"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="kaveri-button w-full disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <FiLock />

                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
              </form>

              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-black/10" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
                  New to Kaveri?
                </span>

                <div className="h-px flex-1 bg-black/10" />
              </div>

              <Link
                href="/register"
                className="flex h-12 w-full items-center justify-center border border-black/15 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-kaveri-ink hover:bg-kaveri-paper"
              >
                Create an account
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

        {/* MOBILE IMAGE */}
        <div className="relative order-first h-[280px] overflow-hidden lg:hidden">
          <Image
            src={loginImage}
            alt="Kaveri women's fashion editorial"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-5 left-5 text-white">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em]">
              Kaveri / Collection
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
