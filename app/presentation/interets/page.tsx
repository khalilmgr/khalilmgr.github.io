"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "../../context/LanguageContext";
import TravelMap from "../../components/TravelMap";

const interets = {
  fr: [
    {
      icon: "✈️",
      titre: "Voyages",
      description:
        "Explorer de nouvelles cultures, découvrir d'autres façons de vivre et de penser. Les voyages élargissent la perspective et nourrissent la créativité — une qualité que je retrouve dans mon approche de la data.",
    },
    {
      icon: "🤖",
      titre: "Intelligence artificielle",
      description:
        "Fasciné par les possibilités offertes par l'IA, notamment dans le domaine sportif. Comprendre comment les modèles peuvent analyser des performances, détecter des patterns et anticiper des résultats est au cœur de mes ambitions.",
    },
    {
      icon: "⚡",
      titre: "Automatisation",
      description:
        "Concevoir des systèmes intelligents qui éliminent les tâches répétitives, optimisent les processus et libèrent du temps pour ce qui compte vraiment. L'automatisation est pour moi une façon de travailler mieux, pas plus.",
    },
    {
      icon: "🚀",
      titre: "Entrepreneuriat",
      description:
        "L'envie de créer, de bâtir des projets qui ont du sens et de l'impact. Le sport m'a appris que les grands résultats sont le fruit d'une vision claire, d'une équipe solide et d'une exécution sans relâche — des valeurs que je veux appliquer dans l'entrepreneuriat.",
    },
  ],
  en: [
    {
      icon: "✈️",
      titre: "Travel",
      description:
        "Exploring new cultures, discovering different ways of living and thinking. Travel broadens perspective and nurtures creativity — a quality I bring to my approach to data.",
    },
    {
      icon: "🤖",
      titre: "Artificial Intelligence",
      description:
        "Fascinated by the possibilities offered by AI, especially in sport. Understanding how models can analyze performance, detect patterns and predict outcomes is at the heart of my ambitions.",
    },
    {
      icon: "⚡",
      titre: "Automation",
      description:
        "Designing intelligent systems that eliminate repetitive tasks, optimize processes and free up time for what truly matters. Automation is, for me, a way to work smarter, not harder.",
    },
    {
      icon: "🚀",
      titre: "Entrepreneurship",
      description:
        "The desire to create, to build projects that have meaning and impact. Sport taught me that great results come from a clear vision, a solid team and relentless execution — values I want to apply to entrepreneurship.",
    },
  ],
};

export default function InteretsPage() {
  const { lang } = useLang();
  const list = interets[lang];

  return (
    <main className="min-h-screen pt-24 pb-24 bg-[#0f172a] flex flex-col items-center">
      <div className="max-w-4xl w-full px-6">

        {/* Retour */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/presentation"
            className="font-mono text-xs tracking-widest text-[#94a3b8] hover:text-[#fbbf24] uppercase transition-colors duration-200"
          >
            {lang === "fr" ? "← Retour à la présentation" : "← Back to profile"}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#fbbf24] uppercase mb-4">
            {lang === "fr" ? "— Ce qui m'anime" : "— What drives me"}
          </p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f1f5f9]">
            {lang === "fr" ? "Mes centres" : "My"}{" "}
            <span style={{ WebkitTextStroke: "2px #fbbf24", color: "transparent" }}>
              {lang === "fr" ? "d'intérêt" : "Interests"}
            </span>
          </h1>
          <div className="mt-5 w-16 h-1 bg-[#fbbf24] rounded mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {list.map((item, i) => (
            <>
              <motion.div
                key={item.titre}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-[#1a2744] border border-[#2d4a7a] rounded-2xl p-8 flex gap-6 items-start hover:border-[#fbbf24]/20 transition-all duration-300"
              >
                <span className="text-4xl flex-shrink-0 mt-1">{item.icon}</span>
                <div>
                  <h2 className="text-[#f1f5f9] font-bold text-lg uppercase tracking-wide mb-3">
                    {item.titre}
                  </h2>
                  <p className="text-[#94a3b8] text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
              {i === 0 && <TravelMap />}
            </>
          ))}
        </div>

      </div>
    </main>
  );
}
