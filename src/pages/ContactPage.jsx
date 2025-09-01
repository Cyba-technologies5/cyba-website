// src/pages/ContactPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSend,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:cybatechnologies5@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative pt-28 pb-20 bg-[#0D2036] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Let’s Build Something Great Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 max-w-2xl mx-auto text-white/80"
          >
            Call or email us — we typically respond within 24 hours, Monday–Friday.
          </motion.p>
        </div>
      </section>

      {/* INFO PANEL (Gradient) + FORM */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-10 items-stretch">
          {/* Gradient Contact Panel (replaces image) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl p-[2px]
                       bg-gradient-to-br from-[#3BD6BF] via-[#0D2036] to-[#3BD6BF]"
          >
            <div className="relative h-full rounded-[22px] bg-[#0D2036] text-white p-8 md:p-10">
              {/* soft decorative glow */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#3BD6BF]/20 blur-3xl"
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
              />

              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-extrabold leading-tight"
                >
                  Talk to our team
                </motion.h2>
                <p className="mt-3 text-white/80">
                  Prefer a quick call or email? Reach us directly via the details below.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <FiPhone />
                    </span>
                    <div>
                      <div className="text-sm text-white/70">Phone</div>
                      <a
                        href="tel:+233267743307"
                        className="text-2xl font-bold hover:text-[#3BD6BF] transition"
                      >
                        +233 267 743 307
                      </a>
                      <div>
                        <a
                          href="tel:+233543737620"
                          className="text-lg hover:text-[#3BD6BF] transition"
                        >
                          +233 543 737 620
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <FiMail />
                    </span>
                    <div>
                      <div className="text-sm text-white/70">Email</div>
                      <a
                        href="mailto:cybatechnologies5@gmail.com"
                        className="text-xl md:text-2xl font-bold break-all hover:text-[#3BD6BF] transition"
                      >
                        cybatechnologies5@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <FiMapPin />
                    </span>
                    <div>
                      <div className="text-sm text-white/70">Location</div>
                      <div className="text-lg font-semibold">Remote • Worldwide</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <FiClock />
                    </span>
                    <div>
                      <div className="text-sm text-white/70">Open Hours</div>
                      <div className="text-lg font-semibold">Mon – Fri: 9am – 6pm (GMT)</div>
                    </div>
                  </div>
                </div>

                {/* Call-to-action buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <motion.a
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:+233267743307"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#3BD6BF] px-5 py-3 font-semibold text-[#0D2036]"
                  >
                    Call Now <FiArrowRight />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="mailto:cybatechnologies5@gmail.com"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3"
                  >
                    Email Us <FiSend />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            onSubmit={onSubmit}
            className="relative rounded-3xl bg-white p-6 md:p-8 shadow-lg ring-1 ring-slate-200"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#0D2036]">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#3BD6BF] outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0D2036]">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#3BD6BF] outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0D2036]">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  placeholder="Tell us about your project…"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#3BD6BF] outline-none"
                  required
                />
              </div>
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[#3BD6BF] px-6 py-3 font-semibold text-[#0D2036]"
              >
                Send message <FiSend />
              </motion.button>
            </div>

            {/* Toast */}
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute -top-3 right-4 rounded-lg bg-[#0D2036] text-white px-4 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <FiCheckCircle className="text-[#3BD6BF]" /> Message sent!
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </section>

      {/* INFO ROW */}
      <section className="bg-slate-50 py-14 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-6">
          {[
            { icon: <FiClock />, title: "Open Hours", text: "Mon – Fri: 9am – 6pm (GMT)" },
            { icon: <FiMail />, title: "Avg Response", text: "Replies within 24 hrs" },
            { icon: <FiMapPin />, title: "Location", text: "Remote • Worldwide" },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl bg-white p-6 shadow border border-slate-200"
            >
              <div className="text-[#3BD6BF] text-2xl mb-3">{card.icon}</div>
              <h4 className="font-semibold text-[#0D2036]">{card.title}</h4>
              <p className="text-slate-600 text-sm mt-1">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-[2px] bg-gradient-to-r from-[#3BD6BF] via-[#0D2036] to-[#3BD6BF]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="rounded-[22px] bg-white/85 backdrop-blur px-6 py-10 md:px-12 md:py-14"
            >
              <div className="grid md:grid-cols-3 items-center gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#0D2036]">
                    Ready to collaborate?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Let’s bring your ideas to life. Reach out today.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <a
                    href="mailto:cybatechnologies5@gmail.com"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#3BD6BF] px-6 py-3 font-semibold text-[#0D2036]"
                  >
                    Contact Us <FiArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
