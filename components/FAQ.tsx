"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is your development process?",
    answer: "We follow a structured Agile workflow from planning to deployment.",
  },
  {
    question: "Do you provide maintenance?",
    answer: "Yes, we offer ongoing support and performance monitoring.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 bg-neutral-900 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-slate-800 rounded-xl p-6 cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <h3 className="font-medium">{faq.question}</h3>
            {open === i && (
              <p className="text-slate-400 mt-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

