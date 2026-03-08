"use client";

import Link from "next/link";
import AcademicProjects from "../../components/AcademicProjects";
import { useLang } from "../../context/LanguageContext";

export default function AcademiquesPage() {
  const { lang } = useLang();
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-6 pt-4">
        <Link
          href="/projets"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#94a3b8] hover:text-[#fbbf24] transition-colors duration-200"
        >
          {lang === "fr" ? "← Retour aux projets" : "← Back to projects"}
        </Link>
      </div>
      <AcademicProjects />
    </main>
  );
}
