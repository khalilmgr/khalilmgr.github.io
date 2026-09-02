"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const links = {
  fr: [
    { id: "hero", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "projects", label: "Projets" },
    { id: "skills", label: "Compétences" },
    { id: "contact", label: "Contact" },
  ],
  en: [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
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

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4"
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between rounded-full transition-all duration-300 px-4 py-2.5 ${
          scrolled
            ? "bg-white/[0.06] backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        <a href="#hero" className="flex items-center pl-1">
          <Image
            src="/favicon.svg"
            alt="KM.dev"
            width={36}
            height={36}
            className="object-contain grayscale brightness-150 contrast-125"
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`relative block text-xs uppercase tracking-wider font-medium px-4 py-2 rounded-full transition-colors duration-200 ${
                      isActive ? "text-black" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white rounded-full"
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
            className="flex items-center gap-1.5 border border-white/10 hover:border-white/30 px-2.5 py-1.5 rounded-full transition-all duration-200"
            aria-label="Toggle language"
          >
            <span className={`text-base leading-none transition-opacity duration-200 ${lang === "fr" ? "opacity-100" : "opacity-30"}`}>🇫🇷</span>
            <span className="text-white/20 text-[10px]">·</span>
            <span className={`text-base leading-none transition-opacity duration-200 ${lang === "en" ? "opacity-100" : "opacity-30"}`}>🇬🇧</span>
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 border border-white/10 px-2 py-1.5 rounded-full transition-all duration-200"
            aria-label="Toggle language"
          >
            <span className={`text-sm leading-none transition-opacity duration-200 ${lang === "fr" ? "opacity-100" : "opacity-30"}`}>🇫🇷</span>
            <span className="text-white/20 text-[10px]">·</span>
            <span className={`text-sm leading-none transition-opacity duration-200 ${lang === "en" ? "opacity-100" : "opacity-30"}`}>🇬🇧</span>
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
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
            <ul className="flex flex-col gap-1 bg-[#101014] border border-white/10 rounded-3xl px-5 py-5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm uppercase tracking-wider font-medium block py-2 transition-colors duration-200 ${
                      active === link.id ? "text-white" : "text-white/50 hover:text-white"
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
