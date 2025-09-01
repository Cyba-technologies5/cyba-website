import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import team from "../assets/team.png";
import workspace from "../assets/workspace.png";
import build from "../assets/team1.jpg";

// If you keep images in /public, use the root paths below.
// Otherwise import from src/assets (e.g., import team from "../assets/about/team.jpg")
// const imgPrimary = "/assets/team.png";
// const imgSecondary = "/assets/workspace.png";
// const imgTertiary = "/assets/about/build.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, delay },
});

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50">
      {/* brand blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#3BD6BF]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#3BD6BF]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div {...fadeUp()} className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0D2036]">
            Building reliable products people love to use
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            At Cyba Technologies, we blend strategy, UI/UX and engineering to ship fast,
            secure and scalable software—without the guesswork.
          </p>
        </motion.div>

        {/* Split: text / collage */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 items-center">
          {/* Left: copy */}
          <motion.div {...fadeUp(0.1)} className="space-y-5">
            <ul className="space-y-3">
              {[
                "Conversion-focused, accessible interfaces",
                "Clean code, clear milestones, frequent demos",
                "Performance, security & maintainability by default",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <FiCheckCircle className="mt-1 text-[#3BD6BF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-wrap gap-3">
  <motion.a
    href="#services"
    whileHover={{ y: -2, scale: 1.02, boxShadow: "0 10px 18px rgba(0,0,0,0.12)" }}
    whileTap={{ scale: 0.98 }}
    className="inline-flex items-center gap-2 rounded-lg bg-[#0D2036] px-5 py-3 text-white"
  >
    Explore services <FiArrowRight />
  </motion.a>

  <motion.a
    href="#contact"
    whileHover={{ y: -2, scale: 1.02, boxShadow: "0 10px 18px rgba(0,0,0,0.08)" }}
    whileTap={{ scale: 0.98 }}
    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-[#0D2036] bg-white/0 hover:bg-white"
  >
    Get a quote
  </motion.a>
</div>

          </motion.div>

         {/* Right: layered images */}
<motion.div
  {...fadeUp(0.15)}
  className="relative grid place-items-center group"
>
  {/* Floating badge centered on the main image */}
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.25 }}
    className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 
               z-20 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold 
               text-[#0D2036] shadow backdrop-blur"
  >
    98% client satisfaction
  </motion.div>

  {/* Primary image with a soft float + slight tilt on hover */}
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ rotate: -0.8, scale: 1.01 }}
    className="relative z-10 w-[85%] md:w-[420px]"
  >
    <img
      src={team}
      alt="Cyba team collaborating"
      className="rounded-2xl shadow-lg w-full object-cover"
    />
    <div className="absolute -inset-3 -z-10 rounded-3xl bg-[#3BD6BF]/15 blur-sm" />
  </motion.div>

  {/* Secondary image (overlap) with a lighter float */}
  <motion.img
    initial={{ opacity: 0, x: 40, y: 20 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true }}
    animate={{ y: [0, -4, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    whileHover={{ rotate: 0.8, scale: 1.02 }}
    src={workspace}
    alt="Workspace"
    className="absolute -bottom-10 -right-6 w-56 md:w-72 rounded-xl shadow-lg object-cover"
  />
</motion.div>

        </div>

        {/* Stats row */}
       <motion.div
  {...fadeUp(0.2)}
  className="mt-14 grid gap-6 sm:grid-cols-3"
>
  {[
    { k: "5+ yrs", v: "building products" },
    { k: "40+", v: "projects shipped" },
    { k: "0→1", v: "startup friendly" },
  ].map(({ k, v }) => (
    <motion.div
      key={k}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="
        relative rounded-2xl border border-slate-200 bg-white p-6 text-center
        shadow-sm hover:shadow-lg transition
        before:absolute before:inset-0 before:rounded-2xl before:ring-2
        before:ring-transparent hover:before:ring-[#3BD6BF]/40
      "
    >
      <div className="text-3xl md:text-4xl font-extrabold text-[#0D2036]">
        {k}
      </div>
      <div className="mt-1 text-slate-600">{v}</div>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
}
