"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjetsPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-[#0f172a]">
      <div className="max-w-3xl mx-auto w-full text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#fbbf24] uppercase mb-4">
            — Mes Réalisations
          </p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f1f5f9]">
            Mes{" "}
            <span style={{ WebkitTextStroke: "2px #fbbf24", color: "transparent" }}>
              Projets
            </span>
          </h1>
          <div className="mt-5 w-16 h-1 bg-[#fbbf24] rounded mx-auto" />
        </motion.div>

        {/* Two buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/projets/academiques"
              className="group flex flex-col items-center gap-4 bg-[#1a2744] border border-[#2d4a7a] hover:border-[#fbbf24]/60 rounded-2xl p-10 transition-all duration-300 hover:translate-y-[-3px] w-64"
            >
              <div className="w-16 h-16 rounded-xl bg-[#0f172a] border border-[#2d4a7a] group-hover:border-[#fbbf24]/50 flex items-center justify-center transition-all duration-200">
                <AcadIcon />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-[#94a3b8] uppercase mb-1">Catégorie</p>
                <p className="text-base font-bold uppercase tracking-wide text-[#f1f5f9] group-hover:text-[#fbbf24] transition-colors duration-200">
                  Académiques
                </p>
              </div>
              <span className="font-mono text-xs text-[#2d4a7a] group-hover:text-[#fbbf24] transition-colors duration-200">
                Explorer →
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            <Link
              href="/projets/personnels"
              className="group flex flex-col items-center gap-4 bg-[#1a2744] border border-[#fbbf24]/30 hover:border-[#fbbf24]/70 rounded-2xl p-10 transition-all duration-300 hover:translate-y-[-3px] w-64"
            >
              <div className="w-16 h-16 rounded-xl bg-[#0f172a] border border-[#fbbf24]/30 group-hover:border-[#fbbf24]/60 flex items-center justify-center transition-all duration-200">
                <FootballIcon />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-[#94a3b8] uppercase mb-1">Catégorie</p>
                <p className="text-base font-bold uppercase tracking-wide text-[#f1f5f9] group-hover:text-[#fbbf24] transition-colors duration-200">
                  Personnels
                </p>
              </div>
              <span className="font-mono text-xs text-[#fbbf24]/50 group-hover:text-[#fbbf24] transition-colors duration-200">
                Explorer →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AcadIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function FootballIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a10 10 0 0 1 6.6 2.5L12 8 5.4 4.5A10 10 0 0 1 12 2z" />
      <path d="M2.5 8.5L6 12l-3.5 4" />
      <path d="M21.5 8.5L18 12l3.5 4" />
      <path d="M6 20l3-4h6l3 4" />
      <path d="M6 12h12" />
    </svg>
  );
}
