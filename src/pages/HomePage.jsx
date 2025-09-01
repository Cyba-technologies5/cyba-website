// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import CTA from "../components/CTA";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Contact />
      <CTA />
     
    </>
  );
}
