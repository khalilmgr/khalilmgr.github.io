"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Presentation() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#fbbf24] uppercase mb-8">
            — Qui suis-je ?
          </p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f1f5f9]">
            Ma{" "}
            <span style={{ WebkitTextStroke: "2px #fbbf24", color: "transparent" }}>
              Présentation
            </span>
          </h1>
          <div className="mt-6 w-16 h-1 bg-[#fbbf24] rounded mx-auto" />
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20 text-center"
        >
          <p className="text-[#f1f5f9] text-lg leading-relaxed mb-8">
            Je m'appelle <span className="text-[#fbbf24] font-semibold">Khalil Moughamir</span>, j'ai <span className="text-[#fbbf24] font-semibold">20 ans</span> et je suis étudiant en
            2ème année de BUT Informatique parcours Data à l'IUT de Reims. Passionné par la data et le football,
            mon parcours est le résultat de deux univers exigeants qui se sont nourris l'un l'autre — le sport
            de haut niveau et l'informatique.
          </p>
          <p className="text-[#94a3b8] text-base leading-relaxed">
            Cette expérience du haut niveau m'a naturellement orienté vers{" "}
            <span className="text-[#fbbf24] font-semibold">l'analyse de données appliquée au football</span>.
            Connaître les exigences du terrain de l'intérieur me donne une perspective unique : je ne veux pas
            seulement traiter des chiffres, je veux comprendre ce qu'ils racontent sur la performance, l'effort
            et la tactique.
          </p>
        </motion.div>

        {/* Boutons de navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            href="/presentation/parcours"
            className="group bg-[#1a2744] border border-[#2d4a7a] hover:border-[#fbbf24]/50 rounded-xl px-10 py-8 transition-all duration-300 hover:translate-y-[-2px] text-center"
          >
            <span className="block font-mono text-[10px] tracking-[0.3em] text-[#fbbf24] uppercase mb-3">
              — Parcours sportif
            </span>
            <span className="block text-[#f1f5f9] font-bold text-sm uppercase tracking-wide group-hover:text-[#fbbf24] transition-colors duration-200">
              Découvrir mon parcours de sportif de haut niveau
            </span>
          </Link>

          <Link
            href="/presentation/interets"
            className="group bg-[#1a2744] border border-[#2d4a7a] hover:border-[#fbbf24]/50 rounded-xl px-10 py-8 transition-all duration-300 hover:translate-y-[-2px] text-center"
          >
            <span className="block font-mono text-[10px] tracking-[0.3em] text-[#fbbf24] uppercase mb-3">
              — Centres d'intérêt
            </span>
            <span className="block text-[#f1f5f9] font-bold text-sm uppercase tracking-wide group-hover:text-[#fbbf24] transition-colors duration-200">
              Mes centres d'intérêt
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
