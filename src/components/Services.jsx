import React from "react";
import {
  FiLayout, FiSearch, FiSmartphone, FiShoppingCart, FiPenTool, FiLifeBuoy, FiArrowRight
} from "react-icons/fi";
// src/components/Services.jsx
import webDesign from "../assets/web-design.png";
import seo       from "../assets/seo.png";
import appDev    from "../assets/app-dev.png";
import ecommerce from "../assets/ecommerce.png";
import uiux      from "../assets/ui-ux.png";
import support   from "../assets/support.png";


const services = [
  {
    title: "Custom Website Design",
    desc: "Brand-centric layouts that are fast, accessible, and conversion-focused.",
    icon: FiLayout,
    label: "Bespoke & On-Brand",
    img: webDesign,
  },
  {
    title: "Search Engine Optimization",
    desc: "Technical, on-page, and content SEO to rank and drive organic traffic.",
    icon: FiSearch,
    label: "Results-Driven SEO",
    img: seo,
  },
  {
    title: "Mobile App Development",
    desc: "High-performance apps for Android and iOS.",
    icon: FiSmartphone,
    label: "Mobile-First Engineering",
    img: appDev,
  },
  {
    title: "E-commerce Solutions",
    desc: "Stores, payments, shipping, and secure checkout integrations.",
    icon: FiShoppingCart,
    label: "Secure & Scalable",
    img: ecommerce,
  },
  {
    title: "UI/UX Design",
    desc: "Research, wireframes, prototypes, and delightful micro-interactions.",
    icon: FiPenTool,
    label: "User-First Design",
    img: uiux,
  },
  {
    title: "Maintenance & Support",
    desc: "Updates, monitoring, backups, and performance optimization.",
    icon: FiLifeBuoy,
    label: "24/7 Reliability",
    img: support,
  },
];


export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D2036] mb-10">Our Services</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
         {services.map(({ title, desc, icon: Icon, label, img }) => (
  <article
    key={title}
    className="group relative overflow-hidden h-[450px] rounded-3xl border border-slate-200 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
  >
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      style={{ backgroundImage: `url(${img})` }}
    >
    </div>

    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

    {/* Card content */}
    <div className="relative z-10 p-10 pb-20 text-white">
      {/* Icon */}
      <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/80 ring-8 ring-slate-100 text-[#3BD6BF]">
        <Icon className="text-3xl" />
      </div>

      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-8 mb-6">{desc}</p>

      {/* CTA */}
      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-2 rounded bg-[#0D2036] px-5 py-2 text-white transition hover:shadow hover:bg-[#0D2036]/70"
      >
        View Details <FiArrowRight className="opacity-80" />
      </a>
    </div>

    {/* Bottom accent bar */}
    <div
      className="
        absolute inset-x-0 bottom-0
        h-1.5 bg-[#3BD6BF]
        transition-all duration-300
        group-hover:h-10
      "
    >
      <div
        className="
          absolute inset-0 flex items-center justify-center
          px-4 text-sm font-semibold tracking-wide
          text-[#0D2036]
          opacity-0 translate-y-2
          transition-all duration-300
          group-hover:opacity-100 group-hover:translate-y-0
        "
      >
        {label}
      </div>
    </div>
  </article>
))}

        </div>
      </div>
    </section>
  );
}
