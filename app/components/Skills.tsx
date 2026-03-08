"use client";

import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const DEVICON_MAP: Record<string, string> = {
  Python: `${DEVICON_BASE}/python/python-original.svg`,
  Pandas: `${DEVICON_BASE}/pandas/pandas-original.svg`,
  NumPy: `${DEVICON_BASE}/numpy/numpy-original.svg`,
  Matplotlib: `${DEVICON_BASE}/matplotlib/matplotlib-original.svg`,
  Plotly: `${DEVICON_BASE}/plotly/plotly-original.svg`,
  Streamlit: `${DEVICON_BASE}/streamlit/streamlit-original.svg`,
  "SQL Avancé": `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  "Advanced SQL": `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  Grafana: `${DEVICON_BASE}/grafana/grafana-original.svg`,
  PHP: `${DEVICON_BASE}/php/php-original.svg`,
  JavaScript: `${DEVICON_BASE}/javascript/javascript-original.svg`,
  React: `${DEVICON_BASE}/react/react-original.svg`,
  "HTML/CSS": `${DEVICON_BASE}/html5/html5-original.svg`,
  Symfony: `${DEVICON_BASE}/symfony/symfony-original.svg`,
  Git: `${DEVICON_BASE}/git/git-original.svg`,
  GitHub: `${DEVICON_BASE}/github/github-original.svg`,
  Linux: `${DEVICON_BASE}/linux/linux-original.svg`,
  Docker: `${DEVICON_BASE}/docker/docker-original.svg`,
  "VS Code": `${DEVICON_BASE}/vscode/vscode-original.svg`,
  MySQL: `${DEVICON_BASE}/mysql/mysql-original.svg`,
  Oracle: `${DEVICON_BASE}/oracle/oracle-original.svg`,
};

const categories = {
  fr: [
    {
      title: "Data & Analyse",
      skills: [
        "Python", "Pandas", "NumPy", "Matplotlib",
        "Plotly", "Streamlit", "SQL Avancé", "Grafana",
        { name: "Power BI", initials: "BI", color: "#F2C811" },
        { name: "Tableau", initials: "TB", color: "#E97627" },
        { name: "Seaborn", initials: "SB", color: "#4C72B0" },
        { name: "Folium", initials: "FL", color: "#77B829" },
      ],
    },
    {
      title: "Bases de données",
      skills: [
        "MySQL",
        "Oracle",
        { name: "phpMyAdmin", initials: "phpMA", color: "#F89C0E" },
        { name: "UML", initials: "UML", color: "#6272a4" },
        { name: "Merise", initials: "MR", color: "#4a9eff" },
        { name: "PowerAMC", initials: "PAC", color: "#0066cc" },
      ],
    },
    {
      title: "Développement Web",
      skills: ["PHP", "JavaScript", "React", "HTML/CSS", "Symfony"],
    },
    {
      title: "Outils & DevOps",
      skills: ["Git", "GitHub", "Linux", "Docker", "VS Code"],
    },
  ],
  en: [
    {
      title: "Data & Analysis",
      skills: [
        "Python", "Pandas", "NumPy", "Matplotlib",
        "Plotly", "Streamlit", "Advanced SQL", "Grafana",
        { name: "Power BI", initials: "BI", color: "#F2C811" },
        { name: "Tableau", initials: "TB", color: "#E97627" },
        { name: "Seaborn", initials: "SB", color: "#4C72B0" },
        { name: "Folium", initials: "FL", color: "#77B829" },
      ],
    },
    {
      title: "Databases",
      skills: [
        "MySQL",
        "Oracle",
        { name: "phpMyAdmin", initials: "phpMA", color: "#F89C0E" },
        { name: "UML", initials: "UML", color: "#6272a4" },
        { name: "Merise", initials: "MR", color: "#4a9eff" },
        { name: "PowerAMC", initials: "PAC", color: "#0066cc" },
      ],
    },
    {
      title: "Web Development",
      skills: ["PHP", "JavaScript", "React", "HTML/CSS", "Symfony"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Linux", "Docker", "VS Code"],
    },
  ],
};

type SkillItem = string | { name: string; initials: string; color: string };

function SkillLogo({ skill }: { skill: SkillItem }) {
  const name = typeof skill === "string" ? skill : skill.name;
  const iconUrl = typeof skill === "string" ? DEVICON_MAP[skill] : undefined;
  const initials = typeof skill === "object" ? skill.initials : undefined;
  const color = typeof skill === "object" ? skill.color : undefined;

  return (
    <div className="flex flex-col items-center gap-2 group/skill cursor-default">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#0f172a] border border-[#2d4a7a] group-hover/skill:border-[#fbbf24]/60 transition-all duration-200">
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={name}
            width={32}
            height={32}
            className={`object-contain ${name === "GitHub" ? "invert" : ""}`}
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<span style="font-size:10px;font-weight:700;color:#94a3b8;text-align:center;line-height:1.2;">${name.slice(0, 3)}</span>`;
              }
            }}
          />
        ) : (
          <span
            className="text-[9px] font-bold font-mono text-center leading-tight"
            style={{ color: color ?? "#94a3b8" }}
          >
            {initials ?? name.slice(0, 3)}
          </span>
        )}
      </div>
      <span className="text-[10px] font-mono text-[#94a3b8] group-hover/skill:text-[#fbbf24] transition-colors duration-200 text-center leading-tight w-16">
        {name}
      </span>
    </div>
  );
}

function CategoryCard({
  category,
  index,
}: {
  category: { title: string; skills: SkillItem[] };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1a2744] border border-[#2d4a7a] rounded-2xl p-8 hover:border-[#fbbf24]/30 transition-all duration-300"
    >
      <h3 className="text-xs font-bold uppercase tracking-widest text-[#fbbf24] mb-8 flex items-center gap-3">
        <span className="w-5 h-px bg-[#fbbf24]/40" />
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-8 justify-center">
        {category.skills.map((skill, i) => (
          <motion.div
            key={typeof skill === "string" ? skill : skill.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
          >
            <SkillLogo skill={skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const cats = categories[lang];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#fbbf24] uppercase mb-4">
            {lang === "fr" ? "— Compétences" : "— Skills"}
          </p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f1f5f9]">
            {lang === "fr" ? "Ma" : "My"}{" "}
            <span style={{ WebkitTextStroke: "2px #fbbf24", color: "transparent" }}>
              Stack
            </span>
          </h1>
          <div className="mt-5 w-16 h-1 bg-[#fbbf24] rounded mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cats.map((cat, i) => (
            <CategoryCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
