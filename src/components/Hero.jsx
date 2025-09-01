import React from "react";
import { motion } from "framer-motion";
import heroGraphic from "../assets/hero-graphic.png";

const Hero = () => {
  return (
    <section className="bg-slate-900 text-[#F3F0E7] py-24 px-6" id="home">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            Software & <br /> Website <br /> Development
          </motion.h1>

          <motion.p
            className="mb-8 text-lg text-slate-300"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            We build robust software solutions and modern websites for your business needs.
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-block bg-[#3BD6BF] text-[#0D2036] font-semibold px-6 py-3 rounded hover:bg-[#2fb3a3] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            Get Started
          </motion.a>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          {/* subtle floating loop */}
          <motion.img
            src={heroGraphic}
            alt="Devices illustration"
            className="w-3/4 md:w-full"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

