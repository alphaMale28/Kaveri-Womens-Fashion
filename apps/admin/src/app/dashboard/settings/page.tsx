"use client";

import { useState } from "react";
import {
  FiSettings,
  FiShoppingBag,
  FiTruck,
  FiCreditCard,
  FiBell,
  FiShield,
  FiSave,
} from "react-icons/fi";

const sections = [
  { id: "store", label: "Store information", icon: FiShoppingBag },
  { id: "shipping", label: "Shipping & delivery", icon: FiTruck },
  { id: "payments", label: "Payments", icon: FiCreditCard },
  { id: "notifications", label: "Notifications", icon: FiBell },
  { id: "security", label: "Account & security", icon: FiShield },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("store");

  const [storeName, setStoreName] = useState("Kaveri");
  const [email, setEmail] = useState("support@kaveri.com");
  const [phone, setPhone] = useState("");
  const [currency, setCurrency] = useState("NPR");
  const [deliveryFee, setDeliveryFee] = useState("250");
  const [freeShipping, setFreeShipping] = useState("10000");
  const [codEnabled, setCodEnabled] = useState(true);
  const [orderAlerts, setOrderAlerts] = useState(true);
  const [stockAlerts, setStockAlerts] = useState(true);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    // Connect this handler to your settings API.
    // This starter page does not persist settings yet.
    setSaved(true);
  }

  return (
    <div className="min-h-screen bg-[#f7f4ee] px-4 py-7 text-[#171717] sm:px-7 lg:px-10">
      <div className="mx-auto max-w-[1200px] space-y-8">
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a87872]">
            Kaveri / Administration
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl">Settings</h1>

          <p className="mt-3 text-sm text-[#77736d]">
            Manage your store preferences and administrative settings.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit border border-[#e7e1d8] bg-white p-3">
            <p className="px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77736d]">
              General settings
            </p>

            {sections.map((section) => {
              const Icon = section.icon;
              const active = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex w-full items-center gap-3 px-3 py-3 text-left text-sm transition ${
                    active
                      ? "bg-[#f2e9e5] text-[#8f625c]"
                      : "text-[#55514c] hover:bg-[#faf9f6]"
                  }`}
                >
                  <Icon size={17} />
                  {section.label}
                </button>
              );
            })}
          </aside>

          <section className="border border-[#e7e1d8] bg-white">
            <div className="border-b border-[#eeeae2] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <FiSettings size={20} className="text-[#a87872]" />
                <h2 className="font-serif text-2xl">
                  {
                    sections.find((section) => section.id === activeSection)
                      ?.label
                  }
                </h2>
              </div>

              <p className="mt-2 text-sm text-[#77736d]">
                Update your preferences for the Kaveri store.
              </p>
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              {activeSection === "store" && (
                <>
                  <Field label="Store name">
                    <input
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      className="settings-input"
                    />
                  </Field>

                  <Field label="Support email">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="settings-input"
                    />
                  </Field>

                  <Field label="Contact phone">
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter store contact number"
                      className="settings-input"
                    />
                  </Field>

                  <Field label="Currency">
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="settings-input"
                    >
                      <option value="NPR">NPR — Nepalese Rupee</option>
                      <option value="INR">INR — Indian Rupee</option>
                      <option value="USD">USD — US Dollar</option>
                    </select>
                  </Field>

                  <Field label="Timezone">
                    <input
                      value="Asia/Kathmandu (UTC+05:45)"
                      readOnly
                      className="settings-input bg-[#faf9f6]"
                    />
                  </Field>
                </>
              )}

              {activeSection === "shipping" && (
                <>
                  <Field label="Standard delivery fee (NPR)">
                    <input
                      type="number"
                      min="0"
                      value={deliveryFee}
                      onChange={(e) => setDeliveryFee(e.target.value)}
                      className="settings-input"
                    />
                  </Field>

                  <Field label="Free delivery minimum order (NPR)">
                    <input
                      type="number"
                      min="0"
                      value={freeShipping}
                      onChange={(e) => setFreeShipping(e.target.value)}
                      className="settings-input"
                    />
                  </Field>

                  <p className="bg-[#faf9f6] p-4 text-sm leading-6 text-[#77736d]">
                    Current preview: standard delivery costs NPR{" "}
                    {Number(deliveryFee || 0).toLocaleString("en-NP")}. Orders
                    of NPR {Number(freeShipping || 0).toLocaleString("en-NP")}{" "}
                    or more qualify for free delivery.
                  </p>
                </>
              )}

              {activeSection === "payments" && (
                <Toggle
                  title="Cash on Delivery"
                  description="Allow customers to pay when their orders arrive."
                  checked={codEnabled}
                  onChange={setCodEnabled}
                />
              )}

              {activeSection === "notifications" && (
                <>
                  <Toggle
                    title="New order notifications"
                    description="Receive alerts when a customer places an order."
                    checked={orderAlerts}
                    onChange={setOrderAlerts}
                  />

                  <Toggle
                    title="Low stock alerts"
                    description="Get notified when product inventory runs low."
                    checked={stockAlerts}
                    onChange={setStockAlerts}
                  />
                </>
              )}

              {activeSection === "security" && (
                <div className="space-y-4">
                  <div className="border border-[#eeeae2] p-5">
                    <h3 className="font-medium">Admin account</h3>
                    <p className="mt-2 text-sm leading-6 text-[#77736d]">
                      Manage your administrator profile and login credentials
                      using your authentication system.
                    </p>
                  </div>

                  <p className="text-sm text-[#77736d]">
                    Connect your authentication provider to implement password
                    changes and session management securely.
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 border-t border-[#eeeae2] p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p className="text-xs text-[#77736d]">
                {saved
                  ? "Changes are in the current page state only."
                  : "Remember to save your changes."}
              </p>

              <button
                onClick={handleSave}
                className="inline-flex items-center justify-center gap-2 bg-[#171717] px-5 py-3 text-sm text-white transition hover:bg-[#a87872]"
              >
                <FiSave size={16} />
                Save changes
              </button>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .settings-input {
          width: 100%;
          border: 1px solid #e7e1d8;
          background: white;
          padding: 12px 14px;
          font-size: 14px;
          outline: none;
        }

        .settings-input:focus {
          border-color: #a87872;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">{label}</label>
      {children}
    </div>
  );
}

function Toggle({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#eeeae2] pb-5">
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[#77736d]">{description}</p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked ? "bg-[#a87872]" : "bg-[#d8cfc1]"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}
