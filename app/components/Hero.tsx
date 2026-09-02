"use client";

import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { lang } = useLang();
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 bg-[#07070a] relative overflow-hidden"
    >
      {/* Soft glass orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-white/60 uppercase">
            {lang === "fr" ? "Disponible pour stage" : "Open to internships"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-[#f5f5f7]"
          style={{ textWrap: "balance" }}
        >
          Khalil Moughamir
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/55 max-w-xl mx-auto leading-relaxed"
        >
          {lang === "fr" ? (
            <>
              Étudiant en 3<sup>ème</sup> année de BUT Informatique, parcours AGED — actuellement
              en double diplôme à l’UQAC (Québec).
            </>
          ) : (
            <>
              3<sup>rd</sup> year Computer Science student (AGED track) — currently on a
              dual-degree exchange at UQAC (Québec).
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
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors duration-200"
          >
            {lang === "fr" ? "Voir mes projets" : "See my work"}
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/10 text-white text-sm font-semibold tracking-wide hover:bg-white/[0.1] hover:border-white/20 transition-all duration-200"
          >
            {lang === "fr" ? "Me contacter" : "Get in touch"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
