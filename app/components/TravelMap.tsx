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

      {/* Map */}
      <div className="relative w-full" style={{ paddingBottom: "50%" }}>
        <svg
          viewBox="0 0 100 50"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 w-full h-full"
        >
          {/* Ocean background */}
          <rect x="0" y="0" width="100" height="50" fill="#0d1b35" />

          {/* Grid lines */}
          {latLines.map((y) => (
            <line key={`lat-${y}`} x1="0" y1={y / 2} x2="100" y2={y / 2} stroke="#1a2744" strokeWidth="0.2" />
          ))}
          {lonLines.map((x) => (
            <line key={`lon-${x}`} x1={x} y1="0" x2={x} y2="50" stroke="#1a2744" strokeWidth="0.2" />
          ))}
          {/* Equator */}
          <line x1="0" y1="25" x2="100" y2="25" stroke="#2d4a7a" strokeWidth="0.3" strokeDasharray="1,1" />
          {/* Prime meridian */}
          <line x1="50" y1="0" x2="50" y2="50" stroke="#2d4a7a" strokeWidth="0.3" strokeDasharray="1,1" />

          {/* Continents */}
          <g fill="#1e3a5f" stroke="#2d4a7a" strokeWidth="0.3">
            {/* North America */}
            <path d="M4,8 L7,5 L12,4 L18,5 L22,6 L27,7 L30,8 L36,8 L36,10 L34,12 L32,15 L31,17 L29,18 L28,20 L27,22 L26,23 L25,21 L24,22 L22,21 L21,20 L20,18 L18,17 L16,17 L14,16 L12,15 L10,14 L8,12 Z" />
            {/* Greenland */}
            <path d="M33,4 L38,3 L43,4 L44,6 L42,8 L38,8 L34,7 Z" />
            {/* South America */}
            <path d="M27,22 L29,21 L33,21 L37,21 L39,23 L40,26 L40,30 L38,34 L36,38 L33,41 L31,40 L29,38 L28,34 L28,30 L28,26 Z" />
            {/* Europe */}
            <path d="M46,10 L48,9 L50,9 L52,9 L54,9 L56,9 L57,10 L58,10 L58,11 L57,12 L56,13 L55,14 L54,14 L53,15 L52,14 L51,14 L50,13 L49,13 L48,12 L47,12 L46,11 Z" />
            {/* Scandinavia */}
            <path d="M50,5 L53,5 L55,6 L57,7 L58,9 L56,9 L54,8 L52,8 L51,7 L50,6 Z" />
            {/* Africa */}
            <path d="M47,13 L50,12 L54,13 L58,14 L59,16 L59,19 L58,22 L57,25 L57,29 L56,33 L54,36 L52,38 L50,37 L49,35 L48,31 L47,27 L46,23 L46,19 L46,15 Z" />
            {/* Middle East */}
            <path d="M56,14 L60,14 L63,15 L64,17 L63,20 L61,21 L59,21 L58,19 L57,17 Z" />
            {/* Asia */}
            <path d="M57,7 L62,6 L68,5 L75,5 L80,5 L85,6 L89,7 L92,8 L93,10 L91,11 L88,11 L85,12 L83,14 L81,15 L79,16 L77,17 L75,19 L73,19 L71,18 L69,18 L67,19 L65,19 L63,18 L61,17 L59,16 L58,14 L58,11 Z" />
            {/* India */}
            <path d="M65,16 L68,16 L70,17 L71,18 L70,21 L69,23 L67,22 L65,21 L64,19 L64,17 Z" />
            {/* Southeast Asia */}
            <path d="M75,19 L78,19 L80,20 L82,20 L83,21 L81,22 L79,22 L77,21 L75,20 Z" />
            {/* Japan */}
            <path d="M85,12 L87,12 L88,13 L88,15 L86,15 L85,14 Z" />
            {/* Australia */}
            <path d="M78,28 L82,27 L87,27 L91,28 L92,30 L92,33 L90,35 L87,36 L83,36 L80,34 L78,32 L77,30 Z" />
            {/* New Zealand */}
            <path d="M93,33 L95,33 L96,35 L95,37 L93,36 Z" />
            {/* British Isles */}
            <path d="M48,10 L49,9 L50,10 L49,11 L48,11 Z" />
            {/* Iceland */}
            <path d="M44,7 L46,7 L47,8 L46,9 L44,8 Z" />
          </g>

          {/* Dots for visited countries */}
          {visited.map((place, i) => (
            <motion.g
              key={place.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
            >
              {/* Glow */}
              <circle cx={place.x} cy={place.y / 2} r="1.5" fill="#fbbf24" fillOpacity="0.25" />
              {/* Dot */}
              <circle cx={place.x} cy={place.y / 2} r="0.7" fill="#fbbf24" />
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
