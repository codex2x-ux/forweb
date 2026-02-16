import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
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
        <Navbar />

<main className="pt-16">
  <WhatsAppButton />
  {children}
</main>

<footer className="border-t mt-20 py-8 text-center text-sm text-gray-500">
  © {new Date().getFullYear()} VRM IT Services | New Delhi
</footer>

      </body>
    </html>
  );
}
