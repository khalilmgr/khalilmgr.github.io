"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { scrollToSection } from "../lib/scroll";

const links = {
  fr: [
    { id: "accueil", label: "Accueil" },
    { id: "a-propos", label: "À propos" },
    { id: "projets", label: "Projets" },
    { id: "competences", label: "Compétences" },
    { id: "contact", label: "Contact" },
  ],
  en: [
    { id: "accueil", label: "Home" },
    { id: "a-propos", label: "About" },
    { id: "projets", label: "Projects" },
    { id: "competences", label: "Skills" },
    { id: "contact", label: "Contact" },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("accueil");
  const { lang, toggle } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = links.fr.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = links[lang];
  const surfaceText = scrolled ? "text-white/70 hover:text-white" : "text-[#1c2f4a]/70 hover:text-[#1c2f4a]";
  const surfaceBorder = scrolled ? "border-white/20 hover:border-white/40" : "border-[#1c2f4a]/15 hover:border-[#1c2f4a]/30";
  const surfaceDivider = scrolled ? "text-white/30" : "text-[#1c2f4a]/25";
  const hamburgerBar = scrolled ? "bg-white" : "bg-[#1c2f4a]";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4"
    >
      <div className="w-full flex items-center justify-end">
        <div
          className={`hidden md:flex items-center gap-6 rounded-full transition-all duration-300 px-4 py-2.5 ${
            scrolled
              ? "bg-gradient-to-r from-[#1e5f8c]/90 to-[#1c2f4a]/90 backdrop-blur-xl backdrop-saturate-150 border border-[#1c2f4a]/30 shadow-[0_8px_32px_rgba(28,47,74,0.25)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                    className={`relative block text-xs uppercase tracking-wider font-medium px-4 py-2 rounded-full transition-colors duration-200 ${
                      isActive ? "text-white" : surfaceText
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[#1e5f8c] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            onClick={toggle}
            className={`flex items-center gap-1.5 border px-2.5 py-1.5 rounded-full transition-all duration-200 ${surfaceBorder}`}
            aria-label="Toggle language"
          >
            <span className={`text-base leading-none transition-opacity duration-200 ${lang === "fr" ? "opacity-100" : "opacity-30"}`}>🇫🇷</span>
            <span className={`text-[10px] ${surfaceDivider}`}>·</span>
            <span className={`text-base leading-none transition-opacity duration-200 ${lang === "en" ? "opacity-100" : "opacity-30"}`}>🇬🇧</span>
          </button>
        </div>

        <div
          className={`md:hidden flex items-center gap-2 rounded-full transition-all duration-300 px-2 py-1.5 ${
            scrolled
              ? "bg-gradient-to-r from-[#1e5f8c]/90 to-[#1c2f4a]/90 backdrop-blur-xl backdrop-saturate-150 border border-[#1c2f4a]/30 shadow-[0_8px_32px_rgba(28,47,74,0.25)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          <button
            onClick={toggle}
            className={`flex items-center gap-1.5 border px-2 py-1.5 rounded-full transition-all duration-200 ${surfaceBorder}`}
            aria-label="Toggle language"
          >
            <span className={`text-sm leading-none transition-opacity duration-200 ${lang === "fr" ? "opacity-100" : "opacity-30"}`}>🇫🇷</span>
            <span className={`text-[10px] ${surfaceDivider}`}>·</span>
            <span className={`text-sm leading-none transition-opacity duration-200 ${lang === "en" ? "opacity-100" : "opacity-30"}`}>🇬🇧</span>
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px transition-transform duration-300 ${hamburgerBar} ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-5 h-px transition-opacity duration-300 ${hamburgerBar} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px transition-transform duration-300 ${hamburgerBar} ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-2 mx-1"
          >
            <ul className="flex flex-col gap-1 bg-[#ede5d5] border border-[#d9c7a3]/60 rounded-3xl px-5 py-5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToSection(link.id); }}
                    className={`text-sm uppercase tracking-wider font-medium block py-2 transition-colors duration-200 ${
                      active === link.id ? "text-[#1e5f8c]" : "text-[#1c2f4a]/60 hover:text-[#1c2f4a]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
