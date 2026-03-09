"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "../../context/LanguageContext";

const photos = [
  "/photos/IMG_0004 2.jpg",
  "/photos/IMG_0178.JPG",
  "/photos/IMG_0445.jpg",
  "/photos/IMG_0454.JPG",
  "/photos/IMG_6101 2.JPG",
  "/photos/IMG_6105 2.JPG",
  "/photos/IMG_7789 2.jpg",
];

const parcours = {
  fr: [
    {
      periode: "2011 – 2017",
      etape: "École de football",
      detail: "U6 → U11 · Stade de Reims",
      description:
        "Les premières années dans le club de ma ville, qui m'ont tout appris : les bases du jeu, la rigueur de l'entraînement et surtout l'amour du football. Plus de 10 ans dans ce club qui a façonné l'homme que je suis.",
    },
    {
      periode: "2017 – 2021",
      etape: "Préformation",
      detail: "U12 → U15 · Stade de Reims",
      description:
        "Intégration du programme sport-études d'excellence. Un environnement ultra-compétitif qui forge le caractère, développe la rigueur et élève le niveau technique et tactique.",
    },
    {
      periode: "2021 – 2022",
      etape: "Centre de formation",
      detail: "Convention 2 ans · Stade de Reims",
      description:
        "Signature d'une convention de deux ans au centre de formation. L'aboutissement de 10 ans de travail acharné dans le club qui m'a tout donné, et la concrétisation d'un rêve de gamin.",
    },
  ],
  en: [
    {
      periode: "2011 – 2017",
      etape: "Football Academy",
      detail: "U6 → U11 · Stade de Reims",
      description:
        "The first years at my hometown club, which taught me everything: the basics of the game, the rigor of training and above all the love of football. Over 10 years in this club that shaped the person I am.",
    },
    {
      periode: "2017 – 2021",
      etape: "Pre-academy",
      detail: "U12 → U15 · Stade de Reims",
      description:
        "Integration into the elite sport-studies program. An ultra-competitive environment that forges character, develops discipline and raises technical and tactical levels.",
    },
    {
      periode: "2021 – 2022",
      etape: "Academy",
      detail: "2-year contract · Stade de Reims",
      description:
        "Signing a two-year contract at the academy. The culmination of 10 years of hard work at the club that gave me everything, and the realization of a childhood dream.",
    },
  ],
};

const profil = {
  fr: [
    { label: "Poste", valeur: "Défenseur central" },
    { label: "Pied fort", valeur: "Gauche" },
    { label: "Style", valeur: "Élégant, grande facilité technique" },
    { label: "Qualité clé", valeur: "Relance propre sous pression" },
    { label: "Leadership", valeur: "Naturel, capitaine sur le terrain" },
  ],
  en: [
    { label: "Position", valeur: "Centre-back" },
    { label: "Strong foot", valeur: "Left" },
    { label: "Style", valeur: "Elegant, technically gifted" },
    { label: "Key quality", valeur: "Clean build-up under pressure" },
    { label: "Leadership", valeur: "Natural, captain on the pitch" },
  ],
};

export default function ParcoursPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { lang } = useLang();

  const timeline = parcours[lang];
  const playerProfile = profil[lang];

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
            {lang === "fr" ? "— Parcours sportif" : "— Sports Career"}
          </p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f1f5f9]">
            Stade de{" "}
            <span style={{ WebkitTextStroke: "2px #fbbf24", color: "transparent" }}>
              Reims
            </span>
          </h1>
          <p className="mt-4 font-mono text-sm text-[#94a3b8]">
            {lang === "fr"
              ? "2011 – 2022 · Plus de 10 ans dans le club de ma ville"
              : "2011 – 2022 · Over 10 years in my hometown club"}
          </p>
          <div className="mt-5 w-16 h-1 bg-[#fbbf24] rounded mx-auto" />
        </motion.div>

        {/* Galerie photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#fbbf24] uppercase mb-6">
            {lang === "fr" ? "— En action" : "— In action"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {photos.map((src, i) => (
              <motion.button
                key={src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                onClick={() => setLightbox(src)}
                className="relative aspect-square overflow-hidden rounded-xl border border-[#2d4a7a] hover:border-[#fbbf24]/50 transition-all duration-200 group"
              >
                <Image
                  src={src}
                  alt={`Football photo ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#fbbf24] uppercase mb-6">— Timeline</p>
          <div className="relative flex flex-col gap-0">
            {timeline.map((p, i) => (
              <motion.div
                key={p.etape}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {i < timeline.length - 1 && (
                  <div className="absolute left-[11px] top-6 bottom-0 w-px bg-[#2d4a7a]" />
                )}
                <div className="relative mt-1 w-6 h-6 flex-shrink-0 rounded-full border-2 border-[#fbbf24] bg-[#0f172a] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#fbbf24]" />
                </div>
                <div className="bg-[#1a2744] border border-[#2d4a7a] rounded-xl p-6 flex-1">
                  <span className="font-mono text-[10px] text-[#fbbf24] tracking-widest">{p.periode}</span>
                  <p className="text-[#f1f5f9] font-bold text-base uppercase tracking-wide mt-1">{p.etape}</p>
                  <p className="text-[#fbbf24]/60 font-mono text-[10px] mt-0.5 mb-3">{p.detail}</p>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Concours d'éloquence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-20"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#fbbf24] uppercase mb-6">
            {lang === "fr" ? "— Au-delà du terrain" : "— Beyond the pitch"}
          </p>
          <div className="bg-[#1a2744] border border-[#2d4a7a] rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <span className="font-mono text-[10px] text-[#fbbf24] tracking-widest whitespace-nowrap mt-0.5">
                Avril 2022
              </span>
              <div className="w-px h-4 bg-[#2d4a7a] mt-0.5" />
              <div>
                <p className="text-[#f1f5f9] font-bold text-base uppercase tracking-wide">
                  {lang === "fr" ? "Concours d'éloquence — 3ème Prix 🥉" : "Eloquence Competition — 3rd Prize 🥉"}
                </p>
                <p className="text-[#fbbf24]/60 font-mono text-[10px] mt-0.5">
                  {lang === "fr" ? "Fondaction du Football · U16 · Stade de Reims" : "Fondaction du Football · U16 · Stade de Reims"}
                </p>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
              {lang === "fr"
                ? <>Sujet traité : <span className="text-[#f1f5f9] italic">« Est-il possible de composer le bonheur de l'homme avec la souffrance de la femme ? »</span> — Une expérience qui m'a prouvé que la rigueur et la préparation forgées sur le terrain se transfèrent aussi bien à l'oral.</>
                : <>Subject: <span className="text-[#f1f5f9] italic">"Is it possible to compose man's happiness with woman's suffering?"</span> — An experience that showed me that the discipline and preparation built on the pitch translate just as well to public speaking.</>
              }
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/watch?v=lJZdevZq5MM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#2d4a7a] hover:border-[#fbbf24]/60 text-[#94a3b8] hover:text-[#fbbf24] text-xs font-mono uppercase tracking-widest rounded-lg transition-all duration-200"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                {lang === "fr" ? "Voir la vidéo" : "Watch the video"}
                <span className="text-[#fbbf24]/50">(1:55 · 2:33)</span>
              </a>
              <a
                href="https://www.fondactiondufootball.com/actualites/les-finales-de-la-3e-saison-du-concours-d-eloquence-ont-debute"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#2d4a7a] hover:border-[#fbbf24]/60 text-[#94a3b8] hover:text-[#fbbf24] text-xs font-mono uppercase tracking-widest rounded-lg transition-all duration-200"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {lang === "fr" ? "Article officiel" : "Official article"}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Profil joueur */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#fbbf24] uppercase mb-6">
            {lang === "fr" ? "— Profil joueur" : "— Player profile"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {playerProfile.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.07 }}
                className="bg-[#1a2744] border border-[#2d4a7a] rounded-xl px-6 py-4 flex gap-4 items-center"
              >
                <span className="font-mono text-[10px] text-[#fbbf24] uppercase tracking-widest whitespace-nowrap min-w-[80px]">
                  {item.label}
                </span>
                <div className="w-px h-6 bg-[#2d4a7a]" />
                <span className="text-[#f1f5f9] text-sm">{item.valeur}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-w-2xl w-full aspect-[4/3]">
              <Image
                src={lightbox}
                alt="Photo agrandie"
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
