"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-20 bg-neutral-950 text-neutral-100">

      {/* ================= HERO ================= */}
      <section className="relative py-28 px-6 text-center overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent blur-3xl" />

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Let’s Build Your <span className="text-blue-500">IT Solution</span>
          </h1>

          <p className="text-neutral-400 text-lg">
            Whether you need computer repair, networking setup or security solutions —
            we’re here to help.
          </p>
        </div>
      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* ===== LEFT: FORM ===== */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 
                          rounded-3xl p-10 shadow-xl">

            <h2 className="text-2xl font-semibold mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block text-sm mb-2 text-neutral-400">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-neutral-900/80 border border-neutral-800 
                             rounded-xl px-4 py-3 focus:outline-none 
                             focus:border-blue-500 focus:ring-1 
                             focus:ring-blue-500 transition"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-neutral-400">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-neutral-900/80 border border-neutral-800 
                             rounded-xl px-4 py-3 focus:outline-none 
                             focus:border-blue-500 focus:ring-1 
                             focus:ring-blue-500 transition"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-neutral-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-neutral-900/80 border border-neutral-800 
                             rounded-xl px-4 py-3 focus:outline-none 
                             focus:border-blue-500 focus:ring-1 
                             focus:ring-blue-500 transition"
                  placeholder="Describe your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 
                           hover:opacity-90 transition rounded-xl py-3 font-medium"
              >
                Send Message →
              </button>

            </form>
          </div>


          {/* ===== RIGHT: INFO + MAP ===== */}
          <div className="space-y-10">

            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 
                            rounded-3xl p-10 shadow-xl space-y-6">

              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10">
                  <Phone className="text-blue-500" size={18} />
                </div>
                <p className="text-neutral-300 text-sm">
                  +91 9354021887
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Mail className="text-purple-500" size={18} />
                </div>
                <p className="text-neutral-300 text-sm">
                  Kumar@vrmservices.in
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10">
                  <MapPin className="text-emerald-500" size={18} />
                </div>
                <p className="text-neutral-300 text-sm">
                  New Delhi, India
                </p>
              </div>
            </div>


            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.438218451828!2d77.12865957466562!3d28.646594675657077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03ca7ced4493%3A0xbbac0a68f364ed82!2sVRM%20SERVICES!5e0!3m2!1sen!2sin!4v1771186376002!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[350px] grayscale hover:grayscale-0 transition duration-700"
              ></iframe>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center border-t border-neutral-800">

        <h2 className="text-3xl font-semibold mb-4">
          Need Immediate Support?
        </h2>

        <p className="text-neutral-400 mb-8">
          Call us directly and we’ll assist you right away.
        </p>

        <a
          href="tel:+919354021887"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600
                     hover:opacity-90 transition px-10 py-4 rounded-full font-medium"
        >
          Call Now →
        </a>
      </section>

    </main>
  );
}

