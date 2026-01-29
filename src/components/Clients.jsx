// src/components/Clients.jsx
import React from "react";
import { motion } from "framer-motion";

// logos (your imports)
import Daven from "../assets/Daven logo2.png";
import Frimsa from "../assets/frimsafoods_logo.png";
import Farmrite from "../assets/farmrite logo.jpg";
import VA4ME from "../assets/VA4ME_logo-png.png";
import Multipointers from "../assets/multipointers logo.png";
import Menorah from "../assets/menorah-logo2.png"

const logos = [
  { src: Daven, alt: "Daven Consultants" },
  { src: Frimsa, alt: "Frimsa Foods" },
  { src: Farmrite, alt: "Farmrite Greens" },
  { src: VA4ME, alt: "VA4ME" },
  { src: Multipointers, alt: "Multipointers Ltd" },
  { src: Menorah, alt: "Menorah" },
];

// Repeat enough to cover ultra‑wide screens
const track = [...logos, ...logos, ...logos];

export default function Clients() {
  return (
    <section id="clients" className="bg-slate-50 py-16 px-6 mb-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D2036]">
            Clients we’ve worked with
          </h2>
          <p className="mt-2 text-slate-600">
            Trusted by brands across industries to deliver quality solutions.
          </p>
        </motion.div>

        {/* Marquee (2 mirrored tracks) */}
        <div className="relative overflow-hidden group">
          {/* soft fade edges (works on all sizes) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent" />

          {/* Track A → left */}
          <div className="marquee-row marquee-left group-hover:[animation-play-state:paused]">
            {track.map(({ src, alt }, i) => (
              <div key={`A-${i}`} className="logo-cell">
                <img
                  src={src}
                  alt={alt}
                  className="logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Track B ← right (offset start for seamless feel) */}
          {/* <div className="marquee-row marquee-right group-hover:[animation-play-state:paused]">
            {track.map(({ src, alt }, i) => (
              <div key={`B-${i}`} className="logo-cell">
                <img
                  src={src}
                  alt={alt}
                  className="logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
