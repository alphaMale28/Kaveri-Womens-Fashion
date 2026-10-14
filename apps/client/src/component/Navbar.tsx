"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiChevronDown,
  FiHeart,
  FiLogIn,
  FiLogOut,
  FiMenu,
  FiPackage,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiUserPlus,
  FiX,
} from "react-icons/fi";

import { useCartStore } from "@/store/cartStore";
import SearchOverlay from "./SearchOverlay";
import Image from "next/image";

const navigation = [
  { label: "New In", href: "/shop?sort=newest" },
  { label: "Sarees", href: "/shop?category=Sarees" },
  { label: "Lehengas", href: "/shop?category=Lehengas" },
  { label: "Kurtis", href: "/shop?category=Kurtis" },
  { label: "Dresses", href: "/shop?category=Dresses" },
  { label: "Designers", href: "/shop?category=Designers" },
];
const navigations = [
  { label: "New In", href: "/shop?sort=newest" },
  { label: "Shop", href: "/shop?category=Sarees" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const shopCategories = [
  "Sarees",
  "Lehengas",
  "Kurtis",
  "Dresses",
  "Tops",
  "Bottoms",
  "Jumpsuits",
  "Outerwear",
  "Designers",
];

const accountMenuItems = [
  {
    label: "My Account",
    icon: FiUser,
    href: "/account",
    auth: true,
  },
  {
    label: "Orders",
    icon: FiPackage,
    href: "/account/orders/${order.id}",
    // href: "/account/orders",
    auth: true,
  },
  {
    label: "Wishlist",
    icon: FiHeart,
    href: "/wishlist",
    auth: true,
  },
  {
    label: "Log out",
    icon: FiLogOut,
    href: "/",
    auth: true,
  },
  {
    label: "Log in",
    icon: FiLogIn,
    href: "/login",
    auth: false,
  },
  {
    label: "Register",
    icon: FiUserPlus,
    href: "/register",
    auth: false,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [auth, setAuth] = useState(true);
  const [accountMenu, setAccoutnMenu] = useState(false);

  const totalItems = useCartStore((state) => state.totalItems());
  const hasHydrated = useCartStore((state) => state.hasHydrated);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openSearch = () => {
    setMenuOpen(false);
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };
  return (
    <>
      <header className="relative z-50 border-b border-black/10 bg-kaveri-cream">
        <div className="kaveri-container">
          <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center">
            {/* MOBILE MENU */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((open) => !open)}
                className="flex h-10 w-10 text-xl"
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex  gap-7">
              {navigations.map((item, index) =>
                item.label === "Shop" ? (
                  <div
                    key={index}
                    className="group flrx items-center relative py-2 tracking-[0.14em]"
                  >
                    <button
                      type="button"
                      onClick={() => setShopOpen(!shopOpen)}
                      className="flex items-center gap-1.5"
                      aria-expanded={shopOpen}
                    >
                      <p className="text-[11px] font-semibold uppercase">
                        {item.label}
                        <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-kaveri-clay transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                      </p>
                      <FiChevronDown
                        className={`text-sm transition-transform duration-200 ${
                          shopOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {shopOpen && (
                      <div className="absolute left-0 top-full w-[520px] border border-black/10 bg-kaveri-cream p-7">
                        <div className="grid grid-cols-3 gap-x-8 gap-y-5">
                          {shopCategories.map((item, index) => (
                            <Link
                              key={index}
                              href={`/shop?category=${encodeURIComponent(item)}`}
                              onClick={() => setShopOpen(false)}
                              className="text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-kaveri-clay"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    className="group relative py-2 text-[10px] font-semibold uppercase tracking-[0.14em]"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-kaveri-clay transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                  </Link>
                ),
              )}
            </nav>
            {/* LOGO */}
            <Link
              href="/"
              aria-label="Kaveri home"
              className="justify-self-center text-[24px] font-semibold tracking-[0.32em]"
            >
              KAVERI
            </Link>
            {/* ACTIONS */}
            <div className="flex items-center justify-end gap-1 sm:gap-2">
              <button
                type="button"
                aria-label="Search"
                onClick={openSearch}
                className="flex h-10 w-10 items-center justify-center text-[19px] transition-colors hover:text-kaveri-clay"
              >
                <FiSearch />
              </button>

              {/* <button
                type="button"
                aria-label="Wishlist"
                className="hidden h-10 w-10 items-center justify-center text-[18px] transition-colors hover:text-kaveri-clay sm:flex"
              >
                <FiHeart />
              </button> */}
              {auth ? (
                <div className="group relative py-2 tracking-[0.14em">
                  <button
                    onClick={() => setAccoutnMenu(!accountMenu)}
                    aria-expanded={accountMenu}
                    className="group flex items-center gap-3 "
                  >
                    <div className="relative overflow-hidden border border-kaveri-clay size-10 flex items-center justify-center rounded-full group-hover:border-kaveri-muted">
                      <Image
                        src="https://images.pexels.com/photos/9075628/pexels-photo-9075628.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Profile-Pic"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <p className="text-[11px] transition-color group-hover:text-kaveri-clay transition-transform duration-300 group-hover:scale-105">
                      Vivian Rhodes
                    </p>
                  </button>

                  {accountMenu && (
                    <div className="absolute left-0 top-full w-[200px] border border-black/10 bg-kaveri-cream py-4">
                      <div className="flex flex-col">
                        {accountMenuItems
                          .filter((item) => item.auth === true)
                          .map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="group/item flex items-center text-[11px] gap-1.5 hover:bg-kaveri-muted/10 px-8 py-4"
                                onClick={() => setAccoutnMenu(false)}
                              >
                                <p>{item.label}</p>
                                <Icon className="group-hover/item:text-kaveri-clay" />
                              </Link>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="group flex items-center relative py-2 tracking-[0.14em]">
                  <button
                    className="transition-colors hover:text-kaveri-clay"
                    onClick={() => setAccoutnMenu(!accountMenu)}
                    aria-expanded={accountMenu}
                  >
                    <FiUser className="text-[18px]" />
                  </button>
                  {accountMenu && (
                    <div className="absolute left-0 top-full w-[200px] border border-black/10 bg-kaveri-cream py-4">
                      <div className="flex flex-col">
                        {accountMenuItems
                          .filter((item) => item.auth === false)
                          .map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="group/item flex items-center text-[11px] gap-1.5 hover:bg-kaveri-muted/10 px-8 py-4"
                                onClick={() => setAccoutnMenu(false)}
                              >
                                <p>{item.label}</p>
                                <Icon className="group-hover/item:text-kaveri-clay" />
                              </Link>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {/* <Link
                href="/account"
                className="transition-colors hover:text-kaveri-clay"
                aria-label="Account"
              ></Link> */}

              <Link
                href="/cart"
                // aria-label={`Shopping bag with ${totalItems} items`}
                aria-label={
                  hasHydrated
                    ? `Shopping bag with ${totalItems} items`
                    : "Shopping bag"
                }
                className="group relative flex h-10 w-10 items-center justify-center text-[19px] "
              >
                <FiShoppingBag className="transition-colors group-hover:text-kaveri-clay" />
                {/*
                {totalItems > 0 && (
                  <span className="absolute right-0 top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-kaveri-ink px-1 text-[7px] font-semibold text-white">
                    {totalItems}
                  </span>
                )} */}

                {hasHydrated && totalItems > 0 && (
                  <span className="absolute right-0 top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-kaveri-clay px-1 text-[9px] font-semibold text-white">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
          {/* SECOND DESKTOP NAV */}
          {/* <nav className="hidden h-10 items-center justify-center gap-9 border-t border-black/5 lg:flex">
            {navigation.slice(3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative py-2 text-[10px] font-semibold uppercase tracking-[0.14em]"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-kaveri-ink transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav> */}
        </div>
        {/* MOBILE MENU */}
        <div
          className={`absolute left-0 top-full w-full border-b border-black/10 bg-kaveri-cream transition-all duration-300 lg:hidden ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <nav className="kaveri-container flex flex-col py-6">
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-black/8 py-4 text-sm font-medium uppercase tracking-[0.1em]"
              >
                <span>{item.label}</span>
                <span className="text-kaveri-muted">0{index + 1}</span>
              </Link>
            ))}

            <Link
              href="/about"
              onClick={closeMenu}
              className="border-b border-black/8 py-4 text-sm font-medium uppercase tracking-[0.1em]"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="py-4 text-sm font-medium uppercase tracking-[0.1em]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <SearchOverlay isOpen={searchOpen} onClose={closeSearch} />
    </>
  );
};

export default Navbar;

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { FiHeart, FiMenu, FiSearch, FiShoppingBag, FiX } from "react-icons/fi";

// // import SearchOverlay from "@/components/search/SearchOverlay";
// import { useCartStore } from "@/store/cartStore";
// import { useWishlistStore } from "@/store/wishlistStore";
// import SearchOverlay from "./SearchOverlay";

// const navigation = [
//   { label: "New In", href: "/shop?sort=newest" },
//   { label: "Sarees", href: "/shop?category=Sarees" },
//   { label: "Lehengas", href: "/shop?category=Lehengas" },
//   { label: "Kurtis", href: "/shop?category=Kurtis" },
//   { label: "Dresses", href: "/shop?category=Dresses" },
//   { label: "Designers", href: "/shop?category=Designers" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);

//   const totalItems = useCartStore((state) => state.totalItems());

//   const wishlistCount = useWishlistStore((state) => state.items.length);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const openSearch = () => {
//     setMenuOpen(false);
//     setSearchOpen(true);
//   };

//   const closeSearch = () => {
//     setSearchOpen(false);
//   };

//   return (
//     <>
//       <header className="relative z-50 border-b border-black/10 bg-kaveri-cream">
//         <div className="kaveri-container">
//           <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center">
//             <div className="flex items-center lg:hidden">
//               <button
//                 type="button"
//                 aria-label={menuOpen ? "Close menu" : "Open menu"}
//                 onClick={() => setMenuOpen((open) => !open)}
//                 className="flex h-10 w-10 items-center justify-start text-xl"
//               >
//                 {menuOpen ? <FiX /> : <FiMenu />}
//               </button>
//             </div>

//             <nav className="hidden items-center gap-7 lg:flex">
//               {navigation.slice(0, 3).map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="group relative py-2 text-[10px] font-semibold uppercase tracking-[0.14em]"
//                 >
//                   {item.label}

//                   <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-kaveri-ink transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
//                 </Link>
//               ))}
//             </nav>

//             <Link
//               href="/"
//               aria-label="Kaveri home"
//               className="justify-self-center text-[24px] font-semibold tracking-[0.32em]"
//             >
//               KAVERI
//             </Link>

//             <div className="flex items-center justify-end gap-1 sm:gap-2">
//               <button
//                 type="button"
//                 aria-label="Search"
//                 onClick={openSearch}
//                 className="flex h-10 w-10 items-center justify-center text-[19px] transition-colors hover:text-kaveri-clay"
//               >
//                 <FiSearch />
//               </button>

//               <Link
//                 href="/wishlist"
//                 aria-label={`Wishlist with ${wishlistCount} saved ${
//                   wishlistCount === 1 ? "piece" : "pieces"
//                 }`}
//                 className="relative hidden h-10 w-10 items-center justify-center text-[18px] transition-colors hover:text-kaveri-clay sm:flex"
//               >
//                 <FiHeart className={wishlistCount > 0 ? "fill-current" : ""} />

//                 {wishlistCount > 0 && (
//                   <span className="absolute right-0 top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-kaveri-ink px-1 text-[7px] font-semibold text-white">
//                     {wishlistCount}
//                   </span>
//                 )}
//               </Link>

//               <Link
//                 href="/cart"
//                 aria-label={`Shopping bag with ${totalItems} items`}
//                 className="relative flex h-10 w-10 items-center justify-center text-[19px] transition-colors hover:text-kaveri-clay"
//               >
//                 <FiShoppingBag />

//                 {totalItems > 0 && (
//                   <span className="absolute right-0 top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-kaveri-ink px-1 text-[7px] font-semibold text-white">
//                     {totalItems}
//                   </span>
//                 )}
//               </Link>
//             </div>
//           </div>

//           <nav className="hidden h-10 items-center justify-center gap-9 border-t border-black/5 lg:flex">
//             {navigation.slice(3).map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="group relative py-2 text-[10px] font-semibold uppercase tracking-[0.14em]"
//               >
//                 {item.label}

//                 <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-kaveri-ink transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
//               </Link>
//             ))}
//           </nav>
//         </div>

//         <div
//           className={`absolute left-0 top-full w-full border-b border-black/10 bg-kaveri-cream transition-all duration-300 lg:hidden ${
//             menuOpen
//               ? "visible translate-y-0 opacity-100"
//               : "invisible -translate-y-2 opacity-0"
//           }`}
//         >
//           <nav className="kaveri-container flex flex-col py-6">
//             {navigation.map((item, index) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 onClick={closeMenu}
//                 className="flex items-center justify-between border-b border-black/8 py-4 text-sm font-medium uppercase tracking-[0.1em]"
//               >
//                 <span>{item.label}</span>

//                 <span className="text-kaveri-muted">0{index + 1}</span>
//               </Link>
//             ))}

//             <Link
//               href="/about"
//               onClick={closeMenu}
//               className="border-b border-black/8 py-4 text-sm font-medium uppercase tracking-[0.1em]"
//             >
//               About
//             </Link>

//             <Link
//               href="/contact"
//               onClick={closeMenu}
//               className="py-4 text-sm font-medium uppercase tracking-[0.1em]"
//             >
//               Contact
//             </Link>

//             <Link
//               href="/wishlist"
//               onClick={closeMenu}
//               className="flex items-center justify-between border-t border-black/10 py-4 text-sm font-medium uppercase tracking-[0.1em]"
//             >
//               <span>Wishlist</span>

//               {wishlistCount > 0 && (
//                 <span className="text-kaveri-muted">{wishlistCount}</span>
//               )}
//             </Link>
//           </nav>
//         </div>
//       </header>

//       <SearchOverlay isOpen={searchOpen} onClose={closeSearch} />
//     </>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import {
//   FiChevronDown,
//   FiHeart,
//   FiMenu,
//   FiSearch,
//   FiShoppingBag,
//   FiUser,
//   FiX,
// } from "react-icons/fi";

// import { useWishlistStore } from "@/store/wishlistStore";

// const clothingCategories = [
//   "Sarees",
//   "Lehengas",
//   "Kurtis",
//   "Dresses",
//   "Tops",
//   "Bottoms",
//   "Jumpsuits",
//   "Outerwear",
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [collectionsOpen, setCollectionsOpen] = useState(false);
//   const [accountOpen, setAccountOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);

//   const wishlistCount = useWishlistStore((state) => state.items.length);

//   const closeMobileMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header className="relative z-50 border-b border-black/10 bg-kaveri-cream">
//       <div className="kaveri-container">
//         <div className="flex h-20 items-center justify-between gap-8">
//           <Link
//             href="/"
//             onClick={closeMobileMenu}
//             className="shrink-0 font-editorial text-3xl tracking-[-0.04em]"
//             aria-label="Kaveri home"
//           >
//             Kaveri
//           </Link>

//           <nav className="hidden items-center gap-8 lg:flex">
//             <Link
//               href="/new-in"
//               className="text-[10px] font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-55"
//             >
//               New In
//             </Link>

//             <div
//               className="relative"
//               onMouseEnter={() => setCollectionsOpen(true)}
//               onMouseLeave={() => setCollectionsOpen(false)}
//             >
//               <button
//                 type="button"
//                 onClick={() => setCollectionsOpen((open) => !open)}
//                 className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-55"
//                 aria-expanded={collectionsOpen}
//               >
//                 Collections
//                 <FiChevronDown
//                   className={`transition-transform duration-200 ${
//                     collectionsOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {collectionsOpen && (
//                 <div className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 border-t border-black/10 bg-kaveri-cream px-10 py-8">
//                   <div className="grid grid-cols-2 gap-12">
//                     <div>
//                       <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
//                         Clothing
//                       </p>

//                       <div className="mt-5 grid grid-cols-2 gap-y-3">
//                         {clothingCategories.map((category) => (
//                           <Link
//                             key={category}
//                             href={`/shop?category=${encodeURIComponent(category)}`}
//                             onClick={() => setCollectionsOpen(false)}
//                             className="w-fit text-sm transition-opacity hover:opacity-55"
//                           >
//                             {category}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>

//                     <div>
//                       <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
//                         Discover
//                       </p>

//                       <div className="mt-5 flex flex-col gap-3">
//                         <Link
//                           href="/new-in"
//                           onClick={() => setCollectionsOpen(false)}
//                           className="w-fit text-sm transition-opacity hover:opacity-55"
//                         >
//                           New In
//                         </Link>

//                         <Link
//                           href="/shop?collection=best-sellers"
//                           onClick={() => setCollectionsOpen(false)}
//                           className="w-fit text-sm transition-opacity hover:opacity-55"
//                         >
//                           Best Sellers
//                         </Link>

//                         <Link
//                           href="/shop?collection=occasion"
//                           onClick={() => setCollectionsOpen(false)}
//                           className="w-fit text-sm transition-opacity hover:opacity-55"
//                         >
//                           Occasion Edit
//                         </Link>

//                         <Link
//                           href="/shop?collection=everyday"
//                           onClick={() => setCollectionsOpen(false)}
//                           className="w-fit text-sm transition-opacity hover:opacity-55"
//                         >
//                           Everyday Edit
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/designers"
//               className="text-[10px] font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-55"
//             >
//               Designers
//             </Link>

//             <Link
//               href="/about"
//               className="text-[10px] font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-55"
//             >
//               About
//             </Link>

//             <Link
//               href="/contact"
//               className="text-[10px] font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-55"
//             >
//               Contact
//             </Link>
//           </nav>

//           <div className="hidden items-center gap-5 lg:flex">
//             <button
//               type="button"
//               onClick={() => setSearchOpen(true)}
//               className="transition-opacity hover:opacity-55"
//               aria-label="Search"
//             >
//               <FiSearch size={17} strokeWidth={1.5} />
//             </button>

//             <Link
//               href="/wishlist"
//               className="relative transition-opacity hover:opacity-55"
//               aria-label={`Wishlist${wishlistCount ? `, ${wishlistCount} items` : ""}`}
//             >
//               <FiHeart size={17} strokeWidth={1.5} />

//               {wishlistCount > 0 && (
//                 <span className="absolute -right-3 -top-2 text-[8px] font-semibold">
//                   {wishlistCount}
//                 </span>
//               )}
//             </Link>

//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => setAccountOpen((open) => !open)}
//                 className="transition-opacity hover:opacity-55"
//                 aria-label="Account"
//                 aria-expanded={accountOpen}
//               >
//                 <FiUser size={17} strokeWidth={1.5} />
//               </button>

//               {accountOpen && (
//                 <div className="absolute right-0 top-[calc(100%+1.5rem)] w-52 border border-black/10 bg-kaveri-cream px-6 py-6">
//                   <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-kaveri-muted">
//                     Account
//                   </p>

//                   <div className="mt-5 flex flex-col gap-4">
//                     <Link
//                       href="/login"
//                       onClick={() => setAccountOpen(false)}
//                       className="text-sm transition-opacity hover:opacity-55"
//                     >
//                       Sign in
//                     </Link>

//                     <Link
//                       href="/register"
//                       onClick={() => setAccountOpen(false)}
//                       className="text-sm transition-opacity hover:opacity-55"
//                     >
//                       Create account
//                     </Link>

//                     <Link
//                       href="/account/orders"
//                       onClick={() => setAccountOpen(false)}
//                       className="text-sm transition-opacity hover:opacity-55"
//                     >
//                       My Orders
//                     </Link>

//                     <Link
//                       href="/account/settings"
//                       onClick={() => setAccountOpen(false)}
//                       className="text-sm transition-opacity hover:opacity-55"
//                     >
//                       Account Settings
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/cart"
//               className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-55"
//             >
//               <FiShoppingBag size={17} strokeWidth={1.5} />
//               Bag
//             </Link>
//           </div>

//           <div className="flex items-center gap-4 lg:hidden">
//             <Link href="/wishlist" className="relative" aria-label="Wishlist">
//               <FiHeart size={19} strokeWidth={1.5} />

//               {wishlistCount > 0 && (
//                 <span className="absolute -right-3 -top-2 text-[8px] font-semibold">
//                   {wishlistCount}
//                 </span>
//               )}
//             </Link>

//             <Link href="/cart" aria-label="Shopping bag">
//               <FiShoppingBag size={19} strokeWidth={1.5} />
//             </Link>

//             <button
//               type="button"
//               onClick={() => setMenuOpen((open) => !open)}
//               aria-label={menuOpen ? "Close menu" : "Open menu"}
//               aria-expanded={menuOpen}
//             >
//               {menuOpen ? (
//                 <FiX size={21} strokeWidth={1.5} />
//               ) : (
//                 <FiMenu size={21} strokeWidth={1.5} />
//               )}
//             </button>
//           </div>
//         </div>

//         {menuOpen && (
//           <div className="border-t border-black/10 py-8 lg:hidden">
//             <nav className="flex flex-col">
//               <Link
//                 href="/new-in"
//                 onClick={closeMobileMenu}
//                 className="border-b border-black/10 py-4 font-editorial text-3xl"
//               >
//                 New In
//               </Link>

//               <div className="border-b border-black/10 py-4">
//                 <button
//                   type="button"
//                   onClick={() => setCollectionsOpen((open) => !open)}
//                   className="flex w-full items-center justify-between font-editorial text-3xl"
//                 >
//                   Collections
//                   <FiChevronDown
//                     className={`transition-transform duration-200 ${
//                       collectionsOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {collectionsOpen && (
//                   <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 pl-1">
//                     {clothingCategories.map((category) => (
//                       <Link
//                         key={category}
//                         href={`/shop?category=${encodeURIComponent(category)}`}
//                         onClick={closeMobileMenu}
//                         className="text-sm"
//                       >
//                         {category}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/designers"
//                 onClick={closeMobileMenu}
//                 className="border-b border-black/10 py-4 font-editorial text-3xl"
//               >
//                 Designers
//               </Link>

//               <Link
//                 href="/about"
//                 onClick={closeMobileMenu}
//                 className="border-b border-black/10 py-4 font-editorial text-3xl"
//               >
//                 About
//               </Link>

//               <Link
//                 href="/contact"
//                 onClick={closeMobileMenu}
//                 className="border-b border-black/10 py-4 font-editorial text-3xl"
//               >
//                 Contact
//               </Link>

//               <div className="mt-8 flex flex-col gap-4">
//                 <Link
//                   href="/login"
//                   onClick={closeMobileMenu}
//                   className="text-[10px] font-semibold uppercase tracking-[0.14em]"
//                 >
//                   Account
//                 </Link>

//                 <Link
//                   href="/account/orders"
//                   onClick={closeMobileMenu}
//                   className="text-[10px] font-semibold uppercase tracking-[0.14em]"
//                 >
//                   Orders
//                 </Link>

//                 <Link
//                   href="/wishlist"
//                   onClick={closeMobileMenu}
//                   className="text-[10px] font-semibold uppercase tracking-[0.14em]"
//                 >
//                   Wishlist
//                   {wishlistCount > 0 && ` (${wishlistCount})`}
//                 </Link>

//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchOpen(true);
//                     closeMobileMenu();
//                   }}
//                   className="w-fit text-[10px] font-semibold uppercase tracking-[0.14em]"
//                 >
//                   Search
//                 </button>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>

//       {searchOpen && (
//         <div className="fixed inset-0 z-[100] bg-kaveri-cream">
//           <div className="kaveri-container">
//             <div className="flex h-20 items-center justify-between border-b border-black/10">
//               <p className="font-editorial text-3xl">Search Kaveri</p>

//               <button
//                 type="button"
//                 onClick={() => setSearchOpen(false)}
//                 aria-label="Close search"
//               >
//                 <FiX size={22} strokeWidth={1.5} />
//               </button>
//             </div>

//             <div className="mx-auto max-w-3xl py-20">
//               <div className="border-b border-black/20">
//                 <input
//                   autoFocus
//                   type="search"
//                   placeholder="Search sarees, dresses, designers..."
//                   className="h-16 w-full bg-transparent text-2xl outline-none placeholder:text-kaveri-muted/60"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   FiChevronDown,
//   FiHeart,
//   FiMenu,
//   FiSearch,
//   FiShoppingBag,
//   FiUser,
//   FiX,
// } from "react-icons/fi";

// const shopCategories = [
//   "Sarees",
//   "Lehengas",
//   "Kurtis",
//   "Dresses",
//   "Tops",
//   "Bottoms",
//   "Jumpsuits",
//   "Outerwear",
//   "Designers",
// ];

// export default function Navbar() {
//   const [shopOpen, setShopOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);

//   return (
//     <>
//       <header className="relative z-50 border-b border-black/10 bg-kaveri-cream">
//         <div className="kaveri-container">
//           <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center">
//             <nav className="hidden items-center gap-7 lg:flex">
//               <Link
//                 href="/new-in"
//                 className="text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-kaveri-clay"
//               >
//                 New In
//               </Link>

//               <div className="relative">
//                 <button
//                   type="button"
//                   onClick={() => setShopOpen((open) => !open)}
//                   className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-kaveri-clay"
//                   aria-expanded={shopOpen}
//                 >
//                   Shop
//                   <FiChevronDown
//                     className={`text-sm transition-transform duration-200 ${
//                       shopOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {shopOpen && (
//                   <div className="absolute left-0 top-full mt-5 w-[520px] border border-black/10 bg-kaveri-cream p-7">
//                     <div className="grid grid-cols-3 gap-x-8 gap-y-5">
//                       {shopCategories.map((category) => (
//                         <Link
//                           key={category}
//                           href={`/shop?category=${encodeURIComponent(category)}`}
//                           onClick={() => setShopOpen(false)}
//                           className="text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-kaveri-clay"
//                         >
//                           {category}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/contact"
//                 className="text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-kaveri-clay"
//               >
//                 Contact
//               </Link>

//               <Link
//                 href="/about"
//                 className="text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-kaveri-clay"
//               >
//                 About
//               </Link>
//             </nav>

//             <Link
//               href="/"
//               className="justify-self-center font-editorial text-[2rem] leading-none tracking-[-0.04em]"
//             >
//               Kaveri
//             </Link>

//             <div className="ml-auto hidden items-center gap-5 lg:flex">
//               <button
//                 type="button"
//                 onClick={() => setSearchOpen(true)}
//                 className="transition-colors hover:text-kaveri-clay"
//                 aria-label="Search"
//               >
//                 <FiSearch className="text-[18px]" />
//               </button>

//               <Link
//                 href="/wishlist"
//                 className="transition-colors hover:text-kaveri-clay"
//                 aria-label="Wishlist"
//               >
//                 <FiHeart className="text-[18px]" />
//               </Link>

//               <Link
//                 href="/account"
//                 className="transition-colors hover:text-kaveri-clay"
//                 aria-label="Account"
//               >
//                 <FiUser className="text-[18px]" />
//               </Link>

//               <Link
//                 href="/cart"
//                 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-kaveri-clay"
//               >
//                 <FiShoppingBag className="text-[17px]" />
//                 <span>Bag 0</span>
//               </Link>
//             </div>

//             <div className="col-span-1 flex items-center justify-self-end gap-4 lg:hidden">
//               <Link
//                 href="/wishlist"
//                 aria-label="Wishlist"
//                 className="transition-colors hover:text-kaveri-clay"
//               >
//                 <FiHeart className="text-[18px]" />
//               </Link>

//               <Link
//                 href="/cart"
//                 aria-label="Shopping bag"
//                 className="transition-colors hover:text-kaveri-clay"
//               >
//                 <FiShoppingBag className="text-[18px]" />
//               </Link>

//               <button
//                 type="button"
//                 onClick={() => setMobileOpen((open) => !open)}
//                 aria-label={mobileOpen ? "Close menu" : "Open menu"}
//                 className="transition-colors hover:text-kaveri-clay"
//               >
//                 {mobileOpen ? (
//                   <FiX className="text-[20px]" />
//                 ) : (
//                   <FiMenu className="text-[20px]" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {mobileOpen && (
//           <div className="border-t border-black/10 bg-kaveri-cream lg:hidden">
//             <nav className="kaveri-container flex flex-col py-6">
//               <Link
//                 href="/new-in"
//                 onClick={() => setMobileOpen(false)}
//                 className="border-b border-black/10 py-4 text-[11px] font-semibold uppercase tracking-[0.14em]"
//               >
//                 New In
//               </Link>

//               <div className="border-b border-black/10 py-4">
//                 <button
//                   type="button"
//                   onClick={() => setShopOpen((open) => !open)}
//                   className="flex w-full items-center justify-between text-[11px] font-semibold uppercase tracking-[0.14em]"
//                 >
//                   Shop
//                   <FiChevronDown
//                     className={`transition-transform ${
//                       shopOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {shopOpen && (
//                   <div className="mt-5 grid grid-cols-2 gap-y-4 pl-3">
//                     {shopCategories.map((category) => (
//                       <Link
//                         key={category}
//                         href={`/shop?category=${encodeURIComponent(category)}`}
//                         onClick={() => {
//                           setShopOpen(false);
//                           setMobileOpen(false);
//                         }}
//                         className="text-[10px] font-medium uppercase tracking-[0.12em] text-kaveri-muted"
//                       >
//                         {category}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/contact"
//                 onClick={() => setMobileOpen(false)}
//                 className="border-b border-black/10 py-4 text-[11px] font-semibold uppercase tracking-[0.14em]"
//               >
//                 Contact
//               </Link>

//               <Link
//                 href="/about"
//                 onClick={() => setMobileOpen(false)}
//                 className="border-b border-black/10 py-4 text-[11px] font-semibold uppercase tracking-[0.14em]"
//               >
//                 About
//               </Link>

//               <Link
//                 href="/account"
//                 onClick={() => setMobileOpen(false)}
//                 className="border-b border-black/10 py-4 text-[11px] font-semibold uppercase tracking-[0.14em]"
//               >
//                 Account
//               </Link>

//               <Link
//                 href="/orders"
//                 onClick={() => setMobileOpen(false)}
//                 className="border-b border-black/10 py-4 text-[11px] font-semibold uppercase tracking-[0.14em]"
//               >
//                 Orders
//               </Link>

//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchOpen(true);
//                   setMobileOpen(false);
//                 }}
//                 className="py-4 text-left text-[11px] font-semibold uppercase tracking-[0.14em]"
//               >
//                 Search
//               </button>
//             </nav>
//           </div>
//         )}
//       </header>

//       {searchOpen && (
//         <div className="fixed inset-0 z-[100] bg-kaveri-cream">
//           <div className="kaveri-container">
//             <div className="flex h-20 items-center justify-between border-b border-black/10">
//               <span className="font-editorial text-2xl">Search Kaveri</span>

//               <button
//                 type="button"
//                 onClick={() => setSearchOpen(false)}
//                 aria-label="Close search"
//                 className="transition-colors hover:text-kaveri-clay"
//               >
//                 <FiX className="text-xl" />
//               </button>
//             </div>

//             <div className="mx-auto max-w-3xl pt-20">
//               <div className="flex items-center border-b border-black/20 pb-4">
//                 <FiSearch className="mr-4 text-xl text-kaveri-muted" />

//                 <input
//                   type="text"
//                   autoFocus
//                   placeholder="Search for sarees, dresses, kurtis..."
//                   className="w-full bg-transparent text-lg outline-none placeholder:text-kaveri-muted"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
