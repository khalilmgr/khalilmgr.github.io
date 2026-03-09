"use client";

import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

// Equirectangular: x = (lon + 180) / 360 * 100, y = (90 - lat) / 180 * 100
const visited = [
  { name: "France",      nameFr: "France",     x: 50.65, y: 24.32 },
  { name: "Morocco",     nameFr: "Maroc",       x: 48.61, y: 32.34 },
  { name: "China",       nameFr: "Chine",       x: 78.94, y: 30.08 },
  { name: "Crete",       nameFr: "Crète",       x: 56.89, y: 30.42 },
  { name: "Switzerland", nameFr: "Suisse",      x: 52.29, y: 23.99 },
  { name: "Spain",       nameFr: "Espagne",     x: 48.97, y: 27.54 },
  { name: "Portugal",    nameFr: "Portugal",    x: 47.72, y: 28.11 },
  { name: "England",     nameFr: "Angleterre",  x: 49.65, y: 20.91 },
  { name: "Belgium",     nameFr: "Belgique",    x: 51.24, y: 21.94 },
];

// Latitude lines: every 30° → y values
const latLines = [0, 16.67, 33.33, 50, 66.67, 83.33, 100];
// Longitude lines: every 30° → x values
const lonLines = [0, 8.33, 16.67, 25, 33.33, 41.67, 50, 58.33, 66.67, 75, 83.33, 91.67, 100];

export default function TravelMap() {
  const { lang } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full rounded-2xl overflow-hidden border border-[#2d4a7a] bg-[#0a1020]"
    >
      {/* Legend */}
      <div className="px-6 pt-5 pb-3 flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs text-[#fbbf24] tracking-widest uppercase">
          {lang === "fr" ? "Pays visités" : "Countries visited"}
        </span>
        <span className="font-mono text-xs text-[#2d4a7a]">—</span>
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

      {/* Map grid */}
      <div className="relative w-full mx-4" style={{ paddingBottom: "45%", marginLeft: 0 }}>
        {/* SVG grid */}
        <svg
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          {/* Grid lines */}
          {latLines.map((y) => (
            <line
              key={`lat-${y}`}
              x1="0" y1={y / 2} x2="100" y2={y / 2}
              stroke="#1a2744" strokeWidth="0.3"
            />
          ))}
          {lonLines.map((x) => (
            <line
              key={`lon-${x}`}
              x1={x} y1="0" x2={x} y2="50"
              stroke="#1a2744" strokeWidth="0.3"
            />
          ))}
          {/* Equator */}
          <line x1="0" y1="25" x2="100" y2="25" stroke="#2d4a7a" strokeWidth="0.4" strokeDasharray="1,1" />
          {/* Prime meridian */}
          <line x1="50" y1="0" x2="50" y2="50" stroke="#2d4a7a" strokeWidth="0.4" strokeDasharray="1,1" />

          {/* Dots for visited countries */}
          {visited.map((place, i) => (
            <motion.g
              key={place.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
            >
              {/* Glow */}
              <circle cx={place.x} cy={place.y / 2} r="1.2" fill="#fbbf24" fillOpacity="0.2" />
              {/* Dot */}
              <circle cx={place.x} cy={place.y / 2} r="0.6" fill="#fbbf24" />
            </motion.g>
          ))}
        </svg>
      </div>

      <p className="px-6 pb-4 pt-1 font-mono text-[10px] text-[#2d4a7a] tracking-widest">
        {lang === "fr" ? `${visited.length} pays visités` : `${visited.length} countries visited`}
      </p>
    </motion.div>
  );
}
