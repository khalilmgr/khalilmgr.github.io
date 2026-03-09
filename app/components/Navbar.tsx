"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const links = {
  fr: [
    { label: "Accueil", href: "/" },
    { label: "Compétences", href: "/competences" },
    { label: "Projets", href: "/projets" },
    { label: "Présentation", href: "/presentation" },
    { label: "Contact", href: "/contact" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "Skills", href: "/competences" },
    { label: "Projects", href: "/projets" },
    { label: "About", href: "/presentation" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggle } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinks = links[lang];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/90 backdrop-blur-md border-b border-[#2d4a7a]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/favicon.svg"
            alt="KM.dev"
            width={52}
            height={52}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-xs uppercase tracking-wider font-medium transition-colors duration-200 relative pb-1 ${
                      active ? "text-[#fbbf24]" : "text-[#94a3b8] hover:text-[#fbbf24]"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-px bg-[#fbbf24] rounded-full"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={toggle}
            className="flex items-center gap-1.5 border border-[#2d4a7a] hover:border-[#fbbf24]/60 px-2.5 py-1.5 rounded transition-all duration-200"
            aria-label="Toggle language"
          >
            <span className={`text-base leading-none transition-opacity duration-200 ${lang === "fr" ? "opacity-100" : "opacity-30"}`}>🇫🇷</span>
            <span className="text-[#2d4a7a] text-[10px]">·</span>
            <span className={`text-base leading-none transition-opacity duration-200 ${lang === "en" ? "opacity-100" : "opacity-30"}`}>🇬🇧</span>
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 border border-[#2d4a7a] hover:border-[#fbbf24]/60 px-2 py-1.5 rounded transition-all duration-200"
            aria-label="Toggle language"
          >
            <span className={`text-sm leading-none transition-opacity duration-200 ${lang === "fr" ? "opacity-100" : "opacity-30"}`}>🇫🇷</span>
            <span className="text-[#2d4a7a] text-[10px]">·</span>
            <span className={`text-sm leading-none transition-opacity duration-200 ${lang === "en" ? "opacity-100" : "opacity-30"}`}>🇬🇧</span>
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-[#fbbf24] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#fbbf24] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#fbbf24] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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
            className="md:hidden overflow-hidden bg-[#1a2744] border-b border-[#2d4a7a]"
          >
            <ul className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm uppercase tracking-wider font-medium block py-1 transition-colors duration-200 ${
                      isActive(link.href) ? "text-[#fbbf24]" : "text-[#94a3b8] hover:text-[#fbbf24]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
