// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

// If you keep previews in /src/assets/projects, import like this:
// import proj1 from "../assets/projects/proj1.jpg";
// import proj2 from "../assets/projects/proj2.jpg";
// import proj3 from "../assets/projects/proj3.jpg";

const projects = [
  {
    title: "Retail Analytics Dashboard",
    desc: "Data-rich BI app with role-based access and realtime KPIs.",
    // img: proj1,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop", // placeholder
    href: "#",
    tags: ["React", "Tailwind", "Supabase"],
  },
  {
    title: "Fintech Mobile Onboarding",
    desc: "KYC flow, card linking, and instant spend insights.",
    // img: proj2,
    img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200&auto=format&fit=crop",
    href: "#",
    tags: ["React Native", "Node", "Stripe"],
  },
  {
    title: "E-commerce Revamp",
    desc: "Headless storefront with lightning-fast page loads.",
    // img: proj3,
    img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop",
    href: "#",
    tags: ["Next.js", "Tailwind", "Shopify"],
  },
];

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, delay: d },
});

export default function Projects() {
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
                {/* subtle gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#0D2036]">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.href}
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#0D2036] px-4 py-2 text-white transition hover:brightness-110"
                >
                  View Case Study <FiExternalLink className="opacity-80" />
                </a>
              </div>

              {/* bottom accent bar like Services */}
              <div className="h-1.5 w-full bg-[#3BD6BF] transition-all duration-300 group-hover:h-2" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
