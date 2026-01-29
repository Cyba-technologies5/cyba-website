// src/pages/ServicesPage.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiLayout, FiSearch, FiSmartphone, FiShoppingCart, FiPenTool, FiLifeBuoy,
  FiArrowRight, FiCheckCircle, FiChevronDown
} from "react-icons/fi";

// Reuse your local service artwork (already in /src/assets)
import webDesign from "../assets/web-design.png";
import seo       from "../assets/seo.png";
import appDev    from "../assets/app-dev.png";
import ecommerce from "../assets/ecommerce.png";
import uiux      from "../assets/ui-ux.png";
import support   from "../assets/support.png";
import serviceHero1 from "../assets/team1.jpg";
import serviceHero2 from "../assets/workspace.png";
import serviceHero3 from "../assets/about/storyB.png";

// Light, on-brand photos (Black professionals). Swap with local files anytime.
const PHOTOS = [
  "https://images.unsplash.com/photo-1664575602554-2087b0493dda?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552960562-daf630e9278b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573497161133-eb8680bc3f66?q=80&w=1600&auto=format&fit=crop",
  "https://www.shutterstock.com/image-photo/business-people-doing-teamwork-analyze-sales-2152369967",
];

const SERVICES = [
  { title: "Custom Website Design", desc: "Brand-centric sites that are fast, accessible and built to convert.", icon: FiLayout, img: webDesign, label: "Bespoke & On-Brand", tags: ["web","design"] },
  { title: "Search Engine Optimization", desc: "Technical, on-page and content SEO to grow qualified traffic.", icon: FiSearch, img: seo, label: "Results-Driven SEO", tags: ["seo","marketing"] },
  { title: "Mobile App Development", desc: "High-performance apps for iOS & Android with smooth UX.", icon: FiSmartphone, img: appDev, label: "Mobile-First Engineering", tags: ["app","mobile"] },
  { title: "E-commerce Solutions", desc: "Payments, shipping, analytics and secure checkout flows.", icon: FiShoppingCart, img: ecommerce, label: "Secure & Scalable", tags: ["commerce","web"] },
  { title: "UI/UX Design", desc: "Research, wireframes, prototyping and delightful micro-interactions.", icon: FiPenTool, img: uiux, label: "User-First Design", tags: ["design","ux"] },
  { title: "Maintenance & Support", desc: "Updates, monitoring, backups and performance optimization.", icon: FiLifeBuoy, img: support, label: "24/7 Reliability", tags: ["support"] },
];

const CATS = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "app", label: "App" },
  { key: "design", label: "UI/UX" },
  { key: "commerce", label: "E-commerce" },
  { key: "seo", label: "SEO" },
  { key: "support", label: "Support" },
];

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, delay: d },
});

export default function ServicesPage() {
  const [active, setActive] = useState("all");
  const [open, setOpen]     = useState(null);

  const items = useMemo(() => (active === "all" ? SERVICES : SERVICES.filter(s => s.tags.includes(active))), [active]);

  return (
    <main className="relative">
      {/* ===== HERO (distinct from Home) ===== */}
      <section className="relative overflow-hidden bg-[#0D2036] text-white pt-24 pb-20">
        {/* soft blobs */}
        <motion.div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#3BD6BF]/25 blur-3xl"
          animate={{ y: [0,-10,0] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#3BD6BF]/10 blur-3xl"
          animate={{ y: [0,12,0] }} transition={{ duration: 9, repeat: Infinity }} />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp()}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Services that ship <span className="text-[#3BD6BF]">real outcomes</span>
            </h1>
            <p className="mt-4 text-white/85">
              Strategy, design and engineering — delivered through tight feedback loops,
              measurable goals and a transparent process.
            </p>

            {/* filter chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              {CATS.map(c => (
                <button key={c.key} onClick={() => setActive(c.key)}
                  className={[
                    "rounded-full px-4 py-2 text-sm transition",
                    active === c.key ? "bg-[#3BD6BF] text-[#0D2036] font-semibold" : "bg-white/10 text-white/90 hover:bg-white/15"
                  ].join(" ")}>
                  {c.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* layered photos (parallax-ish) */}
          <div className="relative hidden md:block">
            <motion.img
              src={serviceHero1} alt="Team at work"
              className="rounded-2xl shadow-2xl w-[85%] ml-auto object-cover h-72"
              initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            />
            <motion.img
              src={serviceHero2} alt="Design review"
              className="rounded-xl shadow-xl absolute -bottom-8 left-0 w-44 object-cover h-40"
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            />
            <motion.img
              src={serviceHero3} alt="Build session"
              className="rounded-xl shadow-xl absolute -bottom-16 right-10 w-36 object-cover h-32"
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            />
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID (image cards with reveal) ===== */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, icon: Icon, img, label }, i) => (
            <motion.article key={title} {...fadeUp(0.04*i)}
              className="group relative overflow-hidden h-[460px] rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${img})` }}/>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
              <div className="relative z-10 p-10 pb-20 text-white">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/80 ring-8 ring-slate-100 text-[#3BD6BF]">
                  <Icon className="text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-6 mb-6 text-white/90">{desc}</p>
                <motion.a href="/contact" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded bg-[#3BD6BF] px-5 py-2 text-[#0D2036] font-semibold">
                  Get a quote <FiArrowRight />
                </motion.a>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#3BD6BF] transition-all duration-300 group-hover:h-10">
                <div className="absolute inset-0 flex items-center justify-center px-4 text-sm font-semibold tracking-wide text-[#0D2036] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {label}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ===== CAPABILITIES STRIP (quick animated badges) ===== */}
      <section className="bg-slate-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 {...fadeUp()} className="text-2xl md:text-3xl font-extrabold text-[#0D2036]">Capabilities</motion.h2>
          <motion.div {...fadeUp(0.05)} className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Conversion-focused UX", "Headless & APIs", "Performance & CI/CD", "Analytics & Experimentation",
              "Accessibility (WCAG)", "Payments & Subscriptions", "Design systems", "Content & SEO"
            ].map((t,i)=>(
              <motion.div key={t} whileHover={{ y:-4, scale:1.02 }}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 flex items-center gap-2 shadow-sm">
                <FiCheckCircle className="text-[#3BD6BF]" /> {t}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    {/* ===== MOVING RAIL (AUTO MARQUEE) ===== */}
<section className="bg-white py-16 px-6">
  <div className="max-w-7xl mx-auto">
    <motion.h3 {...fadeUp()} className="text-2xl md:text-3xl font-extrabold text-[#0D2036]">
      Sample deliverables
    </motion.h3>
    <p className="mt-2 text-slate-600 max-w-2xl">
      We may be early-stage, but our delivery is structured. Here are examples of what you’ll receive during a project.
    </p>

    {/* rail */}
    <div className="relative mt-8 overflow-hidden">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="cyba-marquee group">
        <div className="cyba-track">
          {/* COPY 1 */}
          <div className="flex gap-6 pr-6">
            {[
              {
                t: "UI wireframes + user flows",
                img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop",
                d: "Clickable structure before we design pixels.",
              },
              {
                t: "High-fidelity UI screens",
                img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1400&auto=format&fit=crop",
                d: "Polished screens aligned to your brand.",
              },
              {
                t: "Performance + SEO audit report",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
                d: "Clear fixes list + impact priorities.",
              },
              {
                t: "MVP build + staging link",
                img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
                d: "A working demo you can test before launch.",
              },
            ].map((c) => (
              <a
                key={c.t}
                href="/contact"
                className="group/card relative w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <img
                  src={c.img}
                  alt=""
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="p-4">
                  <div className="font-semibold text-[#0D2036]">{c.t}</div>
                  <div className="mt-1 text-sm text-slate-600">{c.d}</div>
                  <div className="mt-3 text-sm font-semibold text-[#3BD6BF] group-hover/card:underline">
                    Ask for samples →
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* COPY 2 (for seamless loop) */}
          <div className="flex gap-6 pr-6" aria-hidden="true">
            {[
              {
                t: "UI wireframes + user flows",
                img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop",
                d: "Clickable structure before we design pixels.",
              },
              {
                t: "High-fidelity UI screens",
                img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1400&auto=format&fit=crop",
                d: "Polished screens aligned to your brand.",
              },
              {
                t: "Performance + SEO audit report",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
                d: "Clear fixes list + impact priorities.",
              },
              {
                t: "MVP build + staging link",
                img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
                d: "A working demo you can test before launch.",
              },
            ].map((c) => (
              <a
                key={"dup-" + c.t}
                href="/contact"
                className="group/card relative w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <img
                  src={c.img}
                  alt=""
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="p-4">
                  <div className="font-semibold text-[#0D2036]">{c.t}</div>
                  <div className="mt-1 text-sm text-slate-600">{c.d}</div>
                  <div className="mt-3 text-sm font-semibold text-[#3BD6BF] group-hover/card:underline">
                    Ask for samples →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* local CSS (safe in Vite/React) */}
      <style>{`
        .cyba-marquee { width: 100%; overflow: hidden; }
        .cyba-track {
          display: flex;
          width: max-content;
          animation: cybaMarquee 30s linear infinite;
        }
        .cyba-marquee:hover .cyba-track,
        .cyba-marquee:focus-within .cyba-track {
          animation-play-state: paused;
        }
        @keyframes cybaMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cyba-track { animation: none; }
        }
      `}</style>
    </div>
  </div>
</section>


      {/* ===== PROCESS TIMELINE (animated connectors) ===== */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h3 {...fadeUp()} className="text-2xl md:text-3xl font-extrabold text-[#0D2036]">Our process</motion.h3>
          <div className="mt-10 grid md:grid-cols-3 gap-8 relative">
            {[{n:"01",t:"Discover",d:"Goals, users, constraints. Clear success metrics."},
              {n:"02",t:"Design & Build",d:"UI/UX → code in tight feedback loops."},
              {n:"03",t:"Launch & Grow",d:"Ship, measure, iterate for outcomes."}].map((s,i)=>(
              <motion.div key={s.n} {...fadeUp(0.05*i)}
                className="relative rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
                <div className="text-sm font-bold text-[#3BD6BF]">{s.n}</div>
                <div className="mt-1 text-[#0D2036] font-semibold">{s.t}</div>
                <p className="mt-1 text-slate-600">{s.d}</p>
                {i<2 && (
                  <motion.span
                    aria-hidden
                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-[#3BD6BF] to-transparent"
                    initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once:true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ (simple animated accordion) ===== */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h3 {...fadeUp()} className="text-2xl md:text-3xl font-extrabold text-[#0D2036] text-center">
            Frequently asked questions
          </motion.h3>

          <div className="mt-8 space-y-3">
            {[
              { q:"How do you price projects?", a:"Fixed-scope or retainer. We align on milestones, deliverables, and outcomes before kickoff." },
              { q:"How fast can we start?", a:"Usually within 1–2 weeks. Discovery can start sooner while we align on timelines." },
              { q:"Do you provide post-launch support?", a:"Yes. We handle monitoring, updates, analytics and iteration so your product keeps improving." },
            ].map((f,i)=>(
              <div key={i} className="rounded-xl border border-slate-200 bg-white">
                <button
                  onClick={()=>setOpen(open===i?null:i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-[#0D2036]"
                >
                  {f.q}
                  <FiChevronDown className={`transition ${open===i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {open===i && (
                    <motion.div
                      initial={{ height:0, opacity:0 }}
                      animate={{ height:"auto", opacity:1 }}
                      exit={{ height:0, opacity:0 }}
                      className="px-5 pb-4 text-slate-600"
                    >
                      {f.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="p-[2px] rounded-3xl bg-[linear-gradient(135deg,#3BD6BF_0%,#0D2036_50%,#3BD6BF_100%)] [background-size:200%_200%] animate-[gradient_8s_ease_infinite]">
            <motion.div
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}
              className="relative top-2 left-2 rounded-[22px] bg-white/85 backdrop-blur px-6 py-10 md:px-12 md:py-14"
            >
              <div className="grid md:grid-cols-3 items-center gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#0D2036]">
                    Have a project in mind?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    We’ll reply within 24 hours with next steps tailored to your goals.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <motion.a href="/contact" whileHover={{ y:-2, scale:1.02 }} whileTap={{ scale:0.98 }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3BD6BF] px-6 py-3 font-semibold text-[#0D2036]">
                    Contact Us <FiArrowRight />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
