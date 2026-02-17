"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-neutral-950 text-neutral-100 overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        {/* ===== Layer 1: Soft Radial Glow ===== */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.12),transparent_40%)]" />

        {/* ===== Layer 2: Subtle Grid Texture ===== */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* ===== Content ===== */}
        <div className="relative max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Professional IT Solutions for
            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h1>

          <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-10">
            Computer repair, networking, CCTV installation and security systems —
            delivered with reliability and precision.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">

            <Link href="/services">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r 
                                 from-blue-600 to-purple-600 
                                 hover:opacity-90 transition font-medium">
                View Services →
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-8 py-4 rounded-full border 
                                 border-neutral-700 hover:border-blue-500 
                                 transition">
                Get in Touch
              </button>
            </Link>

          </div>

        </div>
      </section>


      {/* ================= TRUST SECTION ================= */}
      <section className="py-24 px-6 border-t border-neutral-800">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">

          <div className="space-y-3">
            <h3 className="text-3xl font-semibold text-blue-500">10+</h3>
            <p className="text-neutral-400">Years Experience</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl font-semibold text-purple-500">500+</h3>
            <p className="text-neutral-400">Projects Completed</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl font-semibold text-emerald-500">24/7</h3>
            <p className="text-neutral-400">Support Available</p>
          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6 text-center border-t border-neutral-800">

        <h2 className="text-3xl font-semibold mb-6">
          Secure Your Business Infrastructure Today
        </h2>

        <Link href="/pricing">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r 
                             from-blue-600 to-purple-600 
                             hover:opacity-90 transition font-medium">
            Explore Pricing →
          </button>
        </Link>

      </section>

    </main>
  );
}

