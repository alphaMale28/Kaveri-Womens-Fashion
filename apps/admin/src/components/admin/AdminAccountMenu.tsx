"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiChevronUp, FiUser, FiSettings, FiLogOut } from "react-icons/fi";

export default function AdminAccountMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function handleSignOut() {
    // Connect this to your actual authentication logout logic.
    // Do not redirect until the session has been invalidated.
    setIsOpen(false);
    router.push("/login");
  }

  return (
    <div className="relative mt-auto border-t border-[#e7e1d8] p-3">
      {isOpen && (
        <div className="absolute bottom-[calc(100%-4px)] left-3 right-3 mb-2 border border-[#e7e1d8] bg-white p-2 shadow-[0_12px_32px_rgba(23,23,23,0.08)]">
          <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a87872]">
            Account
          </p>

          <Link
            href="/dashboard/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-3 py-3 text-sm text-[#33302d] transition hover:bg-[#f7f4ee]"
          >
            <FiUser size={17} className="text-[#77736d]" />
            Admin profile
          </Link>

          <Link
            href="/dashboard/settings"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-3 py-3 text-sm text-[#33302d] transition hover:bg-[#f7f4ee]"
          >
            <FiSettings size={17} className="text-[#77736d]" />
            Settings
          </Link>

          <div className="my-1 border-t border-[#eeeae2]" />

          <button
            type="button"
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 px-3 py-3 text-sm text-[#a64d46] transition hover:bg-[#faf2f0]"
          >
            <FiLogOut size={17} />
            Sign out
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Open administrator account menu"
        className={`flex w-full items-center gap-3 p-2 text-left transition ${
          isOpen ? "bg-[#f7f4ee]" : "hover:bg-[#f7f4ee]"
        }`}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#171717] font-serif text-xl text-[#f7f4ee]">
          K
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-[#171717]">
            Kaveri Admin
          </p>
          <p className="mt-1 text-xs text-[#77736d]">Store manager</p>
        </div>

        <FiChevronUp
          size={17}
          className={`shrink-0 text-[#77736d] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
}
