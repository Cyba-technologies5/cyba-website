// src/pages/AboutPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import heroImage from "../assets/about/about-hero.png";
import storyImage1 from "../assets/about/storyA.png";
import storyImage3 from "../assets/about/story-image.png";
import aboutBanner3 from "../assets/about/about-banner3.png";

// --- Image URLs (all Black teams/professionals). Swap with local assets anytime. ---
const IMG = {
  ava1:
    "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=400&auto=format&fit=crop", // Black woman avatar
  ava2:
    "https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=400&auto=format&fit=crop", // Black man avatar
  ava3:
    "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop", // Black woman avatar
};

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, delay: d },
});

export default function AboutPage() {
  return (
    <main className="relative">
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden bg-[#0D2036] text-white pt-24 pb-16">
        {/* brand blobs */}
        <div className="pointer-events-none absolute -top-28 -left-28 h-72 w-72 rounded-full bg-[#3BD6BF]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-[#3BD6BF]/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div>
            <motion.h1
              {...fade()}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              We build reliable products{" "}
              <span className="text-[#3BD6BF]">people love to use</span>
            </motion.h1>
            <motion.p
              {...fade(0.08)}
              className="mt-4 max-w-2xl text-white/85 leading-relaxed"
            >
              At Cyba Technologies, we blend strategy, UI/UX, and engineering to
              ship fast, secure, and scalable software. We work like a product
              team: research, iterate, validate, deliver.
            </motion.p>

            <motion.div {...fade(0.16)} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-[#0D2036] px-5 py-3 font-semibold hover:brightness-110"
              >
                Our Story <FiArrowRight />
              </a>
              <a
                href="#values"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 hover:bg-white/10"
              >
                Our Values
              </a>
            </motion.div>
          </div>

          {/* Right image panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative hidden md:block"
          >
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
              <img
                src={heroImage}
                alt="Team collaboration"
                className="w-full h-[340px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0D2036]/25 via-transparent to-[#3BD6BF]/10" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -left-4 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-[#0D2036] shadow backdrop-blur"
            >
              98% client satisfaction
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============== STORY + MINI COLLAGE ============== */}
      <section id="story" className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
          {/* Story text */}
          <motion.div {...fade()} className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2036]">
              Our Story
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              We started as a small group of designers and engineers who loved
              shipping clean, user-centered products. As we grew, we kept the
              same principles: empathize with users, remove friction, and
              measure outcomes. Today, we partner with founders and teams to
              launch experiences that convert and scale.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {[
                "Conversion-focused, accessible interfaces",
                "Clean code, clear milestones, frequent demos",
                "Performance, security & maintainability by default",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 text-[#3BD6BF]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mini collage */}
          <motion.div {...fade(0.08)} className="grid gap-4">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img
                src={storyImage1}
                alt="Workshop"
                className="w-full h-40 object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img
                src={storyImage3}
                alt="Collaboration"
                className="w-full h-40 object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============== VALUES (with banner) ============== */}
      <section id="values" className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fade()} className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D2036]">
              What we stand for
            </h2>
            <p className="mt-3 text-slate-700">
              We prioritize clarity, care, and craft. Every project is a
              partnership, not a transaction.
            </p>
          </motion.div>

          {/* banner */}
          <motion.div
            {...fade(0.04)}
            className="mt-6 overflow-hidden rounded-2xl border border-slate-200"
          >
            <div className="relative">
              <img
                src={aboutBanner3}
                alt="Team values"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3BD6BF]/10 via-transparent to-[#0D2036]/10" />
            </div>
          </motion.div>

          {/* values cards */}
          <motion.div
            {...fade(0.1)}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                t: "Quality First",
                d: "Reliable, secure, and performant by design.",
              },
              {
                t: "Transparent Process",
                d: "Clear milestones, frequent demos, no surprises.",
              },
              {
                t: "Ongoing Support",
                d: "Post-launch support and performance tuning.",
              },
            ].map((v) => (
              <div
                key={v.t}
                className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-[#0D2036]">{v.t}</h4>
                <p className="text-slate-600 mt-1">{v.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============== TESTIMONIALS ============== */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            {...fade()}
            className="text-2xl md:text-3xl font-extrabold text-[#0D2036]"
          >
            What clients say
          </motion.h3>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Cyba delivered beyond expectations—clean design and a smooth launch.",
                author: "Ama K.",
                role: "Founder, Fintech",
                img: IMG.ava1,
              },
              {
                quote:
                  "The team’s communication and speed were outstanding throughout.",
                author: "Kwame B.",
                role: "Product Lead, E-commerce",
                img: IMG.ava2,
              },
              {
                quote:
                  "From UX to deployment, everything felt thoughtful and professional.",
                author: "Adjoa S.",
                role: "COO, HealthTech",
                img: IMG.ava3,
              },
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                {...fade(0.05 * i)}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-slate-700">“{t.quote}”</p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.author}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-[#3BD6BF]/30"
                    loading="lazy"
                  />
                  <footer className="text-sm text-slate-600">
                    <span className="font-medium text-[#0D2036]">
                      {t.author}
                    </span>
                    , {t.role}
                  </footer>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>
       {/* CLOSING CTA */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="p-[2px] rounded-3xl bg-[linear-gradient(135deg,#3BD6BF_0%,#0D2036_50%,#3BD6BF_100%)] [background-size:200%_200%] animate-[gradient_8s_ease_infinite]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="relative top-2 left-2 rounded-[22px] bg-white/85 backdrop-blur px-6 py-10 md:px-12 md:py-14"
            >
              <div className="grid md:grid-cols-3 items-center gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#0D2036]">
                    Ready to ship something great?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Tell us your goals. We’ll reply within 24 hours with next steps.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3BD6BF] px-6 py-3 font-semibold text-[#0D2036] hover:brightness-110"
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
