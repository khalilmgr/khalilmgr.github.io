"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../context/LanguageContext";

type Project = {
  title: string;
  github: string;
  highlight?: boolean;
};

const academic = {
  fr: [
    { title: "Analyse JO Paris 2024", github: "https://github.com/khalilmgr/olympics-data-analysis", highlight: true },
    { title: "CoLive — App Colocation", github: "https://github.com/khalilmgr/colive-symfony-app" },
    { title: "Jeu Solitaire", github: "https://github.com/khalilmgr/peg-solitaire-python" },
  ] as Project[],
  en: [
    { title: "Paris 2024 Olympics Analysis", github: "https://github.com/khalilmgr/olympics-data-analysis", highlight: true },
    { title: "CoLive — Co-living App", github: "https://github.com/khalilmgr/colive-symfony-app" },
    { title: "Peg Solitaire Game", github: "https://github.com/khalilmgr/peg-solitaire-python" },
  ] as Project[],
};

const personal = {
  fr: [
    { title: "Analyse Football — Mercato", github: "https://github.com/khalilmgr/football-data-analysis", highlight: true },
    { title: "Analyse Stade de Reims", github: "https://github.com/khalilmgr/football-data-analysis" },
    { title: "Analyse Brentford FC", github: "https://github.com/khalilmgr/football-data-analysis" },
  ] as Project[],
  en: [
    { title: "Football Analysis — Transfer Market", github: "https://github.com/khalilmgr/football-data-analysis", highlight: true },
    { title: "Stade de Reims Analysis", github: "https://github.com/khalilmgr/football-data-analysis" },
    { title: "Brentford FC Analysis", github: "https://github.com/khalilmgr/football-data-analysis" },
  ] as Project[],
};

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.a
      ref={ref}
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex items-center justify-between py-5 border-b border-[#2d4a7a] hover:border-[#fbbf24]/40 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        {project.highlight && (
          <span className="font-mono text-[9px] tracking-widest text-[#fbbf24] uppercase border border-[#fbbf24]/30 px-2 py-0.5 rounded bg-[#fbbf24]/5 hidden sm:inline">
            Featured
          </span>
        )}
        <span className="text-base md:text-lg font-bold uppercase tracking-wide text-[#f1f5f9] group-hover:text-[#fbbf24] transition-colors duration-200">
          {project.title}
        </span>
      </div>
      <div className="flex items-center gap-2 text-[#2d4a7a] group-hover:text-[#fbbf24] transition-colors duration-200 flex-shrink-0">
        <GitHubIcon />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>
    </motion.a>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function Section({
  label,
  title,
  projects,
  baseDelay = 0,
}: {
  label: string;
  title: string;
  projects: Project[];
  baseDelay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="mb-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: baseDelay }}
        className="mb-6 flex items-center gap-3"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] text-[#94a3b8] uppercase">{label}</span>
        <span className="flex-1 h-px bg-[#2d4a7a]" />
      </motion.div>
      <div>
        {projects.map((p, i) => (
          <ProjectRow key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-6 bg-[#1a2744]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#fbbf24] uppercase mb-3">
            {lang === "fr" ? "— 03. Projets" : "— 03. Projects"}
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f1f5f9]">
            {lang === "fr" ? "Mes Réalisations" : "My Work"}
          </h2>
          <div className="mt-4 w-12 h-1 bg-[#fbbf24] rounded" />
        </motion.div>

        <Section
          label={lang === "fr" ? "Projets Académiques" : "Academic Projects"}
          title="Académique"
          projects={academic[lang]}
        />
        <Section
          label={lang === "fr" ? "Projets Personnels — Football Analytics" : "Personal Projects — Football Analytics"}
          title="Personnel"
          projects={personal[lang]}
          baseDelay={0.1}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/khalilmgr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#2d4a7a] text-sm font-mono text-[#94a3b8] rounded hover:border-[#fbbf24] hover:text-[#fbbf24] transition-all duration-200"
          >
            <GitHubIcon />
            {lang === "fr" ? "Voir tous mes repos sur GitHub" : "View all my repos on GitHub"}
            <span className="ml-1 text-[#fbbf24]">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
