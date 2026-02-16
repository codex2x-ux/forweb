"use client";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";
export default function ServicesPage() {
  return (
    <main className="py-28 bg-neutral-900 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-semibold text-center mb-20">
      Strategic IT Services
    </h2>
    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: "Infrastructure Design",
          desc: "Enterprise network planning and structured deployment.",
        },
        {
          title: "Cybersecurity",
          desc: "Threat mitigation, firewall strategy and compliance readiness.",
        },
        {
          title: "Managed IT Services",
          desc: "24/7 monitoring and infrastructure optimization.",
        },
      ].map((service, i) => (   
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 shadow-lg"
        >
          <h3 className="text-lg font-semibold mb-4">
            {service.title}
          </h3>
          <p className="text-neutral-400 text-sm">
            {service.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
      <FAQ />
</main>
  );
}

