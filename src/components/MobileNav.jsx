import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowRight, FiHome, FiUser, FiGrid, FiMail } from "react-icons/fi";

const LINKS = [
  { to: "/",        label: "Home",     icon: FiHome },
  { to: "/about",   label: "About",    icon: FiUser },
  { to: "/services",label: "Services", icon: FiGrid },
  { to: "/contact", label: "Contact",  icon: FiMail },
];

const sheetVariants = {
  hidden: { y: "100%", opacity: 0.9 },
  show:   { y: 0,      opacity: 1, transition: { type: "spring", stiffness: 280, damping: 28 } },
  exit:   { y: "100%", opacity: 0.9, transition: { duration: 0.25 } },
};

const listVariants = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } };
const itemVariants = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.28 } } };

export default function MobileNav({ open, onClose }) {
  const closeBtnRef = useRef(null);

  // lock scroll only while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // focus close on open
  useEffect(() => { if (open && closeBtnRef.current) closeBtnRef.current.focus(); }, [open]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.button
            aria-label="Close menu"
            onClick={onClose}
            className="fixed inset-0 z-[200]
                       bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(59,214,191,0.18),transparent_60%),linear-gradient(180deg,#0B1B2E_0%,#0D2036_60%,#071423_100%)]
                       backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          />

          {/* Glass sheet */}
          <motion.aside
            role="dialog" aria-modal="true"
            className="fixed top-[25px] bottom-0 left-0 right-0 z-[201]
                       rounded-t-3xl bg-white/8 backdrop-blur-xl
                       ring-1 ring-white/15 shadow-[0_-20px_60px_rgba(0,0,0,0.35)]
                       mx-auto max-w-[520px]"
            variants={sheetVariants} initial="hidden" animate="show" exit="exit"
          >
            <div className="px-5 pt-4 pb-2 flex items-center justify-between">
              <div className="mx-auto h-1.5 w-12 rounded-full bg-white/20" />
              <button
                ref={closeBtnRef}
                onClick={onClose}
                aria-label="Close menu"
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center
                           rounded-xl bg-white/10 text-white hover:bg-white/15"
              >
                <FiX size={18} />
              </button>
            </div>

            <motion.nav variants={listVariants} initial="hidden" animate="show" className="px-4 pb-2 pt-1">
              {LINKS.map(({ to, label, icon: Icon }) => (
                <motion.div key={to} variants={itemVariants} className="mb-2">
                  <NavLink
                    to={to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group flex items-center justify-between rounded-2xl px-4 py-4
                       ring-1 ring-white/10 transition
                       ${isActive ? "bg-white/12 text-cyan-300" : "text-white/90 hover:bg-white/8"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/8 ring-1 ring-white/10">
                        <Icon size={18} />
                      </span>
                      <span className="text-base font-medium">{label}</span>
                    </div>
                    <FiArrowRight className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>

            <div className="mx-4 my-2 h-px bg-white/10" />

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="px-4 pb-5">
              <a
                href="/contact" onClick={onClose}
                className="block w-full text-center rounded-2xl bg-[#3BD6BF] text-[#0D2036]
                           font-semibold px-5 py-3 hover:brightness-110"
              >
                Get a Quote
              </a>
              <p className="mt-3 text-center text-xs text-white/70">
                Mon–Fri · 9am–6pm (GMT) · Remote • Worldwide
              </p>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
