"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";
import PdfViewer from "./PdfViewer";

type ProjectDetails = {
  technologies: string[];
  approach: string;
  results: string;
};

type Project = {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  demoLabel?: string;
  highlight?: boolean;
  private?: boolean;
  team: number;
  details?: ProjectDetails;
};

type PdfReport = {
  title: string;
  description: string;
  file: string;
};

const pdfReports: { fr: PdfReport[]; en: PdfReport[] } = {
  fr: [
    {
      title: "Brentford FC · Rapport de data visualisation",
      description: "Analyse de la saison 2025-2026 : performances, statistiques clés et visualisations du club.",
      file: "/projets-perso/brentford-data-analysis.pdf",
    },
    {
      title: "Stade de Reims · Rapport de data visualisation",
      description: "Analyse de la saison 2025-2026 à partir des données FBref : performances et statistiques du club.",
      file: "/projets-perso/reims-data-visualization-report.pdf",
    },
    {
      title: "Succession de Riyad Mahrez · Analyse statistique",
      description: "Analyse statistique multidimensionnelle et shortlist de recrutement pour remplacer Riyad Mahrez à Al-Ahli.",
      file: "/projets-perso/mahrez-succession-analysis.pdf",
    },
  ],
  en: [
    {
      title: "Brentford FC · Data Visualization Report",
      description: "2025-2026 season analysis: performances, key statistics and club visualizations.",
      file: "/projets-perso/brentford-data-analysis.pdf",
    },
    {
      title: "Stade de Reims · Data Visualization Report",
      description: "2025-2026 season analysis built from FBref data: club performances and statistics.",
      file: "/projets-perso/reims-data-visualization-report.pdf",
    },
    {
      title: "Riyad Mahrez Succession · Statistical Analysis",
      description: "Multidimensional statistical analysis and recruitment shortlist to replace Riyad Mahrez at Al-Ahli.",
      file: "/projets-perso/mahrez-succession-analysis.pdf",
    },
  ],
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
          team: 1,
        },
        {
          title: "Jeu du Solitaire (Peg Solitaire)",
          description:
            "Jeu de plateau à billes avec plusieurs plateaux classiques, des règles de déplacement avancées et une suite de tests validant la logique du jeu.",
          github: "https://github.com/khalilmgr/peg-solitaire-python",
          team: 1,
        },
        {
          title: "Catalogue de jeux vidéo",
          description:
            "Application pour consulter, filtrer et gérer un catalogue de jeux vidéo.",
          github: "https://github.com/khalilmgr/video-game-library-php",
          team: 1,
        },
        {
          title: "Algorithmes de génération de labyrinthes",
          description:
            "Cinq algorithmes classiques de génération (arbre binaire, Sidewinder, Wilson...) avec résolution automatique et des métriques pour comparer objectivement chaque méthode.",
          github: "https://github.com/khalilmgr/maze-generation-algorithms",
          team: 1,
          details: {
            technologies: [
              "Python (module random)",
              "Dictionnaires et ensembles natifs",
              "Jupyter Notebook",
            ],
            approach:
              "Modélisation du labyrinthe en graphe (cellules = sommets, murs = absence d'arêtes), puis implémentation de 5 algorithmes de génération (arbre binaire, Sidewinder, fusion de chemins, exploration exhaustive, Wilson) et de 2 algorithmes de résolution (DFS, BFS), avant d'ajouter des fonctions d'analyse comparative des labyrinthes générés.",
            results:
              "5 algorithmes de génération et 2 algorithmes de résolution fonctionnels, validés sur des grilles jusqu'à 15x15 ; 4 métriques d'analyse implémentées (distance géodésique, distance de Manhattan, longueur du pire chemin, nombre de culs-de-sac) permettant de comparer objectivement la complexité des labyrinthes produits par chaque méthode.",
          },
        },
      ],
    },
    {
      year: "2ème année",
      projects: [
        {
          title: "KORA · Plateforme d'analyse de performance football",
          description:
            "KORA (Key Operational Reporting for Athletes) est une plateforme web interne développée pour l'ESTAC Troyes (club de football professionnel français) afin de centraliser et automatiser l'analyse de la performance des équipes du centre de formation : équipe réserve (National 1), U19 Nationaux et U17 Nationaux. Avant KORA, les équipes du club (analyste vidéo, préparateurs physiques, et staff) travaillaient avec des fichiers Excel épars et des exports manuels d'outils tiers, sans vue unifiée par joueur ou par match, sans historique exploitable, ni accès différencié selon les rôles. Déployée en production, elle est utilisée par le staff sportif du club depuis août 2026, et le projet a été commercialisé auprès du club.",
          private: true,
          highlight: true,
          team: 1,
        },
        {
          title: "CoLive · Plateforme de colocation",
          description:
            "Application développée en équipe pour publier, rechercher et réserver des espaces de coliving, avec messagerie intégrée, gestion des avis et back-office d'administration.",
          github: "https://github.com/khalilmgr/colive-symfony-app",
          team: 5,
          details: {
            technologies: [
              "Symfony 7.3 (PHP 8.2)",
              "Doctrine ORM + migrations",
              "Twig",
              "EasyAdmin",
              "Symfony UX (Stimulus/Turbo)",
              "MariaDB/MySQL",
              "Codeception",
              "PHPUnit",
              "PHP-CS-Fixer",
            ],
            approach:
              "Conception et implémentation du module logement de bout en bout : entités et migrations (Housing, HousingPhoto), recherche/affichage unifié des annonces, CRUD complet (création, édition, suppression sécurisées par CSRF et contrôle de propriétaire), upload et galerie photo, puis polish UI (navbar, logo, redirections liées à l'authentification).",
            results:
              "98 commits sur 74 fichiers, 7 controllers et 13 templates touchés, 7 migrations de base de données ajoutées ; livraison de 4+ fonctionnalités mergées (galerie photo, gestion des annonces, recherche de logements, résolution de bugs critiques comme le crash sur photo nulle et les liens cassés).",
          },
        },
        {
          title: "Impact de la météo sur la performance en course à pied",
          description:
            "Un pipeline data de bout en bout qui croise mes propres données de course (Garmin) avec des données météo (Open-Meteo) pour mesurer l'impact des conditions environnementales sur la performance sportive.",
          github: "https://github.com/khalilmgr/RunxMeteo-data-project",
          team: 4,
        },
        {
          title: "Tutoriel interactif bilingue pour la recherche documentaire sur ScienceDirect",
          description:
            "Site pédagogique guidant les étudiants de l'URCA à travers une recherche ScienceDirect et l'export de références vers Zotero, avec guide visuel en 8 étapes, vidéo intégrée et quiz d'auto-évaluation en français et en anglais.",
          github: "https://github.com/khalilmgr/Tuto_FunctionExport",
          demo: "https://tutosciencedirect.vercel.app/",
          demoLabel: "Voir le tuto",
          team: 2,
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
          team: 1,
        },
        {
          title: "Peg Solitaire Game",
          description:
            "Marble board game with several classic boards, advanced movement rules, and a test suite validating the game logic.",
          github: "https://github.com/khalilmgr/peg-solitaire-python",
          team: 1,
        },
        {
          title: "Video Game Catalog",
          description:
            "Application to browse, filter, and manage a video game catalog.",
          github: "https://github.com/khalilmgr/video-game-library-php",
          team: 1,
        },
        {
          title: "Maze Generation Algorithms",
          description:
            "Five classic generation algorithms (binary tree, Sidewinder, Wilson...) with automatic solving and metrics to objectively compare each method.",
          github: "https://github.com/khalilmgr/maze-generation-algorithms",
          team: 1,
          details: {
            technologies: ["Python (random module)", "Native dictionaries and sets", "Jupyter Notebook"],
            approach:
              "Modeled the maze as a graph (cells = vertices, walls = missing edges), then implemented 5 generation algorithms (binary tree, Sidewinder, path merging, exhaustive exploration, Wilson) and 2 solving algorithms (DFS, BFS), before adding comparative analysis functions for the generated mazes.",
            results:
              "5 working generation algorithms and 2 solving algorithms, validated on grids up to 15x15; 4 analysis metrics implemented (geodesic distance, Manhattan distance, longest path length, number of dead ends) to objectively compare the complexity of mazes produced by each method.",
          },
        },
      ],
    },
    {
      year: "2nd year",
      projects: [
        {
          title: "KORA · Football Performance Analytics Platform",
          description:
            "KORA (Key Operational Reporting for Athletes) is an internal web platform built for ESTAC Troyes (a professional French football club) to centralize and automate performance analysis for its academy teams: the reserve team (National 1), U19 and U17 National squads. Before KORA, the club's teams (video analyst, physical trainers, and staff) worked with scattered Excel files and manual exports from third-party tools, with no unified view per player or match, no usable history, and no role-based access. Deployed in production, it has been used by the club's sports staff since August 2026, and the project has been commercialized to the club.",
          private: true,
          highlight: true,
          team: 1,
        },
        {
          title: "CoLive · Co-living Platform",
          description:
            "Application built as a team to publish, search, and book co-living spaces, with built-in messaging, review management, and an admin back-office.",
          github: "https://github.com/khalilmgr/colive-symfony-app",
          team: 5,
          details: {
            technologies: [
              "Symfony 7.3 (PHP 8.2)",
              "Doctrine ORM + migrations",
              "Twig",
              "EasyAdmin",
              "Symfony UX (Stimulus/Turbo)",
              "MariaDB/MySQL",
              "Codeception",
              "PHPUnit",
              "PHP-CS-Fixer",
            ],
            approach:
              "End-to-end design and implementation of the housing module: entities and migrations (Housing, HousingPhoto), unified listing search/display, full CRUD (creation, editing, deletion secured with CSRF and ownership checks), photo upload and gallery, then UI polish (navbar, logo, auth-related redirects).",
            results:
              "98 commits across 74 files, 7 controllers and 13 templates touched, 7 database migrations added; shipped 4+ merged features (photo gallery, listing management, housing search, critical bug fixes such as the null-photo crash and broken links).",
          },
        },
        {
          title: "Impact of Weather on Running Performance",
          description:
            "An end-to-end data pipeline that cross-references my own running data (Garmin) with weather data (Open-Meteo) to measure the impact of environmental conditions on athletic performance.",
          github: "https://github.com/khalilmgr/RunxMeteo-data-project",
          team: 4,
        },
        {
          title: "Bilingual Interactive Tutorial for ScienceDirect Research",
          description:
            "Educational site guiding URCA students through a ScienceDirect search and exporting references to Zotero, with an 8-step visual guide, embedded video, and self-assessment quiz in French and English.",
          github: "https://github.com/khalilmgr/Tuto_FunctionExport",
          demo: "https://tutosciencedirect.vercel.app/",
          demoLabel: "View tutorial",
          team: 2,
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

function UserIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="13" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ProjectDetailModal({
  project,
  lang,
  onClose,
}: {
  project: Project;
  lang: "fr" | "en";
  onClose: () => void;
}) {
  const details = project.details!;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const labels = {
    fr: { technologies: "Technologies utilisées", approach: "Ta démarche", results: "Résultats concrets", close: "Fermer" },
    en: { technologies: "Technologies used", approach: "Approach", results: "Concrete results", close: "Close" },
  }[lang];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] bg-[#1c2f4a]/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-xl max-h-[85vh] overflow-y-auto bg-white/95 backdrop-blur-xl border border-[#d9c7a3]/50 rounded-3xl p-8 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <h3 className="text-lg font-semibold tracking-tight text-[#1c2f4a]">{project.title}</h3>
            <button
              onClick={onClose}
              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#d9c7a3]/50 hover:border-[#3f8fa8]/55 hover:bg-white/70 text-[#1c2f4a]/65 hover:text-[#1c2f4a] text-xs font-mono uppercase tracking-wide transition-all duration-200"
            >
              {labels.close}
              <span>✕</span>
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-widest text-[#3f8fa8] uppercase mb-3">
                {labels.technologies}
              </p>
              <div className="flex flex-wrap gap-2">
                {details.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#f7f5f0] border border-[#d9c7a3]/40 text-xs font-mono text-[#1c2f4a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-widest text-[#3f8fa8] uppercase mb-3">
                {labels.approach}
              </p>
              <p className="text-sm text-[#1c2f4a]/80 leading-relaxed">{details.approach}</p>
            </div>

            <div className="border-l-2 border-[#3f8fa8]/60 pl-4">
              <p className="font-mono text-[10px] tracking-widest text-[#3f8fa8] uppercase mb-3">
                {labels.results}
              </p>
              <p className="text-sm text-[#1c2f4a]/80 leading-relaxed">{details.results}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index, lang, onOpenDetails }: { project: Project; index: number; lang: "fr" | "en"; onOpenDetails: (project: Project) => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const teamLabel =
    project.team === 1
      ? lang === "fr" ? "Seul" : "Solo"
      : lang === "fr" ? `Équipe de ${project.team}` : `Team of ${project.team}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex flex-col gap-4 bg-white/50 backdrop-blur-xl backdrop-saturate-150 border border-[#d9c7a3]/40 rounded-3xl p-7 hover:bg-white/70 hover:border-[#3f8fa8]/45 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-2">
        {project.highlight ? (
          <span className="font-mono text-[9px] tracking-widest text-[#1c2f4a]/75 uppercase border border-[#3f8fa8]/45 px-2.5 py-1 rounded-full">
            Featured
          </span>
        ) : (
          <span />
        )}
        <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-[#a8b0b5] uppercase border border-[#d9c7a3]/40 px-2.5 py-1 rounded-full">
          {project.team === 1 ? <UserIcon /> : <UsersIcon />}
          {teamLabel}
        </span>
      </div>
      <h3 className="text-base font-semibold tracking-tight text-[#1c2f4a]">
        {project.title}
      </h3>
      <p className="text-sm text-[#a8b0b5] leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#d9c7a3]/40">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#d9c7a3]/50 text-[11px] font-mono uppercase tracking-wide text-[#1c2f4a]/65 hover:text-[#1c2f4a] hover:border-[#3f8fa8]/50 hover:bg-white/65 transition-all duration-200"
          >
            <ExternalLinkIcon />
            {project.demoLabel}
          </a>
        )}
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#d9c7a3]/50 text-[11px] font-mono uppercase tracking-wide text-[#1c2f4a]/65 hover:text-[#1c2f4a] hover:border-[#3f8fa8]/50 hover:bg-white/65 transition-all duration-200"
          >
            <GitHubIcon />
            {lang === "fr" ? "Voir le projet" : "View project"}
          </a>
        ) : project.private ? (
          <>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#d9c7a3]/40 text-[11px] font-mono uppercase tracking-wide text-[#a8b0b5]">
              <LockIcon />
              {lang === "fr" ? "Plateforme privée · en production" : "Private platform · in production"}
            </span>
            <span className="text-[11px] font-mono text-[#a8b0b5] italic">
              {lang === "fr" ? "Version de démo bientôt disponible" : "Demo version coming soon"}
            </span>
          </>
        ) : null}
        {project.details && (
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#d9c7a3]/50 text-[11px] font-mono uppercase tracking-wide text-[#1c2f4a]/65 hover:text-[#1c2f4a] hover:border-[#3f8fa8]/50 hover:bg-white/65 transition-all duration-200"
          >
            {lang === "fr" ? "En savoir plus" : "Learn more"}
          </button>
        )}
      </div>
    </motion.div>
  );
}

function AcademicYearGroup({
  group,
  baseDelay,
  lang,
  onOpenDetails,
}: {
  group: YearGroup;
  baseDelay: number;
  lang: "fr" | "en";
  onOpenDetails: (project: Project) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = group.projects.filter((p) => p.highlight);
  const rest = group.projects.filter((p) => !p.highlight);

  return (
    <div className="mb-10 last:mb-0">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: baseDelay }}
        className="flex items-center gap-3 mb-5"
      >
        <span className="w-5 h-px bg-[#3f8fa8]/60" />
        <span className="font-mono text-[11px] tracking-widest text-[#a8b0b5] uppercase">
          {group.year}
        </span>
      </motion.div>
      {featured.length > 0 && (
        <div className="flex flex-col gap-5 mb-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} lang={lang} onOpenDetails={onOpenDetails} />
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} lang={lang} onOpenDetails={onOpenDetails} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const [tab, setTab] = useState<"academic" | "personal">("academic");
  const [openPdf, setOpenPdf] = useState<PdfReport | null>(null);
  const [openDetail, setOpenDetail] = useState<Project | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const copy = {
    fr: {
      eyebrow: "• 03. Projets",
      title: "Mes réalisations",
      academic: "Académiques",
      personal: "Personnels",
      personalIntro: "Mes projets d'analyse de données appliquée au football : mercato, performances et statistiques de clubs.",
      readReport: "Lire le rapport",
      allRepos: "Voir tous mes repos sur GitHub",
    },
    en: {
      eyebrow: "• 03. Projects",
      title: "My work",
      academic: "Academic",
      personal: "Personal",
      personalIntro: "My data analysis projects applied to football: transfer market, performance and club statistics.",
      readReport: "Read the report",
      allRepos: "View all my repos on GitHub",
    },
  }[lang];

  return (
    <section id="projets" className="py-28 px-6 bg-[#f7f5f0]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-[#a8b0b5] uppercase mb-3">
              {copy.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1c2f4a]">
              {copy.title}
            </h2>
          </div>

          <div className="inline-flex self-start sm:self-auto p-1 rounded-full bg-white/50 border border-[#d9c7a3]/40">
            {(["academic", "personal"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-5 py-2 text-xs font-medium uppercase tracking-wider rounded-full transition-colors duration-200 ${
                  tab === t ? "text-white" : "text-[#1c2f4a]/65 hover:text-[#1c2f4a]"
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="project-tab-pill"
                    className="absolute inset-0 bg-[#1e5f8c] rounded-full"
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
                <AcademicYearGroup
                  key={group.year}
                  group={group}
                  baseDelay={i * 0.1}
                  lang={lang}
                  onOpenDetails={setOpenDetail}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="personal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-sm text-[#a8b0b5] leading-relaxed mb-8 max-w-2xl">
                {copy.personalIntro}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {pdfReports[lang].map((report, i) => (
                  <motion.div
                    key={report.file}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex flex-col gap-4 bg-white/50 backdrop-blur-xl backdrop-saturate-150 border border-[#d9c7a3]/40 rounded-3xl p-7 hover:bg-white/70 hover:border-[#3f8fa8]/45 hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="text-base font-semibold tracking-tight text-[#1c2f4a]">
                      {report.title}
                    </h3>
                    <p className="text-sm text-[#a8b0b5] leading-relaxed flex-1">
                      {report.description}
                    </p>
                    <button
                      onClick={() => setOpenPdf(report)}
                      className="inline-flex items-center justify-center gap-1.5 self-start px-3.5 py-1.5 rounded-full border border-[#d9c7a3]/50 text-[11px] font-mono uppercase tracking-wide text-[#1c2f4a]/65 hover:text-[#1c2f4a] hover:border-[#3f8fa8]/50 hover:bg-white/65 transition-all duration-200"
                    >
                      {copy.readReport}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {openPdf && (
          <PdfViewer url={openPdf.file} title={openPdf.title} onClose={() => setOpenPdf(null)} />
        )}

        {openDetail && (
          <ProjectDetailModal project={openDetail} lang={lang} onClose={() => setOpenDetail(null)} />
        )}

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
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#d9c7a3]/40 text-sm font-mono text-[#a8b0b5] rounded-full hover:border-[#3f8fa8]/55 hover:text-[#1c2f4a] transition-all duration-200"
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
