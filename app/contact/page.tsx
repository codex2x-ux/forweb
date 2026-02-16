    "use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "contacts"), {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      createdAt: new Date()
    });

    alert("Message sent successfully!");
    setFormData({
  name: "",
  email: "",
  phone: "",
  message: "",
});

  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

  return (
    <section className="py-28 bg-neutral-950 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-4xl font-semibold mb-6 text-white">
        Let’s Discuss Your Project
      </h2>

      <p className="text-neutral-400 mb-10">
        Tell us about your infrastructure requirements and
        we’ll provide a tailored solution.
      </p>

      <div className="space-y-4 text-neutral-400">
        <p>Email: Kumar@vrmservices.in</p>
        <p>Phone: +91 9354021887</p>
        <p>Response Time: Within 24 Hours</p>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="bg-neutral-900 p-10 rounded-3xl border border-neutral-800">
      <form onSubmit={handleSubmit} className="space-y-6">

  <input
    type="text"
    placeholder="Full Name"
    value={formData.name}
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-white"
    required
  />

  <input
    type="email"
    placeholder="Email Address"
    value={formData.email}
    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-white"
    required
  />

  <input
    type="text"
    placeholder="Phone Number"
    value={formData.phone}
    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-white"
  />

  <textarea
    placeholder="Project Details"
    rows={4}
    value={formData.message}
    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-white"
    required
  />

  <Button type="submit" className="w-full rounded-xl py-6">
    Submit Request
  </Button>

</form>
          <section className="py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

    {/* Contact Form */}
    <div>
      {/* your existing form */}
    </div>

    {/* Map */}
      <h3 className="text-xl font-semibold mb-4">
  Visit Our Office
</h3>
<p className="text-neutral-400 mb-6">
  New Delhi, India
</p>
      
    <div className="rounded-2xl overflow-hidden border border-neutral-800">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.438218451828!2d77.12865957466562!3d28.646594675657077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03ca7ced4493%3A0xbbac0a68f364ed82!2sVRM%20SERVICES!5e0!3m2!1sen!2sin!4v1771186376002!5m2!1sen!2sin"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen"
      className="w-full h-[400px] grayscale hover:grayscale-0 transition duration-500
      loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

  </div>
</section>
    

    </div>

  </div>
</section>

  );
}

