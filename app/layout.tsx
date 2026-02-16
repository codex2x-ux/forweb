import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "VRM IT Services",
  description: "Professional IT solutions for home & business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 selection:bg-neutral-700 selection:text-white">
        <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-xl">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div className="text-xl font-semibold tracking-wide">
      VRM IT Services
    </div>
    <div className="flex gap-8 text-sm text-neutral-300">
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </div>
</nav>
      <WhatsAppButton />

    

        {children}

        <footer className="border-t mt-20 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} VRM IT Services | New Delhi
        </footer>
      </body>
    </html>
  );
}

