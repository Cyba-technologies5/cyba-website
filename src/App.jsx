// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Header onOpenMobile={() => setMobileOpen(true)} />
<MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}
