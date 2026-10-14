"use client";

import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiShield,
  FiLock,
  FiSave,
  FiCamera,
} from "react-icons/fi";

export default function AdminProfilePage() {
  const [name, setName] = useState("Kaveri Admin");
  const [email, setEmail] = useState("admin@kaveri.com");
  const [role] = useState("Store Manager");
  const [saved, setSaved] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  function handleProfileSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: Send name and email to your admin profile API.
    setSaved(true);
  }

  function handlePasswordChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPasswordMessage("");

    if (newPassword.length < 8) {
      setPasswordMessage(
        "Your new password must contain at least 8 characters.",
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordMessage("Your passwords do not match.");
      return;
    }

    // TODO: Send the password change to your authentication API.
    // Never store passwords directly in frontend state or local storage.
    setPasswordMessage(
      "Password form validated. Connect your authentication API to complete the change.",
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f4ee] px-4 py-7 text-[#171717] sm:px-7 lg:px-10">
      <div className="mx-auto max-w-[1100px] space-y-8">
        {/* Page heading */}
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a87872]">
            Kaveri / Administration
          </p>

          <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">
            Admin Profile
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#77736d]">
            Manage your personal information and account security.
          </p>
        </div>

        {/* Profile overview */}
        <section className="border border-[#e7e1d8] bg-white">
          <div className="border-b border-[#eeeae2] p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a87872]">
              Administrator account
            </p>

            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#171717] font-serif text-4xl text-[#f7f4ee]">
                {name.trim().charAt(0).toUpperCase() || "K"}
              </div>

              <div className="flex-1">
                <h2 className="font-serif text-2xl">{name}</h2>

                <p className="mt-1 text-sm text-[#77736d]">{email}</p>

                <div className="mt-3 inline-flex items-center gap-2 border border-[#e7e1d8] px-3 py-1.5 text-xs text-[#625b54]">
                  <FiShield size={14} />
                  {role}
                </div>
              </div>

              <button
                type="button"
                disabled
                title="Profile photo upload will be added later"
                className="inline-flex cursor-not-allowed items-center justify-center gap-2 border border-[#e7e1d8] px-4 py-2.5 text-sm text-[#77736d] opacity-70"
              >
                <FiCamera size={16} />
                Change photo
              </button>
            </div>
          </div>

          <div className="grid gap-px bg-[#eeeae2] sm:grid-cols-2">
            <div className="bg-white p-6 sm:p-8">
              <p className="text-xs text-[#77736d]">Account type</p>
              <p className="mt-2 text-sm font-medium">Administrator</p>
            </div>

            <div className="bg-white p-6 sm:p-8">
              <p className="text-xs text-[#77736d]">Access level</p>
              <p className="mt-2 text-sm font-medium">Store management</p>
            </div>
          </div>
        </section>

        {/* Personal information */}
        <section className="border border-[#e7e1d8] bg-white">
          <div className="border-b border-[#eeeae2] p-6 sm:p-8">
            <h2 className="font-serif text-2xl">Personal information</h2>

            <p className="mt-2 text-sm text-[#77736d]">
              Update the information associated with your admin account.
            </p>
          </div>

          <form onSubmit={handleProfileSave} className="space-y-6 p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="admin-name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full name
                </label>

                <div className="flex items-center gap-3 border border-[#e7e1d8] px-3">
                  <FiUser className="shrink-0 text-[#77736d]" />

                  <input
                    id="admin-name"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      setSaved(false);
                    }}
                    required
                    className="w-full bg-transparent py-3 text-sm outline-none"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="admin-email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>

                <div className="flex items-center gap-3 border border-[#e7e1d8] px-3">
                  <FiMail className="shrink-0 text-[#77736d]" />

                  <input
                    id="admin-email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setSaved(false);
                    }}
                    required
                    className="w-full bg-transparent py-3 text-sm outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Administrator role
              </label>

              <div className="flex items-center gap-3 border border-[#e7e1d8] bg-[#faf9f6] px-3 py-3">
                <FiShield className="text-[#77736d]" />

                <span className="text-sm text-[#77736d]">{role}</span>

                <span className="ml-auto text-xs text-[#77736d]">
                  Managed by access permissions
                </span>
              </div>
            </div>

            {saved && (
              <p className="text-sm text-[#53765b]">
                Form validated. Connect the profile API to save changes.
              </p>
            )}

            <div className="flex justify-end border-t border-[#eeeae2] pt-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#171717] px-5 py-3 text-sm text-white transition hover:bg-[#a87872]"
              >
                <FiSave size={16} />
                Save changes
              </button>
            </div>
          </form>
        </section>

        {/* Password and security */}
        <section className="border border-[#e7e1d8] bg-white">
          <div className="border-b border-[#eeeae2] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <FiLock size={19} className="text-[#a87872]" />

              <h2 className="font-serif text-2xl">Password & security</h2>
            </div>

            <p className="mt-2 text-sm text-[#77736d]">
              Keep your administrator account secure.
            </p>
          </div>

          <form
            onSubmit={handlePasswordChange}
            className="space-y-5 p-6 sm:p-8"
          >
            <div>
              <label
                htmlFor="current-password"
                className="mb-2 block text-sm font-medium"
              >
                Current password
              </label>

              <input
                id="current-password"
                type="password"
                autoComplete="current-password"
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
                required
                className="w-full border border-[#e7e1d8] px-3 py-3 text-sm outline-none focus:border-[#a87872]"
                placeholder="Enter current password"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="new-password"
                  className="mb-2 block text-sm font-medium"
                >
                  New password
                </label>

                <input
                  id="new-password"
                  type="password"
                  autoComplete="new-password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  required
                  minLength={8}
                  className="w-full border border-[#e7e1d8] px-3 py-3 text-sm outline-none focus:border-[#a87872]"
                  placeholder="At least 8 characters"
                />
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-medium"
                >
                  Confirm new password
                </label>

                <input
                  id="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                  minLength={8}
                  className="w-full border border-[#e7e1d8] px-3 py-3 text-sm outline-none focus:border-[#a87872]"
                  placeholder="Repeat new password"
                />
              </div>
            </div>

            {passwordMessage && (
              <p className="text-sm text-[#a64d46]">{passwordMessage}</p>
            )}

            <div className="flex justify-end border-t border-[#eeeae2] pt-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 border border-[#171717] px-5 py-3 text-sm transition hover:bg-[#f7f4ee]"
              >
                <FiLock size={16} />
                Update password
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
