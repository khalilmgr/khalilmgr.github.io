"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const photos = [
  "/photos/IMG_0004 2.jpg",
  "/photos/IMG_0178.JPG",
  "/photos/IMG_0445.jpg",
  "/photos/IMG_0454.JPG",
  "/photos/IMG_6101 2.JPG",
  "/photos/IMG_6105 2.JPG",
  "/photos/IMG_7789 2.jpg",
];

const parcours = [
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
];

const profil = [
  { label: "Poste", valeur: "Défenseur central" },
  { label: "Pied fort", valeur: "Gauche" },
  { label: "Style", valeur: "Élégant, grande facilité technique" },
  { label: "Qualité clé", valeur: "Relance propre sous pression" },
  { label: "Leadership", valeur: "Naturel, capitaine sur le terrain" },
];

export default function ParcoursPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

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
            ← Retour à la présentation
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
            — Parcours sportif
          </p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f1f5f9]">
            Stade de{" "}
            <span style={{ WebkitTextStroke: "2px #fbbf24", color: "transparent" }}>
              Reims
            </span>
          </h1>
          <p className="mt-4 font-mono text-sm text-[#94a3b8]">2011 – 2022 · Plus de 10 ans dans le club de ma ville</p>
          <div className="mt-5 w-16 h-1 bg-[#fbbf24] rounded mx-auto" />
        </motion.div>

        {/* Galerie photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#fbbf24] uppercase mb-6">— En action</p>
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
                  alt={`Photo football ${i + 1}`}
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
            {parcours.map((p, i) => (
              <motion.div
                key={p.etape}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Ligne verticale */}
                {i < parcours.length - 1 && (
                  <div className="absolute left-[11px] top-6 bottom-0 w-px bg-[#2d4a7a]" />
                )}
                {/* Point */}
                <div className="relative mt-1 w-6 h-6 flex-shrink-0 rounded-full border-2 border-[#fbbf24] bg-[#0f172a] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#fbbf24]" />
                </div>
                {/* Contenu */}
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

        {/* Profil joueur */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#fbbf24] uppercase mb-6">— Profil joueur</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {profil.map((item, i) => (
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
