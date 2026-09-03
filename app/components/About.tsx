"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLang, type Lang } from "../context/LanguageContext";
import TravelMap from "./TravelMap";

/* ---------------------------------- data ---------------------------------- */

const bio = {
  fr: [
    <>
      Je m’appelle <span className="text-white font-medium">Khalil Moughamir</span>, j’ai{" "}
      <span className="text-white font-medium">20 ans</span> et je suis étudiant en 3ème année de BUT
      Informatique, parcours Data, à l’IUT de Reims, actuellement en double diplôme à l’
      <span className="text-white font-medium">Université du Québec à Chicoutimi</span>. Mon parcours
      est le résultat de deux univers exigeants qui se sont nourris l’un l’autre : le sport de haut
      niveau et l’informatique. Cela m’a naturellement orienté vers{" "}
      <span className="text-white font-medium">l’analyse de données appliquée au football</span>, avec
      un objectif clair : rendre la donnée facile à comprendre, aider les clubs à prendre de meilleures
      décisions, et automatiser les systèmes qui la traitent.
    </>,
  ],
  en: [
    <>
      My name is <span className="text-white font-medium">Khalil Moughamir</span>, I’m{" "}
      <span className="text-white font-medium">20 years old</span> and a 3rd year Computer Science
      student, Data track, at IUT de Reims, currently on a dual-degree exchange at the{" "}
      <span className="text-white font-medium">Université du Québec à Chicoutimi</span>. My path is the
      result of two demanding worlds that have shaped each other: high-level sport and computer science.
      That naturally drew me toward{" "}
      <span className="text-white font-medium">data analysis applied to football</span>, with a clear
      goal: make data easy to understand, help clubs make better decisions, and automate the systems
      that process it.
    </>,
  ],
};

type Formation = {
  period: string;
  degree: string;
  subtitle: string;
  logo: string | null;
  logoGrayscale?: boolean;
};

const formations: { fr: Formation[]; en: Formation[] } = {
  fr: [
    {
      period: "2026 – 2027",
      degree: "Bidiplomation · BUT Informatique / Baccalauréat en informatique",
      subtitle: "Université du Québec à Chicoutimi",
      logo: "/logos/uqac.png",
      logoGrayscale: true,
    },
    {
      period: "2025 – 2026",
      degree: "BUT Informatique · Parcours Data",
      subtitle: "IUT de Reims-Châlons-Charleville · Major de promo",
      logo: "/logos/urca.png",
    },
    {
      period: "2024 – 2025",
      degree: "BUT Informatique",
      subtitle: "IUT de Reims-Châlons-Charleville",
      logo: "/logos/urca.png",
    },
    {
      period: "2023 – 2024",
      degree: "Baccalauréat Général",
      subtitle:
        "Lycée Hugues Libergier, Reims · Spécialités Mathématiques et Physique-Chimie, mention Bien",
      logo: null,
    },
  ],
  en: [
    {
      period: "2026 – 2027",
      degree: "Dual degree · BUT Informatique / Bachelor's in Computer Science",
      subtitle: "Université du Québec à Chicoutimi",
      logo: "/logos/uqac.png",
      logoGrayscale: true,
    },
    {
      period: "2025 – 2026",
      degree: "Bachelor's in Computer Science · Data Track",
      subtitle: "IUT de Reims-Châlons-Charleville · Top of class",
      logo: "/logos/urca.png",
    },
    {
      period: "2024 – 2025",
      degree: "Bachelor's in Computer Science",
      subtitle: "IUT de Reims-Châlons-Charleville",
      logo: "/logos/urca.png",
    },
    {
      period: "2023 – 2024",
      degree: "French Baccalauréat (General)",
      subtitle:
        "Lycée Hugues Libergier, Reims · Mathematics and Physics-Chemistry specialties, with honours",
      logo: null,
    },
  ],
};

const photos = [
  "/photos/IMG_0445.jpg",
  "/photos/IMG_0454.JPG",
  "/photos/IMG_6105 2.JPG",
  "/photos/IMG_7789 2.jpg",
];

const sportifTimeline = {
  fr: [
    {
      periode: "2011 – 2017",
      etape: "École de football",
      detail: "U6 → U11 · Stade de Reims",
    },
    {
      periode: "2017 – 2021",
      etape: "Préformation",
      detail: "U12 → U15 · Stade de Reims",
    },
    {
      periode: "2021 – 2022",
      etape: "Centre de formation",
      detail: "Convention 2 ans · Stade de Reims",
    },
  ],
  en: [
    {
      periode: "2011 – 2017",
      etape: "Football Academy",
      detail: "U6 → U11 · Stade de Reims",
    },
    {
      periode: "2017 – 2021",
      etape: "Pre-academy",
      detail: "U12 → U15 · Stade de Reims",
    },
    {
      periode: "2021 – 2022",
      etape: "Academy",
      detail: "2-year contract · Stade de Reims",
    },
  ],
};

const interets = {
  fr: [
    {
      icon: "✈️",
      titre: "Voyages",
      description:
        "Explorer de nouvelles cultures, découvrir d'autres façons de vivre et de penser. Les voyages élargissent la perspective et nourrissent la créativité.",
    },
    {
      icon: "🤖",
      titre: "Intelligence artificielle",
      description:
        "Fasciné par les possibilités offertes par l'IA, notamment dans le domaine sportif : analyser des performances, détecter des patterns, anticiper des résultats.",
    },
    {
      icon: "⚡",
      titre: "Automatisation",
      description:
        "Concevoir des systèmes intelligents qui éliminent les tâches répétitives et libèrent du temps pour ce qui compte vraiment.",
    },
    {
      icon: "🚀",
      titre: "Entrepreneuriat",
      description:
        "L'envie de créer, de bâtir des projets qui ont du sens et de l'impact : vision claire, équipe solide, exécution sans relâche.",
    },
  ],
  en: [
    {
      icon: "✈️",
      titre: "Travel",
      description:
        "Exploring new cultures, discovering different ways of living and thinking. Travel broadens perspective and nurtures creativity.",
    },
    {
      icon: "🤖",
      titre: "Artificial Intelligence",
      description:
        "Fascinated by the possibilities offered by AI, especially in sport: analyzing performance, detecting patterns, predicting outcomes.",
    },
    {
      icon: "⚡",
      titre: "Automation",
      description:
        "Designing intelligent systems that eliminate repetitive tasks and free up time for what truly matters.",
    },
    {
      icon: "🚀",
      titre: "Entrepreneurship",
      description:
        "The desire to create, to build projects with meaning and impact: a clear vision, a solid team, relentless execution.",
    },
  ],
};

/* --------------------------------- tabs ui --------------------------------- */

function FormationsTab({ lang }: { lang: Lang }) {
  const items = formations[lang];
  return (
    <div className="max-w-2xl mx-auto flex flex-col">
      {items.map((item, i) => (
        <motion.div
          key={item.degree}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-5 border-b border-white/10 last:border-0"
        >
          {item.logo && (
            <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-white flex items-center justify-center p-2">
              <img
                src={item.logo}
                alt=""
                className={`w-full h-full object-contain ${item.logoGrayscale ? "grayscale" : ""}`}
              />
            </div>
          )}
          <span className="font-mono text-xs text-white/40 tracking-widest sm:w-28 sm:flex-shrink-0">
            {item.period}
          </span>
          <div>
            <p className="text-[#f5f5f7] font-semibold text-base">{item.degree}</p>
            <p className="text-white/45 text-sm mt-1">{item.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SportifTab({ lang }: { lang: Lang }) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const timeline = sportifTimeline[lang];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4 text-center">
        <h3 className="text-2xl font-semibold tracking-tight text-[#f5f5f7]">Stade de Reims</h3>
        <p className="mt-2 font-mono text-xs text-white/40">
          {lang === "fr" ? "2011 – 2022 · Plus de 10 ans dans le club de ma ville" : "2011 – 2022 · Over 10 years in my hometown club"}
        </p>
      </div>

      {/* Photo gallery */}
      <div className="mb-14">
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase mb-5 text-center">
          {lang === "fr" ? "• En action" : "• In action"}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {photos.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              onClick={() => setLightbox(src)}
              className="relative aspect-square overflow-hidden rounded-xl border border-white/10 hover:border-white/25 transition-all duration-200 group"
            >
              <Image src={src} alt={`Football ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-14">
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase mb-6">• Timeline</p>
        <div className="flex flex-col">
          {timeline.map((p, i) => (
            <motion.div
              key={p.etape}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-5 border-b border-white/10 last:border-0"
            >
              <span className="font-mono text-xs text-white/40 tracking-widest sm:w-28 sm:flex-shrink-0">
                {p.periode}
              </span>
              <div>
                <p className="text-[#f5f5f7] font-semibold text-base">{p.etape}</p>
                <p className="text-white/45 text-sm mt-1">{p.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Eloquence contest */}
      <div className="mb-14">
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase mb-6">
          {lang === "fr" ? "• Au-delà du terrain" : "• Beyond the pitch"}
        </p>
        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="font-mono text-[10px] text-white/40 tracking-widest whitespace-nowrap mt-0.5">Avril 2022</span>
            <div className="w-px h-4 bg-white/15 mt-0.5" />
            <div>
              <p className="text-[#f5f5f7] font-semibold text-base">
                {lang === "fr" ? "Concours d'éloquence · 3ème Prix" : "Eloquence Competition · 3rd Prize"}
              </p>
              <p className="text-white/40 font-mono text-[10px] mt-0.5">Fondaction du Football · U16 · Stade de Reims</p>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-5">
            {lang === "fr" ? (
              <>Sujet traité : <span className="text-white/80 italic">« Est-il possible de composer le bonheur de l’homme avec la souffrance de la femme ? »</span></>
            ) : (
              <>Subject: <span className="text-white/80 italic">“Is it possible to compose man’s happiness with woman’s suffering?”</span></>
            )}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.fondactiondufootball.com/actualites/les-finales-de-la-3e-saison-du-concours-d-eloquence-ont-debute"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/25 text-white/50 hover:text-white text-xs font-mono uppercase tracking-widest rounded-lg transition-all duration-200"
            >
              {lang === "fr" ? "Article officiel" : "Official article"}
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-w-2xl w-full aspect-[4/3]">
              <Image src={lightbox} alt="Photo agrandie" fill className="object-contain rounded-xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InteretsTab({ lang }: { lang: Lang }) {
  const list = interets[lang];
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {list.map((item, i) => (
          <motion.div
            key={item.titre}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-7 flex gap-5 items-start hover:border-white/20 transition-all duration-300"
          >
            <span className="text-3xl flex-shrink-0">{item.icon}</span>
            <div>
              <h4 className="text-[#f5f5f7] font-semibold text-base mb-2">{item.titre}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <TravelMap />
    </div>
  );
}

/* -------------------------------- main comp -------------------------------- */

export default function About() {
  const { lang } = useLang();
  const [tab, setTab] = useState<"formations" | "sportif" | "interets">("formations");

  const tabs = {
    fr: [
      { id: "formations" as const, label: "Formations" },
      { id: "sportif" as const, label: "Parcours sportif" },
      { id: "interets" as const, label: "Centres d'intérêt" },
    ],
    en: [
      { id: "formations" as const, label: "Education" },
      { id: "sportif" as const, label: "Sports career" },
      { id: "interets" as const, label: "Interests" },
    ],
  }[lang];

  return (
    <section id="a-propos" className="py-28 px-6 bg-[#07070a]">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase mb-4">
            {lang === "fr" ? "• Qui suis-je" : "• Who am I"}
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#f5f5f7] mb-8">
            {lang === "fr" ? "À propos" : "About"}
          </h2>
          <div className="max-w-2xl mx-auto flex flex-col gap-5">
            {bio[lang].map((p, i) => (
              <p key={i} className={`leading-relaxed ${i === 0 ? "text-white/70 text-lg" : "text-white/45 text-base"}`}>
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center p-1 rounded-full bg-white/[0.04] border border-white/10">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative px-4 sm:px-5 py-2 text-xs font-medium uppercase tracking-wider rounded-full transition-colors duration-200 ${
                  tab === t.id ? "text-black" : "text-white/60 hover:text-white"
                }`}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="about-tab-pill"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {tab === "formations" && <FormationsTab lang={lang} />}
            {tab === "sportif" && <SportifTab lang={lang} />}
            {tab === "interets" && <InteretsTab lang={lang} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
