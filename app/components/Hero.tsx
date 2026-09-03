"use client";

import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { scrollToSection } from "../lib/scroll";

export default function Hero() {
  const { lang } = useLang();
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center px-6 bg-[#f7f5f0] relative overflow-hidden"
    >
      {/* Soft glass orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #3f8fa8 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #1e5f8c 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-[#1c2f4a]"
          style={{ textWrap: "balance" }}
        >
          Khalil Moughamir
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="text-lg md:text-xl text-[#1c2f4a]/60 max-w-xl mx-auto leading-relaxed"
        >
          {lang === "fr" ? (
            <>
              Étudiant en 3<sup>ème</sup> année de BUT Informatique, actuellement en double
              diplôme à l’Université du Québec à Chicoutimi (Canada).
            </>
          ) : (
            <>
              3<sup>rd</sup> year Computer Science student, currently on a dual-degree
              exchange at the Université du Québec à Chicoutimi (Canada).
            </>
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projets"
            onClick={(e) => { e.preventDefault(); scrollToSection("projets"); }}
            className="px-7 py-3.5 rounded-full bg-[#1e5f8c] text-white text-sm font-semibold tracking-wide hover:bg-[#1c2f4a] transition-colors duration-200"
          >
            {lang === "fr" ? "Voir mes projets" : "See my work"}
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
            className="px-7 py-3.5 rounded-full bg-white/50 backdrop-blur-xl border border-[#d9c7a3]/50 text-[#1c2f4a] text-sm font-semibold tracking-wide hover:bg-white/70 hover:border-[#3f8fa8]/60 transition-all duration-200"
          >
            {lang === "fr" ? "Me contacter" : "Get in touch"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
