// src/components/CTA.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* floating brand blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#3BD6BF]/25 blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-[#0D2036]/20 blur-3xl"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Animated gradient border wrapper */}
        <div
          className="
            p-[2px] rounded-3xl
            bg-[linear-gradient(135deg,#3BD6BF_0%,#0D2036_50%,#3BD6BF_100%)]
            [background-size:200%_200%] animate-[gradient_8s_ease_infinite]
          "
        >
          {/* Glass card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="
              relative top-2 left-2 rounded-[22px] bg-white/80 backdrop-blur
              px-6 py-10 md:px-12 md:py-14
              shadow-[0_20px_40px_rgba(13,32,54,0.12)]
            "
          >
            {/* faint grid pattern */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-[22px] opacity-[0.06]
                         [background:radial-gradient(#000_1px,transparent_1px)]
                         [background-size:18px_18px]"
            />

            <div className="relative z-10 grid gap-8 md:grid-cols-3 items-center">
              {/* Text */}
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#0D2036]">
                  Let’s build something people love
                </h2>
                <p className="mt-3 text-slate-700 max-w-2xl">
                  We design and ship fast, accessible, conversion-focused apps and websites.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row md:justify-end gap-3">
                <motion.a
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl
                             bg-[#3BD6BF] px-6 py-3 font-semibold text-[#0D2036] shadow
                             hover:brightness-110"
                >
                  Get a Quote <FiMail />
                </motion.a>

                <motion.a
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl
                             border border-slate-300 bg-white px-6 py-3 font-semibold
                             text-[#0D2036] hover:bg-slate-50"
                >
                  Explore Services <FiArrowRight className="opacity-90" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
