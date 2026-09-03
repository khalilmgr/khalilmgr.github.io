"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLang, type Lang } from "../context/LanguageContext";

/* ---------------------------------- data ---------------------------------- */

const bio = {
  fr: [
    <>
      Je m’appelle <span className="text-[#1c2f4a] font-medium">Khalil Moughamir</span>, j’ai{" "}
      <span className="text-[#1c2f4a] font-medium">20 ans</span> et je suis étudiant en 3ème année de BUT
      Informatique, parcours Data, à l’IUT de Reims, actuellement en double diplôme à l’
      <span className="text-[#1c2f4a] font-medium">Université du Québec à Chicoutimi</span>. Mon parcours
      est le résultat de deux univers exigeants qui se sont nourris l’un l’autre : le sport de haut
      niveau et l’informatique. Cela m’a naturellement orienté vers{" "}
      <span className="text-[#1c2f4a] font-medium">l’analyse de données appliquée au football</span>, avec
      un objectif clair : rendre la donnée facile à comprendre, aider les clubs à prendre de meilleures
      décisions, et automatiser les systèmes qui la traitent.
    </>,
  ],
  en: [
    <>
      My name is <span className="text-[#1c2f4a] font-medium">Khalil Moughamir</span>, I’m{" "}
      <span className="text-[#1c2f4a] font-medium">20 years old</span> and a 3rd year Computer Science
      student, Data track, at IUT de Reims, currently on a dual-degree exchange at the{" "}
      <span className="text-[#1c2f4a] font-medium">Université du Québec à Chicoutimi</span>. My path is the
      result of two demanding worlds that have shaped each other: high-level sport and computer science.
      That naturally drew me toward{" "}
      <span className="text-[#1c2f4a] font-medium">data analysis applied to football</span>, with a clear
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
      logo: "/logos/lycee.jpeg",
      logoGrayscale: true,
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
      logo: "/logos/lycee.jpeg",
      logoGrayscale: true,
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

const visitedFlags = {
  fr: [
    { flag: "🇲🇦", name: "Maroc" },
    { flag: "🇨🇳", name: "Chine" },
    { flag: "🇬🇷", name: "Crète" },
    { flag: "🇨🇭", name: "Suisse" },
    { flag: "🇪🇸", name: "Espagne" },
    { flag: "🇵🇹", name: "Portugal" },
    { flag: "🇬🇧", name: "Angleterre" },
    { flag: "🇧🇪", name: "Belgique" },
    { flag: "🇩🇪", name: "Allemagne" },
    { flag: "🇨🇦", name: "Canada" },
  ],
  en: [
    { flag: "🇲🇦", name: "Morocco" },
    { flag: "🇨🇳", name: "China" },
    { flag: "🇬🇷", name: "Crete" },
    { flag: "🇨🇭", name: "Switzerland" },
    { flag: "🇪🇸", name: "Spain" },
    { flag: "🇵🇹", name: "Portugal" },
    { flag: "🇬🇧", name: "England" },
    { flag: "🇧🇪", name: "Belgium" },
    { flag: "🇩🇪", name: "Germany" },
    { flag: "🇨🇦", name: "Canada" },
  ],
};

const interets = {
  fr: [
    {
      titre: "Voyages",
      description:
        "Explorer de nouvelles cultures, découvrir d'autres façons de vivre et de penser. Les voyages élargissent la perspective et nourrissent la créativité.",
    },
    {
      titre: "Intelligence artificielle",
      description:
        "Fasciné par les possibilités offertes par l'IA, notamment dans le domaine sportif : analyser des performances, détecter des patterns, anticiper des résultats.",
    },
    {
      titre: "Entrepreneuriat",
      description:
        "L'envie de créer, de bâtir des projets qui ont du sens et de l'impact : vision claire, équipe solide, exécution sans relâche.",
    },
  ],
  en: [
    {
      titre: "Travel",
      description:
        "Exploring new cultures, discovering different ways of living and thinking. Travel broadens perspective and nurtures creativity.",
    },
    {
      titre: "Artificial Intelligence",
      description:
        "Fascinated by the possibilities offered by AI, especially in sport: analyzing performance, detecting patterns, predicting outcomes.",
    },
    {
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
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-5 border-b border-[#d9c7a3]/40 last:border-0"
        >
          {item.logo ? (
            <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-white border border-[#d9c7a3]/40 flex items-center justify-center p-2">
              <img
                src={item.logo}
                alt=""
                className={`w-full h-full object-contain ${item.logoGrayscale ? "grayscale" : ""}`}
              />
            </div>
          ) : (
            <div className="hidden sm:block w-16 h-16 flex-shrink-0" />
          )}
          <span className="font-mono text-xs text-[#a8b0b5] tracking-widest sm:w-28 sm:flex-shrink-0">
            {item.period}
          </span>
          <div>
            <p className="text-[#1c2f4a] font-semibold text-base">{item.degree}</p>
            <p className="text-[#a8b0b5] text-sm mt-1">{item.subtitle}</p>
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
        <h3 className="text-2xl font-semibold tracking-tight text-[#1c2f4a]">Stade de Reims</h3>
        <p className="mt-2 font-mono text-xs text-[#a8b0b5]">
          {lang === "fr" ? "2011 – 2022 · Plus de 10 ans dans le club de ma ville" : "2011 – 2022 · Over 10 years in my hometown club"}
        </p>
      </div>

      {/* Photo gallery */}
      <div className="mb-14">
        <p className="font-mono text-[10px] tracking-[0.3em] text-[#a8b0b5] uppercase mb-5 text-center">
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
              className="relative aspect-square overflow-hidden rounded-xl border border-[#d9c7a3]/40 hover:border-[#3f8fa8]/55 transition-all duration-200 group"
            >
              <Image src={src} alt={`Football ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-14">
        <p className="font-mono text-[10px] tracking-[0.3em] text-[#a8b0b5] uppercase mb-6">• Timeline</p>
        <div className="flex flex-col">
          {timeline.map((p, i) => (
            <motion.div
              key={p.etape}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-5 border-b border-[#d9c7a3]/40 last:border-0"
            >
              <span className="font-mono text-xs text-[#a8b0b5] tracking-widest sm:w-28 sm:flex-shrink-0">
                {p.periode}
              </span>
              <div>
                <p className="text-[#1c2f4a] font-semibold text-base">{p.etape}</p>
                <p className="text-[#a8b0b5] text-sm mt-1">{p.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Eloquence contest */}
      <div className="mb-14">
        <p className="font-mono text-[10px] tracking-[0.3em] text-[#a8b0b5] uppercase mb-6">
          {lang === "fr" ? "• Au-delà du terrain" : "• Beyond the pitch"}
        </p>
        <div className="bg-white/50 backdrop-blur-xl border border-[#d9c7a3]/40 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="font-mono text-[10px] text-[#a8b0b5] tracking-widest whitespace-nowrap mt-0.5">Avril 2022</span>
            <div className="w-px h-4 bg-[#d9c7a3]/50 mt-0.5" />
            <div>
              <p className="text-[#1c2f4a] font-semibold text-base">
                {lang === "fr" ? "Concours d'éloquence · 3ème Prix" : "Eloquence Competition · 3rd Prize"}
              </p>
              <p className="text-[#a8b0b5] font-mono text-[10px] mt-0.5">Fondaction du Football · U16 · Stade de Reims</p>
            </div>
          </div>
          <p className="text-[#a8b0b5] text-sm leading-relaxed mb-5">
            {lang === "fr" ? (
              <>Sujet traité : <span className="text-[#1c2f4a]/85 italic">« Est-il possible de composer le bonheur de l’homme avec la souffrance de la femme ? »</span></>
            ) : (
              <>Subject: <span className="text-[#1c2f4a]/85 italic">“Is it possible to compose man’s happiness with woman’s suffering?”</span></>
            )}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.fondactiondufootball.com/actualites/les-finales-de-la-3e-saison-du-concours-d-eloquence-ont-debute"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#d9c7a3]/40 hover:border-[#3f8fa8]/55 text-[#a8b0b5] hover:text-[#1c2f4a] text-xs font-mono uppercase tracking-widest rounded-lg transition-all duration-200"
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
  const [voyages, ...rest] = interets[lang];
  const flags = visitedFlags[lang];

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/50 backdrop-blur-xl border border-[#d9c7a3]/40 rounded-2xl p-8 sm:p-10 hover:border-[#3f8fa8]/45 transition-all duration-300 flex flex-col sm:flex-row items-start gap-8 sm:gap-12"
      >
        <div className="flex-shrink-0 text-left">
          <div className="text-6xl sm:text-7xl font-bold tracking-tight text-[#1c2f4a]" style={{ fontVariantNumeric: "tabular-nums" }}>
            {flags.length}
          </div>
          <p className="mt-2 font-mono text-[11px] tracking-[0.18em] uppercase text-[#a8b0b5]">
            {lang === "fr" ? "Pays visités" : "Countries visited"}
          </p>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-[#1c2f4a] font-semibold text-lg mb-2">{voyages.titre}</h4>
          <p className="text-[#a8b0b5] text-sm leading-relaxed max-w-md mb-5">{voyages.description}</p>
          <div className="flex flex-wrap gap-2">
            {flags.map((c) => (
              <span
                key={c.name}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#1c2f4a]/65 bg-white/50 border border-[#d9c7a3]/40 px-2.5 py-1 rounded-full"
              >
                <span>{c.flag}</span>
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {rest.map((item, i) => (
          <motion.div
            key={item.titre}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            className="bg-white/50 backdrop-blur-xl border border-[#d9c7a3]/40 rounded-2xl p-7 hover:border-[#3f8fa8]/45 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-[#3f8fa8]/60" />
              <span className="font-mono text-[11px] text-[#a8b0b5] tracking-widest">
                0{i + 1}
              </span>
            </div>
            <h4 className="text-[#1c2f4a] font-semibold text-base mb-2">{item.titre}</h4>
            <p className="text-[#a8b0b5] text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
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
    <section id="a-propos" className="py-28 px-6 bg-[#f7f5f0]">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#a8b0b5] uppercase mb-4">
            {lang === "fr" ? "• Qui suis-je" : "• Who am I"}
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1c2f4a] mb-8">
            {lang === "fr" ? "À propos" : "About"}
          </h2>
          <div className="max-w-2xl mx-auto flex flex-col gap-5">
            {bio[lang].map((p, i) => (
              <p key={i} className={`leading-relaxed ${i === 0 ? "text-[#1c2f4a]/75 text-lg" : "text-[#a8b0b5] text-base"}`}>
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center p-1 rounded-full bg-white/50 border border-[#d9c7a3]/40">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative px-4 sm:px-5 py-2 text-xs font-medium uppercase tracking-wider rounded-full transition-colors duration-200 ${
                  tab === t.id ? "text-white" : "text-[#1c2f4a]/65 hover:text-[#1c2f4a]"
                }`}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="about-tab-pill"
                    className="absolute inset-0 bg-[#1e5f8c] rounded-full"
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
