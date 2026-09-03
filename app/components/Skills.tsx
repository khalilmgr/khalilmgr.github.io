"use client";

import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SIMPLEICONS_BASE = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";

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
  PostgreSQL: `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  Canva: `${DEVICON_BASE}/canva/canva-original.svg`,
  PhpStorm: `${DEVICON_BASE}/phpstorm/phpstorm-original.svg`,
  PyCharm: `${DEVICON_BASE}/pycharm/pycharm-original.svg`,
  FastAPI: `${DEVICON_BASE}/fastapi/fastapi-original.svg`,
  "Tailwind CSS": `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
  Vite: `${DEVICON_BASE}/vitejs/vitejs-original.svg`,
  Vercel: `${DEVICON_BASE}/vercel/vercel-original.svg`,
  Cloudflare: `${DEVICON_BASE}/cloudflare/cloudflare-original.svg`,
  "Power BI": `${SIMPLEICONS_BASE}/powerbi.svg`,
  Tableau: `${SIMPLEICONS_BASE}/tableau.svg`,
  Folium: `${SIMPLEICONS_BASE}/folium.svg`,
  phpMyAdmin: `${SIMPLEICONS_BASE}/phpmyadmin.svg`,
  SQLAlchemy: `${SIMPLEICONS_BASE}/sqlalchemy.svg`,
  UML: `${SIMPLEICONS_BASE}/uml.svg`,
  Render: `${SIMPLEICONS_BASE}/render.svg`,
  "SQL Developer": `${DEVICON_BASE}/sqldeveloper/sqldeveloper-original.svg`,
};

const categories = {
  fr: [
    {
      title: "Data & Analyse",
      skills: [
        "Python", "Pandas", "NumPy", "Matplotlib",
        "Plotly", "Streamlit", "SQL Avancé", "Grafana",
        "Power BI", "Tableau", "Folium",
        { name: "Seaborn", initials: "SB", color: "#4C72B0" },
      ],
    },
    {
      title: "Bases de données",
      skills: [
        "MySQL",
        "Oracle",
        "PostgreSQL",
        "phpMyAdmin",
        "SQLAlchemy",
        "UML",
        "SQL Developer",
        { name: "Merise", initials: "MR", color: "#4a9eff" },
        { name: "PowerAMC", initials: "PAC", color: "#0066cc" },
      ],
    },
    {
      title: "Développement Web",
      skills: ["PHP", "JavaScript", "React", "HTML/CSS", "Symfony", "FastAPI", "Tailwind CSS", "Vite"],
    },
    {
      title: "Outils & DevOps",
      skills: [
        "Git", "GitHub", "Linux", "Docker", "VS Code",
        "Canva", "PhpStorm", "PyCharm", "Vercel", "Cloudflare", "Render",
        { name: "MS Planner", initials: "MSP", color: "#0f6cbd" },
      ],
    },
  ],
  en: [
    {
      title: "Data & Analysis",
      skills: [
        "Python", "Pandas", "NumPy", "Matplotlib",
        "Plotly", "Streamlit", "Advanced SQL", "Grafana",
        "Power BI", "Tableau", "Folium",
        { name: "Seaborn", initials: "SB", color: "#4C72B0" },
      ],
    },
    {
      title: "Databases",
      skills: [
        "MySQL",
        "Oracle",
        "PostgreSQL",
        "phpMyAdmin",
        "SQLAlchemy",
        "UML",
        "SQL Developer",
        { name: "Merise", initials: "MR", color: "#4a9eff" },
        { name: "PowerAMC", initials: "PAC", color: "#0066cc" },
      ],
    },
    {
      title: "Web Development",
      skills: ["PHP", "JavaScript", "React", "HTML/CSS", "Symfony", "FastAPI", "Tailwind CSS", "Vite"],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git", "GitHub", "Linux", "Docker", "VS Code",
        "Canva", "PhpStorm", "PyCharm", "Vercel", "Cloudflare", "Render",
        { name: "MS Planner", initials: "MSP", color: "#0f6cbd" },
      ],
    },
  ],
};

type SkillItem = string | { name: string; initials: string; color: string };

function SkillLogo({ skill }: { skill: SkillItem }) {
  const name = typeof skill === "string" ? skill : skill.name;
  const iconUrl = typeof skill === "string" ? DEVICON_MAP[skill] : undefined;
  const initials = typeof skill === "object" ? skill.initials : undefined;

  return (
    <div className="flex flex-col items-center gap-2 group/skill cursor-default">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/50 border border-[#d9c7a3]/40 group-hover/skill:bg-white/75 group-hover/skill:border-[#3f8fa8]/55 transition-all duration-200">
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={name}
            width={32}
            height={32}
            className="object-contain opacity-80 group-hover/skill:opacity-100 transition-opacity duration-200"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<span style="font-size:10px;font-weight:700;color:#a8b0b5;text-align:center;line-height:1.2;">${name.slice(0, 3)}</span>`;
              }
            }}
          />
        ) : (
          <span
            className="text-[9px] font-bold font-mono text-center leading-tight text-[#a8b0b5]"
          >
            {initials ?? name.slice(0, 3)}
          </span>
        )}
      </div>
      <span className="text-[10px] font-mono text-[#a8b0b5] group-hover/skill:text-[#1c2f4a] transition-colors duration-200 text-center leading-tight w-16">
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
      className="bg-white/50 backdrop-blur-xl backdrop-saturate-150 border border-[#d9c7a3]/40 rounded-3xl p-8 hover:bg-white/65 hover:border-[#3f8fa8]/45 transition-all duration-300"
    >
      <h3 className="text-xs font-bold uppercase tracking-widest text-[#1c2f4a]/75 mb-8 flex items-center gap-3">
        <span className="w-5 h-px bg-[#3f8fa8]/60" />
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
    <section id="competences" className="py-28 px-6 bg-[#f7f5f0]">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#a8b0b5] uppercase mb-4">
            {lang === "fr" ? "• Compétences" : "• Skills"}
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1c2f4a]">
            {lang === "fr" ? "Ma" : "My"} Stack
          </h2>
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
