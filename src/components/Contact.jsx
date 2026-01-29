// src/components/Contact.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, delay: d },
});

function getServiceFromHash() {
  // hash example: "#contact?service=UI%2FUX%20Design"
  const hash = window.location.hash || "";
  const queryString = hash.includes("?") ? hash.split("?")[1] : "";
  const params = new URLSearchParams(queryString);
  return params.get("service") || "";
}

const SERVICE_LINE_RE = /^Hi Cyba, I(?:’|')m interested in:.*$/m;

const buildTemplate = (selected) =>
  `Hi Cyba, I'm interested in: ${selected}.\n\nMy goals:\nTimeline:\nBudget range:\n`;

function syncServiceInMessage(message, selected) {
  const msg = (message || "").trim();

  // If empty, create the template
  if (!msg) return buildTemplate(selected);

  // If message already has our auto-line, replace it with the new service
  if (SERVICE_LINE_RE.test(msg)) {
    return msg.replace(SERVICE_LINE_RE, `Hi Cyba, I'm interested in: ${selected}.`);
  }

  // Otherwise, leave the user's custom message untouched
  return message;
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    source: "homepage-contact", // ✅ Formspree source tag
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Pick up the selected service from the URL hash (from Services modal)
  useEffect(() => {
    const applyFromHash = () => {
      const selected = getServiceFromHash();
      if (!selected) return;

      setForm((prev) => ({
        ...prev,
        service: selected,
        message: syncServiceInMessage(prev.message, selected),
      }));

      // ✅ Clear the hash query so it doesn't keep re-applying on refresh
      // Keep user on contact section without the "?service=..."
      try {
        history.replaceState(null, "", "#contact");
      } catch (_) {}
    };

    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const next = { ...prev, [name]: value };

      // If user changes Service dropdown, keep auto-line in message in sync
      if (name === "service" && value) {
        next.message = syncServiceInMessage(prev.message, value);
      }

      return next;
    });

    if (status.message) setStatus({ type: "", message: "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "info", message: "Sending..." });

    try {
      const res = await fetch("https://formspree.io/f/mpqdvrae", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form), // ✅ includes service + source
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Sent! We’ll get back to you within 24 hours.",
        });
        setForm({
          name: "",
          email: "",
          service: "",
          message: "",
          source: "homepage-contact",
        });
      } else {
        const data = await res.json().catch(() => null);
        setStatus({
          type: "error",
          message: data?.error || "Failed to send. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusStyles =
    status.type === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : status.type === "error"
      ? "border-rose-200 bg-rose-50 text-rose-700"
      : "border-slate-200 bg-slate-50 text-slate-700";

  return (
    <section id="contact" className="relative overflow-hidden bg-white">
      {/* brand blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#3BD6BF]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0D2036]/5 blur-3xl" />

      <motion.div {...fadeUp()} className="px-8 max-w-2xl mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2036]">
          Contact Us
        </h2>
        <p className="mt-3 text-slate-600">
          Work with us to design, build, and launch your next big idea.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <motion.div {...fadeUp()}>
          <div className="rounded-3xl bg-[#0D2036] text-white p-8 md:p-10 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Let’s build something great
            </h2>
            <p className="mt-3 text-white/80">
              Tell us about your goals—UI/UX, websites, mobile apps, or ongoing
              support. We’ll reply within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <FiMail />
                </span>
                <a
                  href="mailto:cybatechnologies5@gmail.com"
                  className="hover:underline"
                >
                  cybatechnologies5@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <FiPhone />
                </span>
                <div className="leading-snug">
                  <a href="tel:+233267743307" className="hover:underline">
                    +233 267 743 307
                  </a>
                  <br />
                  <a href="tel:+233543737620" className="hover:underline">
                    +233 543 737 620
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <FiMapPin />
                </span>
                <span>Remote • Worldwide</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form {...fadeUp(0.1)} onSubmit={onSubmit} className="space-y-5">
          {/* ✅ hidden fields for Formspree sorting */}
          <input type="hidden" name="service" value={form.service} />
          <input type="hidden" name="source" value={form.source} />

          <div className="grid md:grid-cols-2 gap-5">
            <motion.div whileFocusWithin={{ scale: 1.01 }}>
              <label className="block text-sm font-medium text-[#0D2036]">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your full name"
                required
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#3BD6BF] disabled:opacity-60"
              />
            </motion.div>

            <motion.div whileFocusWithin={{ scale: 1.01 }}>
              <label className="block text-sm font-medium text-[#0D2036]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@company.com"
                required
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#3BD6BF] disabled:opacity-60"
              />
            </motion.div>
          </div>

          {/* ✅ visible service field */}
          <div>
            <label className="block text-sm font-medium text-[#0D2036]">
              Service
            </label>
            <select
              name="service"
              value={form.service}
              onChange={onChange}
              disabled={isSubmitting}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#3BD6BF] disabled:opacity-60"
            >
              <option value="">Select a service</option>
              <option value="Custom Website Design">Custom Website Design</option>
              <option value="Search Engine Optimization">Search Engine Optimization</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="E-commerce Solutions">E-commerce Solutions</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Maintenance & Support">Maintenance & Support</option>
            </select>
          </div>

          {/* ✅ show selected service in UI */}
          {form.service && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <span className="font-semibold text-[#0D2036]">
                Selected service:
              </span>{" "}
              {form.service}
            </div>
          )}

          <motion.div whileFocusWithin={{ scale: 1.01 }}>
            <label className="block text-sm font-medium text-[#0D2036]">
              Project brief
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Tell us about your project goals, timeline, and budget range…"
              rows={5}
              required
              disabled={isSubmitting}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#3BD6BF] disabled:opacity-60"
            />
          </motion.div>

          <motion.button
            whileHover={
              isSubmitting
                ? {}
                : { y: -2, scale: 1.02, boxShadow: "0 12px 22px rgba(0,0,0,0.12)" }
            }
            whileTap={isSubmitting ? {} : { scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-xl bg-[#3BD6BF] px-6 py-3 font-semibold text-[#0D2036] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send message"} <FiSend />
          </motion.button>

          {/* status UI */}
          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-xl border px-4 py-3 text-sm ${statusStyles}`}
            >
              {status.type === "success" && (
                <span className="mr-2 inline-flex align-middle text-emerald-700">
                  <FiCheckCircle />
                </span>
              )}
              {status.message}
            </motion.div>
          )}

          <p className="text-xs text-slate-500">
            By sending, you agree to our processing of your info to respond to
            your inquiry.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
