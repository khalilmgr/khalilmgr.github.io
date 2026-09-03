"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";

type Project = {
  title: string;
  description: string;
  github: string;
  demo?: string;
  demoLabel?: string;
  highlight?: boolean;
};

type YearGroup = {
  year: string;
  projects: Project[];
};

const academicYears: { fr: YearGroup[]; en: YearGroup[] } = {
  fr: [
    {
      year: "1ère année",
      projects: [
        {
          title: "Analyse des JO Paris 2024 avec Power BI",
          description:
            "Tableau de bord interactif pour analyser les performances des athlètes, les épreuves et les statistiques clés des Jeux Olympiques 2024.",
          github: "https://github.com/khalilmgr/olympics-data-analysis",
        },
        {
          title: "Jeu du Solitaire (Peg Solitaire)",
          description:
            "Implémentation en Python du jeu de réflexion avec gestion de la grille, validation des coups et logique complète.",
          github: "https://github.com/khalilmgr/peg-solitaire-python",
        },
        {
          title: "Catalogue de jeux vidéo",
          description:
            "Application web inspirée de Steam pour consulter un catalogue de jeux avec fiches détaillées et navigation facilitée.",
          github: "https://github.com/khalilmgr/video-game-library-php",
        },
        {
          title: "Algorithmes de génération de labyrinthes",
          description:
            "Projet Python implémentant DFS, Sidewinder, Binary Tree, Wilson et Kruskal pour créer et analyser des labyrinthes parfaits.",
          github: "https://github.com/khalilmgr/maze-generation-algorithms",
        },
      ],
    },
    {
      year: "2ème année",
      projects: [
        {
          title: "CoLive · Plateforme de colocation",
          description:
            "Application web permettant aux étudiants en alternance de trouver plus facilement des colocations pendant leurs études.",
          github: "https://github.com/khalilmgr/colive-symfony-app",
        },
        {
          title: "Impact de la météo sur la performance en course à pied",
          description:
            "Un pipeline data de bout en bout qui croise mes propres données de course (Garmin) avec des données météo (Open-Meteo) pour mesurer l'impact des conditions environnementales sur la performance sportive.",
          github: "https://github.com/khalilmgr/RunxMeteo-data-project",
        },
        {
          title: "Tutoriel interactif bilingue pour la recherche documentaire sur ScienceDirect",
          description:
            "Site pédagogique statique (HTML/CSS/JS, sans dépendances) guidant les étudiants de l'URCA à travers une recherche ScienceDirect et l'export de références vers Zotero, avec guide visuel en 8 étapes, vidéo intégrée et quiz d'auto-évaluation en français et en anglais.",
          github: "https://github.com/khalilmgr/Tuto_FunctionExport",
          demo: "https://tutosciencedirect.vercel.app/",
          demoLabel: "Voir le tuto",
        },
      ],
    },
  ],
  en: [
    {
      year: "1st year",
      projects: [
        {
          title: "Paris 2024 Olympics Analysis with Power BI",
          description:
            "Interactive dashboard analyzing athlete performances, events, and key statistics from the 2024 Olympic Games.",
          github: "https://github.com/khalilmgr/olympics-data-analysis",
        },
        {
          title: "Peg Solitaire Game",
          description:
            "Python implementation of the puzzle game with grid management, move validation, and complete game logic.",
          github: "https://github.com/khalilmgr/peg-solitaire-python",
        },
        {
          title: "Video Game Catalog",
          description:
            "Steam-inspired web application to browse a video game catalog with detailed pages and easy navigation.",
          github: "https://github.com/khalilmgr/video-game-library-php",
        },
        {
          title: "Maze Generation Algorithms",
          description:
            "Python project implementing DFS, Sidewinder, Binary Tree, Wilson and Kruskal to create and analyze perfect mazes.",
          github: "https://github.com/khalilmgr/maze-generation-algorithms",
        },
      ],
    },
    {
      year: "2nd year",
      projects: [
        {
          title: "CoLive · Co-living Platform",
          description:
            "Web application allowing student interns to more easily find shared housing during their studies.",
          github: "https://github.com/khalilmgr/colive-symfony-app",
        },
        {
          title: "Impact of Weather on Running Performance",
          description:
            "An end-to-end data pipeline that cross-references my own running data (Garmin) with weather data (Open-Meteo) to measure the impact of environmental conditions on athletic performance.",
          github: "https://github.com/khalilmgr/RunxMeteo-data-project",
        },
        {
          title: "Bilingual Interactive Tutorial for ScienceDirect Research",
          description:
            "A static educational site (HTML/CSS/JS, no dependencies) guiding URCA students through a ScienceDirect search and exporting references to Zotero, with an 8-step visual guide, embedded video, and self-assessment quiz in French and English.",
          github: "https://github.com/khalilmgr/Tuto_FunctionExport",
          demo: "https://tutosciencedirect.vercel.app/",
          demoLabel: "View tutorial",
        },
      ],
    },
  ],
};

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex flex-col gap-4 bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150 border border-white/10 rounded-3xl p-7 hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
    >
      {project.highlight && (
        <span className="self-start font-mono text-[9px] tracking-widest text-white/70 uppercase border border-white/20 px-2.5 py-1 rounded-full">
          Featured
        </span>
      )}
      <h3 className="text-base font-semibold tracking-tight text-[#f5f5f7]">
        {project.title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-white/10 text-xs font-mono">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white transition-colors duration-200"
          >
            <ExternalLinkIcon />
            {project.demoLabel}
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-white/50 hover:text-white transition-colors duration-200 ml-auto"
        >
          <GitHubIcon />
          {project.github.replace("https://github.com/", "")}
          <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}

function AcademicYearGroup({ group, baseDelay }: { group: YearGroup; baseDelay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="mb-10 last:mb-0">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: baseDelay }}
        className="flex items-center gap-3 mb-5"
      >
        <span className="w-5 h-px bg-white/30" />
        <span className="font-mono text-[11px] tracking-widest text-white/40 uppercase">
          {group.year}
        </span>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {group.projects.map((p, i) => (
          <ProjectCard key={p.github + p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const [tab, setTab] = useState<"academic" | "personal">("academic");
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const copy = {
    fr: {
      eyebrow: "• 03. Projets",
      title: "Mes réalisations",
      academic: "Académiques",
      personal: "Personnels",
      personalTitle: "Football Data",
      personalDesc: "Mes projets d'analyse de données appliquée au football : mercato, performances et statistiques de clubs.",
      viewOnGithub: "Voir sur GitHub",
      allRepos: "Voir tous mes repos sur GitHub",
    },
    en: {
      eyebrow: "• 03. Projects",
      title: "My work",
      academic: "Academic",
      personal: "Personal",
      personalTitle: "Football Data",
      personalDesc: "My data analysis projects applied to football: transfer market, performance and club statistics.",
      viewOnGithub: "View on GitHub",
      allRepos: "View all my repos on GitHub",
    },
  }[lang];

  return (
    <section id="projets" className="py-28 px-6 bg-[#07070a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase mb-3">
              {copy.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#f5f5f7]">
              {copy.title}
            </h2>
          </div>

          <div className="inline-flex self-start sm:self-auto p-1 rounded-full bg-white/[0.04] border border-white/10">
            {(["academic", "personal"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-5 py-2 text-xs font-medium uppercase tracking-wider rounded-full transition-colors duration-200 ${
                  tab === t ? "text-black" : "text-white/60 hover:text-white"
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="project-tab-pill"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{t === "academic" ? copy.academic : copy.personal}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {tab === "academic" ? (
            <motion.div
              key="academic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {academicYears[lang].map((group, i) => (
                <AcademicYearGroup key={group.year} group={group} baseDelay={i * 0.1} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="personal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex justify-center"
            >
              <div className="max-w-md w-full text-center bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150 border border-white/10 rounded-3xl p-10">
                <h3 className="text-2xl font-semibold tracking-tight text-[#f5f5f7] mb-3">
                  {copy.personalTitle}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8">
                  {copy.personalDesc}
                </p>
                <a
                  href="https://github.com/khalilmgr/football-data-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors duration-200"
                >
                  <GitHubIcon />
                  {copy.viewOnGithub}
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/khalilmgr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-sm font-mono text-white/50 rounded-full hover:border-white/25 hover:text-white transition-all duration-200"
          >
            <GitHubIcon />
            {copy.allRepos}
            <span className="ml-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
