// src/components/Projects.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiX,
  FiCheckCircle,
  FiClock,
  FiLayers,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, delay: d },
});

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        title: "Retail Analytics Dashboard",
        desc: "Data-rich BI app with role-based access and realtime KPIs.",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
        tags: ["React", "Tailwind", "Supabase"],
        caseStudy: {
          overview:
            "A business intelligence dashboard for retail teams to track sales, inventory, and performance across branches in real time.",
          goals: [
            "Single dashboard for multi-branch performance",
            "Role-based access for admins, managers, and staff",
            "Realtime KPIs + exportable reports",
          ],
          features: [
            "Realtime KPI tiles + trend charts",
            "Branch filters + date range drill-downs",
            "Role-based access (RBAC)",
            "CSV/PDF export for weekly reporting",
            "Audit logs for critical actions",
          ],
          timeline: "MVP: 2–3 weeks • Iterations: ongoing",
          trust: [
            "Secure auth + RBAC to protect data",
            "Optimised queries for fast dashboards",
            "Clean UI that executives can read quickly",
          ],
          stack: ["React", "Tailwind", "Supabase", "Charts", "RBAC"],
          ctaText: "Request a similar dashboard",
        },
      },
      {
        title: "Fintech Mobile Onboarding",
        desc: "KYC flow, card linking, and instant spend insights.",
        img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200&auto=format&fit=crop",
        tags: ["React Native", "Node", "Stripe"],
        caseStudy: {
          overview:
            "A mobile onboarding experience for a fintech product focused on fast sign-up, verification, and first transaction confidence.",
          goals: [
            "Reduce onboarding drop-offs",
            "Smooth KYC flow with clear progress",
            "Instant spend insights after linking a card",
          ],
          features: [
            "Step-by-step onboarding with progress indicator",
            "KYC document capture + validation UX",
            "Card linking flow + secure token storage",
            "Spend insights (categories + trends)",
            "Error handling built for trust (clear, human messages)",
          ],
          timeline: "Prototype: 1 week • MVP: 4–6 weeks",
          trust: [
            "Security-first UX (privacy cues, confirmations)",
            "Robust validation to prevent incomplete submissions",
            "Mobile performance tuned for low-end devices",
          ],
          stack: ["React Native", "Node/Express", "Stripe", "Secure storage", "Analytics"],
          ctaText: "Request a fintech onboarding demo",
        },
      },
      {
        title: "E-commerce Revamp",
        desc: "Headless storefront with lightning-fast page loads.",
        img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop",
        tags: ["Next.js", "Tailwind", "Shopify"],
        caseStudy: {
          overview:
            "A headless storefront rebuild to increase conversion by improving speed, product discovery, and checkout confidence.",
          goals: [
            "Improve site speed and Core Web Vitals",
            "Enhance product discovery and filtering",
            "Reduce cart abandonment with better UX",
          ],
          features: [
            "Fast category + search with filters",
            "Optimised product pages (images + structured data)",
            "Cart + checkout UX improvements",
            "Email notifications + order status",
            "Analytics events for funnel tracking",
          ],
          timeline: "2–5 weeks depending on catalogue size",
          trust: [
            "Performance-first build (speed sells)",
            "UX designed to reduce drop-offs",
            "Tracking so decisions are data-driven",
          ],
          stack: ["Next.js", "Tailwind", "Shopify", "SEO schema", "Analytics"],
          ctaText: "Request an e-commerce revamp quote",
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

  const openModal = (project) => setActive(project);

  const requestQuoteFromProject = (projectTitle) => {
    // If you want to prefill your homepage contact form via hash like you did for services:
    // window.location.hash = `contact?service=${encodeURIComponent(projectTitle)}`;
    // or better: use "service" field as "Project: <title>"
    window.location.hash = `contact?service=${encodeURIComponent(`Project: ${projectTitle}`)}`;

    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

    setActive(null);
  };

  return (
    <section id="projects" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp()} className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2036]">
            Ongoing Projects
          </h2>
          <p className="mt-3 text-slate-600">
            A few things we’re working on — focused on speed, polish, and results.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              {...fadeUp(0.05 * i)}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#0D2036]">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => openModal(p)}
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#0D2036] px-4 py-2 text-white transition hover:brightness-110"
                >
                  View Case Study <FiExternalLink className="opacity-80" />
                </button>
              </div>

              <div className="h-1.5 w-full bg-[#3BD6BF] transition-all duration-300 group-hover:h-2" />
            </motion.article>
          ))}
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
              className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
              initial={{ y: 18, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 18, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              {/* Header image */}
              <div className="relative h-44 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${active.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D2036]/90 via-[#0D2036]/70 to-[#0D2036]/25" />

                <div className="relative z-10 flex h-full items-end justify-between px-6 pb-5 text-white">
                  <div>
                    <h3 className="text-2xl font-extrabold leading-tight">
                      {active.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">{active.desc}</p>
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
                <p className="text-slate-700">{active.caseStudy.overview}</p>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <div className="flex items-center gap-2 text-[#0D2036] font-bold">
                      <FiLayers /> Goals
                    </div>
                    <ul className="mt-3 space-y-2 text-slate-700">
                      {active.caseStudy.goals.map((g) => (
                        <li key={g} className="flex gap-2">
                          <FiCheckCircle className="mt-0.5 text-[#3BD6BF]" />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <div className="flex items-center gap-2 text-[#0D2036] font-bold">
                      <FiShield /> Why it works
                    </div>
                    <ul className="mt-3 space-y-2 text-slate-700">
                      {active.caseStudy.trust.map((t) => (
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
                        <p className="text-sm">{active.caseStudy.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features + Stack */}
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <div className="text-[#0D2036] font-bold">Key features</div>
                    <ul className="mt-3 space-y-2 text-slate-700">
                      {active.caseStudy.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <FiCheckCircle className="mt-0.5 text-[#3BD6BF]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <div className="text-[#0D2036] font-bold">Tools & stack</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {active.caseStudy.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl bg-[#0D2036] text-white p-4">
                      <p className="font-semibold">Want something similar?</p>
                      <p className="text-sm text-white/80 mt-1">
                        Tell us your goal and we’ll share a relevant approach + deliverables on a quick call.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => requestQuoteFromProject(active.title)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3BD6BF] px-6 py-3 font-semibold text-[#0D2036] hover:opacity-95"
                  >
                    {active.caseStudy.ctaText} <FiArrowRight />
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
                  Tip: Clicking the button above will take you to the contact form with this project pre-selected.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
