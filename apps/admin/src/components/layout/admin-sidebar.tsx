// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import {
//   FiGrid,
//   FiPackage,
//   FiShoppingBag,
//   FiUsers,
//   FiLayers,
//   FiTag,
//   FiSettings,
//   FiChevronLeft,
//   FiLogOut,
//   FiUser,
// } from "react-icons/fi";

// const navigation = [
//   {
//     label: "Overview",
//     href: "/dashboard",
//     icon: FiGrid,
//   },
//   {
//     label: "Products",
//     href: "/dashboard/products",
//     icon: FiPackage,
//   },
//   {
//     label: "Orders",
//     href: "/dashboard/orders",
//     icon: FiShoppingBag,
//   },
//   {
//     label: "Customers",
//     href: "/dashboard/customers",
//     icon: FiUsers,
//   },
//   {
//     label: "Categories",
//     href: "/dashboard/categories",
//     icon: FiLayers,
//   },
//   {
//     label: "Designers",
//     href: "/dashboard/designers",
//     icon: FiTag,
//   },
// ];

// export default function AdminSidebar() {
//   const pathname = usePathname();
//   const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

//   return (
//     <aside className="flex min-h-screen w-64 shrink-0 flex-col border-r border-border bg-cream">
//       <div className="flex h-20 items-center gap-3 border-b border-border px-6">
//         <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
//           {/* <FiShoppingBag size={20} /> */}
//           <img
//             src="/logo.jpg"
//             alt="logo"
//             className="aspect-square w-full object-cover border border-ink"
//           />
//         </div>
//         <div>
//           <h1 className="text-lg font-semibold tracking-[0.16em] text-ink">
//             KAVERI
//           </h1>
//           <p className="text-xs text-muted">Store administration</p>
//         </div>
//       </div>
//       <nav className="flex-1 space-y-1 px-3 py-6">
//         <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
//           Workspace
//         </p>

//         {navigation.map((item) => {
//           const isActive =
//             pathname === item.href ||
//             (item.href !== "/dashboard" &&
//               pathname.startsWith(`${item.href}/`));

//           const Icon = item.icon;

//           return (
//             <Link
//               key={item.href}
//               href={item.href}
//               aria-current={isActive ? "page" : undefined}
//               className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
//                 isActive
//                   ? "bg-admin-active font-medium text-ink"
//                   : "text-[#625e58] hover:bg-paper hover:text-ink"
//               }`}
//             >
//               <Icon size={18} />
//               {item.label}
//             </Link>
//           );
//         })}
//       </nav>
//       <div className="border-t border-border p-3">
//         {/* <Link
//           href="/dashboard/settings"
//           className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#625e58] transition-colors hover:bg-paper hover:text-ink"
//         >
//           <FiSettings size={18} />
//           Settings
//         </Link> */}

//         {/* <div className="mt-3 flex items-center gap-3 rounded-lg bg-white p-3">
//           <div className="flex h-9 w-9 items-center justify-center rounded-full bg-admin-active text-sm font-semibold text-ink">
//             K
//           </div>

//           <div className="min-w-0 flex-1">
//             <p className="truncate text-sm font-medium text-ink">
//               Kaveri Admin
//             </p>
//             <p className="text-xs text-muted">Store manager</p>
//           </div>

//           <FiChevronLeft className="rotate-180 text-muted" size={16} />
//         </div> */}

//         <div className="relative mt-3">
//           <button
//             type="button"
//             onClick={() => setIsAccountMenuOpen((open) => !open)}
//             aria-expanded={isAccountMenuOpen}
//             className="flex w-full items-center gap-3 rounded-lg bg-white p-3 text-left transition hover:bg-admin-active/50"
//           >
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-admin-active text-sm font-semibold text-ink">
//               K
//             </div>

//             <div className="min-w-0 flex-1">
//               <p className="truncate text-sm font-medium text-ink">
//                 Kaveri Admin
//               </p>
//               <p className="text-xs text-muted">Store manager</p>
//             </div>

//             <FiChevronLeft
//               className={`shrink-0 text-muted transition-transform ${
//                 isAccountMenuOpen ? "rotate-90" : "rotate-180"
//               }`}
//               size={16}
//             />
//           </button>

//           {isAccountMenuOpen && (
//             <div className="absolute bottom-full left-0 right-0 z-50 mb-2 rounded-lg border border-admin-border bg-white p-2 shadow-lg">
//               <Link
//                 href="/dashboard/profile"
//                 onClick={() => setIsAccountMenuOpen(false)}
//                 className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-ink transition hover:bg-admin-active"
//               >
//                 <FiUser size={16} />
//                 Admin profile
//               </Link>

//               <Link
//                 href="/dashboard/settings"
//                 onClick={() => setIsAccountMenuOpen(false)}
//                 className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-ink transition hover:bg-admin-active"
//               >
//                 <FiSettings size={16} />
//                 Settings
//               </Link>

//               <div className="my-1 border-t border-admin-border" />

//               <button
//                 type="button"
//                 onClick={() => {
//                   setIsAccountMenuOpen(false);
//                   // Call your actual authentication sign-out function here.
//                 }}
//                 className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
//               >
//                 <FiLogOut size={16} />
//                 Sign out
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </aside>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FiGrid,
  FiPackage,
  FiShoppingBag,
  FiUsers,
  FiLayers,
  FiTag,
  FiSettings,
  FiChevronLeft,
  FiLogOut,
  FiUser,
} from "react-icons/fi";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// const pathname = usePathname();

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const navigation = [
  {
    label: "Overview",
    href: "/",
    icon: FiGrid,
  },
  {
    label: "Products",
    href: "/dashboard/products",
    icon: FiPackage,
  },
  {
    label: "Orders",
    href: "/dashboard/orders",
    icon: FiShoppingBag,
  },
  {
    label: "Customers",
    href: "/dashboard/customers",
    icon: FiUsers,
  },
  {
    label: "Categories",
    href: "/dashboard/categories",
    icon: FiLayers,
  },
  {
    label: "Designers",
    href: "/dashboard/designers",
    icon: FiTag,
  },
];

const dropDown = [
  {
    lable: "Admin profile",
    icon: FiUser,
  },
  {
    lable: "Settings",
    icon: FiSettings,
  },
  {
    lable: "Sign out",
    icon: FiLogOut,
  },
];

// export default function AdminSidebar() {
//   return (
//     <Sidebar>
//       {/* <SidebarHeader />
//       <SidebarContent>
//         <SidebarGroup />
//         <SidebarGroup />
//       </SidebarContent>
//       <SidebarFooter /> */}

//       <SidebarHeader className="py-4">
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton asChild>
//               <Link href="/">
//                 <Image src="/logo.jpg" alt="logo" width={30} height={30} />
//                 <span>shopORa</span>
//               </Link>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarHeader>
//       <SidebarSeparator />

//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>Application</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {navigation.map((item) => (
//                 <SidebarMenuItem key={item.label}>
//                   <SidebarMenuButton>
//                     <Link href={item.href}>
//                       <item.icon />
//                       <span>{item.label}</span>
//                     </Link>
//                   </SidebarMenuButton>
//                   {item.label === "Inbox" && (
//                     <SidebarMenuBadge>24</SidebarMenuBadge>
//                   )}
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//         <SidebarSeparator />
//       </SidebarContent>

//       <SidebarFooter>
//         <SidebarMenuItem>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <SidebarMenuButton>
//                 {/* <User2 /> */}
//                 John Doe
//                 {/* <ChevronUp className="ml-auto" /> */}
//               </SidebarMenuButton>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem>Account</DropdownMenuItem>
//               <DropdownMenuItem>Setting</DropdownMenuItem>
//               <DropdownMenuItem>Sign out</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </SidebarMenuItem>
//       </SidebarFooter>
//     </Sidebar>
//   );
// }

export default function AdminSidebar() {
  // const [isActive, setIsActive] = useState(true);
  const pathname = usePathname();

  return (
    <Sidebar className="flex-1 bg-cream w-80 border-sand">
      {/* HEADER */}
      <SidebarHeader className="border-b border-sand px-4 py-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Kaveri"
                width={38}
                height={38}
                className="border border-ink object-cover"
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold">KAVERI</p>
                <p className="mt-1 text-xs">Store administration</p>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* CONTAINER */}
      <SidebarContent className="border-b border-sand">
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="py-4 gap-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      className={cn(
                        "h-12  transition-colors duration-300",
                        isActive
                          ? "bg-sand/40"
                          : "bg-transparent hover:bg-sand/50",
                      )}
                    >
                      <Link
                        href={item.href}
                        // className="group flex items-center gap-3 "
                        className={cn(
                          "flex h-full w-full items-center gap-3 [&:hover>svg]:text-clay",
                          isActive && "[&_svg]:text-clay",
                        )}
                      >
                        <item.icon className="transition-colors duration-300" />
                        {/* <item.icon className="transition-colors duration-300 group-hover/item:text-clay" /> */}
                        <span
                          className={cn(
                            "transition-transform duration-300 hover:scale-105",
                            isActive && "scale-105",
                          )}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<SidebarMenuButton />}
                className="min-h-15 cursor-pointer"
              >
                <div className="flex size-9 shrink-0 items-center justify-center border border-ink/20 text-sm font-medium">
                  KV
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-sm font-medium">Kaveri Admin</p>
                  <p className="mt-0.5 text-xs">Store manager</p>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-cream">
                {dropDown.map((item) => (
                  <DropdownMenuItem
                    key={item.lable}
                    className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm transition hover:bg-sand"
                  >
                    <item.icon />
                    <p>{item.lable}</p>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
