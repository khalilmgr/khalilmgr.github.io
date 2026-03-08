"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Analyse de données des Jeux Olympiques Paris 2024 avec Power BI",
    description:
      "Tableau de bord interactif réalisé avec Power BI permettant d'analyser les performances des athlètes, les épreuves et les statistiques clés des Jeux Olympiques 2024 grâce à des visualisations dynamiques.",
    github: "https://github.com/khalilmgr/olympics-data-analysis",
  },
  {
    title: "CoLive – Plateforme de colocation pour étudiants en alternance",
    description:
      "Application web permettant aux étudiants en alternance de trouver plus facilement des colocations ou de proposer des logements afin de simplifier l'accès au logement pendant leurs études.",
    github: "https://github.com/khalilmgr/colive-symfony-app",
  },
  {
    title: "Jeu du Solitaire (Peg Solitaire) développé en Python",
    description:
      "Implémentation en Python du jeu de réflexion Peg Solitaire avec gestion de la grille, validation des coups et logique complète du jeu.",
    github: "https://github.com/khalilmgr/peg-solitaire-python",
  },
  {
    title: "Catalogue de jeux vidéo – Application web inspirée de Steam",
    description:
      "Application web permettant de consulter un catalogue de jeux vidéo avec des fiches détaillées et une navigation facilitée pour explorer différents titres.",
    github: "https://github.com/khalilmgr/video-game-library-php",
  },
  {
    title: "Algorithmes de génération de labyrinthes en Python",
    description:
      "Projet Python implémentant plusieurs algorithmes de génération de labyrinthes (DFS, Sidewinder, Binary Tree, Wilson, Kruskal) pour créer et analyser des labyrinthes parfaits.",
    github: "https://github.com/khalilmgr/maze-generation-algorithms",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
      className="flex flex-col gap-4 bg-[#1a2744] border border-[#2d4a7a] rounded-2xl p-7 hover:border-[#fbbf24]/30 hover:translate-y-[-3px] transition-all duration-300"
    >
      <h3 className="text-sm font-bold uppercase tracking-wide text-[#f1f5f9]">
        {project.title}
      </h3>
      <p className="text-sm text-[#94a3b8] leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="flex items-center gap-2 pt-4 border-t border-[#2d4a7a] text-xs font-mono text-[#94a3b8] group-hover:text-[#fbbf24] transition-colors duration-200">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
        Voir sur GitHub
        <span className="ml-auto">→</span>
      </div>
    </motion.a>
  );
}


export default function AcademicProjects() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#fbbf24] uppercase mb-4">
            — Projets Académiques
          </p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f1f5f9]">
            Réalisations{" "}
            <span style={{ WebkitTextStroke: "2px #fbbf24", color: "transparent" }}>
              Académiques
            </span>
          </h1>
          <div className="mt-5 w-16 h-1 bg-[#fbbf24] rounded mx-auto" />
        </motion.div>

        {/* Grid : 3 colonnes sur large, 2 sur md */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
