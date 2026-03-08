"use client";

import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { lang } = useLang();
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[#0f172a] relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fbbf24 1px, transparent 1px), linear-gradient(90deg, #fbbf24 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #fbbf24 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black uppercase tracking-tight mb-6"
        >
          Khalil{" "}
          <span style={{ WebkitTextStroke: "2px #fbbf24", color: "transparent" }}>
            Moughamir
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="font-mono text-base md:text-lg text-[#94a3b8] uppercase tracking-[0.2em]"
        >
          {lang === "fr" ? (
            <>
              Étudiant 2<sup>ème</sup> année &mdash;{" "}
              <span className="text-[#fbbf24]">BUT Informatique Parcours Data</span>
            </>
          ) : (
            <>
              2<sup>nd</sup> Year Student &mdash;{" "}
              <span className="text-[#fbbf24]">Computer Science, Data Track</span>
            </>
          )}
        </motion.p>
      </div>
    </section>
  );
}
