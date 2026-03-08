"use client";

import { motion } from "framer-motion";

export default function PersonalProjects() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-[#0f172a]">
      <div className="max-w-xl mx-auto w-full text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#fbbf24] uppercase mb-4">
            — Projets Personnels
          </p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f1f5f9]">
            Football{" "}
            <span style={{ WebkitTextStroke: "2px #fbbf24", color: "transparent" }}>
              Data
            </span>
          </h1>
          <div className="mt-5 w-16 h-1 bg-[#fbbf24] rounded mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-[#94a3b8] text-base mb-14 leading-relaxed"
        >
          Découvrez mes projets en analyse football.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="https://github.com/khalilmgr/football-data-analysis"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-10 py-4 bg-[#fbbf24] text-[#0f172a] font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-[#f59e0b] transition-colors duration-200"
        >
          <GitHubIcon />
          Voir sur GitHub
          <span>→</span>
        </motion.a>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
