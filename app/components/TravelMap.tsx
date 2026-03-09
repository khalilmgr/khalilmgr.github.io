"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "../context/LanguageContext";

// Equirectangular: svg_x = (lon + 180) / 3.6, svg_y = (90 - lat) / 3.6
// Data y is stored *2 so that cy={place.y / 2} gives correct svg_y
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

const latLines = [0, 16.67, 33.33, 50, 66.67, 83.33, 100];
const lonLines = [0, 8.33, 16.67, 25, 33.33, 41.67, 50, 58.33, 66.67, 75, 83.33, 91.67, 100];

export default function TravelMap() {
  const { lang } = useLang();
  const [hovered, setHovered] = useState<string | null>(null);

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
          {/* Ocean */}
          <rect x="0" y="0" width="100" height="50" fill="#0d1b35" />

          {/* Grid */}
          {latLines.map((y) => (
            <line key={`lat-${y}`} x1="0" y1={y / 2} x2="100" y2={y / 2} stroke="#1a2744" strokeWidth="0.2" />
          ))}
          {lonLines.map((x) => (
            <line key={`lon-${x}`} x1={x} y1="0" x2={x} y2="50" stroke="#1a2744" strokeWidth="0.2" />
          ))}
          <line x1="0" y1="25" x2="100" y2="25" stroke="#2d4a7a" strokeWidth="0.3" strokeDasharray="1,1" />
          <line x1="50" y1="0" x2="50" y2="50" stroke="#2d4a7a" strokeWidth="0.3" strokeDasharray="1,1" />

          <g fill="#1e3a5f" stroke="#2d4a7a" strokeWidth="0.18" strokeLinejoin="round">

            {/* ── North America ── */}
            <path d="
              M3.3,16.7 L3.9,14.2 L4.4,11.9 L5,9.7 L6.1,8.3 L7.2,7.5 L8.6,6.7
              L10.3,5.8 L12.5,5 L14.4,4.4 L17.2,4.2 L20,4.7 L22.2,5.3 L24.4,5.6
              L27.2,5.8 L29.4,6.4 L31.4,6.9 L33.3,7.2 L35.3,7.5 L36.4,8.1 L36.7,9.2
              L36.1,10.3 L35,11.4 L33.9,12.5 L32.8,13.3 L31.7,14.2 L30.8,15
              L30.3,15.8 L29.7,16.9 L28.9,17.8 L28.3,18.9 L27.5,20 L26.9,20.8
              L26.1,21.7 L25.6,22.5 L25,21.9 L24.2,22.2 L23.3,22.5 L22.5,22.8
              L21.9,21.9 L21.1,21.1 L20.6,20.3 L19.4,19.7 L18.3,19.2 L17.2,18.3
              L16.4,17.2 L15.8,16.1 L15.3,14.7 L15,13.3 L14.4,12.2 L13.6,11.1
              L11.9,10.6 L10.3,10.3 L8.6,10.6 L6.9,11.4 L5.6,12.8 L4.7,14.4 Z
            "/>
            {/* Central America stub */}
            <path d="
              M25,21.9 L25.6,22.5 L25.6,23.3 L25,23.9 L24.4,24.4 L23.9,23.9
              L23.6,23.3 L24.2,22.8 Z
            "/>
            {/* Greenland */}
            <path d="
              M33.3,3.3 L36.1,2.8 L39.2,2.8 L42.2,3.3 L43.6,4.4 L43.9,5.8
              L43.3,7.2 L41.7,8.3 L39.4,8.6 L37.2,8.3 L35,7.5 L33.6,6.4
              L33.1,5 Z
            "/>

            {/* ── South America ── */}
            <path d="
              M26.4,22.8 L27.2,22.2 L28.3,21.9 L30,21.7 L32.2,21.4 L34.4,21.4
              L36.4,21.7 L38.1,22.5 L39.4,23.6 L40.3,25 L40.6,26.4 L40.6,27.8
              L40.3,29.2 L39.7,30.8 L38.9,32.2 L37.8,33.9 L36.7,35.6 L35.6,37.2
              L34.4,38.9 L33.3,40.3 L32.2,41.4 L31.1,40.8 L30,39.7 L28.9,38.1
              L28.1,36.4 L27.5,34.4 L27.2,32.2 L27.2,30 L27.2,27.8 L27.2,26.1
              L26.9,24.7 Z
            "/>

            {/* ── Europe mainland ── */}
            {/* Goes from Portugal, up Iberian coast, along N coast, down through Balkans, along Med */}
            <path d="
              M47.5,14.7 L47.5,14.2 L47.2,13.6 L47.2,13.1 L47.8,12.8 L48.3,12.5
              L48.9,12.2 L49.4,12.2 L49.7,11.9 L50,11.7 L50.3,11.4 L50.6,10.8
              L51.1,10.6 L51.7,10.6 L52.2,10.8 L52.8,10.6 L53.3,10.3 L53.3,9.7
              L53.6,9.4 L53.9,9.7 L54.2,10.3 L54.4,10.8 L54.7,11.1 L55,11.4
              L55.3,11.9 L55.6,12.2 L55.6,12.8 L55.8,13.3 L55.6,13.6
              L55.3,14.2 L54.7,14.4 L54.2,14.7 L53.6,15 L53.3,15.3
              L52.8,15.3 L52.5,15 L52.2,14.7 L51.7,14.7 L51.1,14.7
              L50.6,14.4 L50,14.4 L49.4,14.4 L48.9,14.7 L48.3,14.7 Z
            "/>
            {/* Scandinavia */}
            <path d="
              M50.6,10.8 L50.3,10 L50,9.4 L50,8.6 L50.3,7.8 L50.6,7.2
              L51.1,6.7 L51.7,6.4 L52.5,6.9 L53.1,7.5 L53.6,7.8 L53.9,8.1
              L54.2,7.5 L54.7,6.7 L55.3,6.1 L55.8,5.6 L56.4,5.3 L57.2,5
              L57.8,5.3 L58.1,5.8 L57.8,6.7 L57.5,7.5 L57.2,8.1 L56.7,8.6
              L56.4,8.9 L55.8,9.2 L55.3,9.4 L54.7,9.7 L54.2,10.3 L53.9,10.8
              L53.6,11.1 L53.3,10.8 L52.8,10.6 L52.2,10.8 L51.7,10.8 L51.1,10.6 Z
            "/>
            {/* Great Britain */}
            <path d="
              M49.2,11.4 L49.4,10.6 L49.7,9.7 L50,9.2 L50.3,8.9 L50,9.4
              L50,10.3 L49.7,10.8 L49.7,11.7 L49.4,12.2 L49.2,11.9 Z
            "/>
            {/* Ireland */}
            <path d="M48.3,11.4 L48.6,10.8 L48.9,10.3 L48.3,10.3 L47.8,10.8 L47.8,11.4 Z"/>
            {/* Italy boot */}
            <path d="
              M52.5,13.1 L52.8,13.6 L53.1,14.2 L53.3,14.7 L53.6,15.3
              L53.9,15.8 L54.4,15.8 L54.7,15.6 L54.7,15 L54.4,14.4
              L54.2,13.9 L54.2,13.3 L53.9,13.1 L53.3,12.8 L52.8,12.8 Z
            "/>

            {/* ── Africa ── */}
            <path d="
              M47.5,15 L46.9,15.6 L46.4,16.4 L46.1,17.5 L45.6,18.6
              L45.3,19.7 L45.3,20.8 L45.6,21.7 L46.1,22.5 L46.9,23.1
              L47.8,23.6 L48.9,23.9 L50,23.9 L51.1,23.9 L52.2,24.2
              L52.8,24.7 L53.1,25.6 L53.3,26.7 L53.3,27.8 L53.3,29.2
              L53.3,30.6 L53.6,31.9 L54.2,33.1 L54.7,33.9 L55.3,34.4
              L55.8,34.7 L56.4,34.7 L57.2,34.4 L57.8,33.6 L58.3,32.8
              L58.9,31.9 L59.4,30.8 L60,29.4 L60.8,28.1 L61.4,26.9
              L61.9,25.8 L62.5,25 L63.1,23.9 L64.2,22.2
              L63.6,22.5 L62.8,22.2 L62.2,21.9 L61.7,21.7
              L61.4,21.4 L61.7,20.8 L61.4,19.7 L60.8,18.6
              L60.3,17.5 L59.7,16.7 L59.2,16.1 L58.6,15.6
              L57.8,15.3 L56.9,15 L55.8,14.7 L54.7,14.7
              L53.6,14.4 L52.8,14.7 L51.9,14.7 L50.8,14.7
              L49.7,14.7 L48.6,14.7 Z
            "/>
            {/* Horn of Africa bump */}
            <path d="
              M63.9,21.4 L64.7,20.6 L65.3,19.7 L65.6,18.9 L65.3,18.1
              L64.7,17.5 L64.2,16.9 L63.3,16.4 L62.5,15.8 L61.9,15.3
              L61.4,15 L61.7,15.6 L61.9,16.4 L62.2,17.2 L61.9,18.3
              L61.7,19.4 L61.4,20.3 L61.4,21.1 L61.7,21.7 L62.2,21.9
              L62.8,22.2 L63.6,22.5 L64.2,22.2 Z
            "/>

            {/* ── Asia (main body) ── */}
            <path d="
              M55.8,13.3 L56.7,13.1 L57.8,12.8 L59.2,12.5 L60.6,12.5
              L62.2,12.8 L63.9,12.5 L65.6,12.2 L67.5,11.9 L69.7,11.7
              L71.9,11.4 L74.4,11.1 L76.9,11.1 L79.4,11.4 L81.9,11.7
              L84.2,12.2 L86.1,12.5 L87.8,12.8 L89.2,13.3 L90.3,13.9
              L90.6,14.7 L90,15.3 L89.2,15.3 L88.6,15 L87.8,15
              L87.5,15.6 L87.8,16.4 L88.3,17.5 L88.1,18.3 L87.5,18.9
              L86.7,19.2 L85.6,19.4 L84.4,19.7 L83.6,20 L82.8,20.6
              L81.7,21.1 L80.6,21.4 L79.4,21.4 L78.3,21.4
              L77.2,21.1 L76.1,20.8 L75,20.8 L73.9,20.6
              L73.1,20.3 L72.2,19.7 L71.7,19.2
              L71.9,18.3 L72.2,17.5 L71.9,16.9 L71.4,16.7
              L70.6,16.7 L69.7,17.2 L69.2,18.1 L68.6,19.2
              L68.1,20.3 L67.5,21.7 L67.2,22.8 L67.8,23.3
              L68.6,23.6 L69.4,22.5 L70,21.4 L70.6,21.4
              L71.1,22.2 L70.8,23.3 L70.3,24.2 L69.4,25
              L68.6,25.6 L67.8,25.6 L67.2,25 L66.7,24.2
              L66.1,23.3 L65.6,22.8 L64.7,22.2 L63.9,21.9
              L63.3,21.4 L63.1,20.8 L63.6,20 L64.2,19.2
              L64.4,18.3 L64.4,17.5 L63.9,16.9 L63.3,16.4
              L62.5,15.8 L61.9,15.3 L61.4,15 L60.8,14.7
              L60,14.7 L59.4,14.7 L58.9,14.7 L58.3,14.4
              L57.8,14.2 L57.5,13.9 L57.2,13.6 L56.7,13.3 Z
            "/>
            {/* Arabian Peninsula */}
            <path d="
              M58.9,14.7 L60,14.7 L61.4,15 L62.5,15.8 L63.3,16.4
              L63.9,16.9 L64.4,17.5 L65,18.3 L65.3,19.2 L65,20
              L64.4,20.8 L63.9,21.4 L63.3,21.4 L62.8,21.1
              L61.9,20.8 L61.7,19.4 L61.9,18.3 L62.2,17.2
              L61.9,16.4 L61.7,15.6 L61.4,15 Z
            "/>
            {/* Indian subcontinent */}
            <path d="
              M68.6,19.2 L69.2,18.1 L69.7,17.2 L70.6,16.7 L71.4,16.7
              L71.9,17.5 L72.2,18.3 L72.2,19.4 L71.9,20.6 L71.7,21.7
              L71.1,22.8 L70.6,23.9 L69.7,24.7 L69.2,25.6
              L68.6,25.6 L67.8,25 L67.2,24.2 L66.7,23.3
              L66.4,22.5 L67.2,21.9 L67.5,21.1 L67.8,20
              L68.3,19.4 Z
            "/>
            {/* SE Asia peninsula */}
            <path d="
              M79.4,21.4 L80.6,21.4 L81.7,21.1 L82.8,20.6 L83.6,20
              L83.9,20.8 L83.9,21.9 L83.3,22.5 L82.2,22.8 L80.8,22.8
              L79.7,22.5 L78.9,22.2 L78.6,21.7 Z
            "/>
            {/* Japan */}
            <path d="
              M87.5,13.3 L88.3,12.8 L89.2,12.8 L89.4,13.6 L89.4,14.4
              L88.9,15 L88.1,15.3 L87.5,15 L87.2,14.4 Z
            "/>
            {/* Taiwan */}
            <path d="M84.7,17.5 L85,17.2 L85.3,17.8 L85,18.3 L84.7,18.1 Z"/>

            {/* ── Australia ── */}
            <path d="
              M77.8,28.1 L79.2,27.2 L81.1,26.9 L83.3,26.9 L85.8,26.9
              L88.1,27.5 L89.7,28.1 L90.6,28.9 L91.7,29.7 L92.2,30.8
              L92.5,31.9 L92.5,33.1 L92.5,34.2 L91.9,35 L91.1,35.6
              L89.7,35.8 L88.3,36.1 L86.7,36.1 L85,35.6 L83.3,35
              L81.7,34.2 L80.3,33.1 L79.2,31.9 L78.1,30.6 L77.5,29.2 Z
            "/>
            {/* New Zealand (North Island) */}
            <path d="M93.3,32.2 L94.4,32.5 L95.6,33.3 L95.8,34.4 L95.3,35.6 L94.2,36.1 L93.3,35.3 L93.1,34.2 Z"/>
            {/* Iceland */}
            <path d="M43.6,7.2 L44.7,7.2 L46.1,6.9 L47.2,7.5 L47.5,8.1 L46.7,8.9 L45,8.9 L43.6,8.3 Z"/>
            {/* Madagascar */}
            <path d="M62.5,26.9 L63.1,26.7 L63.6,27.8 L63.6,29.2 L63.1,30.3 L62.5,30 L62.2,28.9 Z"/>
          </g>

          {/* Visited country dots */}
          {visited.map((place, i) => {
            const svgX = place.x;
            const svgY = place.y / 2;
            const isHovered = hovered === place.name;
            const label = lang === "fr" ? place.nameFr : place.name;
            const labelW = label.length * 1.3 + 1;

            return (
              <motion.g
                key={place.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                onMouseEnter={() => setHovered(place.name)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
              >
                {/* Glow */}
                <circle
                  cx={svgX} cy={svgY}
                  r={isHovered ? 2.2 : 1.5}
                  fill="#fbbf24"
                  fillOpacity={isHovered ? 0.4 : 0.25}
                />
                {/* Dot */}
                <circle
                  cx={svgX} cy={svgY}
                  r={isHovered ? 1.0 : 0.7}
                  fill="#fbbf24"
                />
                {/* Tooltip */}
                {isHovered && (
                  <g>
                    <rect
                      x={svgX - labelW / 2}
                      y={svgY - 5.5}
                      width={labelW}
                      height="3"
                      rx="0.5"
                      fill="#0a1020"
                      stroke="#fbbf24"
                      strokeWidth="0.2"
                    />
                    <text
                      x={svgX}
                      y={svgY - 3.6}
                      textAnchor="middle"
                      fill="#fbbf24"
                      fontSize="1.9"
                      fontFamily="monospace"
                    >
                      {label}
                    </text>
                  </g>
                )}
              </motion.g>
            );
          })}
        </svg>
      </div>

      <p className="px-6 pb-4 pt-1 font-mono text-[10px] text-[#2d4a7a] tracking-widest">
        {lang === "fr" ? `${visited.length} pays visités` : `${visited.length} countries visited`}
      </p>
    </motion.div>
  );
}
