"use client";

import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

// Equirectangular projection: x = (lon + 180) / 360 * 100, y = (90 - lat) / 180 * 100
const visited = [
  { name: "France",      nameFr: "France",      x: 50.65, y: 24.32 },
  { name: "Morocco",     nameFr: "Maroc",        x: 48.61, y: 32.34 },
  { name: "China",       nameFr: "Chine",        x: 78.94, y: 30.08 },
  { name: "Crete",       nameFr: "Crète",        x: 56.89, y: 30.42 },
  { name: "Switzerland", nameFr: "Suisse",       x: 52.29, y: 23.99 },
  { name: "Spain",       nameFr: "Espagne",      x: 48.97, y: 27.54 },
  { name: "Portugal",    nameFr: "Portugal",     x: 47.72, y: 28.11 },
  { name: "England",     nameFr: "Angleterre",   x: 49.65, y: 20.91 },
  { name: "Belgium",     nameFr: "Belgique",     x: 51.24, y: 21.94 },
];

export default function TravelMap() {
  const { lang } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full rounded-2xl overflow-hidden border border-[#2d4a7a] bg-[#0f172a]"
    >
      {/* Legend */}
      <div className="px-6 pt-5 pb-3 flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs text-[#fbbf24] tracking-widest uppercase">
          {lang === "fr" ? "Pays visités" : "Countries visited"}
        </span>
        <span className="font-mono text-xs text-[#94a3b8]">—</span>
        <div className="flex flex-wrap gap-2">
          {visited.map((c) => (
            <span
              key={c.name}
              className="font-mono text-[10px] text-[#94a3b8] bg-[#1a2744] border border-[#2d4a7a] px-2 py-0.5 rounded-full"
            >
              {lang === "fr" ? c.nameFr : c.name}
            </span>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="relative w-full" style={{ paddingBottom: "50%" }}>
        {/* World map image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2560px-World_map_-_low_resolution.svg.png"
          alt="World map"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{ filter: "hue-rotate(200deg) saturate(0.5)" }}
        />

        {/* Dots */}
        {visited.map((place) => (
          <motion.div
            key={place.name}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + visited.indexOf(place) * 0.08 }}
            className="absolute"
            style={{
              left: `${place.x}%`,
              top: `${place.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Glow ring */}
            <div
              className="absolute rounded-full"
              style={{
                width: 14,
                height: 14,
                background: "rgba(251,191,36,0.2)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />
            {/* Core dot */}
            <div
              className="rounded-full"
              style={{ width: 6, height: 6, background: "#fbbf24", boxShadow: "0 0 6px #fbbf24" }}
            />
            {/* Tooltip */}
            <span
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 font-mono text-[9px] text-[#fbbf24] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100"
            >
              {lang === "fr" ? place.nameFr : place.name}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="px-6 pb-4 font-mono text-[10px] text-[#2d4a7a] tracking-widest">
        {lang === "fr" ? `${visited.length} pays visités` : `${visited.length} countries visited`}
      </p>
    </motion.div>
  );
}
