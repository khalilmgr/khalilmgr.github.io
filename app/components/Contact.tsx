"use client";

import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { lang } = useLang();
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-16 bg-[#0f172a] relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #fbbf24 0%, transparent 70%)" }}
      />

      <div className="relative z-10 text-center max-w-lg mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#fbbf24] uppercase mb-4">
            — Contact
          </p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f1f5f9]">
            {lang === "fr" ? (
              <>
                Me{" "}
                <span style={{ WebkitTextStroke: "2px #fbbf24", color: "transparent" }}>
                  Contacter
                </span>
              </>
            ) : (
              <>
                Get{" "}
                <span style={{ WebkitTextStroke: "2px #fbbf24", color: "transparent" }}>
                  In Touch
                </span>
              </>
            )}
          </h1>
          <div className="mt-5 w-16 h-1 bg-[#fbbf24] rounded mx-auto" />
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <motion.a
            href="mailto:khalil.moughamir@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#fbbf24] text-[#0f172a] font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-[#f59e0b] transition-colors duration-200"
          >
            <EmailIcon />
            khalil.moughamir@gmail.com
          </motion.a>

          <motion.a
            href="https://github.com/khalilmgr"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 px-8 py-4 border border-[#2d4a7a] text-[#94a3b8] font-bold uppercase tracking-widest text-sm rounded-xl hover:border-[#fbbf24] hover:text-[#fbbf24] transition-all duration-200"
          >
            <GitHubIcon />
            khalilmgr
          </motion.a>
        </div>

        {/* CV Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.44 }}
          className="mt-6 flex justify-center"
        >
          <a
            href={lang === "fr" ? "/CV_Khalil_Moughamir_FR.pdf" : "/CV_Khalil_Moughamir_EN.pdf"}
            download
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#fbbf24]/40 text-[#fbbf24] font-bold uppercase tracking-widest text-sm rounded-xl hover:border-[#fbbf24] hover:bg-[#fbbf24]/5 transition-all duration-200"
          >
            <DownloadIcon />
            {lang === "fr" ? "Télécharger mon CV" : "Download my CV"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
