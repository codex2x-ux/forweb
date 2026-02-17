"use client";

import { Check } from "lucide-react";
import Link from "next/link";
export default function PricingPage() {
  return (
    <main className="pt-20 bg-neutral-950 text-neutral-100">

      {/* ================= HERO ================= */}
      <section className="relative py-28 px-6 text-center overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent blur-3xl" />

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            Transparent & Flexible <span className="text-blue-500">Pricing</span>
          </h1>

          <p className="text-neutral-400 text-lg">
            Professional IT services tailored for homes and businesses.
          </p>
        </div>
      </section>


      {/* ================= PRICING CARDS ================= */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {/* ===== BASIC ===== */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 
           rounded-3xl p-10 
           transition-all duration-500 ease-out
           hover:-translate-y-3 hover:scale-[1.02]
           hover:border-blue-500/50
           hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]">


            <h3 className="text-xl font-semibold mb-4">Basic Support</h3>

            <p className="text-4xl font-bold mb-6">
              ₹999 <span className="text-sm text-neutral-400 font-normal">/ visit</span>
            </p>

            <ul className="space-y-4 text-neutral-300 text-sm mb-8">
              <li className="flex items-center gap-3">
                <Check size={16} className="text-blue-500" />
                Computer troubleshooting
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-blue-500" />
                Software installation
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-blue-500" />
                Virus removal
              </li>
            </ul>

            <Link href="/contact">
  <button className="w-full bg-neutral-900 border border-neutral-700 
                     hover:border-blue-500 transition 
                     py-3 rounded-xl">
    Choose Plan
  </button>
</Link>

          </div>


          {/* ===== MOST POPULAR ===== */}
          <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/10 
           border border-blue-500/50 rounded-3xl p-10 
           shadow-xl
           transition-all duration-500 ease-out
           hover:-translate-y-4 hover:scale-[1.03]
           hover:shadow-[0_25px_60px_rgba(59,130,246,0.25)]">


            <div className="absolute -top-4 left-1/2 -translate-x-1/2 
                            bg-blue-600 text-sm px-4 py-1 rounded-full">
              Most Popular
            </div>

            <h3 className="text-xl font-semibold mb-4">Business Plan</h3>

            <p className="text-4xl font-bold mb-6">
              ₹2999 <span className="text-sm text-neutral-400 font-normal">/ month</span>
            </p>

            <ul className="space-y-4 text-neutral-300 text-sm mb-8">
              <li className="flex items-center gap-3">
                <Check size={16} className="text-blue-400" />
                On-site IT support
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-blue-400" />
                Networking setup
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-blue-400" />
                Security configuration
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-blue-400" />
                Priority support
              </li>
            </ul>

            <Link href="/contact">
  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 
                     hover:opacity-90 transition 
                     py-3 rounded-xl font-medium">
    Get Started
  </button>
</Link>

          </div>


          {/* ===== ENTERPRISE ===== */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 
           rounded-3xl p-10 
           transition-all duration-500 ease-out
           hover:-translate-y-3 hover:scale-[1.02]
           hover:border-blue-500/50
           hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]">


            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>

            <p className="text-4xl font-bold mb-6">
              Custom <span className="text-sm text-neutral-400 font-normal">pricing</span>
            </p>

            <ul className="space-y-4 text-neutral-300 text-sm mb-8">
              <li className="flex items-center gap-3">
                <Check size={16} className="text-purple-400" />
                Dedicated IT manager
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-purple-400" />
                CCTV & Security systems
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-purple-400" />
                Server & infrastructure
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-purple-400" />
                24/7 support
              </li>
            </ul>

            <Link href="/contact">
  <button className="w-full bg-neutral-900 border border-neutral-700 
                     hover:border-purple-500 transition 
                     py-3 rounded-xl">
    Contact Us
  </button>
</Link>

          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6 text-center border-t border-neutral-800">

        <h2 className="text-3xl font-semibold mb-4">
          Not Sure Which Plan Fits?
        </h2>

        <p className="text-neutral-400 mb-8">
          We’ll help you choose the right IT solution for your needs.
        </p>

        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600
                     hover:opacity-90 transition px-10 py-4 rounded-full font-medium"
        >
          Talk to an Expert →
        </a>

      </section>

    </main>
  );
}

