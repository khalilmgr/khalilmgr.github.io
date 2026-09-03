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
  "UML & Merise": `${SIMPLEICONS_BASE}/uml.svg`,
  Seaborn: "/logos/seaborn.svg",
  "MS Planner": "/logos/ms-planner.svg",
  Render: `${SIMPLEICONS_BASE}/render.svg`,
  "SQL Developer": `${DEVICON_BASE}/sqldeveloper/sqldeveloper-original.svg`,
  PowerAMC: "/logos/poweramc.png",
};

const categories = {
  fr: [
    {
      title: "Data & Analyse",
      skills: [
        "Python", "Pandas", "NumPy", "Matplotlib",
        "Plotly", "Streamlit", "Grafana",
        "Power BI", "Tableau", "Folium", "Seaborn",
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
        "UML & Merise",
        "SQL Developer",
        "PowerAMC",
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
        "MS Planner",
      ],
    },
  ],
  en: [
    {
      title: "Data & Analysis",
      skills: [
        "Python", "Pandas", "NumPy", "Matplotlib",
        "Plotly", "Streamlit", "Grafana",
        "Power BI", "Tableau", "Folium", "Seaborn",
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
        "UML & Merise",
        "SQL Developer",
        "PowerAMC",
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
        "MS Planner",
      ],
    },
  ],
};

const softSkills = {
  fr: [
    { label: "Capacité d'adaptation", icon: "refresh" },
    { label: "Autonomie", icon: "compass" },
    { label: "Écoute des autres", icon: "headphones" },
    { label: "Organisation", icon: "clipboard" },
    { label: "Empathie", icon: "heart" },
    { label: "Leadership", icon: "flag" },
    { label: "Altruiste", icon: "gift" },
    { label: "Humanisme", icon: "globe" },
  ],
  en: [
    { label: "Adaptability", icon: "refresh" },
    { label: "Autonomy", icon: "compass" },
    { label: "Active listening", icon: "headphones" },
    { label: "Organization", icon: "clipboard" },
    { label: "Empathy", icon: "heart" },
    { label: "Leadership", icon: "flag" },
    { label: "Altruism", icon: "gift" },
    { label: "Humanism", icon: "globe" },
  ],
} as const;

type SoftSkillIconName = (typeof softSkills)["fr"][number]["icon"];

function SoftSkillIcon({ name, className }: { name: SoftSkillIconName; className?: string }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "refresh":
      return (
        <svg {...props}>
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      );
    case "compass":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "headphones":
      return (
        <svg {...props}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...props}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "flag":
      return (
        <svg {...props}>
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      );
    case "gift":
      return (
        <svg {...props}>
          <polyline points="20 12 20 22 4 22 4 12" />
          <rect x="2" y="7" width="20" height="5" />
          <line x1="12" y1="22" x2="12" y2="7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      );
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
  }
}

function SoftSkillPill({ label, icon, index }: { label: string; icon: SoftSkillIconName; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex items-center gap-2.5 bg-white/50 backdrop-blur-xl backdrop-saturate-150 border border-[#d9c7a3]/40 rounded-full pl-3 pr-5 py-2.5 hover:bg-white/70 hover:border-[#3f8fa8]/45 transition-all duration-200"
    >
      <SoftSkillIcon name={icon} className="w-4 h-4 text-[#3f8fa8] shrink-0" />
      <span className="text-sm font-medium text-[#1c2f4a]">{label}</span>
    </motion.div>
  );
}

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#1c2f4a]/75 mb-6">
            {lang === "fr" ? "Savoir-être" : "Soft Skills"}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills[lang].map((skill, i) => (
              <SoftSkillPill key={skill.label} label={skill.label} icon={skill.icon} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
