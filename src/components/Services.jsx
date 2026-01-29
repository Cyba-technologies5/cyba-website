// src/components/Services.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiLayout,
  FiSearch,
  FiSmartphone,
  FiShoppingCart,
  FiPenTool,
  FiLifeBuoy,
  FiArrowRight,
  FiX,
  FiCheckCircle,
  FiClock,
  FiShield,
  FiLayers,
} from "react-icons/fi";

import webDesign from "../assets/web-design.png";
import seo from "../assets/seo.png";
import appDev from "../assets/app-dev.png";
import ecommerce from "../assets/ecommerce.png";
import uiux from "../assets/ui-ux.png";
import support from "../assets/support.png";

const STORAGE_KEY = "cyba_service_interest";

export default function Services() {
  const services = useMemo(
    () => [
      {
        title: "Custom Website Design",
        desc: "Brand-centric layouts that are fast, accessible, and conversion-focused.",
        icon: FiLayout,
        label: "Bespoke & On-Brand",
        img: webDesign,
        details: {
          overview:
            "We design and build modern websites that look premium, load fast, and guide visitors to take action (call, message, book, buy).",
          deliverables: [
            "Custom design aligned to your brand",
            "Responsive layout (mobile → desktop)",
            "Fast performance + basic SEO setup",
            "Contact forms + WhatsApp/Call-to-action buttons",
            "Analytics + tracking setup (optional)",
          ],
          process: [
            "Discovery call (goals, audience, competitors)",
            "Wireframe & design direction",
            "Build + content integration",
            "Testing (mobile, speed, forms)",
            "Launch + handover + support",
          ],
          timeline: "5–14 days (depending on pages and features)",
          trust: [
            "Performance-first build (Core Web Vitals focus)",
            "Accessibility checks for better UX",
            "Clear milestones and updates",
          ],
          stack: ["React / Next.js", "Tailwind CSS", "Framer Motion", "Formspree / Custom API"],
        },
      },
      {
        title: "Search Engine Optimization",
        desc: "Technical, on-page, and content SEO to rank and drive organic traffic.",
        icon: FiSearch,
        label: "Results-Driven SEO",
        img: seo,
        details: {
          overview:
            "We improve your site structure, speed, and content so Google understands your pages and customers can find you.",
          deliverables: [
            "SEO audit + priority fixes list",
            "Technical SEO (speed, indexing, metadata)",
            "On-page optimisation (titles, headings, internal links)",
            "Local SEO setup (Google Business Profile guidance)",
            "Content plan for service pages & FAQs",
          ],
          process: [
            "Baseline audit + keyword research",
            "Fix technical issues + optimise pages",
            "Create/upgrade key pages (services, location, FAQs)",
            "Monthly reporting + continuous improvements",
          ],
          timeline: "Initial setup: 7–10 days • Growth: ongoing monthly",
          trust: [
            "Transparent reporting (what changed + why)",
            "Best-practice structure that lasts",
            "No shady tactics — sustainable SEO",
          ],
          stack: ["Search Console", "Analytics", "Lighthouse/PageSpeed", "On-page SEO tooling"],
        },
      },
      {
        title: "Mobile App Development",
        desc: "High-performance apps for Android and iOS.",
        icon: FiSmartphone,
        label: "Mobile-First Engineering",
        img: appDev,
        details: {
          overview:
            "From MVP to full product, we build apps that are smooth, reliable, and ready to scale.",
          deliverables: [
            "MVP planning (features, user flows, roadmap)",
            "App UI + core screens",
            "API integration (auth, payments, maps, etc.)",
            "Testing + release support",
            "Post-launch improvements",
          ],
          process: [
            "Scope + MVP definition",
            "UI/UX design + prototype",
            "Build + iterations",
            "QA testing + polish",
            "Launch + monitoring",
          ],
          timeline: "3–8 weeks (depending on complexity)",
          trust: [
            "MVP-first so you launch faster",
            "Quality checks + performance testing",
            "Clean architecture for future features",
          ],
          stack: ["React Native / Flutter (as needed)", "Node/Express", "Firebase / MongoDB"],
        },
      },
      {
        title: "E-commerce Solutions",
        desc: "Stores, payments, shipping, and secure checkout integrations.",
        icon: FiShoppingCart,
        label: "Secure & Scalable",
        img: ecommerce,
        details: {
          overview:
            "We build e-commerce experiences that feel trustworthy and convert — from product pages to checkout.",
          deliverables: [
            "Product catalogue + categories",
            "Mobile-friendly checkout flow",
            "Payment integrations (as needed)",
            "Shipping rules + notifications",
            "Security essentials + basic fraud protection",
          ],
          process: [
            "Store structure + product strategy",
            "Design product + checkout experience",
            "Integrations (payments, shipping, emails)",
            "Testing (cart, checkout, mobile)",
            "Launch + optimisation",
          ],
          timeline: "2–5 weeks (depending on products & integrations)",
          trust: [
            "Checkout UX designed to reduce drop-offs",
            "Secure setup and best-practice configurations",
            "Analytics so you track conversions",
          ],
          stack: ["Shopify / Custom build", "Payment providers", "Email automations", "Analytics"],
        },
      },
      {
        title: "UI/UX Design",
        desc: "Research, wireframes, prototypes, and delightful micro-interactions.",
        icon: FiPenTool,
        label: "User-First Design",
        img: uiux,
        details: {
          overview:
            "We design interfaces that look premium and feel effortless — helping users complete tasks quickly.",
          deliverables: [
            "User flows + information architecture",
            "Wireframes (low → high fidelity)",
            "Clickable prototype for approval",
            "Design system (colours, typography, components)",
            "Handoff-ready assets for development",
          ],
          process: [
            "User goals + competitor scan",
            "Wireframes + structure",
            "Visual design + prototype",
            "Iteration based on feedback",
            "Developer handoff",
          ],
          timeline: "5–15 days depending on screens",
          trust: [
            "Design decisions explained (not vibes)",
            "Consistency via a mini design system",
            "Prototype to align before build",
          ],
          stack: ["Figma", "Design systems", "Prototyping", "Accessibility checks"],
        },
      },
      {
        title: "Maintenance & Support",
        desc: "Updates, monitoring, backups, and performance optimisation.",
        icon: FiLifeBuoy,
        label: "24/7 Reliability",
        img: support,
        details: {
          overview:
            "We keep your website/app stable, secure, and fast — so you focus on your business.",
          deliverables: [
            "Routine updates + dependency checks",
            "Uptime monitoring + issue response",
            "Backups and recovery plan",
            "Performance optimisation",
            "Small content changes (plan-based)",
          ],
          process: [
            "Assess current setup",
            "Set monitoring + backup schedule",
            "Apply updates safely",
            "Monthly health checks",
            "Continuous improvement",
          ],
          timeline: "Ongoing (monthly/quarterly plans)",
          trust: [
            "Proactive monitoring (not just reactive fixes)",
            "Security-first practices",
            "Clear support SLAs by plan",
          ],
          stack: ["Monitoring tools", "Backups", "CI/CD best practices", "Performance audits"],
        },
      },
    ],
    []
  );

  const [active, setActive] = useState(null);

  // Close modal on ESC + lock body scroll
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);

    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  const openModal = (service) => setActive(service);

  const requestQuote = (serviceTitle) => {
  setActive(null);

  // Put the service into the hash so Contact.jsx can read it
  window.location.hash = `contact?service=${encodeURIComponent(serviceTitle)}`;

  // Scroll to the contact section (manual scroll because the hash now includes ?service)
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

  return (
    <section id="services" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D2036] mb-10">
          Our Services
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative overflow-hidden h-[450px] rounded-3xl border border-slate-200 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${s.img})` }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                {/* Card content */}
                <div className="relative z-10 p-10 pb-20 text-white">
                  <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/80 ring-8 ring-slate-100 text-[#3BD6BF]">
                    <Icon className="text-3xl" />
                  </div>

                  <h3 className="text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-8 mb-6">{s.desc}</p>

                  <button
                    type="button"
                    onClick={() => openModal(s)}
                    className="mt-6 inline-flex items-center gap-2 rounded bg-[#0D2036] px-5 py-2 text-white transition hover:shadow hover:bg-[#0D2036]/70"
                  >
                    View Details <FiArrowRight className="opacity-80" />
                  </button>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#3BD6BF] transition-all duration-300 group-hover:h-10">
                  <div className="absolute inset-0 flex items-center justify-center px-4 text-sm font-semibold tracking-wide text-[#0D2036] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {s.label}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[9999] overflow-y-auto px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <button
              aria-label="Close modal"
              className="absolute inset-0 bg-black/60"
              onClick={() => setActive(null)}
              type="button"
            />

            {/* Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
              initial={{ y: 18, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 18, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              {/* Header image */}
              <div className="relative h-40 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${active.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D2036]/90 via-[#0D2036]/70 to-[#0D2036]/30" />

                <div className="relative z-10 flex h-full items-end justify-between px-6 pb-5 text-white">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                      <active.icon className="text-2xl text-[#3BD6BF]" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-extrabold leading-tight">
                        {active.title}
                      </h3>
                      <p className="text-white/80 text-sm mt-1">{active.desc}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActive(null)}
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition"
                    aria-label="Close"
                  >
                    <FiX className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-6 md:px-8 md:py-7">
                <p className="text-slate-700">{active.details.overview}</p>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {/* Deliverables */}
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <div className="flex items-center gap-2 text-[#0D2036] font-bold">
                      <FiLayers /> What you get
                    </div>
                    <ul className="mt-3 space-y-2 text-slate-700">
                      {active.details.deliverables.map((d) => (
                        <li key={d} className="flex gap-2">
                          <FiCheckCircle className="mt-0.5 text-[#3BD6BF]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trust block */}
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <div className="flex items-center gap-2 text-[#0D2036] font-bold">
                      <FiShield /> Why clients trust this
                    </div>
                    <ul className="mt-3 space-y-2 text-slate-700">
                      {active.details.trust.map((t) => (
                        <li key={t} className="flex gap-2">
                          <FiCheckCircle className="mt-0.5 text-[#3BD6BF]" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex items-start gap-2 rounded-xl bg-slate-50 p-4 text-slate-700">
                      <FiClock className="mt-0.5 text-[#0D2036]" />
                      <div>
                        <p className="font-semibold text-[#0D2036]">Typical timeline</p>
                        <p className="text-sm">{active.details.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process + Stack */}
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <div className="text-[#0D2036] font-bold">How we work</div>
                    <ol className="mt-3 space-y-2 text-slate-700 list-decimal pl-5">
                      {active.details.process.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <div className="text-[#0D2036] font-bold">Tools & stack</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {active.details.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl bg-[#0D2036] text-white p-4">
                      <p className="font-semibold">Want to see a relevant demo?</p>
                      <p className="text-sm text-white/80 mt-1">
                        We can share sample deliverables (wireframes, prototypes, or demo builds)
                        aligned to your service during the call.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => requestQuote(active.title)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3BD6BF] px-6 py-3 font-semibold text-[#0D2036] hover:opacity-95"
                  >
                    Request Quote <FiArrowRight />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  Tip: Click “Request Quote” and your selected service will be added to the contact form automatically.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
