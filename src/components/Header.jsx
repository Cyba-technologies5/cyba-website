import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/cyba-logo.png";
import { FiMenu } from "react-icons/fi";

export default function Header({ onOpenMobile }) {
  const linkClass = ({ isActive }) =>
    `hover:text-cyan-300 ${isActive ? "text-cyan-300" : ""}`;

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 text-[#F3F0E7]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex gap-4">
          <img src={logo} alt="Cyba Technologies Logo" className="h-10 w-auto invert" />
          <Link to="/" className="text-xl font-bold text-cyan-400">cyba technologies</Link>
        </div>

        {/* Desktop links */}
        <nav className="space-x-6 hidden md:block">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink
            to="/contact"
            className="bg-cyan-400 text-slate-900 px-4 py-2 rounded hover:bg-cyan-300 transition"
          >
            Get Quote
          </NavLink>
        </nav>

        {/* Mobile trigger only */}
        <button
          onClick={onOpenMobile}
          aria-label="Open menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl
                     bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15"
        >
          <FiMenu size={20} />
        </button>
      </div>
    </header>
  );
}
