// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, delay: d },
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // simple mailto fallback (replace with your API later)
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:cybatechnologies5@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white">
      {/* brand blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#3BD6BF]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0D2036]/5 blur-3xl" />

        {/* Section heading */}
        <motion.div {...fadeUp()} className="px-8 max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2036]">
            Contact Us
          </h2>
          <p className="mt-3 text-slate-600">
            Work with us to design, build, and launch your next big idea.
          </p>
        </motion.div>
      <div className="max-w-7xl mx-auto px-6  pb-20 grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Left: CTA + info */}
        <motion.div {...fadeUp()}>
          <div className="rounded-3xl bg-[#0D2036] text-white p-8 md:p-10 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold">Let’s build something great</h2>
            <p className="mt-3 text-white/80">
              Tell us about your goals—UI/UX, websites, mobile apps, or ongoing support. We’ll reply within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <FiMail />
                </span>
                <a href="mailto:cybatechnologies5@gmail.com" className="hover:underline">
                 cybatechnologies5@gmail.com 
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <FiPhone />
                </span>
                <a href="tel:+233267743307" className="hover:underline">
                  +233 267 743 307 <br /> +233 543 737 620
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <FiMapPin />
                </span>
                <span>Remote • Worldwide</span>
              </div>
            </div>

            {/* mini badges */}
            {/* <div className="mt-8 flex flex-wrap gap-3">
              {["Fast turnaround", "Clear milestones", "Post-launch support"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm"
                >
                  {t}
                </span>
              ))}
            </div> */}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form {...fadeUp(0.1)} onSubmit={onSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div whileFocusWithin={{ scale: 1.01 }}>
              <label className="block text-sm font-medium text-[#0D2036]">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your full name"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#3BD6BF]"
              />
            </motion.div>
            <motion.div whileFocusWithin={{ scale: 1.01 }}>
              <label className="block text-sm font-medium text-[#0D2036]">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@company.com"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#3BD6BF]"
              />
            </motion.div>
          </div>

          <motion.div whileFocusWithin={{ scale: 1.01 }}>
            <label className="block text-sm font-medium text-[#0D2036]">Project brief</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Tell us about your project goals, timeline, and budget range…"
              rows={5}
              required
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#3BD6BF]"
            />
          </motion.div>

          {/* animated submit button */}
          <motion.button
            whileHover={{ y: -2, scale: 1.02, boxShadow: "0 12px 22px rgba(0,0,0,0.12)" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-[#3BD6BF] px-6 py-3 font-semibold text-[#0D2036]"
          >
            Send message <FiSend />
          </motion.button>

          {/* legal */}
          <p className="text-xs text-slate-500">
            By sending, you agree to our processing of your info to respond to your inquiry.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
