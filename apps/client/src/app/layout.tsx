import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/component/Navbar";
import { Toaster } from "sonner";
import Footer from "@/component/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kaveri — Women's Fashion",
  description: "Contemporary women's fashion rooted in timeless style.",
  icons: {
    icon: "/logo.jpg",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {/* <Toaster position="top-right" /> */}
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
