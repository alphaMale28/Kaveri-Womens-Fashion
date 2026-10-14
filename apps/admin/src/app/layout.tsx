import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import AdminSidebar from "@/components/layout/admin-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Kaveri Admin",
  description: "Kaveri store administration dashboard",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white md:flex">
          <SidebarProvider>
            <AdminSidebar />

            {/* <main className="bg-amber-300 "> */}
            <main className="min-w-0 flex-1">
              {/* <div className=""> */}
              <div className="mx-auto w-full max-w-[1600px] p-5 sm:p-8">
                {children}
              </div>
            </main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
