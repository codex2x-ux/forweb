"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full border-b border-neutral-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-xl md:text-2xl font-semibold text-white">
          VRM IT
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-neutral-300">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 text-neutral-300 bg-black">
          <Link href="/" className="block">Home</Link>
          <Link href="/services" className="block">Services</Link>
          <Link href="/pricing" className="block">Pricing</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}
