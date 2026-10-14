// // // "use client";

// // // import { useState } from "react";
// // // import {
// // //   FiArrowUpRight,
// // //   FiChevronDown,
// // //   FiHeart,
// // //   FiLogOut,
// // //   FiMapPin,
// // //   FiPackage,
// // //   FiUser,
// // // } from "react-icons/fi";

// // // type AccountTab = "profile" | "orders" | "wishlist" | "addresses";

// // // const tabs: {
// // //   id: AccountTab;
// // //   label: string;
// // //   number: string;
// // // }[] = [
// // //   {
// // //     id: "profile",
// // //     label: "Personal Details",
// // //     number: "01",
// // //   },
// // //   {
// // //     id: "orders",
// // //     label: "Orders",
// // //     number: "02",
// // //   },
// // //   {
// // //     id: "wishlist",
// // //     label: "Wishlist",
// // //     number: "03",
// // //   },
// // //   {
// // //     id: "addresses",
// // //     label: "Addresses",
// // //     number: "04",
// // //   },
// // // ];

// // // export default function AccountPage() {
// // //   const [activeTab, setActiveTab] = useState<AccountTab>("profile");

// // //   return (
// // //     <main className="page-shell">
// // //       <section className="kaveri-section">
// // //         <div className="kaveri-container">
// // //           <header className="border-b border-kaveri-ink/15 pb-10">
// // //             <span className="kaveri-eyebrow">My Account</span>

// // //             <div className="mt-7 flex flex-col justify-between gap-8 md:flex-row md:items-end">
// // //               <div>
// // //                 <h1 className="font-editorial text-[clamp(4rem,10vw,9rem)] font-normal leading-[0.78] tracking-[-0.055em]">
// // //                   Account
// // //                 </h1>
// // //               </div>

// // //               <p className="max-w-sm text-sm leading-7 text-kaveri-muted md:pb-1">
// // //                 Everything you need, in one place. Manage your details, orders,
// // //                 saved pieces, and delivery information.
// // //               </p>
// // //             </div>
// // //           </header>

// // //           <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_2fr]">
// // //             <aside className="border-b border-kaveri-ink/15 py-10 lg:border-r lg:border-b-0 lg:pr-12 lg:py-14">
// // //               <div className="flex items-center gap-4">
// // //                 <div className="flex h-12 w-12 items-center justify-center rounded-full border border-kaveri-ink/15 bg-kaveri-paper">
// // //                   <FiUser className="text-lg text-kaveri-clay" />
// // //                 </div>

// // //                 <div>
// // //                   <p className="text-sm font-medium">Your Name</p>

// // //                   <p className="mt-1 text-xs text-kaveri-muted">
// // //                     you@example.com
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               <nav className="mt-12">
// // //                 <p className="mb-5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
// // //                   Account
// // //                 </p>

// // //                 <div>
// // //                   {tabs.map((tab) => {
// // //                     const active = activeTab === tab.id;

// // //                     return (
// // //                       <button
// // //                         key={tab.id}
// // //                         type="button"
// // //                         onClick={() => setActiveTab(tab.id)}
// // //                         className="group flex w-full items-center border-b border-kaveri-ink/10 py-4 text-left"
// // //                       >
// // //                         <span
// // //                           className={`mr-4 text-[0.62rem] tracking-[0.1em] transition-colors ${
// // //                             active ? "text-kaveri-clay" : "text-kaveri-muted"
// // //                           }`}
// // //                         >
// // //                           {tab.number}
// // //                         </span>

// // //                         <span
// // //                           className={`text-sm transition-colors ${
// // //                             active
// // //                               ? "text-kaveri-ink"
// // //                               : "text-kaveri-muted group-hover:text-kaveri-ink"
// // //                           }`}
// // //                         >
// // //                           {tab.label}
// // //                         </span>

// // //                         <FiArrowUpRight
// // //                           className={`ml-auto text-sm transition-all duration-300 ${
// // //                             active
// // //                               ? "translate-x-0 -translate-y-0 opacity-100 text-kaveri-clay"
// // //                               : "translate-y-1 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
// // //                           }`}
// // //                         />
// // //                       </button>
// // //                     );
// // //                   })}
// // //                 </div>
// // //               </nav>

// // //               <button
// // //                 type="button"
// // //                 className="mt-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-kaveri-muted transition-colors hover:text-kaveri-clay"
// // //               >
// // //                 <FiLogOut />
// // //                 Sign Out
// // //               </button>
// // //             </aside>

// // //             <div className="py-12 lg:py-14 lg:pl-16 xl:pl-24">
// // //               {activeTab === "profile" && <ProfileSection />}
// // //               {activeTab === "orders" && <OrdersSection />}
// // //               {activeTab === "wishlist" && <WishlistSection />}
// // //               {activeTab === "addresses" && <AddressesSection />}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // }

// // // function ProfileSection() {
// // //   return (
// // //     <div>
// // //       <SectionIntro
// // //         eyebrow="01 / Personal Details"
// // //         title="A little about you."
// // //         description="Keep your personal information current so your Kaveri experience stays effortless."
// // //       />

// // //       <div className="mt-14">
// // //         <div className="grid grid-cols-1 gap-x-16 border-y border-kaveri-ink/10 sm:grid-cols-2">
// // //           <Detail label="Full Name" value="Your Name" />

// // //           <Detail label="Email" value="you@example.com" />

// // //           <Detail label="Phone" value="+977 98XXXXXXXX" />

// // //           <Detail label="Member Since" value="October 2026" />
// // //         </div>

// // //         <button type="button" className="kaveri-button mt-9">
// // //           Edit Details
// // //           <FiArrowUpRight className="text-base" />
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function OrdersSection() {
// // //   return (
// // //     <div>
// // //       <SectionIntro
// // //         eyebrow="02 / Orders"
// // //         title="Pieces you've chosen."
// // //         description="A quiet record of your Kaveri purchases and their journey to you."
// // //       />

// // //       <div className="mt-14">
// // //         <Order
// // //           number="#KV-1024"
// // //           date="04 October 2026"
// // //           item="Silk Draped Saree"
// // //           amount="NPR 18,500"
// // //           status="Delivered"
// // //         />

// // //         <Order
// // //           number="#KV-1018"
// // //           date="21 September 2026"
// // //           item="Handcrafted Lehenga"
// // //           amount="NPR 12,900"
// // //           status="Processing"
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function WishlistSection() {
// // //   return (
// // //     <div>
// // //       <SectionIntro
// // //         eyebrow="03 / Wishlist"
// // //         title="Things you love."
// // //         description="Your considered selection of pieces saved for another day."
// // //       />

// // //       <div className="mt-14 border-y border-kaveri-ink/10 py-16">
// // //         <div className="max-w-lg">
// // //           <FiHeart className="text-xl text-kaveri-clay" />

// // //           <h3 className="mt-7 font-editorial text-5xl leading-none tracking-[-0.03em]">
// // //             Nothing saved yet.
// // //           </h3>

// // //           <p className="mt-5 max-w-md text-sm leading-7 text-kaveri-muted">
// // //             When something catches your eye, save it here and return to it
// // //             whenever you're ready.
// // //           </p>

// // //           <button type="button" className="kaveri-button mt-8">
// // //             Discover Kaveri
// // //             <FiArrowUpRight className="text-base" />
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function AddressesSection() {
// // //   return (
// // //     <div>
// // //       <SectionIntro
// // //         eyebrow="04 / Addresses"
// // //         title="Where we send it."
// // //         description="Save your preferred delivery details for a smoother checkout."
// // //       />

// // //       <div className="mt-14">
// // //         <div className="border-y border-kaveri-ink/10 py-9">
// // //           <div className="flex flex-col justify-between gap-8 sm:flex-row">
// // //             <div className="flex gap-5">
// // //               <FiMapPin className="mt-1 shrink-0 text-lg text-kaveri-clay" />

// // //               <div>
// // //                 <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-kaveri-muted">
// // //                   Default Address
// // //                 </p>

// // //                 <p className="mt-4 text-sm leading-7 text-kaveri-ink">
// // //                   No delivery address has been added yet.
// // //                 </p>
// // //               </div>
// // //             </div>

// // //             <button type="button" className="kaveri-link text-kaveri-ink">
// // //               Add Address
// // //               <FiArrowUpRight />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function SectionIntro({
// // //   eyebrow,
// // //   title,
// // //   description,
// // // }: {
// // //   eyebrow: string;
// // //   title: string;
// // //   description: string;
// // // }) {
// // //   return (
// // //     <div>
// // //       <span className="kaveri-eyebrow">{eyebrow}</span>

// // //       <h2 className="mt-6 max-w-3xl font-editorial text-[clamp(3.2rem,6vw,6rem)] font-normal leading-[0.88] tracking-[-0.04em]">
// // //         {title}
// // //       </h2>

// // //       <p className="mt-7 max-w-lg text-sm leading-7 text-kaveri-muted">
// // //         {description}
// // //       </p>
// // //     </div>
// // //   );
// // // }

// // // function Detail({ label, value }: { label: string; value: string }) {
// // //   return (
// // //     <div className="border-b border-kaveri-ink/10 py-7 last:border-b-0 sm:[&:nth-child(3)]:border-b-0">
// // //       <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-kaveri-muted">
// // //         {label}
// // //       </p>

// // //       <p className="mt-3 text-sm">{value}</p>
// // //     </div>
// // //   );
// // // }

// // // function Order({
// // //   number,
// // //   date,
// // //   item,
// // //   amount,
// // //   status,
// // // }: {
// // //   number: string;
// // //   date: string;
// // //   item: string;
// // //   amount: string;
// // //   status: string;
// // // }) {
// // //   return (
// // //     <article className="group border-t border-kaveri-ink/10 py-8 last:border-b">
// // //       <div className="grid grid-cols-1 gap-7 md:grid-cols-[0.7fr_1.5fr_0.8fr_auto] md:items-center">
// // //         <div>
// // //           <p className="text-xs font-semibold tracking-[0.08em]">{number}</p>

// // //           <p className="mt-2 text-xs text-kaveri-muted">{date}</p>
// // //         </div>

// // //         <div>
// // //           <p className="font-editorial text-3xl tracking-[-0.02em]">{item}</p>
// // //         </div>

// // //         <div>
// // //           <p className="text-[0.62rem] uppercase tracking-[0.14em] text-kaveri-muted">
// // //             {status}
// // //           </p>

// // //           <p className="mt-2 text-sm">{amount}</p>
// // //         </div>

// // //         <button type="button" className="kaveri-link text-kaveri-ink">
// // //           View
// // //           <FiArrowUpRight />
// // //         </button>
// // //       </div>
// // //     </article>
// // //   );
// // // }

// // "use client";

// // import { useState } from "react";
// // import {
// //   FiArrowUpRight,
// //   FiCamera,
// //   FiCheck,
// //   FiEdit3,
// //   FiLock,
// //   FiMapPin,
// //   FiUser,
// // } from "react-icons/fi";

// // export default function AccountPage() {
// //   const [editing, setEditing] = useState(false);

// //   return (
// //     <main className="page-shell">
// //       <section className="kaveri-section">
// //         <div className="kaveri-container">
// //           <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_2fr] lg:gap-20 xl:gap-28">
// //             <aside className="lg:sticky lg:top-28 lg:self-start">
// //               <span className="kaveri-eyebrow">My Account</span>

// //               <h1 className="mt-7 max-w-sm font-editorial text-[clamp(4rem,8vw,7.5rem)] font-normal leading-[0.78] tracking-[-0.055em]">
// //                 Your
// //                 <br />
// //                 space.
// //               </h1>

// //               <p className="mt-8 max-w-xs text-sm leading-7 text-kaveri-muted">
// //                 A private space for your details, preferences, and everything
// //                 that makes your Kaveri experience personal.
// //               </p>

// //               <div className="mt-12 hidden border-t border-kaveri-ink/10 pt-6 lg:block">
// //                 <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
// //                   Member since
// //                 </p>

// //                 <p className="mt-3 font-editorial text-2xl">October 2026</p>
// //               </div>
// //             </aside>

// //             <div>
// //               <ProfileHero />

// //               <div className="mt-14">
// //                 <PersonalDetails
// //                   editing={editing}
// //                   onEdit={() => setEditing((current) => !current)}
// //                 />
// //               </div>

// //               <div className="mt-16">
// //                 <DeliverySection />
// //               </div>

// //               <div className="mt-16">
// //                 <SecuritySection />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }

// // function ProfileHero() {
// //   return (
// //     <div className="border-b border-kaveri-ink/15 pb-12">
// //       <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
// //         <div className="flex items-end gap-6">
// //           <div className="group relative shrink-0">
// //             <div className="h-28 w-28 overflow-hidden rounded-full bg-kaveri-paper sm:h-36 sm:w-36">
// //               <img
// //                 src="https://images.pexels.com/photos/9075628/pexels-photo-9075628.jpeg?auto=compress&cs=tinysrgb&w=400"
// //                 alt="Vivian Rhodes"
// //                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
// //               />
// //             </div>

// //             <button
// //               type="button"
// //               aria-label="Change profile picture"
// //               className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full border border-kaveri-cream bg-kaveri-ink text-kaveri-white transition-colors duration-200 hover:bg-kaveri-clay"
// //             >
// //               <FiCamera className="text-sm" />
// //             </button>
// //           </div>

// //           <div className="pb-1">
// //             <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
// //               Welcome back
// //             </p>

// //             <h2 className="mt-3 font-editorial text-5xl leading-none tracking-[-0.035em] sm:text-6xl">
// //               Vivian Rhodes
// //             </h2>
// //           </div>
// //         </div>

// //         <span className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-kaveri-muted sm:block">
// //           Kaveri Member
// //         </span>
// //       </div>
// //     </div>
// //   );
// // }

// // function PersonalDetails({
// //   editing,
// //   onEdit,
// // }: {
// //   editing: boolean;
// //   onEdit: () => void;
// // }) {
// //   return (
// //     <section>
// //       <SectionHeading
// //         eyebrow="01 / Personal Details"
// //         title="Who you are."
// //         icon={<FiUser />}
// //       />

// //       <div className="mt-10">
// //         {editing ? (
// //           <EditDetails />
// //         ) : (
// //           <div className="border-y border-kaveri-ink/10">
// //             <DetailRow label="Full name" value="Vivian Rhodes" />

// //             <DetailRow
// //               label="Email address"
// //               value="vivian.rhodes@example.com"
// //             />

// //             <DetailRow label="Phone number" value="+977 98XXXXXXXX" />
// //           </div>
// //         )}

// //         {!editing && (
// //           <button type="button" onClick={onEdit} className="kaveri-button mt-8">
// //             <FiEdit3 />
// //             Edit details
// //           </button>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// // function EditDetails() {
// //   return (
// //     <div className="border-y border-kaveri-ink/10">
// //       <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2">
// //         <InputField label="Full name" value="Vivian Rhodes" />

// //         <InputField label="Phone number" value="+977 98XXXXXXXX" />

// //         <div className="sm:col-span-2">
// //           <InputField
// //             label="Email address"
// //             value="vivian.rhodes@example.com"
// //             type="email"
// //           />
// //         </div>
// //       </div>

// //       <div className="flex flex-wrap gap-4 border-t border-kaveri-ink/10 py-7">
// //         <button type="button" className="kaveri-button">
// //           <FiCheck />
// //           Save changes
// //         </button>

// //         <button
// //           type="button"
// //           className="kaveri-button kaveri-button-light border border-kaveri-ink/10"
// //         >
// //           Cancel
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // function DeliverySection() {
// //   return (
// //     <section>
// //       <SectionHeading
// //         eyebrow="02 / Delivery"
// //         title="Where we send it."
// //         icon={<FiMapPin />}
// //       />

// //       <div className="mt-10 border-y border-kaveri-ink/10">
// //         <div className="flex flex-col gap-7 py-8 sm:flex-row sm:items-start sm:justify-between">
// //           <div className="flex gap-5">
// //             <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-kaveri-paper text-kaveri-clay">
// //               <FiMapPin />
// //             </span>

// //             <div>
// //               <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-kaveri-muted">
// //                 Default address
// //               </p>

// //               <p className="mt-3 max-w-md text-sm leading-7 text-kaveri-ink">
// //                 No delivery address has been added to your account yet.
// //               </p>
// //             </div>
// //           </div>

// //           <button type="button" className="kaveri-link text-kaveri-ink">
// //             Add address
// //             <FiArrowUpRight />
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function SecuritySection() {
// //   return (
// //     <section>
// //       <SectionHeading
// //         eyebrow="03 / Security"
// //         title="Keep it private."
// //         icon={<FiLock />}
// //       />

// //       <div className="mt-10 border-y border-kaveri-ink/10">
// //         <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
// //           <div className="flex gap-5">
// //             <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-kaveri-paper text-kaveri-clay">
// //               <FiLock />
// //             </span>

// //             <div>
// //               <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-kaveri-muted">
// //                 Password
// //               </p>

// //               <p className="mt-3 text-sm tracking-[0.18em]">••••••••••••••</p>
// //             </div>
// //           </div>

// //           <button type="button" className="kaveri-link text-kaveri-ink">
// //             Change password
// //             <FiArrowUpRight />
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function SectionHeading({
// //   eyebrow,
// //   title,
// //   icon,
// // }: {
// //   eyebrow: string;
// //   title: string;
// //   icon: React.ReactNode;
// // }) {
// //   return (
// //     <div className="flex items-end justify-between gap-6 border-b border-kaveri-ink/10 pb-5">
// //       <div>
// //         <span className="kaveri-eyebrow">{eyebrow}</span>

// //         <h2 className="mt-5 font-editorial text-4xl leading-none tracking-[-0.03em] sm:text-5xl">
// //           {title}
// //         </h2>
// //       </div>

// //       <span className="mb-1 hidden text-xl text-kaveri-clay sm:block">
// //         {icon}
// //       </span>
// //     </div>
// //   );
// // }

// // function DetailRow({ label, value }: { label: string; value: string }) {
// //   return (
// //     <div className="grid grid-cols-1 gap-2 border-b border-kaveri-ink/10 py-6 last:border-b-0 sm:grid-cols-[180px_1fr] sm:items-center">
// //       <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-kaveri-muted">
// //         {label}
// //       </p>

// //       <p className="text-sm">{value}</p>
// //     </div>
// //   );
// // }

// // function InputField({
// //   label,
// //   value,
// //   type = "text",
// // }: {
// //   label: string;
// //   value: string;
// //   type?: string;
// // }) {
// //   return (
// //     <label className="block">
// //       <span className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-kaveri-muted">
// //         {label}
// //       </span>

// //       <input
// //         type={type}
// //         defaultValue={value}
// //         className="mt-3 w-full border-b border-kaveri-ink/20 bg-transparent py-3 text-sm text-kaveri-ink transition-colors duration-200 focus:border-kaveri-clay"
// //       />
// //     </label>
// //   );
// // }

// import Image from "next/image";
// import { FiArrowUpRight, FiEdit3, FiLock, FiMapPin } from "react-icons/fi";

// const profileImage =
//   "https://images.pexels.com/photos/9075628/pexels-photo-9075628.jpeg?auto=compress&cs=tinysrgb&w=400";

// function AccountPage() {
//   return (
//     <main className="page-shell">
//       <div className="kaveri-container">
//         {/* HERO */}
//         <section className="pb-20 pt-24 md:pb-28 md:pt-32">
//           <div className="max-w-5xl">
//             <span className="kaveri-eyebrow">My Account</span>

//             <h1 className="mt-6 font-editorial text-[clamp(4rem,10vw,9rem)] font-normal leading-[0.78] tracking-[-0.045em]">
//               Vivian
//               <br />
//               Rhodes
//             </h1>

//             <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
//               <p className="max-w-md text-sm leading-7 text-kaveri-muted">
//                 Everything that makes your Kaveri experience personal,
//                 considered, and yours.
//               </p>

//               <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
//                 Member since October 2026
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* PROFILE FEATURE */}
//         <section className="grid border-y border-black/10 lg:grid-cols-[1.1fr_1fr]">
//           <div className="relative aspect-[4/5] overflow-hidden bg-kaveri-paper lg:aspect-auto lg:min-h-[680px]">
//             <Image
//               src={profileImage}
//               alt="Vivian Rhodes"
//               fill
//               sizes="(max-width: 1024px) 100vw, 55vw"
//               className="object-cover"
//             />

//             <div className="absolute bottom-6 left-6">
//               <span className="bg-kaveri-cream px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em]">
//                 Kaveri Member
//               </span>
//             </div>
//           </div>

//           <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
//             <div>
//               <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-kaveri-clay">
//                 Your profile
//               </span>

//               <h2 className="mt-5 max-w-md font-editorial text-5xl font-normal leading-[0.92] tracking-tight md:text-6xl">
//                 A little more about you.
//               </h2>

//               <p className="mt-7 max-w-md text-sm leading-7 text-kaveri-muted">
//                 Your details help us make every interaction with Kaveri
//                 seamless, from discovering new pieces to receiving your
//                 favorites.
//               </p>
//             </div>

//             <div className="mt-16 border-t border-black/10 pt-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-kaveri-muted">
//                     Full name
//                   </p>

//                   <p className="mt-2 font-editorial text-2xl">Vivian Rhodes</p>
//                 </div>

//                 <button
//                   type="button"
//                   aria-label="Edit profile"
//                   className="flex h-11 w-11 items-center justify-center border border-black/15 transition-colors duration-200 hover:border-kaveri-clay hover:text-kaveri-clay"
//                 >
//                   <FiEdit3 className="text-base" />
//                 </button>
//               </div>

//               <div className="mt-6">
//                 <p className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-kaveri-muted">
//                   Email
//                 </p>

//                 <p className="mt-2 text-sm">vivian.rhodes@example.com</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ACCOUNT INFORMATION */}
//         <section className="py-20 md:py-28">
//           <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
//             <div>
//               <span className="kaveri-eyebrow">Account details</span>

//               <h2 className="mt-5 font-editorial text-5xl font-normal leading-none tracking-tight md:text-6xl">
//                 The essentials.
//               </h2>
//             </div>

//             <p className="max-w-sm text-sm leading-7 text-kaveri-muted">
//               Simple details, thoughtfully kept together.
//             </p>
//           </div>

//           {/* PERSONAL */}
//           <div className="border-t border-black/10">
//             <div className="grid gap-8 py-8 md:grid-cols-[180px_1fr_auto] md:items-start md:gap-12">
//               <div>
//                 <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-kaveri-clay">
//                   01
//                 </span>

//                 <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em]">
//                   Personal
//                 </p>
//               </div>

//               <div className="grid gap-6 sm:grid-cols-2">
//                 <div>
//                   <p className="text-[0.6rem] uppercase tracking-[0.14em] text-kaveri-muted">
//                     Full name
//                   </p>

//                   <p className="mt-2 text-sm">Vivian Rhodes</p>
//                 </div>

//                 <div>
//                   <p className="text-[0.6rem] uppercase tracking-[0.14em] text-kaveri-muted">
//                     Phone
//                   </p>

//                   <p className="mt-2 text-sm">+977 98XXXXXXXX</p>
//                 </div>
//               </div>

//               <button type="button" className="kaveri-link">
//                 Edit
//                 <FiArrowUpRight className="text-base" />
//               </button>
//             </div>
//           </div>

//           {/* DELIVERY */}
//           <div className="border-t border-black/10">
//             <div className="grid gap-8 py-8 md:grid-cols-[180px_1fr_auto] md:items-start md:gap-12">
//               <div>
//                 <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-kaveri-clay">
//                   02
//                 </span>

//                 <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em]">
//                   Delivery
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <FiMapPin className="kaveri-icon mt-1 shrink-0 text-base" />

//                 <div>
//                   <p className="text-sm">Vivian Rhodes</p>

//                   <p className="mt-1 text-sm leading-7 text-kaveri-muted">
//                     Kathmandu, Nepal
//                     <br />
//                     Bagmati Province
//                   </p>
//                 </div>
//               </div>

//               <button type="button" className="kaveri-link">
//                 Edit
//                 <FiArrowUpRight className="text-base" />
//               </button>
//             </div>
//           </div>

//           {/* PREFERENCES */}
//           <div className="border-t border-black/10">
//             <div className="grid gap-8 py-8 md:grid-cols-[180px_1fr_auto] md:items-start md:gap-12">
//               <div>
//                 <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-kaveri-clay">
//                   03
//                 </span>

//                 <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em]">
//                   Preferences
//                 </p>
//               </div>

//               <div className="grid gap-6 sm:grid-cols-3">
//                 <div>
//                   <p className="text-[0.6rem] uppercase tracking-[0.14em] text-kaveri-muted">
//                     Style
//                   </p>

//                   <p className="mt-2 text-sm">Contemporary</p>
//                 </div>

//                 <div>
//                   <p className="text-[0.6rem] uppercase tracking-[0.14em] text-kaveri-muted">
//                     Size
//                   </p>

//                   <p className="mt-2 text-sm">M</p>
//                 </div>

//                 <div>
//                   <p className="text-[0.6rem] uppercase tracking-[0.14em] text-kaveri-muted">
//                     Communication
//                   </p>

//                   <p className="mt-2 text-sm">Email</p>
//                 </div>
//               </div>

//               <button type="button" className="kaveri-link">
//                 Edit
//                 <FiArrowUpRight className="text-base" />
//               </button>
//             </div>
//           </div>

//           {/* SECURITY */}
//           <div className="border-y border-black/10">
//             <div className="grid gap-8 py-8 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-12">
//               <div>
//                 <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-kaveri-clay">
//                   04
//                 </span>

//                 <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em]">
//                   Security
//                 </p>
//               </div>

//               <div className="flex items-center gap-4">
//                 <FiLock className="kaveri-icon text-base" />

//                 <div>
//                   <p className="text-[0.6rem] uppercase tracking-[0.14em] text-kaveri-muted">
//                     Password
//                   </p>

//                   <p className="mt-2 text-sm tracking-[0.25em]">••••••••••••</p>
//                 </div>
//               </div>

//               <button type="button" className="kaveri-link">
//                 Change
//                 <FiArrowUpRight className="text-base" />
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* FINAL EDITORIAL */}
//         <section className="border-t border-black/10 pb-28 pt-20 md:pb-36 md:pt-28">
//           <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
//             <div>
//               <span className="kaveri-eyebrow">Continue exploring</span>

//               <h2 className="mt-6 max-w-4xl font-editorial text-[clamp(3.5rem,7vw,7rem)] font-normal leading-[0.82] tracking-[-0.04em]">
//                 Find something
//                 <br />
//                 that feels like you.
//               </h2>
//             </div>

//             <button type="button" className="kaveri-button">
//               Explore Kaveri
//               <FiArrowUpRight className="text-base" />
//             </button>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// export default AccountPage;

import Image from "next/image";
import { FiArrowUpRight, FiEdit3, FiLock, FiMapPin } from "react-icons/fi";

const profileImage =
  "https://images.pexels.com/photos/9075628/pexels-photo-9075628.jpeg?auto=compress&cs=tinysrgb&w=800";

const AccountPage = () => {
  return (
    <main className="page-shell">
      <div className="kaveri-container">
        {/* INTRO */}
        <section className="pb-16 pt-24 text-center md:pb-20 md:pt-32">
          <span className="kaveri-eyebrow justify-center">My Account</span>

          <h1 className="mt-7 font-editorial text-[clamp(4rem,9vw,8rem)] font-normal leading-[0.78] tracking-[-0.05em]">
            Vivian Rhodes
          </h1>

          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-kaveri-muted">
              Private Kaveri Member
            </p>

            <p className="text-[0.6rem] uppercase tracking-[0.16em] text-kaveri-clay">
              Since 2026
            </p>
          </div>
        </section>

        {/* PORTRAIT */}
        <section className="flex justify-center">
          <div className="relative aspect-[3/4] w-full max-w-[430px] overflow-hidden bg-kaveri-paper">
            <Image
              src={profileImage}
              alt="Vivian Rhodes"
              fill
              sizes="430px"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="flex items-center justify-between border-t border-white/50 pt-4 text-white">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em]">
                  Kaveri
                </span>

                <span className="text-[0.6rem] uppercase tracking-[0.16em]">
                  01 / 01
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PERSONAL INFORMATION */}
        <section className="mx-auto max-w-4xl py-24 md:py-32">
          <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-5">
            <div>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-kaveri-clay">
                01
              </span>

              <h2 className="mt-3 font-editorial text-4xl font-normal md:text-5xl">
                Personal details
              </h2>
            </div>

            <button
              type="button"
              aria-label="Edit personal details"
              className="flex h-10 w-10 items-center justify-center border border-black/15 transition-colors duration-200 hover:border-kaveri-clay hover:text-kaveri-clay"
            >
              <FiEdit3 className="text-sm" />
            </button>
          </div>

          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            <div>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-kaveri-muted">
                Name
              </p>

              <p className="mt-3 font-editorial text-2xl">Vivian Rhodes</p>
            </div>

            <div>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-kaveri-muted">
                Email
              </p>

              <p className="mt-3 text-sm">vivian.rhodes@example.com</p>
            </div>

            <div>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-kaveri-muted">
                Phone
              </p>

              <p className="mt-3 text-sm">+977 98XXXXXXXX</p>
            </div>

            <div>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-kaveri-muted">
                Member since
              </p>

              <p className="mt-3 text-sm">October 2026</p>
            </div>
          </div>
        </section>

        {/* ACCOUNT DETAILS */}
        <section className="border-t border-black/10">
          {/* DELIVERY */}
          <div className="mx-auto max-w-5xl border-b border-black/10 py-10 md:py-12">
            <div className="grid gap-6 md:grid-cols-[180px_1fr_auto] md:items-center">
              <div>
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-kaveri-clay">
                  02
                </span>

                <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em]">
                  Delivery
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FiMapPin className="kaveri-icon mt-1 shrink-0" />

                <div>
                  <p className="text-sm">Kathmandu, Nepal</p>

                  <p className="mt-1 text-xs leading-6 text-kaveri-muted">
                    Your default delivery destination
                  </p>
                </div>
              </div>

              <button type="button" className="kaveri-link">
                Edit
                <FiArrowUpRight className="text-base" />
              </button>
            </div>
          </div>

          {/* PREFERENCES */}
          <div className="mx-auto max-w-5xl border-b border-black/10 py-10 md:py-12">
            <div className="grid gap-6 md:grid-cols-[180px_1fr_auto] md:items-center">
              <div>
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-kaveri-clay">
                  03
                </span>

                <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em]">
                  Preferences
                </p>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <div>
                  <span className="text-[0.58rem] uppercase tracking-[0.15em] text-kaveri-muted">
                    Style
                  </span>

                  <p className="mt-1 text-sm">Contemporary</p>
                </div>

                <div>
                  <span className="text-[0.58rem] uppercase tracking-[0.15em] text-kaveri-muted">
                    Size
                  </span>

                  <p className="mt-1 text-sm">M</p>
                </div>

                <div>
                  <span className="text-[0.58rem] uppercase tracking-[0.15em] text-kaveri-muted">
                    Updates
                  </span>

                  <p className="mt-1 text-sm">Email</p>
                </div>
              </div>

              <button type="button" className="kaveri-link">
                Edit
                <FiArrowUpRight className="text-base" />
              </button>
            </div>
          </div>

          {/* SECURITY */}
          <div className="mx-auto max-w-5xl border-b border-black/10 py-10 md:py-12">
            <div className="grid gap-6 md:grid-cols-[180px_1fr_auto] md:items-center">
              <div>
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-kaveri-clay">
                  04
                </span>

                <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em]">
                  Security
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FiLock className="kaveri-icon" />

                <div>
                  <span className="text-[0.58rem] uppercase tracking-[0.15em] text-kaveri-muted">
                    Password
                  </span>

                  <p className="mt-1 text-sm tracking-[0.25em]">••••••••••••</p>
                </div>
              </div>

              <button type="button" className="kaveri-link">
                Change
                <FiArrowUpRight className="text-base" />
              </button>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="py-28 text-center md:py-40">
          <p className="font-editorial text-2xl italic text-kaveri-muted md:text-3xl">
            A wardrobe, considered.
          </p>

          <div className="mt-8 flex justify-center">
            <button type="button" className="kaveri-button">
              Discover Kaveri
              <FiArrowUpRight className="text-base" />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AccountPage;
