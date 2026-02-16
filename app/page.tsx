"use client";
import Link from "next/link";
import TestimonialSlider from "@/components/TestimonialSlider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Laptop, ShieldCheck, Network } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
<section className="py-36 px-6 relative overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 -z-0">
    <div className="w-full h-full bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-5xl font-semibold leading-tight mb-6 text-white">
        Enterprise-Grade IT Infrastructure
        <br />
        <span className="text-neutral-400">
          Designed for Stability & Scale
        </span>
      </h1>

      <p className="text-neutral-400 mb-10 max-w-lg">
        We design, secure and manage critical IT environments
        for businesses that require reliability, compliance and growth readiness.
      </p>

      <div className="flex gap-4">
        <Link href="/contact">
          <Button className="rounded-xl px-8 py-6 text-base">
            Schedule Consultation
          </Button>
        </Link>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative"
    >
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
        className="rounded-2xl shadow-2xl border border-neutral-800"
        alt="Infrastructure"
      />
    </motion.div>
  </div>
</section>

    
      {/*Animated stats section */}  
      <section className="py-24 border-t border-neutral-800">
  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
    {[
      { label: "Clients Served", value: 250 },
      { label: "Projects Delivered", value: 480 },
      { label: "Systems Monitored", value: 1200 },
      { label: "Uptime Guarantee", value: 99.9 },
    ].map((stat, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-semibold mb-2">
          {stat.value}
          {stat.label === "Uptime Guarantee" ? "%" : "+"}
        </h3>
        <p className="text-neutral-400 text-sm">
          {stat.label}
        </p>
      </motion.div>
    ))}
  </div>
</section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="rounded-xl shadow-sm hover:shadow-md transition">
            <CardContent className="p-6 text-center">
              <Laptop className="mx-auto mb-4" size={36} />
              <h3 className="font-semibold mb-2">Computer Repair</h3>
              <p className="text-gray-600 text-sm">
                Hardware and software troubleshooting for desktops & laptops.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-sm hover:shadow-md transition">
            <CardContent className="p-6 text-center">
              <Network className="mx-auto mb-4" size={36} />
              <h3 className="font-semibold mb-2">Networking</h3>
              <p className="text-gray-600 text-sm">
                Office network setup, WiFi solutions and infrastructure support.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-sm hover:shadow-md transition">
            <CardContent className="p-6 text-center">
              <ShieldCheck className="mx-auto mb-4" size={36} />
              <h3 className="font-semibold mb-2">Security & CCTV</h3>
              <p className="text-gray-600 text-sm">
                Firewall configuration, CCTV installation & monitoring systems.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="outline" className="rounded-xl">
              View All Services
            </Button>
          </Link>
        </div>
      </section>
      {/* Testimonials */}
      <TestimonialSlider />
      <CTASection />
    </main>
  );
}

