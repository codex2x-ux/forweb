"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    text: "Absolutely transformed our digital presence. Professional and innovative."
  },
  {
    name: "Michael Lee",
    role: "Founder, StartUpX",
    text: "Top-tier service and smooth communication from start to finish."
  },
  {
    name: "Emma Brown",
    role: "Marketing Director",
    text: "The quality and attention to detail exceeded our expectations."
  }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section className="py-28 bg-slate-950 text-white px-6 text-center">
      <h2 className="text-3xl font-semibold mb-12">
        What Our Clients Say
      </h2>

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto"
      >
        <Card className="bg-slate-900 border border-slate-800 rounded-2xl shadow-lg">
          <CardContent className="p-8 space-y-4">
            <p className="text-slate-300 italic">
              "{testimonials[index].text}"
            </p>
            <div>
              <p className="font-semibold">
                {testimonials[index].name}
              </p>
              <p className="text-sm text-slate-400">
                {testimonials[index].role}
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
          >
            Prev
          </button>
          <button
            onClick={next}
            className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
          >
            Next
          </button>
        </div>
      </motion.div>
    </section>
  );
}

