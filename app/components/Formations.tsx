"use client";

import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const formations = {
  fr: [
    {
      period: "2025 — 2026",
      status: "En cours",
      statusColor: "#22c55e",
      school: "IUT de Reims",
      degree: "BUT Informatique — Parcours Data",
      year: "2ème année",
      description:
        "Spécialisation en data science, analyse de données et visualisation. Compétences approfondies en Python, SQL avancé, Power BI, Tableau et machine learning.",
      icon: "📊",
    },
    {
      period: "2024 — 2025",
      status: "Validée",
      statusColor: "#fbbf24",
      school: "IUT de Reims",
      degree: "BUT Informatique",
      year: "1ère année",
      description:
        "Fondamentaux de l'informatique : algorithmique, bases de données, développement web (PHP, JavaScript, Symfony), systèmes Linux et travail en équipe agile.",
      icon: "💻",
    },
    {
      period: "2023 — 2024",
      status: "Obtenu — Mention Bien",
      statusColor: "#fbbf24",
      school: "Lycée Hugues Libergier, Reims",
      degree: "Baccalauréat Général",
      year: "Terminale",
      description:
        "Spécialités Mathématiques et Physique-Chimie. Baccalauréat obtenu avec la mention Bien.",
      icon: "🎓",
    },
  ],
  en: [
    {
      period: "2025 — 2026",
      status: "In progress",
      statusColor: "#22c55e",
      school: "IUT de Reims",
      degree: "Bachelor's in Computer Science — Data Track",
      year: "2nd year",
      description:
        "Specialization in data science, data analysis and visualization. In-depth skills in Python, advanced SQL, Power BI, Tableau and machine learning.",
      icon: "📊",
    },
    {
      period: "2024 — 2025",
      status: "Completed",
      statusColor: "#fbbf24",
      school: "IUT de Reims",
      degree: "Bachelor's in Computer Science",
      year: "1st year",
      description:
        "Computer science fundamentals: algorithms, databases, web development (PHP, JavaScript, Symfony), Linux systems and agile teamwork.",
      icon: "💻",
    },
    {
      period: "2023 — 2024",
      status: "Obtained — Honours",
      statusColor: "#fbbf24",
      school: "Lycée Hugues Libergier, Reims",
      degree: "French Baccalauréat (General)",
      year: "Final year",
      description:
        "Specialties in Mathematics and Physics-Chemistry. Baccalauréat obtained with honours (mention Bien).",
      icon: "🎓",
    },
  ],
};

export default function Formations() {
  const { lang } = useLang();
  const items = formations[lang];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-[#0f172a]">
      <div className="max-w-3xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#fbbf24] uppercase mb-4">
            {lang === "fr" ? "— Parcours académique" : "— Academic background"}
          </p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f1f5f9]">
            {lang === "fr" ? "Mes " : "My "}
            <span style={{ WebkitTextStroke: "2px #fbbf24", color: "transparent" }}>
              {lang === "fr" ? "Formations" : "Education"}
            </span>
          </h1>
          <div className="mt-5 w-16 h-1 bg-[#fbbf24] rounded mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#2d4a7a]" />

          <div className="flex flex-col gap-10">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div className="absolute left-0 top-6 w-12 h-12 flex items-center justify-center rounded-full bg-[#1a2744] border-2 border-[#2d4a7a] text-xl z-10">
                  {item.icon}
                </div>

                {/* Card */}
                <div className="bg-[#1a2744] border border-[#2d4a7a] rounded-2xl p-6 hover:border-[#fbbf24]/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="font-mono text-xs text-[#94a3b8] tracking-widest">
                      {item.period}
                    </span>
                    <span
                      className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                      style={{ color: item.statusColor, borderColor: item.statusColor + "40" }}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-black uppercase tracking-tight text-[#f1f5f9] mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-xs font-mono text-[#fbbf24] mb-3">
                    {item.school} — {item.year}
                  </p>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
