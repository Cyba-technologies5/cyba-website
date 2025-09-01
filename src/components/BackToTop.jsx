// src/components/BackToTop.jsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop({ threshold = 320 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    onScroll(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="backtotop"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          onClick={scrollTop}
          aria-label="Back to top"
          className="
            fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50
            rounded-full p-3.5 shadow-xl
            bg-[#3BD6BF] text-[#0D2036]
            ring-1 ring-black/10 hover:brightness-110
            focus:outline-none focus:ring-2 focus:ring-white/40
          "
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
