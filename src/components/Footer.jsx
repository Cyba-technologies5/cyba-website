// src/components/Footer.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320); // show after 320px
    onScroll(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-[#0D2036] text-white">
      {/* soft animated gradient line */}
      <div className="h-[2px] w-full bg-[linear-gradient(90deg,transparent,#3BD6BF,transparent)] opacity-70 animate-[pulseLine_6s_ease_infinite]" />

      {/* subtle floating glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#3BD6BF]/18 blur-3xl"
        animate={{ x: [0, 12, 0], y: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          {/* Brand */}
          <div>
            <div className="text-xl font-extrabold tracking-tight">cyba technologies</div>
            <p className="mt-1 text-slate-300 text-sm">Design • Web • Mobile</p>
            
            {/* Socials */}
          <div className="flex items-center gap-3 pt-6">
            {[
              { Icon: FiFacebook, href: "https://web.facebook.com/profile.php?id=61579820026587" },
              { Icon: FiInstagram, href: "https://www.instagram.com/cybatechnologies/" },
              { Icon: FiLinkedin, href: "https://www.linkedin.com/company/cyba-technologies/" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ y: -2, scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full
                           bg-white/10 text-white/90 hover:text-white backdrop-blur
                           ring-1 ring-white/10 transition"
                aria-label="social link"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
           
          </div>

          {/* Quick links */}
          <nav className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-[#3BD6BF] transition">About</a>
            <a href="#services" className="hover:text-[#3BD6BF] transition">Services</a>
            <a href="#clients" className="hover:text-[#3BD6BF] transition">Clients</a>
            <a href="#contact" className="hover:text-[#3BD6BF] transition">Contact</a>
          </nav>

           {/* Contact details */}
            <div className="mt-4 space-y-2 text-slate-300 text-sm">
              <div className="flex items-center gap-2">
                <FiMail />{" "}
                <a href="mailto:cybatechnologies5@gmail.com" className="hover:text-[#3BD6BF]">
                  cybatechnologies5@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone />{" "}
                <a href="tel:+233267743307" className="hover:text-[#3BD6BF]">
                  +233 267 743 307
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin /> <span>Remote • Worldwide</span>
              </div>
            </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-5 text-center md:text-left text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Cyba Technologies. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#3BD6BF] transition">Privacy</a>
            <a href="#" className="hover:text-[#3BD6BF] transition">Terms</a>
          </div>
        </div>
      </div>

      {/* Back to top (merged & floating) */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="backtotop"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            onClick={scrollTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50
                       rounded-full p-3.5 shadow-xl
                       bg-[#3BD6BF] text-[#0D2036]
                       ring-1 ring-black/10 hover:brightness-110
                       focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

/* Tailwind/CSS: add once (e.g., in src/index.css)
@keyframes pulseLine {
  0%,100% { filter: blur(0px); opacity: 0.55; }
  50%     { filter: blur(1px); opacity: 0.9;  }
}
*/
