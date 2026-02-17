"use client";

import { Monitor, Network, ShieldCheck, Camera } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-28 px-6 text-center overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.12),transparent_40%)]" />

        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            Our <span className="text-blue-500">Professional Services</span>
          </h1>

          <p className="text-neutral-400 text-lg">
            Reliable IT solutions tailored to protect, optimize and scale your business.
          </p>
        </div>
      </section>


      {/* ================= SERVICES GRID ================= */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* ===== SERVICE CARD ===== */}
          {[
            {
              icon: <Monitor size={28} />,
              title: "Computer Repair",
              desc: "Hardware diagnostics, OS installation, performance optimization and virus removal.",
              color: "blue"
            },
            {
              icon: <Network size={28} />,
              title: "Networking Solutions",
              desc: "Structured cabling, router configuration, WiFi setup and enterprise networking.",
              color: "purple"
            },
            {
              icon: <ShieldCheck size={28} />,
              title: "Security Systems",
              desc: "Firewall setup, endpoint protection and business security configurations.",
              color: "emerald"
            },
            {
              icon: <Camera size={28} />,
              title: "CCTV Installation",
              desc: "High-definition surveillance systems for offices, homes and warehouses.",
              color: "blue"
            }
          ].map((service, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-lg 
                         border border-white/10 rounded-3xl p-10
                         transition-all duration-500
                         hover:-translate-y-3 hover:scale-[1.02]
                         hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
            >

              {/* Icon Glow */}
              <div className="mb-6 inline-flex p-4 rounded-2xl 
                              bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                              group-hover:scale-110 transition">
                <div className="text-blue-500">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-neutral-400 leading-relaxed mb-6">
                {service.desc}
              </p>

              <Link href="/contact">
                <span className="text-blue-500 font-medium cursor-pointer 
                                 group-hover:underline">
                  Request Service →
                </span>
              </Link>

            </div>
          ))}

        </div>
      </section>


      {/* ================= PROCESS SECTION ================= */}
      <section className="py-24 px-6 border-t border-neutral-800">

        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">
            Our Working Process
          </h2>
          <p className="text-neutral-400">
            Simple, transparent and efficient.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">

          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-500">
              01. Consultation
            </h3>
            <p className="text-neutral-400">
              We analyze your IT requirements and challenges.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-500">
              02. Implementation
            </h3>
            <p className="text-neutral-400">
              Our team deploys secure and scalable solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-emerald-500">
              03. Ongoing Support
            </h3>
            <p className="text-neutral-400">
              Continuous monitoring and reliable assistance.
            </p>
          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center border-t border-neutral-800">

        <h2 className="text-3xl font-semibold mb-6">
          Ready to Upgrade Your IT Infrastructure?
        </h2>

        <Link href="/contact">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r 
                             from-blue-600 to-purple-600 
                             hover:opacity-90 transition font-medium">
            Contact Our Team →
          </button>
        </Link>

      </section>

    </main>
  );
}

