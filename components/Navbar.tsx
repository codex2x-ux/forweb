"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 
w-[90%] max-w-5xl rounded-xl 
bg-white/70 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-semibold tracking-wide">
          <span className="text-white">VRM</span>
          <span className="text-neutral-400 ml-1">IT</span>
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-neutral-400 text-sm">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-300 hover:text-white transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-5 text-neutral-300 bg-neutral-950 border-t border-neutral-800">
          <Link href="/" className="block hover:text-white transition">Home</Link>
          <Link href="/services" className="block hover:text-white transition">Services</Link>
          <Link href="/pricing" className="block hover:text-white transition">Pricing</Link>
          <Link href="/contact" className="block hover:text-white transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}
