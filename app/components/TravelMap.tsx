"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const visited = [
  { name: "France",     nameFr: "France",     coords: [2.35, 46.23]   as [number, number] },
  { name: "Morocco",    nameFr: "Maroc",       coords: [-5.0, 31.79]   as [number, number] },
  { name: "China",      nameFr: "Chine",       coords: [104.2, 35.86]  as [number, number] },
  { name: "Crete",      nameFr: "Crète",       coords: [24.81, 35.24]  as [number, number] },
  { name: "Switzerland",nameFr: "Suisse",      coords: [8.23, 46.82]   as [number, number] },
  { name: "Spain",      nameFr: "Espagne",     coords: [-3.70, 40.42]  as [number, number] },
  { name: "Portugal",   nameFr: "Portugal",    coords: [-8.22, 39.40]  as [number, number] },
  { name: "England",    nameFr: "Angleterre",  coords: [-1.17, 52.36]  as [number, number] },
  { name: "Belgium",    nameFr: "Belgique",    coords: [4.47, 50.50]   as [number, number] },
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
      <div className="px-6 pt-5 pb-2 flex flex-wrap items-center gap-3">
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
      <ComposableMap
        projectionConfig={{ scale: 140, center: [20, 30] }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1a2744"
                stroke="#2d4a7a"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "#1e3a5f" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {visited.map((place) => (
          <Marker key={place.name} coordinates={place.coords}>
            {/* Outer glow ring */}
            <circle r={6} fill="#fbbf24" fillOpacity={0.15} />
            {/* Inner dot */}
            <circle r={3} fill="#fbbf24" stroke="#0f172a" strokeWidth={1} />
          </Marker>
        ))}
      </ComposableMap>
    </motion.div>
  );
}
